"use server"

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { generateToken, setAuthCookie } from "../../lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Busca o usuário pelo email
    const user = await prisma.cadastros.findFirst({
      select: {
        user_id: true,
        user_mail: true,
        user_password_hash: true, 
      },
      where: { 
        user_mail: email 
      },
    });

    if (!user || !user.user_password_hash) {
      return NextResponse.json(
        { success: false, message: "Usuário ou senha inválidos" },
        { status: 401 }
      );
    }

    console.log("Passou o Email")
    console.log(password)
    
    // Comparando a senha enviada com o hash do banco
    const isValid = await bcrypt.compare(password, user.user_password_hash); 
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Senha incorreta" },
        { status: 401 }
      );
    }

    // Gerando token
    const token = await generateToken(user.user_id);
    console.log("Token gerado: " + token)

    // Criando resposta
    const response = NextResponse.json({ success: true, message: "Login bem-sucedido" });

    // Setando cookie de autenticação (pass the response)
    setAuthCookie(token, response);

    return response;

  } catch (err) {
    console.error("Erro no login:", err);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}