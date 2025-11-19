import { clearAuthCookie, getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE() {
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    // DELETE FROM artigos_favoritos WHERE user_id = payload_user_id;
    // DELETE FROM calendarios WHERE user_id = payload_user_id;
    // DELETE FROM postagem_comentarios WHERE user_id = payload_user_id;  
    // DELETE FROM postagem_likes WHERE user_id = payload_user_id;  
    // DELETE FROM postagem_comentarios
    // WHERE post_id IN (SELECT post_id FROM postagens WHERE user_id = payload_user_id);
    // DELETE FROM postagem_likes
    // WHERE post_id IN (SELECT post_id FROM postagens WHERE user_id = payload_user_id);
    // DELETE FROM postagens WHERE user_id = payload_user_id;
    // DELETE FROM perfis WHERE user_id = payload_user_id;
    // DELETE FROM cadastros WHERE user_id = payload_user_id;

    const deleteDadosUsuario = await prisma.$transaction(async (tx) => {
      await tx.artigos_favoritos.deleteMany({
        where: { user_id: payload.user_id },
      });

      await tx.calendarios.deleteMany({
        where: { user_id: payload.user_id },
      });

      const userPosts = await tx.postagens.findMany({
        where: { user_id: payload.user_id },
        select: { post_id: true },
      });
      const postIds = userPosts.map((post) => post.post_id);

      await tx.postagem_comentarios.deleteMany({
        where: { user_id: payload.user_id },
      });

      await tx.postagem_likes.deleteMany({
        where: { user_id: payload.user_id },
      });

      await tx.postagem_comentarios.deleteMany({
        where: { post_id: { in: postIds } },
      });

      await tx.postagem_likes.deleteMany({
        where: { post_id: { in: postIds } },
      });

      await tx.postagens.deleteMany({
        where: { user_id: payload.user_id },
      });

      await tx.perfis.deleteMany({
        where: { user_id: payload.user_id },
      });

      await tx.cadastros.deleteMany({
        where: { user_id: payload.user_id },
      });

      return { message: "Usuário e dados relacionados deletados com sucesso" };
    });

    // Limpando os cookies depois de deletar o usuário
    const response = NextResponse.json({
      success: true,
      message: "Logout realizado e dados deletados",
    });
    await clearAuthCookie(response);

    console.log("Dados deletados:", deleteDadosUsuario);

    return response;
  } catch (error) {
    console.error("Erro ao deletar:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
