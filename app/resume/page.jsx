"use client"

import {FaHtml5,FaCss3,FaJs, FaReact,FaFigma,FaNodeJs} from "react-icons/fa"

import {SiNextdotjs, SiTailwindcss} from "react-icons/si"

export const about = {
  title:"About me",
  description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
    {
      fieldName:"Name",
      fieldValue:"Luke Coleman"
    },
  ]
};

export const experience = {
  icon:"/assets/resume/badge.svg",
  title:"Experience",
  description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  items:[
    {
      company:"Tech Solution Inc",
      position:"Frontend Developer",
      duration:"2022-present",
    },
    {
      company:"E commerce Startup",
      position:"Frelance web developer ",
      duration:"2020-2021",
    },
    {
      company:"Tech Academy",
      position:"Teaching Aassistant",
      duration:"2019-2020",
    },
    {
      company:"Software Development",
      position:"Teaching Aassistant",
      duration:"2019-2020",
    },
  ]
};

export const education = {
  icon:"/assets/resume/badge.svg",
  title:"My education",
  description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  items:[
    {
      institution:"Online Course Platform",
      degree:"Frontend Developer",
      duration:"2022-present",
    },
    {
      institution:"Codacademy",
      degree:"Front end Track ",
      duration:"2022",
    },
    {
      institution:"Tech Academy",
      degree:"Teaching Aassistant",
      duration:"2019-2020",
    },
    {
      institution:"Software Development",
      degree:"Teaching Aassistant",
      duration:"2019-2020",
    },
    {
      institution:"Software Development",
      degree:"Teaching Aassistant",
      duration:"2019-2020",
    },
    {
      institution:"Software Development",
      degree:"Teaching Aassistant",
      duration:"2019-2020",
    },
  ]
};

export const skills = {
  title:"My skills",
  description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"HTML",
    },
    {
      icon:<FaCss3/>,
      name:"Css 3",
    },
    {
      icon:<FaJs/>,
      name:"Javascript",
    },
    {
      icon:<FaReact/>,
      name:"React",
    },
    {
      icon:<SiNextdotjs/>,
      name:"Next js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind js",
    },
    {
      icon:<FaNodeJs/>,
      name:"node js",
    },
    {
      icon:<FaFigma/>,
      name:"figma",
    },
  ]
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area"

import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 xl:w-[300px] gap-6">
              <TabsTrigger  value="experience">Expreience</TabsTrigger>
              <TabsTrigger  value="education">Education</TabsTrigger>
              <TabsTrigger  value="skilss">Skills</TabsTrigger>
              <TabsTrigger  value="about">About Me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full" >
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-400px">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item,index)=>(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
                      
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item,index)=>{
                          return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
              </TabsContent>

              <TabsContent value="skilss" className="w-full h-full">
                <div className="flex flex-col gap-[30px] ">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-8">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill,index)=>{
                      return(
                      <li key={index} className="flex items-center gap-3">
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] group rounded-xl flex items-center justify-center">
                                <div className="text-6xl group:hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent >
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        
                      </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px] ">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="max-w-[620px] mx-auto xl:mx-0 gap-y-6 grid grid-cols-1 xl:grid-cols-2">
                    {about.info.map((item,index)=>{

                      return <li key={index} className="flexitems-center justify-center xl:justify-start gap-4">
                        <span>{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default page