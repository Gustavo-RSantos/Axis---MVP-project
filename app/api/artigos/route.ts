import prisma from "../../lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getUserFromCookie(); 
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

    // SELECT artigos_id, artigos_gender, artigos_autor, artigos_titulo, artigos_description, artigos_url FROM artigos;
    const artigos = await prisma.artigos.findMany({
      select: {
        artigos_id: true,
        artigos_gender: true,
        artigos_autor: true,
        artigos_titulo: true,
        artigos_description: true,
        artigos_url: true
      }  
    });    

    // Se o usuário estiver logado, verifica favoritos
    let favoritedIds: number[] = [];
    if (payload.user_id) {
      const favorites = await prisma.artigos_favoritos.findMany({
        where: { user_id: payload.user_id },
        select: { artigos_id: true },
      });
      favoritedIds = favorites.map((fav) => fav.artigos_id).filter((id): id is number => id !== null);  // Filtra nulls
    }
    // Mapeia os artigos com o status de favorito
    const artigosComFavorito = artigos.map((artigo) => ({
      ...artigo,
      isFavorited: favoritedIds.includes(artigo.artigos_id), // Campo booleano
    }));

    return NextResponse.json({ success: true, artigos: artigosComFavorito });
    
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}
