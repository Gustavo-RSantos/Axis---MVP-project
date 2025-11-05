import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
          console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
          return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

    const userProfile = await prisma.cadastros.findUnique({
      select:{
        user_id: true,
        perfis: {
          select: {
              user_name: true,
              user_image: true,
            }
        }
      },
    where:{
        user_id: payload.user_id
      }
    })

    console.log(userProfile)

    if (!userProfile) {
      return NextResponse.json({ success: false, message: "Usuário não encontrado" }, { status: 404 });
    }

    console.log("Usuário encontrado e retornado com sucesso.");
    
    return new Response(JSON.stringify({
            success: true,
            user_id: userProfile.user_id,
            user_name: userProfile.perfis?.user_name,
            user_image: userProfile.perfis?.user_image
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