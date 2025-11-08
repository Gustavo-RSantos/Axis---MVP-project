import prisma from "../../lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export interface postDataProps {
  post_name: string;
  post_text: string;
  post_data: string;
  post_image: Blob;
  post_gender: string ;
}

export async function createPost(postData : postDataProps) {
  try {
    const payload = await getUserFromCookie();
  
    if (!payload) {
      console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    
    // Validação do user_id se ele existe ou não.
    if (typeof payload.user_id !== "number" || payload.user_id <= 0) {
      console.log("User ID inválido:", payload.user_id);
      return NextResponse.json({ success: false, message: "Token inválido" }, { status: 400 });
    }
    const n = await prisma.cadastros.create({
      data: {
        user_id: payload.user_id,
        post_name: postData.post_name,
        post_text: postData.post_text,
        post_data: postData.post_data,
        post_image: postData.post_image,
        post_gender: postData.post_gender
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Erro ao criar cadastro:", error);
    return { success: false };
  }
}