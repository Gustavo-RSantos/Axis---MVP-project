import { clearAuthCookie, getUserFromCookie } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE() {  // Ou PUT
  try {
    
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

    // deleteUserPostComentarios (pode depender de postagens).
    // deleteUserPostLikes (pode depender de postagens).
    // deleteUserPostagens (depende de cadastros).
    // deleteUserPerfil (depende de cadastros).
    // deleteUserCadastro (tabela pai, deletar por último).
        
    const deleteUserPostComentarios =  prisma.postagem_comentarios.deleteMany({
        where: {
            user_id : payload.user_id
        },
    })
    const deleteUserPostLikes =  prisma.postagem_likes.deleteMany({
        where: {
            user_id : payload.user_id
        },
    })
    const deleteUserPostagens =  prisma.postagens.deleteMany({
        where: {
            user_id : payload.user_id
        },
    })
    const deleteUserPerfil = prisma.perfis.deleteMany({
        where: {
            user_id : payload.user_id
        }
    })
    // COLOCAR A PORRA DA CONST DENTRO DO $transaction CARALHO
    // const deleteUserFavArtigos = await prisma.favorito_artigos.delete({
        //     where: {
    //         user_id : payload.user_id
    //     }
    // })
    
    const deleteUserCadastro = prisma.cadastros.deleteMany({
        where: {
            user_id : payload.user_id
        }
    })

    const deleteDadosUsuario = await prisma.$transaction([deleteUserPostComentarios , deleteUserPostLikes , deleteUserPostagens , deleteUserPerfil , deleteUserCadastro])
    
    // Limpando os cookies depois de deletar o usuário
    const response = NextResponse.json({ success: true, message: "Logout realizado" });
    await clearAuthCookie(response);

    console.log("Dados atualizados:", deleteDadosUsuario); // Log para confirmar atualização
    
    return NextResponse.json({ success: true, user: deleteDadosUsuario });

  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return NextResponse.json({ success: false, message: "Erro interno no servidor" }, { status: 500 });
  }
}