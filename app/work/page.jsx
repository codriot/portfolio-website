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
import { Skeleton } from "@/components/ui/skeleton"

export default function Work() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username="codriot";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('GitHub API isteği başarısız oldu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projelerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          // İskelet yükleme animasyonu
          [...Array(3)].map((_, i) => (
            <Card key={i} className="w-full">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="w-1/2 h-4" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="w-3/4 h-4" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-40" />
              </CardContent>
              <CardFooter>
                <Button variant="outline">
                  <Skeleton className="w-20 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          repos.map((repo) => (
            <Card key={repo.id} className="w-full">
              <CardHeader>
                <CardTitle><a href={repo.html_url}>{repo.name}</a></CardTitle>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Yıldız sayısı: {repo.stargazers_count}
                </p>
                <p>
                  Ana dil: {repo.language}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={repo.html_url}>GitHub'da Görüntüle</a>
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}