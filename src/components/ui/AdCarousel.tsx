'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    alt: "Hotel lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    alt: "Beach resort",
  },
  {
    src: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
    alt: "Tropical vacation spot",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Oceanfront resort",
  },
];


export default function HeroImageSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full h-auto mr-10 rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
