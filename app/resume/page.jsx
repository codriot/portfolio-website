"use client"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaNode,
  FaGit,
  FaPython,
  FaJava,
  FaDocker,
  FaDatabase
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiFirebase
} from "react-icons/si"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import { motion } from "framer-motion";

export const about = {
  title: "Hakkımda",
  description: "Modern web teknolojilerinde uzmanlaşmış bir Full Stack Geliştiriciyim. React, Next.js ve Node.js kullanarak ölçeklenebilir web uygulamaları geliştiriyorum. Hem frontend hem de backend geliştirmede güçlü bir temele sahip olarak, verimli ve kullanıcı dostu çözümler üretmeye odaklanıyorum.",
  info: [
    {
      fieldName: "İsim",
      fieldValue: "Yusuf Akçal"
    },
    {
      fieldName: "Konum",
      fieldValue: "İstanbul, Türkiye"
    },
    {
      fieldName: "Eğitim",
      fieldValue: "Bilgisayar Mühendisliği, Balıkesir Üniversitesi"
    },
    {
      fieldName: "Pozisyon",
      fieldValue: "Full Stack Geliştirici"
    },
    {
      fieldName: "Deneyim",
      fieldValue: "Junior"
    },
    {
      fieldName: "Diller",
      fieldValue: "Türkçe (Anadil), İngilizce (Ortalama))"
    }
  ]
};

export const experience = {
  icon:"/assets/resume/badge.svg",
  title:"Deneyimler",
  description:"Modern web teknolojileri ve yazılım geliştirme alanında edindiğim deneyimler ile kullanıcı odaklı, ölçeklenebilir ve sürdürülebilir çözümler üretiyorum. Agile metodolojileri benimseyerek, takım çalışmasına ve sürekli öğrenmeye önem veriyorum.",
  items:[
    {
      company:"Tech Solution Inc",
      position:"Frontend Developer",
      duration:"2022-present",
      description: "Modern web teknolojileri kullanarak kullanıcı arayüzleri geliştirdim ve performans optimizasyonları gerçekleştirdim.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      company:"E commerce Startup",
      position:"Freelance Web Developer",
      duration:"2020-2021",
      description: "E-ticaret platformları için özel çözümler geliştirdim ve mevcut sistemleri optimize ettim.",
      technologies: ["Node.js", "React", "MongoDB", "Express.js"]
    },
    {
      company:"Tech Academy",
      position:"Teaching Assistant",
      duration:"2019-2020",
      description: "Web geliştirme kurslarında öğrencilere mentorluk yaptım ve teknik destek sağladım.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"]
    },
    {
      company:"Software Development",
      position:"Teaching Assistant",
      duration:"2019-2020",
      description: "Yazılım geliştirme süreçlerinde öğrencilere rehberlik ettim ve proje yönetiminde destek oldum.",
      technologies: ["Python", "Java", "SQL", "Agile"]
    },
  ]
};

export const skills = {
  title: "Teknik Yetenekler",
  description: "Modern web teknolojileri ve yazılım geliştirme alanında sürekli kendimi geliştirmeye odaklanıyorum. Frontend ve backend teknolojilerinde geniş bir yelpazede deneyim sahibiyim. Yeni teknolojileri öğrenmeye ve mevcut bilgilerimi güncellemeye özen gösteriyorum. Projelerimde en güncel ve verimli araçları kullanarak, performans ve kullanıcı deneyimini optimize ediyorum.",
  skillList: [
    {
      icon: FaHtml5,
      name: "HTML5",
      color: "#E34F26"
    },
    {
      icon: FaCss3Alt,
      name: "CSS3",
      color: "#1572B6"
    },
    {
      icon: FaJs,
      name: "JavaScript",
      color: "#F7DF1E"
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "#3178C6"
    },
    {
      icon: FaReact,
      name: "React",
      color: "#61DAFB"
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "#000000"
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "#06B6D4"
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "#339933"
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#47A248"
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      color: "#4169E1"
    },
    {
      icon: SiRedux,
      name: "Redux",
      color: "#764ABC"
    },
    {
      icon: SiFirebase,
      name: "Firebase",
      color: "#FFCA28"
    },
    {
      icon: FaGit,
      name: "Git",
      color: "#F05032"
    },
    {
      icon: FaPython,
      name: "Python",
      color: "#3776AB"
    },
    {
      icon: FaJava,
      name: "Java",
      color: "#007396"
    },
    {
      icon: FaDocker,
      name: "Docker",
      color: "#2496ED"
    }
  ]
};

const page = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col">
          <TabsList className="flex justify-center w-full gap-6 mb-16">
            <TabsTrigger 
              value="experience" 
              className="hover:bg-accent/20 transition-colors duration-300 data-[state=active]:bg-accent data-[state=active]:text-black"
            >
              Deneyim
            </TabsTrigger>
            <TabsTrigger 
              value="skills"
              className="hover:bg-accent/20 transition-colors duration-300 data-[state=active]:bg-accent data-[state=active]:text-black"
            >
              Yetenekler
            </TabsTrigger>
            <TabsTrigger 
              value="about"
              className="hover:bg-accent/20 transition-colors duration-300 data-[state=active]:bg-accent data-[state=active]:text-black"
            >
              Hakkımda
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[calc(100vh-250px)] w-full">
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col h-full">
                <div className="max-w-[800px] mx-auto mb-16 text-center">
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/60 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {experience.description}
                  </motion.p>
                </div>

                <div className="max-w-[900px] mx-auto px-4">
                  <ul className="flex flex-col">
                    {experience.items.map((item,index)=>(
                      <motion.li 
                        key={index} 
                        className={`bg-[#232329] p-10 rounded-xl flex flex-col gap-6 hover:bg-[#2a2a31] transition-all duration-300 mb-6`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 0.8,
                            delay: index * 0.2
                          }
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { type: "spring", bounce: 0.4 }
                        }}
                        style={{
                          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                          <div>
                            <h3 className="text-3xl font-semibold mb-3">{item.position}</h3>
                            <p className="text-accent text-xl">{item.company}</p>
                          </div>
                          <span className="text-white/60 text-base bg-[#1a1a1a] px-6 py-2.5 rounded-full">{item.duration}</span>
                        </div>
                        
                        <p className="text-white/70 text-lg leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {item.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-5 py-2 bg-accent/10 text-accent rounded-full text-base"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
                    
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col h-full">
                <div className="max-w-[800px] mx-auto mb-16 text-center">
                  <motion.h3 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skills.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/60 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {skills.description}
                  </motion.p>
                </div>

                <div className="max-w-[1000px] mx-auto px-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div 
                          key={index} 
                          className="bg-[#232329] aspect-square rounded-xl p-8 group hover:bg-[#2a2a31] transition-all duration-300"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8,
                              delay: index * 0.1
                            }
                          }}
                          viewport={{ once: true, margin: "-100px" }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { type: "spring", bounce: 0.4 }
                          }}
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                            <div className="text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ color: skill.color }}>
                              <IconComponent />
                            </div>
                            <p className="text-white/70 group-hover:text-white text-lg font-medium transition-colors duration-300">
                              {skill.name}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-4">{about.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto mb-8">{about.description}</p>
                </div>
                
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-5xl mx-auto"
                >
                  <CarouselContent>
                    {about.info.map((item, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="bg-[#232329] border-none">
                            <CardContent className="flex flex-col items-center justify-center p-6 min-h-[150px]">
                              <h4 className="text-accent text-lg mb-2">{item.fieldName}</h4>
                              <p className="text-white/80 text-center">{item.fieldValue}</p>
                            </CardContent>
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
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default page