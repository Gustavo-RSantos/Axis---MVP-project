import { getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(req: Request) { 
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    const novaSenha = await req.json();
    
    const hash = await bcrypt.hash(novaSenha.user_password_hash, 10);
    //Troca de senha do usuário
    // UPDATE cadastros
    // SET user_password_hash = 'hash'
    // WHERE user_id = payload.user_id;
    
    const userPassword = await prisma.cadastros.update({
      where: { user_id: payload.user_id },
        data: { user_password_hash: hash }
    });

    console.log("Dados atualizados:", userPassword); // Log para confirmar atualização
    return NextResponse.json({ success: true, user: userPassword });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return NextResponse.json({ success: false, message: "Erro interno no servidor" }, { status: 500 });
  }
}
