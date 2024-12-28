"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { GenerateCV } from "@/components/GenerateCV";

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const username = "codriot"; // Replace with your GitHub username

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
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <main className="flex flex-col-reverse xl:flex-row items-center justify-center gap-10 px-10 xl:px-20 mt-20">
        {/* Text Section */}
        <div className="text-center xl:text-left max-w-lg">
          <p className="text-lg text-green-500">Software Developer</p>
          <h1 className="text-5xl font-bold my-4">
            Hello, I'm <span className="text-green-500">Luke Coleman</span>
          </h1>
          <p className="text-white/70 mb-6">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>
          <div className="flex justify-center xl:justify-start items-center gap-4">
            <GenerateCV repos={repos} />
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-green-500 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
