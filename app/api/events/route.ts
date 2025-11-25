"use server";

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma"; 
import { getUserFromCookie } from "../../lib/auth";

export async function GET() {
  try {
    console.log("Iniciando GET /api/events");
    const payload = await getUserFromCookie();
    console.log("Payload obtido:", payload);
    if (
      !payload ||
      typeof payload.user_id !== "number" ||
      payload.user_id <= 0
    ) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    /*Busca eventos no calendário*/

    // SELECT calendar_id, calendar_consulta, calendar_data FROM calendarios
    // WHERE user_id = payload.user_id;
    const events = await prisma.calendarios.findMany({
      select: {
        calendar_id: true,
        calendar_consulta: true,
        calendar_data: true,
      },
      where: { user_id: payload.user_id },
    });
    console.log("Eventos encontrados:", events); 

    const formattedEvents = events.map((event) => ({
      calendar_id: event.calendar_id,
      calendar_consulta: event.calendar_consulta || "",
      calendar_date: event.calendar_data
        ? event.calendar_data.toISOString()
        : null, 
    }));

    return NextResponse.json({ success: true, events: formattedEvents });
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await getUserFromCookie();
    if (
      !payload ||
      typeof payload.user_id !== "number" ||
      payload.user_id <= 0
    ) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    const { calendar_consulta, calendar_date } = await request.json();
    if (!calendar_consulta || !calendar_date) {
      return NextResponse.json(
        { success: false, message: "Título e data obrigatórios" },
        { status: 400 }
      );
    }

    // Valide e converta a data
    const parsedDate = new Date(calendar_date);
    if (isNaN(parsedDate.getTime())) {
      console.error("Data inválida recebida:", calendar_date);
      return NextResponse.json(
        { success: false, message: "Data inválida" },
        { status: 400 }
      );
    }
    // create = insert  / inserindo os seguintes dados : calendar_consulta , calendar_data , user_id.
    /* Criação de evento no calendário*/

    // INSERT INTO calendarios (
    //   calendar_consulta, calendar_data, user_id
    // ) VALUES (
    //   calendar_consulta, parsedDate, payload.user_id
    // );
    const newEvent = await prisma.calendarios.create({
      data: {
        calendar_consulta,
        calendar_data: parsedDate, // Salva como Date (Prisma converte para o banco)
        user_id: payload.user_id,
      },
    });

    // Retorna com calendar_date em ISO para consistência
    const responseEvent = {
      calendar_id: newEvent.calendar_id,
      calendar_consulta: newEvent.calendar_consulta,
      calendar_date: newEvent.calendar_data
        ? newEvent.calendar_data.toISOString()
        : null, // Padrão ISO na resposta
    };

    return NextResponse.json({ success: true, event: responseEvent });
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao criar evento" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    // 1. Autenticar via cookie
    const payload = await getUserFromCookie();
    if (
      !payload ||
      typeof payload.user_id !== "number" ||
      payload.user_id <= 0
    ) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    // 2. Receber e validar o ID do evento
    const { calendar_id } = await request.json();
    if (!calendar_id || isNaN(Number(calendar_id))) {
      return NextResponse.json(
        {
          success: false,
          message: "ID do evento obrigatório e deve ser um número",
        },
        { status: 400 }
      );
    }

    // 3. Excluir o evento (apenas se pertencer ao usuário)
    const deletedEvent = await prisma.calendarios.deleteMany({
      /*Ecxlusão de evento no calendário*/

      // DELETE FROM calendarios
      // WHERE calendar_id = CAST(calendar_id AS UNSIGNED)
      //   AND user_id = payload.user_id;

      where: {
        calendar_id: Number(calendar_id),
        user_id: payload.user_id, // Filtro de segurança
      },
    });

    // 4. Verificar se algo foi excluído
    if (deletedEvent.count === 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Evento não encontrado ou você não tem permissão para excluí-lo",
        },
        { status: 404 }
      );
    }

    // 5. Sucesso
    return NextResponse.json({
      success: true,
      message: "Evento excluído com sucesso",
    });
  } catch (error) {
    console.error("Erro ao excluir evento:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
