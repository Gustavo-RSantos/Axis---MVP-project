import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma"
export async function GET() {
  
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
          // console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
          return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    // Querry para puxar os seguintes dads: user_name , user_secondname ,user_mail , user_age , perfis: user_name , user_image.
    const userData = await prisma.calendarios.findMany({
      select: {
            calendar_id: true,
            calendar_data: true,
            calendar_consulta: true,
        },
      where: {
        user_id: payload.user_id
      }
    })

    console.log(userData)
    
    if (!userData) {
      return NextResponse.json({ success: false, message: "Usuário não encontrado" }, { status: 404 });
    }
    
    return new Response(JSON.stringify({
         success: true,
         
       }), {
         headers: { 'Content-Type': 'application/json' },
       });

  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}
