import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
      console.log(
        "Payload é null - retornando 401. Verifique se o cookie foi enviado."
      );
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    /* Busca do do perfil do usuário*/

    // SELECT c.user_id, p.user_name, p.user_image FROM cadastros AS c
    // JOIN perfis AS p ON c.user_id = p.user_id
    // WHERE c.user_id = payload_user_id;
    const userProfile = await prisma.cadastros.findUnique({
      select: {
        user_id: true,
        perfis: {
          select: {
            user_name: true,
            user_image: true,
          },
        },
      },
      where: {
        user_id: payload.user_id,
      },
    });


    if (!userProfile) {
      return NextResponse.json(
        { success: false, message: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    const userImageArray = userProfile?.perfis?.user_image
      ? Array.from(userProfile.perfis.user_image)  
      : null;

    return new Response(
      JSON.stringify({
        success: true,
        user_id: userProfile.user_id,
        user_name: userProfile.perfis?.user_name,
        user_image: userImageArray,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
