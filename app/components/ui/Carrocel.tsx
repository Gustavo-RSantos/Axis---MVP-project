import Image from "next/image";
import { useState, useEffect } from "react";
import CarrocelTeste from "@/public/Carrocel_teste.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: CarrocelTeste.src, // Correção: use .src para pegar a string do import
    title: "Pratique atividade física regularmente",
    subtitle: "Fortaleça seu corpo e melhore sua saúde masculina",
  },
  {
    id: 2,
    image: CarrocelTeste.src,
    title: "Mexa-se para um coração saudável",
    subtitle: "Reduza os riscos cardiovasculares com exercícios diários",
  },
  {
    id: 3,
    image: CarrocelTeste,
    title: "Atividade física aumenta a disposição",
    subtitle: "Mais energia para enfrentar os desafios do dia a dia",
  },
  {
    id: 4,
    image: CarrocelTeste.src,
    title: "Cuide da saúde mental com exercícios",
    subtitle: "Atividades físicas ajudam a reduzir o estresse e a ansiedade",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000); // troca a cada 6 segundos

    return () => clearTimeout(timer);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full mx-auto  overflow-hidden shadow-lg h-96 md:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image} 
            alt={slide.title}
            fill 
            className="object-cover w-full h-full"
            priority={index === 0} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 md:px-10 py-20">
            <p className="text-white text-sm md:text-base mb-2 uppercase tracking-widest font-light">
              Frase sobre a importância da atividade física
            </p>
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 rounded-full p-1 md:p-3 z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 rounded-full p-1 md:p-3 z-20"
        aria-label="Next Slide"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
