'use client';

// React ve Next.js'den gerekli modüllerin import edilmesi
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// PDF bileşenini dinamik olarak import ediyoruz
// SSR'ı devre dışı bırakarak sadece client tarafında çalışmasını sağlıyoruz
const PDFFile = dynamic(() => import('./PDFFile'), {
  ssr: false, // Server-side rendering'i devre dışı bırak
  loading: () => <button className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition">
    Yükleniyor...
  </button>
});

// GitHub repolarını alıp PDF oluşturan ana bileşen
export const GenerateCV = ({ repos }) => {
  // Client-side rendering kontrolü için state
  const [isClient, setIsClient] = useState(false);

  // Component mount olduğunda client-side'da olduğumuzu belirt
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Server-side rendering sırasında yükleme butonu göster
  if (!isClient) {
    return <button className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition">
      CV İndir
    </button>;
  }

  // Client-side'da PDF bileşenini render et
  return <PDFFile repos={repos} />;
}; 