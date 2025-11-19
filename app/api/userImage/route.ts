import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { getUserFromCookie } from "@/app/lib/auth";

export async function GET() {
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }
    // SELECT user_image FROM perfis
    // WHERE user_id = {payload.user_id}
    // LIMIT 1;
    const userImage = await prisma.perfis.findUnique({
      select: {
        user_image: true,
      },
      where: {
        user_id: payload.user_id,
      },
    });

    if (!userImage || !userImage.user_image) {
      return NextResponse.json(
        { success: false, message: "Imagem não encontrada" },
        { status: 404 }
      );
    }

    let userImageConverted = null;

    if (userImage?.user_image) {
      const buffer = Buffer.from(userImage?.user_image);
      userImageConverted = `data:image/jpeg;base64,${buffer.toString(
        "base64"
      )}`;
    }

    return NextResponse.json({
      success: true,
      user_image: userImageConverted, 
    });
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
