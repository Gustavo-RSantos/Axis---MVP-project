import { motion } from "motion/react";
import { Calendar, CheckCircle2, Users, BookOpen } from "lucide-react";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface cardProps {
  icon: string;
  direction: string;
  color: string;

  image: string | StaticImageData;
  title: string;
  subTitle: string;
  desc: string;
  contentList_1: string;
  contentList_2: string;
  contentList_3: string;
}

export default function Card({
  icon,
  direction,
  color,

  title,
  image,
  subTitle,
  desc,
  contentList_1,
  contentList_2,
  contentList_3,
}: cardProps) {
  function useWindowSize() {
    const [size, setSize] = useState({ width: 0 });
    useEffect(() => {
      function updateSize() {
        setSize({ width: window.innerWidth });
      }
      window.addEventListener("resize", updateSize);
      updateSize(); // Inicializa
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const { width } = useWindowSize(); // Usando o hook

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  function iconStyle() {
    if (icon == "Calendar") {
      return <Calendar className="w-5 h-5" />;
    } else if (icon == "BookOpen") {
      return <BookOpen className="w-5 h-5" />;
    } else if (icon == "Users") {
      return <Users className="w-5 h-5" />;
    }
  }

  function colorHandler(color: string) {
    const colors = {
      purple: {
        title: "bg-purple-100 text-purple-700",
        subTitle: "text-purple-600",
        circle: "text-purple-600",
      },
      green: {
        title: "bg-teal-100 text-teal-700",
        subTitle: "text-teal-600",
        circle: "text-teal-600",
      },
      blue: {
        title: "bg-blue-100 text-blue-700",
        subTitle: "text-blue-600",
        circle: "text-blue-600",
      },
    };

    switch (color) {
      case "green":
        return colors.green;
      case "blue":
        return colors.blue;
      case "purple":
        return colors.purple;
      default:
        return colors.blue;
    }
  }
  const imageSrc = typeof image === "string" ? image : image.src;
  const ImageBlock = (
    <motion.div
      className="relative group overflow-hidden bg-cover rounded-2xl shadow-2xl h-[350px]"
      style={{ backgroundImage: `url(${imageSrc})` }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  const TextBlock = (
    <div className="space-y-6">
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
          colorHandler(color).title
        }`}
      >
        {iconStyle()}
        <span>{title}</span>
      </div>

      <h2 className={colorHandler(color).subTitle}>{subTitle}</h2>
      <p className="text-slate-600 leading-relaxed">{desc}</p>

      <ul className="space-y-4">
        {[contentList_1, contentList_2, contentList_3].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-3 text-slate-700"
          >
            <CheckCircle2
              className={`w-5 h-5 mt-0.5 shrink-0 ${
                colorHandler(color).circle
              }`}
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const showImageFirst = direction === "right" || width < 768;

  return (
    <motion.section
      className="grid md:grid-cols-2 gap-12 items-center"
      {...fadeInUp}
    >
      {showImageFirst ? (
        <>
          {ImageBlock}
          {TextBlock}
        </>
      ) : (
        <>
          {TextBlock}
          {ImageBlock}
        </>
      )}
    </motion.section>
  );
}
