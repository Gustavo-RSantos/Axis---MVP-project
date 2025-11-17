// /app/api/user/favorites/route.ts
import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getUserFromCookie();
    if (!payload || !payload.user_id) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    // Busca os favoritos do usuário, incluindo os detalhes do artigo
    const favorites = await prisma.artigos_favoritos.findMany({
      where: { user_id: payload.user_id },
      include: {
        artigos: true, // Relação com artigos
      },
    });

    // Mapeia os dados para o formato esperado pelo componente (Article)
    const articles = favorites.map((fav) => {
      const artigo = fav.artigos;
      if (!artigo) return null; // Pula se artigo não existir

      return {
        id: artigo.artigos_id,
        title: artigo.artigos_titulo || "Título não disponível",
        author: artigo.artigos_autor || "Autor não disponível",
        description: artigo.artigos_description || "Descrição não disponível",
        gender: artigo.artigos_gender || "Gênero não disponível",
        url: artigo.artigos_url || "#",
      };
    }).filter(Boolean); // Remove nulls

    return NextResponse.json({ success: true, articles });
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno ao buscar favoritos" },
      { status: 500 }
    );
  }
}