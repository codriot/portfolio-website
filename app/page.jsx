"use client";

import Image from "next/image";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { GenerateCV } from "@/components/GenerateCV";

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const username = "codriot";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto flex items-center justify-between h-screen">
        {/* Sol Taraf - Text Section */}
        <div className="w-1/2 pr-8">
          <div className="max-w-2xl">
            <p className="text-xl text-green-500 mb-4">Software Developer</p>
            <h1 className="text-6xl font-bold mb-6">
             Selam, ben <span className="text-green-500">Mustafa Al</span>
            </h1>
            <p className="text-l text-white/70 mb-8">
            Ben Codriot, yazılım geliştirme dünyasında uzmanlaşmış freelance bir geliştiriciyim. Web uygulamalarından backend çözümlerine, frontend tasarımından DevOps süreçlerine ve test otomasyonlarına kadar yazılım yaşam döngüsünün her aşamasında tecrübeye sahibim.
            </p>
            <div className="flex items-center gap-6">
              <GenerateCV repos={repos} />
              <div className="flex gap-6 text-2xl">
                <a 
                  href="https://github.com/codriot"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://twitter.com/10VBacik"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://instagram.com/hardwareandro10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - Image Section */}
        <div className="w-1/2 relative h-[80vh]">
          <Image
            src="/backgroundimage/photo.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
