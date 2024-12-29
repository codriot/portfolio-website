// service/pages.jsx
'use client';

import ExperienceCard from "@/components/card/cards";
import Image from "next/image";

const experiences = [
  {
    role: "Senior Web Geliştirici",
    period: "Haziran 2021 - Günümüz",
    company: "Odeao Labs",
    icon: "/odeao-labs.svg",
    description: "Next.js ve React kullanarak kurumsal web uygulamaları geliştirdim. Modern UI/UX pratiklerini uyguladım ve performans optimizasyonları gerçekleştirdim."
  },
  {
    role: "Full Stack Geliştirici",
    period: "Ocak 2020 - Haziran 2021",
    company: "Stack3d Lab",
    icon: "/stack3d-lab.svg",
    description: "Node.js ve React ile full-stack uygulamalar geliştirdim. Veritabanı mimarisi ve API entegrasyonlarını yönettim."
  },
  {
    role: "Frontend Geliştirici",
    period: "Mart 2019 - Aralık 2019",
    company: "Magnolia",
    icon: "/magnolia.svg",
    description: "Duyarlı web arayüzleri oluşturdum ve modern tasarım sistemleri uyguladım. UI/UX ekibiyle işbirliği yaptım."
  },
  {
    role: "UI/UX Geliştirici",
    period: "Haziran 2018 - Şubat 2019",
    company: "Digital Craft",
    icon: "/magnolia.svg",
    description: "Mobil ve web uygulamaları için kullanıcı arayüzleri tasarladım ve geliştirdim. Kullanıcı araştırmaları ve kullanılabilirlik testleri yürüttüm."
  },
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