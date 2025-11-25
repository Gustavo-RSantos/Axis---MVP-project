import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    // Processar FormData em vez de JSON
    const formData = await req.formData();
    const file = formData.get("user_image") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Nenhum arquivo enviado." },
        { status: 400 }
      );
    }

    // Validações básicas
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Apenas PNG, JPG ou JPEG são permitidos." },
        { status: 400 }
      );
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Arquivo muito grande (máx. 5MB)." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Atualizar no banco (assumindo coluna 'user_image' na tabela 'perfis' como Bytes)

    // UPDATE perfis
    // SET user_image = buffer
    // WHERE user_id = payload.user_id;
    const updatedUser = await prisma.perfis.update({
      where: { user_id: payload.user_id },
      data: { user_image: buffer }, // Salva como BLOB
    });

    console.log("Imagem atualizada:", updatedUser);
    return NextResponse.json({
      success: true,
      message: "Imagem atualizada com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao atualizar imagem:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
