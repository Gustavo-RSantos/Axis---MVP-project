import Image from 'next/image';
import Button from './Button';
import { BookOpen, Clock, User } from 'lucide-react';

interface CardArtigosProps {
  title: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export default function Card_Artigos({ title, author, readTime, category, imageUrl}: CardArtigosProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Image
        width={100}
        height={100}
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {category}
          </span>
        </div>

        <h4 className="text-gray-900 mb-3 line-clamp-2">{title}</h4>
        
        <div className="space-y-2 mb-4 text-gray-600">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm">Por {author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{readTime} de leitura</span>
          </div>
        </div>

        <Button 
          className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Ler artigo
        </Button>
      </div>
    </div>
  );
}
