"use client"

import { useEffect, useState } from 'react';

import { CalendarCheck } from 'lucide-react';

import Card_Exames from "../components/ui/Card_Exames"
import Card_Artigos from '../components/ui/Card_Artigos';
import { ProfileCard } from '../components/ui/ProfileCard';
import testeArtigos from "../assets/banner-tester.png"
import Link from 'next/link';

export default function Perfil(){

  const [userData, setUserData] = useState({
    user_firstName: '',
    user_secondName: '',
    user_mail: '',
    user_age: 0,
    user_image: null as string | null,
    user_name: '',
  })

  useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/user", {
            method: "GET",
            credentials: "include",
          });

          const userData = await response.json();
          console.log(userData)

          if (userData.success) {

            let imageUrl: string | null = null;

              // Verifica se user_image é um Uint8Array (ou array-like) com dados
              if (userData.user_image && Array.isArray(userData.user_image) && userData.user_image.length > 0) {
                  const byteArray = new Uint8Array(userData.user_image);  // Converte o array JS em Uint8Array
                  const imageBlob = new Blob([byteArray], { type: "image/png" });
                  imageUrl = URL.createObjectURL(imageBlob);
              }

              console.log("URL da IMAGEM : ", imageUrl)

             setUserData({
              user_firstName: userData.user_firstName || '',
              user_secondName: userData.user_secondName || '',
              user_mail: userData.user_mail || '',
              user_age: userData.user_age || 0,
              user_name: userData.user_name,
              user_image: imageUrl,
           });
          } else {
            console.error("Erro ao carregar dados:", userData.message);
          }
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      };
      fetchUserData();
    }, []);

  const [exams] = useState([
    {
      id: 1,
      title: 'Exame de sangue',
      date: '15/11/2025',
      time: '08:30',
      status: 'confirmado' as const,
    },
    {
      id: 2,
      title: 'Check-up anual',
      date: '22/11/2025',
      time: '14:00',
      status: 'agendado' as const,
    },
    {
      id: 3,
      title: 'Exame de urina',
      date: '30/11/2025',
      time: '10:00',
      status: 'pendente' as const,
    },
  ]);

  const [articles] = useState([
    {
      id: 1,
      title: 'Como Manter uma Dieta Equilibrada no Dia a Dia',
      author: 'Dr. Carlos Mendes',
      readTime: '5 min',
      category: 'Nutrição',
      imageUrl: testeArtigos.src
    },
    {
      id: 2,
      title: 'A Importância do Check-up Anual para sua Saúde',
      author: 'Dra. Ana Paula Silva',
      readTime: '7 min',
      category: 'Prevenção',
      imageUrl: testeArtigos.src
    },
    {
      id: 3,
      title: 'Bem-estar Mental: Práticas para uma Vida Mais Saudável',
      author: 'Dra. Juliana Santos',
      readTime: '6 min',
      category: 'Bem-estar',
      imageUrl: testeArtigos.src
    },
  ]);

   return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <div className="mb-8">
          <ProfileCard 
            firstName = {userData.user_firstName}
            secondName = {userData.user_secondName}
            email = {userData.user_mail}
            age = {userData.user_age}
            name = {userData.user_name}
            imageUrl = {userData.user_image}
          />
        </div>

        {/* Exams Section */}
        <section className="mb-12">
          <h3 className="text-gray-900 mb-6">Seus próximos exames agendados</h3>
          <div className="grid gap-4 mb-6">
            {exams.map((exam) => (
              <Card_Exames
                key={exam.id}
                title={exam.title}
                date={exam.date}
                time={exam.time}
                status={exam.status}
              />
            ))}
          </div>
          <Link href={"/Calendario"}>
            <button  
                className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50"
                >
                  <CalendarCheck  className="w-4 h-4" />
                  Acessar Calendário
              </button>
          </Link>
        </section>

        {/* Articles Section */}
        <section className="mb-12">
          <h3 className="text-gray-900 mb-6">Artigos favoritos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card_Artigos
                key={article.id}
                title={article.title}
                author={article.author}
                readTime={article.readTime}
                category={article.category}
                imageUrl={article.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Footer Links */}
        <footer className="border-t border-gray-200 pt-8">
        </footer>
      </main>
    </div>
  );
}