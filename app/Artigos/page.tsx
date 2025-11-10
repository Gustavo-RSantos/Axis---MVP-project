"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Search, Filter } from "lucide-react";
import { ArticleCard } from "../components/Card_Artigos";
import Input from "../components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";

import bannerFitness from "../assets/imagensArtigos/imagemArtigosFitness.png";
import bannerNutricao from "../assets/imagensArtigos/imagemArtigosNutrição.png";
import bannerBemEstar from "../assets/imagensArtigos/imagemArtigosBemStar.png";
import bannerSaudeMental from "../assets/imagensArtigos/imagemArtigosSaúdeMental.png";
import bannerSono from "../assets/imagensArtigos/imagemArtigosSono.png";
import bannerEnvelhecimento from "../assets/imagensArtigos/bannerEnvelhecimento.jpg";
import bannerSaudeFisica from "../assets/imagensArtigos/bannerSaudeFisica.jpg";
import bannerSaudeIntelectual from "../assets/imagensArtigos/bannerSaudeIntelectual.jpg";
import bannerSaudePreventiva from "../assets/imagensArtigos/bannerSaudePreventiva.jpg";
import bannerSaudePublica from "../assets/imagensArtigos/bannerSaudePublica.jpg";
import bannerVicio from "../assets/imagensArtigos/bannerVicio.jpg";
interface ApiArticle {
  artigos_id: number;
  artigos_gender: string;
  artigos_autor: string;
  artigos_titulo: string;
  artigos_image: string | null;
  artigos_description: string;
  artigos_url: string;
}
interface Article {
  id: number;
  title: string;
  author: string;
  description: string;
  gender: string;
  date: string;
  image: string;
  url: string;
}

const genderColors: Record<string, string> = {
  Fitness: "from-orange-500 to-red-500",
  Nutrição: "from-green-500 to-emerald-500",
  "Bem-estar": "from-purple-500 to-pink-500",
  "Saúde Mental": "from-blue-500 to-cyan-500",
  Sono: "from-indigo-500 to-purple-500",
  Envelhecimento: "from-amber-500 to-yellow-600",
  "Saúde Preventiva": "from-teal-500 to-emerald-500",
  "Saúde Pública": "from-blue-600 to-sky-400",
  Vício: "from-rose-600 to-red-500",
  "Saúde Física": "from-red-500 to-amber-500",
  "Saúde Intelectual": "from-violet-500 to-fuchsia-500",
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [articles, setArticles] = useState<Article[]>([]); // Estado para os artigos
  const [loading, setLoading] = useState(true); // Estado para loading
  const [error, setError] = useState<string | null>(null); // Estado para erro

  function getDefaultImage(gender: string): string {
    switch (gender.toLowerCase()) {
      case "fitness":
        return bannerFitness.src;
      case "nutrição":
        return bannerNutricao.src;
      case "bem-estar":
        return bannerBemEstar.src;
      case "saúde mental":
        return bannerSaudeMental.src;
      case "sono":
        return bannerSono.src;
      case "envelhecimento":
        return bannerEnvelhecimento.src;
      case "saúde física":
        return bannerSaudeFisica.src;
      case "saúde intelectual":
        return bannerSaudeIntelectual.src;
      case "saúde preventiva":
        return bannerSaudePreventiva.src;
      case "saúde pública":
        return bannerSaudePublica.src;
      case "vício":
        return bannerVicio.src;
      default:
        return bannerFitness.src; // Imagem genérica para gêneros não previstos
    }
  }

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/artigos", {
          method: "GET",
          credentials: "include", // Se precisar de autenticação
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar artigos");
        }
        const data = await response.json();

        if (data.success) {
          // Mapeie os dados da API para o formato esperado
          const mappedArticles: Article[] = data.artigos.map(
            (apiArticle: ApiArticle) => ({
              id: apiArticle.artigos_id,
              title: apiArticle.artigos_titulo,
              author: apiArticle.artigos_autor,
              description: apiArticle.artigos_description,
              gender: apiArticle.artigos_gender,
              date: new Date().toISOString().split("T")[0],
              image:
                apiArticle.artigos_image === undefined
                  ? getDefaultImage(apiArticle.artigos_gender)
                  : apiArticle.artigos_image,
              url: apiArticle.artigos_url,
            })
          );
          console.log(mappedArticles);
          setArticles(mappedArticles);
        } else {
          setError(data.message || "Erro ao carregar artigos");
        }
      } catch (err) {
        console.error("Erro na requisição:", err);
        setError("Erro ao conectar com a API");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender =
      selectedGender === "all" || article.gender === selectedGender;
    return matchesSearch && matchesGender;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando artigos...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br  from-teal-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.section
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute bg-[url('./assets/BannerArtigos.jpg')] bg-cover bg-center inset-0 " />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-600 to-cyan-600 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white">
                {articles.length} artigos disponíveis
              </span>
            </div>
            <h1 className="text-white backdrop-blur-sm rounded-full shadow-sm mb-4 max-w-3xl mx-auto w-fit px-4 py-2 ">
              Biblioteca de Artigos
            </h1>
            <p className="text-white max-w-2xl mx-auto leading-relaxed backdrop-blur-sm rounded-full mb-6 shadow-sm px-4 py-2 ">
              Explore nossa coleção curada de artigos sobre saúde, bem-estar e
              qualidade de vida. Conteúdo especializado para sua jornada de
              transformação.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="relative max-w-7xl mx-auto px-6 mb-8 mt-4">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-slate-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-400" />
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger className="w-[200px] border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-slate-50">
                  <SelectValue placeholder="Filtrar por gênero" />
                </SelectTrigger>
                <SelectContent className="bg-white border-0 shadow-md">
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="all"
                  >
                    Todos os gêneros
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Fitness"
                  >
                    Fitness
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Nutrição"
                  >
                    Nutrição
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Bem-estar"
                  >
                    Bem-estar
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Saúde Mental"
                  >
                    Saúde Mental
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Sono"
                  >
                    Sono
                  </SelectItem>

                  {/* Novos gêneros adicionados */}
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Envelhecimento"
                  >
                    Envelhecimento
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Saúde Preventiva"
                  >
                    Saúde Preventiva
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Saúde Pública"
                  >
                    Saúde Pública
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Vício"
                  >
                    Vício
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Saúde Física"
                  >
                    Saúde Física
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                    value="Saúde Intelectual"
                  >
                    Saúde Intelectual
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-16">
        {filteredArticles.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-500">
              Nenhum artigo encontrado com os filtros selecionados.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                genderColor={
                  genderColors[article.gender] || "from-gray-500 to-gray-500"
                }
                index={index}
                favButton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
