"use client";

import {
  SiNestjs, SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiRedis, SiGit, SiJavascript, SiVite, SiLaravel, SiMysql, SiElasticsearch, SiJenkins, SiGo, SiKotlin, SiRust, SiDart, SiSpring,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {
  FaNodeJs, FaJava, FaPhp, FaHtml5, FaCss3, FaBolt, FaTachometerAlt, FaVial, FaProjectDiagram, FaDatabase, FaPuzzlePiece, FaCode,
} from "react-icons/fa";

const about = {
  title: "About me",
  description: "Software Developer focused on Node.js, NestJS, database design, and system design. Building scalable and reliable backend systems.",
  info: [
    { fieldName: "Name", fieldValue: "Baraa Pratama" },
    { fieldName: "Phone", fieldValue: "(+62) 897 9140 360" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Email", fieldValue: "baraaprtm@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Indonesian" }
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Experience in building software projects, web applications, backend systems, APIs, databases, and software architecture.",
  items: [
    {
      company: "Personal Projects",
      position: "Software Developer",
      duration: "2026 - Present",
      description: "",
    },
    {
      company: "Personal Projects",
      position: "Backend & API Developer",
      duration: "2025 - 2026",
      description: "",
    },
    {
      company: "Personal Projects",
      position: "Web Developer",
      duration: "2024 - 2025",
      description: "",
    },
    {
      company: "Self-Learning & Projects",
      position: "Software Development",
      duration: "2023 - 2024",
      description: "",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Self-taught software development journey through online learning (WPU, PZN, Dea Afrizal), programming courses, and hands-on projects.",
  items: [
    {
      institution: "Independent Learning & Projects",
      position: "Software Development",
      duration: "2026 - Present",
    },
    {
      institution: "Independent Learning & Projects",
      position: "Backend & Software Engineering",
      duration: "2025 - 2026",
    },
    {
      institution: "Independent Learning & Projects",
      position: "Web Development & Programming",
      duration: "2024 - 2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Technologies and tools I use to build modern web applications, backend systems, APIs, databases, and reliable software architectures.",
  skillGroups: [
    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiKotlin />, name: "Kotlin" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiGo />, name: "Go" },
        { icon: <SiRust />, name: "Rust" },
        { icon: <SiDart />, name: "Dart" }
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiVite />, name: "Vite" }
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiNestjs />, name: "NestJS" },
        { icon: <SiLaravel />, name: "Laravel" },
        { icon: <SiSpring />, name: "Spring" },
        { icon: <FaCode />, name: "REST API" },
        { icon: <FaBolt />, name: "Bun" }
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiElasticsearch />, name: "Elasticsearch" }
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { icon: <SiGit />, name: "Git" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiJenkins />, name: "Jenkins" }
      ],
    },
    {
      title: "Testing",
      skills: [
        { icon: <FaTachometerAlt />, name: "k6" },
        { icon: <FaVial />, name: "Performance Testing" }
      ],
    },
    {
      title: "Concepts",
      skills: [
        { icon: <FaProjectDiagram />, name: "System Design" },
        { icon: <FaDatabase />, name: "Database Design" },
        { icon: <FaPuzzlePiece />, name: "Design Patterns" },
        { icon: <FaCode />, name: "RESTful API" }
      ],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[calc(100vh-9rem)] flex items-center justify-center py-6 lg:py-0"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-8 lg:gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{experience.description}</p>
                <ScrollArea className="h-[320px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[120px] py-6 px-6 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="size-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.description && (
                          <p className="text-white/60 text-sm text-center lg:text-left mt-2">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{education.description}</p>
                <ScrollArea className="h-[320px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[120px] py-6 px-6 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="size-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <ScrollArea className="h-[400px] pr-4">
                <div className="flex flex-col gap-[20px] text-center lg:text-left mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                </div>
                {skills.skillGroups.map((group, gIndex) => (
                  <div key={gIndex} className="mb-8">
                    <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-4 text-center lg:text-left">{group.title}</h4>
                    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                      {group.skills.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={300}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-3xl lg:text-4xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent><p className="capitalize">{skill.name}</p></TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-3xl lg:text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;