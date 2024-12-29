'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// PDF bileşenlerini dinamik olarak yüklüyoruz
const PDFFile = dynamic(() => import('./PDFFile'), {
  ssr: false,
  loading: () => <button className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition">
    Yükleniyor...
  </button>
});

export const GenerateCV = ({ repos }) => {
  const [isClient, setIsClient] = useState(false);

  // Sadece client tarafında çalıştığından emin oluyoruz
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <button className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition">
      CV İndir
    </button>;
  }

  return <PDFFile repos={repos} />;
}; 