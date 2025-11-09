"use client";

import { useEffect, useState } from "react";

import { CalendarCheck } from "lucide-react";

import Card_Exames from "../components/ui/Card_Exames";
import { ProfileCard } from "../components/ui/ProfileCard";
import testeArtigos from "../assets/banner-tester.png";
import Link from "next/link";
import { radixSort } from "../script/radixSort";
import { ArticleCard } from "../components/Card_Artigos";

interface Event {
  calendar_id: number;
  calendar_consulta: string;
  calendar_data: string;
}

export default function Perfil() {
  const [userData, setUserData] = useState({
    user_firstName: "",
    user_secondName: "",
    user_mail: "",
    user_age: 0,
    user_image: null as string | null,
    user_name: "",
    calendario: [] as Event[],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
          credentials: "include",
        });

        const userData = await response.json();
        console.log(userData);

        if (userData.success) {
          let imageUrl: string | null = null;

          // Verifica se user_image é um Uint8Array (ou array-like) com dados
          if (
            userData.user_image &&
            Array.isArray(userData.user_image) &&
            userData.user_image.length > 0
          ) {
            const byteArray = new Uint8Array(userData.user_image); // Converte o array JS em Uint8Array
            const imageBlob = new Blob([byteArray], { type: "image/png" });
            imageUrl = URL.createObjectURL(imageBlob);
          }

          console.log("URL da IMAGEM : ", imageUrl);

          const sortedCalendario = radixSort(userData.calendarios || []);

          setUserData({
            user_firstName: userData.user_firstName || "",
            user_secondName: userData.user_secondName || "",
            user_mail: userData.user_mail || "",
            user_age: userData.user_age || 0,
            user_name: userData.user_name,
            user_image: imageUrl,
            calendario: sortedCalendario,
          });

          console.log("Dados do calendario recebidos:", userData.calendario);
        } else {
          console.error("Erro ao carregar dados:", userData.message);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
    fetchUserData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const genderColors: Record<string, string> = {
    Fitness: "from-orange-500 to-red-500",
    Nutrição: "from-green-500 to-emerald-500",
    "Bem-estar": "from-purple-500 to-pink-500",
    "Saúde Mental": "from-blue-500 to-cyan-500",
    Sono: "from-indigo-500 to-purple-500",
  };

  const [articles] = useState([
    {
      id: 1,
      title: "Como Manter uma Dieta Equilibrada no Dia a Dia",
      description: "Só pra teste",
      author: "Dr. Carlos Mendes",
      gender: "Saúde Mental",
      category: "Nutrição",
      url:"teste",
      image: testeArtigos.src,
    },
    {
      id: 2,
      title: "A Importância do Check-up Anual para sua Saúde",
      description: "Só pra teste",
      author: "Dra. Ana Paula Silva",
      gender: "Saúde Mental",
      category: "Prevenção",
      url:"teste",
      image: testeArtigos.src,
    },
    {
      id: 3,
      title: "Bem-estar Mental: Práticas para uma Vida Mais Saudável",
      description: "Só pra teste",
      author: "Dra. Juliana Santos",
      gender: "Saúde Mental",
      category: "Bem-estar",
      url:"teste",
      image: testeArtigos.src,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <div className="mb-8">
          <ProfileCard
            firstName={userData.user_firstName}
            secondName={userData.user_secondName}
            email={userData.user_mail}
            age={userData.user_age}
            name={userData.user_name}
            imageUrl={userData.user_image}
          />
        </div>

        {/* Exams Section */}
        <section className="mb-12">
          <h3 className="text-gray-900 mb-6">Seus próximos exames agendados</h3>
          <div className="grid gap-4 mb-6">
            {userData.calendario.length > 0 ? (
              userData.calendario.map((event) => (
                <Card_Exames
                  key={event.calendar_id}
                  title={event.calendar_consulta}
                  date={formatDate(event.calendar_data)}
                  time={formatTime(event.calendar_data)}
                  status="agendado"
                />
              ))
            ) : (
              <p className="text-gray-500">Nenhum evento agendado.</p>
            )}
          </div>
          <Link href={"/Calendario"}>
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-4 py-2 rounded-lg hover:bg-teal-50">
              <CalendarCheck className="w-4 h-4" />
              Acessar Calendário
            </button>
          </Link>
        </section>

        {/* Articles Section */}
        <section className="mb-12">
          <h3 className="text-gray-900 mb-6">Artigos favoritos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                genderColor={genderColors[article.gender]}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Footer Links */}
        <footer className="border-t border-gray-200 pt-8"></footer>
      </main>
    </div>
  );
}
