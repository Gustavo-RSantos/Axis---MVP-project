import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { getUserFromCookie } from "../../lib/auth";

export async function GET() {
  try {
    const payload = await getUserFromCookie();
    console.log("Dados do payload no /api/me:", payload);  // Já existe, mas confirme se aparece
    
    if (!payload) {
      console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    
    // Validação do user_id (já existe)
    if (typeof payload.user_id !== "number" || payload.user_id <= 0) {
      console.log("User ID inválido:", payload.user_id);
      return NextResponse.json({ success: false, message: "Token inválido" }, { status: 400 });
    }
    
    const user = await prisma.cadastros.findUnique({
      where: { user_id: payload.user_id },
    });
    
    if (!user) {
      console.log("Usuário não encontrado no banco para user_id:", payload.user_id);
      return NextResponse.json({ success: false, message: "Usuário não encontrado" }, { status: 404 });
    }
    
    console.log("Usuário encontrado e retornado com sucesso.");
    return NextResponse.json({ success: true, user });
    
  } catch (error) {
    console.error("Erro ao buscar usuário no /api/me:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
