"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Heart,
  MessageCircle,
  Share2,
  Plus,
  CalendarCheck,
  Users,
  Flame,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/Avatar";
import Separator from "../components/ui/Separator";
import { Badge } from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/TextArea";
import Card from "../components/ui/Post_Card";
import Image from "next/image";
import InputRef from "../components/ui/InputRef";

interface Comentario {
  id: number;
  user_name: string;
  user_image: string;
  comentario_text: string;
  comentario_data: string;
}

interface Post {
  id: number;
  user_name: string;
  user_image: string;
  data: string;
  name: string;
  text: string;
  image?: string;
  gender: string;
  likes: number;
  comentarios: Comentario[];
  curtido: boolean;
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  // const [postGender, setPostGender] = useState("Geral"); 
  const [postImage, setPostImage] = useState<File | null>(null);
  const [mostrarComentarios, setMostrarComentarios] = useState<{
    [key: number]: boolean;
  }>({});
  const [loading, setLoading] = useState(true);

  const postInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const postTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const comentarioRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  useEffect(() => { 
    console.log("useEffect executado - buscando posts");
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/communityPosts");
        const data = await response.json();
        console.log(data)
        if (data.success) {
          setPosts(data.posts);
          console.log(data.posts);
        }
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);



  async function handleCurtir(postId: number) {
    try {
      const response = await fetch(`/api/communityPosts/${postId}/like`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.success) {
        setPosts(
          posts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  curtido: data.liked,
                  likes: data.liked ? post.likes + 1 : post.likes - 1,
                }
              : post
          )
        );
      } else {
        alert("Erro ao dar like: " + data.message);
      }
    } catch (error) {
      console.error("Erro ao dar like:", error);
      alert("Erro ao dar like");
    }
  }

    async function fetchComentarios(postId: number){
      
    try {
      const response = await fetch(`/api/communityPosts/${postId}/comments`);
      const data = await response.json();
      if (data.success) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? { ...post, comentarios: data.comments } 
              : post
          )
        );
      } else {
        console.error("Erro ao buscar comentários:", data.message);
      }
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  async function handleAdicionarComentario(postId: number) {

  //Caso o input venha vazio, ele não envia nada para o banco
  const inputElement = comentarioRefs.current[postId];
  const comentarioTexto = inputElement?.value.trim() || "";

  if (!comentarioTexto) return;

  try {
    const response = await fetch(`/api/communityPosts/${postId}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: comentarioTexto }),
    });

    if (!response.ok) {
      console.error("Erro na resposta:", response.status, response.statusText);
      alert(`Erro: ${response.status} - ${response.statusText}`);
      return;
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Resposta não é JSON:", await response.text());
      alert("Erro: Resposta inválida do servidor");
      return;
    }

    const data = await response.json();
    
    if (data.success && data.comment) {
      const userImage = data.comment.user_image && data.comment.user_image !== "" ? data.comment.user_image : null;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comentarios: [
                  ...post.comentarios,
                  {
                    id: data.comment.comentario_id,
                    user_name: data.comment.user_name,
                    user_image: userImage,
                    comentario_text: comentarioTexto,
                    comentario_data: new Date().toISOString(),
                  },
                ],
              }
            : post
        )
      );

      // Limpar o campo após enviar
      if (inputElement) inputElement.value = "";

      await fetchComentarios(postId);
    } else {
      alert("Erro ao adicionar comentário: " + (data.message || "Resposta inválida"));
    }
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error);
    alert("Erro ao adicionar comentário");
  }
}


  const toggleComentarios = (postId: number) => {
    setMostrarComentarios({
      ...mostrarComentarios,
      [postId]: !mostrarComentarios[postId],
    });
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    // Captura o valor diretamente do textarea via ref (opcional, pois FormData já pega)
    const postText = postTextAreaRef.current?.value.trim();
    if (!postText) return;
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("FormData contents:", [...formData.entries()]);  // Veja o que está sendo enviado

    try {
      const response = await fetch("/api/communityPosts", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      if (data.success) {

        if (postInputRef.current) postInputRef.current.value = "";
        if (postTextAreaRef.current) postTextAreaRef.current.value = "";
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      // Validação básica: apenas imagens, tamanho máximo 5MB
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecione um arquivo de imagem válido.");
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        // 5MB
        alert("A imagem deve ter no máximo 12MB.");
        return;
      }
      setPostImage(file);
    }
  }

  function handleImageButtonClick() {
    fileInputRef.current?.click(); // Abre o seletor de arquivos
  }

  const formatarData = (dataIso: string) => {
    if (!dataIso || dataIso === "") return "Agora mesmo"; // Fallback para datas vazias
    try {
      const data = new Date(dataIso);
      if (isNaN(data.getTime())) return "Data inválida";
      return formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
    } catch {
      return "Data inválida";
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-teal-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* bg-linear-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 */}
        <div className="absolute inset-0 bg-[url('./assets/bannerComunidade.jpg')]  bg-cover bg-no-repeat" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 shadow-sm">
              <CalendarCheck className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700">+2.5k membros ativos hoje</span>
            </div>
            <h1 className="text-slate-900 mb-4 max-w-3xl mx-auto">
              Sua comunidade de saúde e bem-estar
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Conecte-se com pessoas que compartilham os mesmos objetivos.
              Compartilhe suas conquistas, aprenda com as experiências dos
              outros e cresça junto com a comunidade.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <motion.div
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-5 h-5 text-teal-600" />
                <div className="text-left">
                  <p className="text-slate-500">Membros</p>
                  <p className="text-slate-900">12.4k</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Flame className="w-5 h-5 text-orange-500" />
                <div className="text-left">
                  <p className="text-slate-500">Posts Hoje</p>
                  <p className="text-slate-900">248</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pb-12 mt-4">
        <div className="grid lg:grid-cols-[280px_1fr_280px] md:grid-cols-[240px_1fr] gap-6">
          {/* Left Sidebar */}
          <motion.aside
            className="hidden md:block space-y-4"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg sticky top-6">
              <h3 className="text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-linear-to-b from-teal-500 to-cyan-500 rounded-full" />
                Categorias
              </h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Fitness",
                    color: "from-orange-500 to-red-500",
                    count: 145,
                  },
                  {
                    name: "Nutrição",
                    color: "from-green-500 to-emerald-500",
                    count: 98,
                  },
                  {
                    name: "Bem-estar",
                    color: "from-purple-500 to-pink-500",
                    count: 127,
                  },
                  {
                    name: "Saúde Mental",
                    color: "from-blue-500 to-cyan-500",
                    count: 86,
                  },
                  {
                    name: "Sono",
                    color: "from-indigo-500 to-purple-500",
                    count: 62,
                  },
                ].map((cat) => (
                  <button
                    key={cat.name}
                    className="group w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-teal-50 hover:to-cyan-50 text-slate-700 transition-all hover:shadow-md hover:scale-[1.02] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full bg-linear-to-r ${cat.color}`}
                      />
                      {cat.name}
                    </div>
                    <span className="text-slate-400 group-hover:text-teal-600">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </Card>
          </motion.aside>

          {/* Feed */}
          <div className="space-y-5">
            {/* Criar Post */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg">
                <form onSubmit={handleSubmitPost}>
                  <div className="flex content-center justify-center mb-2 gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-linear-to-br from-teal-400 to-cyan-500 text-white">
                        VC
                      </AvatarFallback>
                    </Avatar>
                    <InputRef
                      id="post_name"
                      type="text"
                      name="post_name"
                      ref={postInputRef}
                      placeholder="Digite o titulo da postagem"
                      maxLength={50}
                      className="w-full border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-slate-50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="post_text"
                      id="post_text"
                      placeholder="Compartilhe sua jornada de saúde..."
                      ref={postTextAreaRef}
                      className="min-h-20 border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-slate-50"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Button
                      type="button"
                      onClick={handleImageButtonClick}
                      className="text-slate-600 hover:text-teal-600 py-4 px-2"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {postImage
                        ? `Imagem selecionada: ${postImage.name}`
                        : "Adicionar imagem"}
                    </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="post_image"
                        accept="image/*" // Apenas imagens
                        onChange={handleImageChange}
                        style={{ display: "none" }} // Oculto
                      />

                    <Button
                      type="submit"
                      className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md  py-2 px-4"
                    >
                      Publicar
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Posts */}
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                  {/* Header do Post */}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11">
                        <Image 
                          width={100}
                          height={100}
                          src={post.user_image}
                          alt="Post"
                          className="w-full rounded-full h-full object-cover hover:scale-105 transition-transform duration-50"                     
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-slate-900">{post.user_name}</p>
                          <Badge
                            variant="secondary"
                            className="bg-linear-to-r from-teal-100 to-cyan-100 text-teal-700 border-0"
                          >
                            {post.gender}
                          </Badge>
                        </div>
                        <p className="text-slate-500">
                          {formatarData(post.data)}
                        </p>
                      </div>
                    </div>

                    {post.name && (
                      // <div className="border-b border-gray-300 mb-3">
                        <h1 className="text-slate-700  text-[20px] leading-relaxed mb-0">
                          {post.name}
                        </h1>
                      // </div>
                    )}

                    <p className="text-slate-700 leading-relaxed mb-4">
                      {post.text}
                    </p>
                  </div>

                  {/* Imagem do Post */}
                  {post.image && (
                    <div className="relative h-72 overflow-hidden bg-slate-100">
                      <Image
                        width={100}
                        height={100}
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Ações */}
                  <div className="p-5 pt-4 bg-linear-to-b from-transparent to-slate-50/50">
                    <div className="flex items-center gap-6 mb-4">
                      <motion.button
                        onClick={() => handleCurtir(post.id)}
                        className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors group"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart
                          className={`w-5 h-5 transition-all ${
                            post.curtido
                              ? "fill-red-500 text-red-500 scale-110"
                              : "group-hover:scale-110"
                          }`}
                        />
                        <span className={post.curtido ? "text-red-500" : ""}>
                          {post.likes}
                        </span>
                      </motion.button>
                      <motion.button
                        onClick={() => toggleComentarios(post.id)}
                        className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comentarios.length}</span>
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors ml-auto"
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Comentários */}
                    {mostrarComentarios[post.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Separator className="mb-4" />
                        <div className="space-y-3">
                          {post.comentarios.map((comentario) => (
                            <div key={comentario.id} className="flex gap-3">
                               <div className="relative rounded-full w-12 h-12 overflow-hidden bg-slate-100">
                                  <Image
                                    width={100}
                                    height={100}
                                    src={comentario.user_image}
                                    alt="Foto do usuario do comentario"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                  />
                              </div>
                              <div className="flex-1 bg-linear-to-br from-slate-50 to-slate-100/50 rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="text-slate-900">
                                    {comentario.user_name}
                                  </p>
                                  <p className="text-slate-500">
                                    {formatarData(comentario.comentario_data)}
                                  </p>
                                </div>
                                <p className="text-slate-700">
                                  {comentario.comentario_text}
                                </p>
                              </div>
                            </div>
                          ))}

                          {/* Novo Comentário */}
                          <div className="flex gap-3 pt-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-linear-to-br from-teal-400 to-cyan-500 text-white">
                                VC
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 flex gap-2">
                              <InputRef
                                type="text"
                                placeholder="Adicione um comentário..."
                                ref={(element: HTMLInputElement | null) => {
                                  comentarioRefs.current[post.id] = element;
                                }}
                                className="border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-white"
                              />
                              <Button
                                onClick={() =>
                                  handleAdicionarComentario(post.id)
                                }
                                className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md py-2 px-4"
                              >
                                Enviar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Sidebar - Hidden on smaller screens, visible on large */}
          <motion.aside
            className="hidden lg:block space-y-4"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.aside>
        </div>
      </div>
    </div>
  );
}
