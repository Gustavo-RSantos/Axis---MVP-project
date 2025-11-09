"use client"
import { motion } from "motion/react"
import Card from "./components/ui/Card"
import Carrocel from "./components/ui/Carrocel";

import banner_1 from "./assets/bannerHome_1.jpg"
import banner_2 from "./assets/bannerHome_2.jpg"
import banner_3 from "./assets/bannerHome_3.jpg"


export default function Home() {

   const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
          {/* Hero Section */}
          <motion.header 
            className="relative h-[500px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
              <Carrocel />
          </motion.header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-20">
            <motion.div className="space-y-20"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Lembrete de Exames */}
                  <Card 
                    icon={"Calendar"} 
                    direction={"right"}
                    color={"green"}
                    title={"Agendamento"} 
                    image={banner_1}
                    subTitle={"Lembrete de exames"} 
                    desc={"Local para marcar datas de seus exames e evitar esquecimentos."} 
                    contentList_1={"Interface intuitiva para gerenciar datas"} 
                    contentList_2={"Marque e acompanhe seus exames facilmente"} 
                    contentList_3={"Receba lembretes automáticos próximos à data"}                  
                  />
                    
              {/* Acesso a Artigos */}
                  <Card 
                    icon={"BookOpen"} 
                    direction={"left"} 
                    color={"blue"}
                    title={"Conteúdo"} 
                    image={banner_2} 
                    subTitle={"Acesso a artigos"} 
                    desc={"Conteúdos sobre saúde masculina em um só lugar."} 
                    contentList_1={"Artigos científicos e matérias atualizadas"} 
                    contentList_2={"Informações revisadas por especialistas"} 
                    contentList_3={"Conhecimento reunido em um só espaço"}              
                  />

              {/* Comunidades */}
                  <Card 
                    icon={"Users"} 
                    direction={"right"}
                    color={"purple"} 
                    title={"Comunidade"} 
                    image={banner_3} 
                    subTitle={"Participe de nossas comunidades"} 
                    desc={"Conviva com outras pessoas em um ambiente de diálogo seguro."} 
                    contentList_1={"Interaja sobre temas de interesse"} 
                    contentList_2={"Troque experiências com quem vive os mesmos desafios"} 
                    contentList_3={"Compartilhe conquistas em um espaço acolhedor"}              
                  />
                  
            </motion.div>
          </main>   
        </div>
    </>
  );
}
