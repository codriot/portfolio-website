'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// Kart animasyonları için variant tanımlamaları
const cardVariants = {
  // Başlangıç durumu
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.9
  },
  // Görünür olma durumu
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  },
  // Hover durumu - Yeşil arka plan ve büyüme efekti
  hover: {
    backgroundColor: "#00ff9d",
    color: "#000",
    scale: 1.02,
    transition: { duration: 0.2 },
  }
};

// Deneyim kartı bileşeni
export default function ExperienceCard({ experience }) {
  return (
    // Framer Motion ile animasyonlu kart container'ı
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-[#232329] rounded-xl p-8 relative overflow-hidden group"
    >
      {/* Kart içeriği */}
      <div className="relative z-10">
        {/* Başlık ve logo alanı */}
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* Rol ve süre bilgisi */}
            <h3 className="text-2xl font-bold group-hover:text-black">{experience.role}</h3>
            <p className="text-gray-400 group-hover:text-black">{experience.period}</p>
          </div>
          {/* Şirket logosu */}
          <Image
            src={experience.icon}
            alt={experience.company}
            width={40}
            height={40}
            className="group-hover:brightness-0" // Hover'da logo siyaha dönüşür
          />
        </div>
        {/* Deneyim açıklaması */}
        <p className="text-gray-300 group-hover:text-black">{experience.description}</p>
      </div>
    </motion.div>
  );
} 