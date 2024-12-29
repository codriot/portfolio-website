'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

// İletişim bilgileri
const contactInfo = {
  phone: "536 222 81 06",
  email: "yusuf.akcal02@gmail.com",
  address: "Çağış Kampüsü, Bigadiç/Balıkesir"
};

// Servis seçenekleri
const services = [
  "Web Geliştirme",
  "Mobil Uygulama Geliştirme",
  "UI/UX Tasarım",
  "Danışmanlık",
  "Diğer"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mesaj başarıyla gönderildi!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen flex items-center justify-center p-4 bg-[#1a1a1a]"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Bölümü */}
        <div className="lg:col-span-2 bg-[#232323] p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-2 text-[#00ff9d]">Birlikte çalışalım</h2>
          <p className="text-gray-400 mb-8">
            Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapacağım.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="Ad"
                className="bg-[#1a1a1a] border-none text-gray-300"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                name="lastName"
                placeholder="Soyad"
                className="bg-[#1a1a1a] border-none text-gray-300"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="email"
                type="email"
                placeholder="E-posta adresi"
                className="bg-[#1a1a1a] border-none text-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Telefon numarası"
                className="bg-[#1a1a1a] border-none text-gray-300"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <Select 
              value={formData.service} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
              required
            >
              <SelectTrigger className="bg-[#1a1a1a] border-none text-gray-300">
                <SelectValue placeholder="Bir hizmet seçin" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#333] text-gray-300">
                {services.map((service) => (
                  <SelectItem 
                    key={service} 
                    value={service}
                    className="focus:bg-[#333] focus:text-gray-100"
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea
              name="message"
              placeholder="Mesajınızı buraya yazın."
              className="bg-[#1a1a1a] border-none text-gray-300 min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              className="bg-[#00ff9d] text-black hover:bg-[#00cc7d] transition-colors px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </Button>
          </form>
        </div>

        {/* İletişim Bilgileri */}
        <div className="space-y-6">
          {/* Telefon */}
          <div className="flex items-center gap-4 bg-[#232323] p-4 rounded-xl">
            <div className="bg-[#1a1a1a] p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-400">Telefon</h3>
              <p className="text-white">{contactInfo.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-[#232323] p-4 rounded-xl">
            <div className="bg-[#1a1a1a] p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-400">E-posta</h3>
              <p className="text-white">{contactInfo.email}</p>
            </div>
          </div>

          {/* Adres */}
          <div className="flex items-center gap-4 bg-[#232323] p-4 rounded-xl">
            <div className="bg-[#1a1a1a] p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-400">Adres</h3>
              <p className="text-white">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}