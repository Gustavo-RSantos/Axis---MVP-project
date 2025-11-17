import prisma from "@/app/lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const payload = await getUserFromCookie();
    if (!payload)
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );

    const { content } = await request.json();
    if (!content)
      return NextResponse.json(
        { success: false, message: "Conteúdo obrigatório" },
        { status: 400 }
      );

    const { id } = await context.params;
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
      include: {
        cadastros: {
          include: {
            perfis: {
              select: {
                user_name: true,
                user_image: true,
              },
            },
          },
        },
      },
    });
    let userImage = null;

    if (newComment.cadastros?.perfis?.user_image) {
      const buffer = Buffer.from(newComment.cadastros.perfis.user_image);
      userImage = `data:image/jpeg;base64,${buffer.toString("base64")}`;
    }

    const formattedComment = {
      comentario_id: newComment.comentario_id,
      user_name: newComment.cadastros?.perfis?.user_name || "Usuário Anônimo",
      user_image: userImage, // Já tratado como null se não existir
      comentario_text: newComment.comentario_text,
      comentario_data: newComment.comentario_data?.toISOString(),
    };

    return NextResponse.json({ success: true, comment: formattedComment });
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao adicionar comentário" },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const postId = parseInt(id, 10);
    if (isNaN(postId) || postId <= 0) {
      return NextResponse.json(
        { success: false, message: "ID do post inválido" },
        { status: 400 }
      );
    }

    // Busca os comentários do post, incluindo dados do usuário via cadastros e perfis
    const comments = await prisma.postagem_comentarios.findMany({
      where: { post_id: postId },
      include: {
        cadastros: {
          include: {
            perfis: {
              select: {
                user_name: true,
                user_image: true,
              },
            },
          },
        },
      },
      orderBy: { comentario_data: "asc" }, // Ordena por data (mais antigo primeiro)
    });

    // Formata os comentários para o frontend
    const formattedComments = comments.map((comment) => {
      // Converte imagem de blob para base64
      let userImage = null;
      if (comment.cadastros?.perfis?.user_image) {
        const buffer = Buffer.from(comment.cadastros.perfis.user_image);
        userImage = `data:image/jpeg;base64,${buffer.toString("base64")}`; // Ajuste o MIME type se necessário (ex.: image/png)
      }

      return {
        id: comment.comentario_id,
        user_name: comment.cadastros?.perfis?.user_name || "Usuário Anônimo", // Fallback se não houver perfil
        user_image: userImage || null, // Fallback para imagem padrão se não houver
        comentario_text: comment.comentario_text || "",
        comentario_data:
          comment.comentario_data?.toISOString() || new Date().toISOString(),
      };
    });

    return NextResponse.json({ success: true, comments: formattedComments });
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao buscar comentários" },
      { status: 500 }
    );
  }
}
