// app/api/artigos/[id]/fav/route.ts
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
    const artigo_id = parseInt(id, 10);
    if (isNaN(artigo_id) || artigo_id <= 0) {
      return NextResponse.json(
        { success: false, message: "ID do artigo inválido" },
        { status: 400 }
      );
    }

    // Verifica se o artigo existe
    const artigoExists = await prisma.artigos.findUnique({
      where: { artigos_id: artigo_id },
    });
    if (!artigoExists) {
      return NextResponse.json(
        { success: false, message: "Artigo não encontrado" },
        { status: 404 }
      );
    }

    // Busca o favorito existente
    const existingFavorite = await prisma.artigos_favoritos.findFirst({
      where: {
        artigos_id: artigo_id,
        user_id: payload.user_id,
      },
    });

    if (existingFavorite) {
      //Deleta o favorito caso o usuario desmarque
      
      // DELETE FROM artigos_favoritos
      // WHERE artigos_fav_id = {ID_DO_FAVORITO};
      await prisma.artigos_favoritos.delete({
        where: {
          artigos_fav_id: existingFavorite.artigos_fav_id,
        },
      });
      console.log(
        `Favorito removido: user_id=${payload.user_id}, artigos_id=${artigo_id}`
      );
      return NextResponse.json({ success: true, favorited: false });
    } else {
      // Adiciona o favorito
      await prisma.artigos_favoritos.create({
        data: {
          artigos_id: artigo_id,
          user_id: payload.user_id,
        },
      });
      console.log(
        `Favorito adicionado: user_id=${payload.user_id}, artigos_id=${artigo_id}`
      );
      return NextResponse.json({ success: true, favorited: true });
    }
  } catch (error) {
    console.error("Erro ao toggle favorito:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno ao favoritar" },
      { status: 500 }
    );
  }
}
