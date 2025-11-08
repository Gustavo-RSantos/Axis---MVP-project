import prisma from "../../lib/prisma";
import { getUserFromCookie } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export interface PostDataProps {
  post_name: string;
  post_text: string;
  post_data: string;
  post_image: Blob | null;
  post_gender: string;
}

// GET: Buscar todos os posts com comentários e likes
export async function GET() {
  try {
    const payload = await getUserFromCookie(); // Para verificar likes do usuário atual

    const posts = await prisma.postagens.findMany({
      include: {
        cadastros: {
          include: {
            perfis: true, // Inclui perfis para user_name e user_image
          },
        },
        postagem_comentarios: {
          include: {
            cadastros: {
              include: {
                perfis: true, // Inclui perfis para autor e avatar dos comentários
              },
            },
          },
          orderBy: { comentario_data: 'asc' }, // Ordena comentários por data
        },
        postagem_likes: true, // Inclui likes para contar e verificar se o usuário atual deu like
      },
      orderBy: { post_data: 'desc' }, // Ordena posts por data decrescente
    });

    // Mapear para o formato esperado pelo frontend
    const formattedPosts = posts.map((post) => ({
      id: post.post_id,
      user_name: post.cadastros?.perfis?.user_name || 'Anônimo',
      user_image: post.cadastros?.perfis?.user_image
        ? `data:image/jpeg;base64,${Buffer.from(post.cadastros.perfis.user_image).toString('base64')}`
        : null,
      data: post.post_data ? post.post_data.toISOString() : new Date().toISOString(),
      name: post.post_name || '',
      text: post.post_text || '',
      image: post.post_image
        ? `data:image/jpeg;base64,${Buffer.from(post.post_image).toString('base64')}` // Força conversão para Buffer e depois base64
        : null,
      gender: post.post_gender || '',
      likes: post.postagem_likes.length,
      comentarios: post.postagem_comentarios.map((comentario) => ({
        id: comentario.comentario_id,
        user_name: comentario.cadastros?.perfis?.user_name || 'Anônimo',
        user_image: comentario.cadastros?.perfis?.user_image
          ? `data:image/jpeg;base64,${Buffer.from(comentario.cadastros.perfis.user_image).toString('base64')}`
          : null,
        comentario_text: comentario.comentario_text || '',
        comentario_data: comentario.comentario_data?.toISOString() || '',
      })),
      curtido: payload?.user_id
        ? post.postagem_likes.some((like) => like.user_id === payload.user_id)
        : false, // Verifica se o usuário atual deu like
    }));

    return NextResponse.json({ success: true, posts: formattedPosts });
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}

// POST: Criar um novo post
export async function POST(request: Request) {
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json({ success: false, message: "Não autenticado" }, { status: 401 });
    }

    const formData = await request.formData();
    const post_name = formData.get('post_name') as string;
    const post_text = formData.get('post_text') as string;
    const post_gender = formData.get('post_gender') as string;
    const post_image = formData.get('post_image') as File | null;

     if (!post_text) {
      return NextResponse.json({ success: false, message: "Texto do post é obrigatório" }, { status: 400 });
    }

    if (!post_image) {
      return NextResponse.json({ success: false, message: "Nenhum arquivo enviado." }, { status: 400 });
    }
    
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(post_image.type)) {
      return NextResponse.json({ success: false, message: "Apenas PNG, JPG ou JPEG são permitidos." }, { status: 400 });
    }
    if (post_image.size > 12 * 1024 * 1024) {  // Exemplo: máximo 12MB
      return NextResponse.json({ success: false, message: "Arquivo muito grande (máx. 12MB)." }, { status: 400 });
    }

    // Converter arquivo para Buffer (para BLOB)
    const arrayBuffer = await post_image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    const newPost = await prisma.postagens.create({
      data: {
        user_id: payload.user_id,
        post_name: post_name || null,
        post_text,
        post_data: new Date(), // Converte string para Date
        post_image: imageBuffer,
        post_gender: post_gender || null,
      },
    });

    return NextResponse.json({ success: true, post: newPost });

  } catch (error) {
    console.error("Erro ao criar post:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}