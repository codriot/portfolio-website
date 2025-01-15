// service/pages.jsx
'use client';

import ExperienceCard from "@/components/card/cards";
import Image from "next/image";

const experiences = [
  {
    role: "Mobil Uygulama Geliştirici",
    period: "Ağustos 2024 - Günümüz",
    company: "Türkiye Yazılım",
    description: "Flutter kullanarak kurumsal mobil uygulamaları geliştirdim. Modern UI/UX pratiklerini uyguladım ve performans optimizasyonları gerçekleştirdim."
  },
  {
    role: "Mobil Uygulama Geliştirici Stajyeri",
    period: "Temmuz 2024 - Ağustos 2024",
    company: "Türkiye Yazılım",
    description: "Flutter ile bir oyun bir mobil uygulama geliştirdim. Veritabanı mimarisi ve API entegrasyonlarını yönettim, test otomasyonları yazdım."
  },
  {
    role: "IT Destek Uzmanı",
    period: "Kasım 2023 - Ocak 2025",
    company: "Balıkesir Üniversitesi Bilgi İşlem Daire Başkanlığı",
    description: "Balıkesir Üniversitesi rektörlüğünde yarı zamanlı olarak rektörlüğün ve üniversitenin gereksinim duyduğu mobil veyahut web tabanlı yazılımları ürettik."
  }
];

export default function Services() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Verdiğim Hizmetler
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Profesyonel kariyerim boyunca uzmanlığımı şekillendiren rolleri ve projeleri sergileyen bir yolculuk.
          </p>
        </div>

        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
}