import prisma from "@/app/lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const payload = await getUserFromCookie();
    if (!payload) return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });

    const { content } = await request.json();
    if (!content) return NextResponse.json({ success: false, message: "Conteúdo obrigatório" }, { status: 400 });

    const { id } = await params;
    const postId = parseInt(id, 10); 
    if (isNaN(postId) || postId <= 0) {
    return NextResponse.json(
        { success: false, message: "ID do post inválido" },
        { status: 400 }
    );
    }

    const newComment = await prisma.postagem_comentarios.create({
      data: {
        post_id: postId,
        user_id: payload.user_id,
        comentario_text: content,
        comentario_data: new Date(),
      },
    });

    return NextResponse.json({ success: true, comment: newComment });
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error);
    return NextResponse.json({ success: false, message: "Erro ao adicionar comentário" }, { status: 500 });
  }
}