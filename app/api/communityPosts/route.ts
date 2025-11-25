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

export async function GET() {
  console.log("API GET chamada");
  try {
    const payload = await getUserFromCookie();
    /*Busca postagens com comentários e likes*/

    // SELECT p.*, c.*, pf.*, pc.*, cc.*, cpf.*, pl.* FROM postagens AS p
    // JOIN cadastros AS c ON p.user_id = c.user_id
    // JOIN perfis AS pf ON c.user_id = pf.user_id
    // LEFT JOIN postagem_comentarios AS pc ON p.post_id = pc.post_id
    // LEFT JOIN cadastros AS cc ON pc.user_id = cc.user_id
    // LEFT JOIN perfis AS cpf ON cc.user_id = cpf.user_id
    // LEFT JOIN postagem_likes AS pl ON p.post_id = pl.post_id
    // ORDER BY p.post_data DESC, pc.comentario_data ASC;
    const posts = await prisma.postagens.findMany({
      include: {
        cadastros: {
          include: {
            perfis: true,
          },
        },
        postagem_comentarios: {
          include: {
            cadastros: {
              include: {
                perfis: true,
              },
            },
          },
          orderBy: { comentario_data: "asc" },
        },
        postagem_likes: true,
      },
      orderBy: { post_data: "desc" },
    });

    const formattedPosts = posts.map((post) => ({
      id: post.post_id,
      user_name: post.cadastros?.perfis?.user_name || "Anônimo",
      user_image: post.cadastros?.perfis?.user_image
        ? `data:image/jpeg;base64,${Buffer.from(
            post.cadastros.perfis.user_image
          ).toString("base64")}`
        : null,
      data: post.post_data
        ? post.post_data.toISOString()
        : new Date().toISOString(),
      name: post.post_name || "",
      text: post.post_text || "",
      image: post.post_image
        ? `data:image/jpeg;base64,${Buffer.from(post.post_image).toString(
            "base64"
          )}` 
        : null,
      gender: post.post_gender || "",
      likes: post.postagem_likes.length,
      comentarios: post.postagem_comentarios.map((comentario) => ({
        id: comentario.comentario_id,
        user_name: comentario.cadastros?.perfis?.user_name || "Anônimo",
        user_image: comentario.cadastros?.perfis?.user_image
          ? `data:image/jpeg;base64,${Buffer.from(
              comentario.cadastros.perfis.user_image
            ).toString("base64")}`
          : null,
        comentario_text: comentario.comentario_text || "",
        comentario_data: comentario.comentario_data?.toISOString() || "",
      })),
      curtido: payload?.user_id
        ? post.postagem_likes.some((like) => like.user_id === payload.user_id)
        : false, 
    }));

    return NextResponse.json({ success: true, posts: formattedPosts });
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno" },
      { status: 500 }
    );
  }
}

// Criar um novo post
export async function POST(request: Request) {
  try {
    const payload = await getUserFromCookie();
    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Não autenticado" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const post_name = formData.get("post_name") as string;
    const post_text = formData.get("post_text") as string;
    const post_gender = formData.get("post_gender") as string;
    const post_image = formData.get("post_image") as File | null;

    if (!post_text) {
      return NextResponse.json(
        { success: false, message: "Texto do post é obrigatório" },
        { status: 400 }
      );
    }

    if (!post_image) {
      return NextResponse.json(
        { success: false, message: "Nenhum arquivo enviado." },
        { status: 400 }
      );
    }

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(post_image.type)) {
      return NextResponse.json(
        { success: false, message: "Apenas PNG, JPG ou JPEG são permitidos." },
        { status: 400 }
      );
    }
    if (post_image.size > 12 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Arquivo muito grande (máx. 12MB)." },
        { status: 400 }
      );
    }

    // Converter arquivo para Buffer (para BLOB)
    const arrayBuffer = await post_image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);
    /* Criação de nova postagem*/

    // INSERT INTO postagens (
    //   user_id, post_name, post_text, post_data, post_image, post_gender
    // ) VALUES (
    //   payload.user_id, post_name, post_text, NOW(), imageBuffer, post_gender
    // );
    const newPost = await prisma.postagens.create({
      data: {
        user_id: payload.user_id,
        post_name: post_name || null,
        post_text,
        post_data: new Date(), 
        post_image: imageBuffer,
        post_gender: post_gender || null,
      },
    });

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Erro ao criar post:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno" },
      { status: 500 }
    );
  }
}
