import { motion } from "motion/react";
import { ArrowRight, User, Tag } from "lucide-react";
import { Card } from "./ui/Card_Artigos_Rep";
import Button from "./ui/Button"
import { Badge } from "./ui/Badge";
import { StaticImageData } from "next/image";
interface Article {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string | StaticImageData;
  gender: string;
  url: string;
}

interface ArticleCardProps {
  article: Article;
  genderColor: string;
  index: number;
}

export function ArticleCard({ article, genderColor, index }: ArticleCardProps) {
  const handleGoToArticle = () => {
    console.log(`Navegando para artigo ${article.url}`);
    window.open(article.url, '_blank');
  };

  return (
     <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
    >
      <Card className="h-full bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
        {/* Decorative Top Bar */}
        <div className={`h-1 bg-linear-to-r ${genderColor}`} />
        
        {/* Banner Image */}
        <div 
          className="relative h-48 overflow-hidden bg-slate-100 bg-cover bg-center"
          style={{backgroundImage: `url(${article.image})`}}
        >
        </div>
        
        <div className="p-6 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <Badge
              variant="secondary"
              className={`bg-linear-to-r ${genderColor} text-white border-0 mb-3`}
            >
              <Tag className="w-3 h-3 mr-1" />
              {article.gender}
            </Badge>
            <h2 className="text-slate-900 mb-2 line-clamp-2 group-hover:text-teal-700 transition-colors">
              {article.title}
            </h2>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-slate-700">{article.author}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 mb-4 line-clamp-3 grow">
            {article.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-end pt-4 border-t border-slate-100">
            <Button
              onClick={handleGoToArticle}
              className="bg-linear-to-r cursor-pointer from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md group py-2 px-4"
            >
              Ler artigo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}