'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Work() {
  const [repos, setRepos] = useState([]);
  const username = "codriot";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const headers = {};
        if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
        }

        const res = await fetch(`https://api.github.com/users/${username}/repos`, {
          headers
        });
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('GitHub API isteği başarısız oldu:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projelerim</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {repos.map((repo) => (
            <CarouselItem key={repo.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-[#232329] border-none h-full flex flex-col">
                  <CardHeader className="flex-none">
                    <CardTitle className="text-white text-xl">
                      <a href={repo.html_url} className="hover:text-[#00ff9d] transition-colors">
                        {repo.name}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-white/60 min-h-[3rem]">
                      {repo.description || "Açıklama bulunmuyor"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-white/80 flex-grow">
                    <div className="space-y-4">
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00ff9d]"></span>
                        Kullanılan Dil: {repo.language || "Belirtilmemiş"}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00ff9d]"></span>
                        Yıldız Sayısı: {repo.stargazers_count}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-none mt-auto pt-6">
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d] hover:text-black transition-colors"
                      asChild
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub'da Görüntüle</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-8">
          <CarouselPrevious className="static bg-[#00ff9d] text-black hover:bg-[#00ff9d]/80 translate-x-0" />
          <CarouselNext className="static bg-[#00ff9d] text-black hover:bg-[#00ff9d]/80 translate-x-0" />
        </div>
      </Carousel>
    </div>
  );
}