import prisma from "../../lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getUserFromCookie(); 
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

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

    return NextResponse.json({ success: true, artigos });
    
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}
