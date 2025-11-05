"use server";

import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { dataProps, dataUpdateProps } from "../../interface/user.interface";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function createCadastro(data : dataProps) {
  
  try {
        const userMailAlreadyExists = await prisma.cadastros.findFirst({
      where: {
        user_mail: data.email
      }
    });

    if (userMailAlreadyExists) {
      return { success: false, message: "Email já cadastrado" };
    }

    const hash = await bcrypt.hash(data.password, 10);

    await prisma.cadastros.create({
      data: {
        user_firstname: data.firstName,
        user_secondname: data.lastName,
        user_mail: data.email,
        user_phone: data.telefone,
        user_age: Number(data.idade),
        user_password_hash: hash,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao criar cadastro:", error);
    return { success: false };
  }
}


export async function GET() {
  
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
          console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
          return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

    const userData = await prisma.cadastros.findUnique({
      select: {
        user_firstname: true,
        user_secondname: true,
        user_mail: true,
        user_age: true,
        perfis: {
          select: {
            user_image: true
          }
        }
      },
      where: {
        user_id: payload.user_id
      }
    })

    console.log("dadosDoUsuario" + userData)

    // const userExamData = await prisma.calendarios.findMany({
    //   select: {
        
    //   }
    // })

    if (!userData) {
      return NextResponse.json({ success: false, message: "Usuário não encontrado" }, { status: 404 });
    }

    console.log("Usuário encontrado e retornado com sucesso.");
    
    return new Response(JSON.stringify({
         success: true,
         user_firstName: userData.user_firstname,
         user_secondName: userData.user_secondname,
         user_mail: userData.user_mail,
         user_age: userData.user_age,
         user_image: userData.perfis?.user_image, 
       }), {
         headers: { 'Content-Type': 'application/json' },
       });

  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}

export async function UPDATE(data : dataUpdateProps) {
  
}
