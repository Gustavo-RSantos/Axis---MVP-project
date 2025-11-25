import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {  // Ou PUT
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    const data = await req.json();
    
    /*Atualiza dados do usuário e perfil*/

    // UPDATE cadastros
    // SET user_firstname = data.user_firstname,
    //     user_secondname = data.user_secondname,
    //     user_age = data.user_age
    // WHERE user_id = payload.user_id;

    // UPDATE perfis
    // SET user_name = data.user_name
    // WHERE user_id = payload.user_id;
    const userData = await prisma.cadastros.update({
      where: { user_id: payload.user_id },
       data: {
        user_firstname: data.user_firstname,
        user_secondname: data.user_secondname,
        user_age: data.user_age,
        perfis: {
          update: {
            user_name: data.user_name,
          }
        }
      },
      include: { perfis: true }  
    });

    console.log("Dados atualizados:", userData); 
    return NextResponse.json({ success: true, user: userData });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return NextResponse.json({ success: false, message: "Erro interno no servidor" }, { status: 500 });
  }
}
