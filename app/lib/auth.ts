"use server"

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";

export async function generateToken(user_id: number) { 
  return jwt.sign({ user_id }, JWT_SECRET, { expiresIn: "7d" });
}

export async function setAuthCookie(token: string , response: NextResponse) {
  console.log("Definindo cookie com token:", token.substring(0, 20) + "...");  // Log parcial para segurança
   response.cookies.set("auth_token", token, {  // Use response.cookies.set() to attach to response
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",  
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  console.log("Cookie 'auth_token' definido na resposta do login.");
}

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  console.log("CookieStore completo:", cookieStore);  // Log todos os cookies
  const token = cookieStore.get("auth_token")?.value;
  console.log("Token extraído do cookie 'auth_token':", token ? "Presente (não logado por segurança)" : "Ausente");
  
  if (!token) {
    console.log("Nenhum token encontrado. Cookie não enviado na requisição?");
    return null;
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as unknown as { user_id: number };
    console.log("Token decodificado com sucesso. User ID:", decoded.user_id);
    return decoded;
  } catch (error) {
    console.error("Erro na verificação do JWT:", error);
    return null;
  }
}

export async function clearAuthCookie(response: NextResponse) {  // Added 'response' param
  response.cookies.delete("auth_token");
}
