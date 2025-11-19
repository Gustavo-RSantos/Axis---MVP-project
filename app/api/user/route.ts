"use server";

import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { dataProps } from "../../interface/user.interface";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

import path from "path";
import fs from 'fs';

export async function createCadastro(data : dataProps) {
  try {
      // puxa o email do usuario usando como parametro o email do formulario.
      // SELECT user_id FROM cadastros
      // WHERE user_mail = 'email@email.com'
      const userMailAlreadyExists = await prisma.cadastros.findFirst({
      where: {
        user_mail: data.email
      }
    });

    if (userMailAlreadyExists) {
      return { success: false, message: "Email já cadastrado" };
    }

    const hash = await bcrypt.hash(data.password, 10);
    /*  Verificar e Cadastro do novo usuário*/

    // INSERT INTO cadastros (
    //   user_firstname, user_secondname, user_mail, user_phone, user_age, user_password_hash
    // ) VALUES (
    //   'PrimeiroNome', 'Sobrenome', 'email@teste.com', '999999999', 25, 'hash_da_senha'
    // );
    const novoCadastro = await prisma.cadastros.create({
      data: {
        user_firstname: data.firstName,
        user_secondname: data.lastName,
        user_mail: data.email,
        user_phone: data.telefone,
        user_age: Number(data.idade),
        user_password_hash: hash,
      },
    });

    const imagemPadraoPath = path.join(process.cwd(), "public", "iconePerfil.png");
    console.log("Caminho da imagem:", imagemPadraoPath);
    console.log("Arquivo existe?", fs.existsSync(imagemPadraoPath));

    const imagemBytes = fs.readFileSync(imagemPadraoPath);  // Buffer de bytes
    
    await prisma.perfis.create ({
      data: {
        user_id: novoCadastro.user_id,
        user_name: `Axis #${novoCadastro.user_id}`,
        user_image: imagemBytes,
      }
    });
    

    return { success: true };
  } catch (error) {
    console.error("Erro ao criar cadastro:", error);
    return { success: false };
  }
}


// Puxando dados do banco para manipulação na pagina PERFIL
export async function GET() {
  
  try {
    const payload = await getUserFromCookie();

    if (!payload) {
          // console.log("Payload é null - retornando 401. Verifique se o cookie foi enviado.");
          return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }
    // Querry para puxar os seguintes dads: user_name , user_secondname ,user_mail , user_age , perfis: user_name , user_image.
   
    // SELECT c.user_firstname, c.user_secondname, c.user_mail, c.user_age, p.user_name, p.user_image, cal.calendar_id, cal.calendar_consulta, cal.calendar_data FROM cadastros AS c
    // LEFT JOIN perfis AS p ON p.user_id = c.user_id
    // LEFT JOIN calendarios AS Cal ON cal.user_id = c.user_id
    // WHERE user_id = payload_user_id;
    const userData = await prisma.cadastros.findUnique({
      select: {
        user_firstname: true,
        user_secondname: true,
        user_mail: true,
        user_age: true,
        perfis: {
          select: {
            user_name: true,
            user_image: true
          }
        },
        calendarios: {
          select:{
            calendar_id: true,
            calendar_consulta: true,
            calendar_data: true,
          }
        }
      },
      where: {
        user_id: payload.user_id
      }
    })

    if (!userData) {
      return NextResponse.json({ success: false, message: "Usuário não encontrado" }, { status: 404 });
    }

    const userImageArray = userData?.perfis?.user_image
      ? Array.from(userData.perfis.user_image)  // Garante que seja [number, ...]
      : null;
    // console.log("userImageArray para retorno:", userImageArray);

    // console.log("Usuário encontrado e retornado com sucesso.");

    // console.log("Usuário encontrado e retornado com sucesso.");

    //  console.log("User ID do payload:", payload.user_id);
    //  console.log("Dados do usuário encontrados:", userData);
    //  console.log("Calendarios retornados:", userData?.calendarios);
    
    return new Response(JSON.stringify({
         success: true,
         user_firstName: userData.user_firstname,
         user_secondName: userData.user_secondname,
         user_mail: userData.user_mail,
         user_age: userData.user_age,
         user_name: userData.perfis?.user_name,
         user_image: userImageArray, 
         calendarios: userData.calendarios,
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
