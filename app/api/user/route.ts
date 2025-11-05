"use server";

import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import { dataProps } from "../../interface/user.interface";

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
