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

    // Assumindo que user_image é um Buffer (bytes). Converta para base64.
    // Ajuste o tipo MIME se necessário (ex.: 'image/png' se for PNG).
    // const base64 = userImage.user_image.toString('base64');
    // const dataUrl = `data:image/jpeg;base64,${base64}`; // Use o tipo correto da imagem

    return NextResponse.json({
      success: true,
      user_image: userImageConverted, // Retorna uma string de data URL
    });
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
