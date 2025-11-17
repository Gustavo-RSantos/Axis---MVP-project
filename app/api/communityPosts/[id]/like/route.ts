import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
   request: NextRequest,
   context: { params: Promise<{ id: string }> }
) {
  try {
    const payload = await getUserFromCookie();
    if (!payload || !payload.user_id) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    
    const { id } = await context.params;
    const postId = parseInt(id, 10);
    if (isNaN(postId) || postId <= 0) {
      return NextResponse.json(
        { success: false, message: "ID do post inválido" },
        { status: 400 }
      );
    }

    // Verifica se o post existe (opcional, mas recomendado)
    const postExists = await prisma.postagens.findUnique({
      where: { post_id: postId }, // Ajuste o nome da tabela/coluna se necessário
    });
    if (!postExists) {
      return NextResponse.json(
        { success: false, message: "Post não encontrado" },
        { status: 404 }
      );
    }

    // Verifica se o like já existe
    const existingLike = await prisma.postagem_likes.findFirst({
      where: {
        post_id: postId,
        user_id: payload.user_id,
      },
    });

    if (existingLike) {
      // Remove o like
      await prisma.postagem_likes.delete({
        where: { id_like: existingLike.id_like },
      });
      return NextResponse.json({ success: true, liked: false });
    } else {
      // Adiciona o like
      await prisma.postagem_likes.create({
        data: {
          post_id: postId,
          user_id: payload.user_id,
          data_like: new Date(),
        },
      });
      return NextResponse.json({ success: true, liked: true });
    }
  } catch (error) {
    console.error("Erro ao toggle like:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno ao dar like" },
      { status: 500 }
    );
  }
}
