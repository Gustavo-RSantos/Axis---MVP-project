// app/api/artigos/[id]/fav/route.ts
import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const payload = await getUserFromCookie();
    if (!payload || !payload.user_id) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const artigoId = parseInt(id, 10);
    if (isNaN(artigoId) || artigoId <= 0) {
      return NextResponse.json(
        { success: false, message: "ID do artigo inválido" },
        { status: 400 }
      );
    }

    // Verifica se o artigo existe (opcional, mas recomendado)
    const artigoExists = await prisma.artigos.findUnique({
      where: { artigos_id: artigoId }, // Ajuste o nome da tabela/coluna se necessário
    });
    if (!artigoExists) {
      return NextResponse.json(
        { success: false, message: "Artigo não encontrado" },
        { status: 404 }
      );
    }

    const existingFavorite = await prisma.artigos_favoritos.findFirst({
      where: {
        artigos_id: artigoId,
        user_id: payload.user_id,
      },
    });

    if (existingFavorite) {
      // Remove o favorito (usa where com user_id e artigos_id)
      await prisma.artigos_favoritos.deleteMany({
        where: {
          user_id: payload.user_id,
          artigos_id: artigoId,
        },
      });
      return NextResponse.json({ success: true, favorited: false });
    } else {
      // Adiciona o favorito
      await prisma.artigos_favoritos.create({
        data: {
          artigos_id: artigoId,
          user_id: payload.user_id,
        },
      });
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
