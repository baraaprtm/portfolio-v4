"use client";

import { useRef } from "react";
import {
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiGit,
  SiJavascript,
  SiVite,
  SiLaravel,
  SiMysql,
  SiElasticsearch,
  SiJenkins,
  SiGo,
  SiKotlin,
  SiRust,
  SiDart,
  SiSpring,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

import {
  FaNodeJs,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaBolt,
  FaTachometerAlt,
  FaVial,
  FaProjectDiagram,
  FaDatabase,
  FaPuzzlePiece,
  FaCode,
} from "react-icons/fa";

const about = {
  title: "About me",
  description:
    "Software Developer focused on Node.js, NestJS, database design, and system design. Building scalable and reliable backend systems.",
  info: [
    { fieldName: "Name", fieldValue: "Baraa Pratama" },
    { fieldName: "Phone", fieldValue: "(+62) 897 9140 360" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Email", fieldValue: "baraaprtm@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Indonesian" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experience in building software projects, web applications, backend systems, APIs, databases, and software architecture.",
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
  description:
    "Self-taught software development journey through online learning (WPU, PZN, Dea Afrizal), programming courses, and hands-on projects.",
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
  description:
    "Technologies and tools I use to build modern web applications, backend systems, APIs, databases, and reliable software architectures.",
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
        { icon: <SiDart />, name: "Dart" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiVite />, name: "Vite" },
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
        { icon: <FaBolt />, name: "Bun" },
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiElasticsearch />, name: "Elasticsearch" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { icon: <SiGit />, name: "Git" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiJenkins />, name: "Jenkins" },
      ],
    },
    {
      title: "Testing",
      skills: [
        { icon: <FaTachometerAlt />, name: "k6" },
        { icon: <FaVial />, name: "Performance Testing" },
      ],
    },
    {
      title: "Concepts",
      skills: [
        { icon: <FaProjectDiagram />, name: "System Design" },
        { icon: <FaDatabase />, name: "Database Design" },
        { icon: <FaPuzzlePiece />, name: "Design Patterns" },
        { icon: <FaCode />, name: "RESTful API" },
      ],
    },
  ],
};

// Variants untuk Reveal yang lebih intentional dan premium
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger lebih lambat agar terasa satu per satu
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Komponen untuk Scroll Word Reveal
interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word = ({ word, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]); // Opacity minimal 0.2 agar tetap readable
  return (
    <motion.span style={{ opacity }} className="mr-1 inline-block">
      {word}
    </motion.span>
  );
};

const Resume = () => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: descriptionRef,
    offset: ["start 0.9", "start 0.4"], // Range lebih natural saat masuk viewport
  });

  const aboutWords = about.description.split(" ");

  return (
    <div className="min-h-[calc(100vh-9rem)] flex items-center justify-center py-6 lg:py-0">
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
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-[20px] text-center lg:text-left"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  {experience.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="max-w-[600px] text-white/60 mx-auto lg:mx-0"
                >
                  {experience.description}
                </motion.p>
                <ScrollArea className="h-[320px]">
                  <motion.ul
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
                  >
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="bg-[#232329] min-h-[120px] py-6 px-6 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="size-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.description && (
                          <p className="text-white/60 text-sm text-center lg:text-left mt-2">
                            {item.description}
                          </p>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-[20px] text-center lg:text-left"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  {education.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="max-w-[600px] text-white/60 mx-auto lg:mx-0"
                >
                  {education.description}
                </motion.p>
                <ScrollArea className="h-[320px]">
                  <motion.ul
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
                  >
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="bg-[#232329] min-h-[120px] py-6 px-6 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="size-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ScrollArea className="h-[400px] pr-4">
                  <div className="flex flex-col gap-[20px] text-center lg:text-left mb-8">
                    <motion.h3
                      variants={itemVariants}
                      className="text-3xl lg:text-4xl font-bold"
                    >
                      {skills.title}
                    </motion.h3>
                    <motion.p
                      variants={itemVariants}
                      className="max-w-[600px] text-white/60 mx-auto lg:mx-0"
                    >
                      {skills.description}
                    </motion.p>
                  </div>
                  <motion.div variants={containerVariants}>
                    {skills.skillGroups.map((group, gIndex) => (
                      <motion.div
                        key={gIndex}
                        variants={itemVariants}
                        className="mb-8"
                      >
                        <h4 className="text-xl lg:text-2xl font-semibold text-accent mb-4 text-center lg:text-left">
                          {group.title}
                        </h4>
                        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                          {group.skills.map((skill, index) => (
                            <li key={index}>
                              <TooltipProvider delayDuration={300}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-3xl lg:text-4xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-[20px]"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  {about.title}
                </motion.h3>

                <motion.p
                  ref={descriptionRef}
                  className="max-w-[600px] text-white/60 mx-auto lg:mx-0 flex flex-wrap"
                >
                  {aboutWords.map((word, i) => {
                    const start = i / aboutWords.length;
                    const end = start + 1 / aboutWords.length;
                    return (
                      <Word
                        key={i}
                        word={word}
                        range={[start, end]}
                        progress={scrollYProgress}
                      />
                    );
                  })}
                </motion.p>

                <motion.ul
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0"
                >
                  {about.info.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center justify-center lg:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
