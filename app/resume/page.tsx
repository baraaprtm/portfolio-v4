"use client";

import { SiNestjs, SiTypescript, SiPostgresql, SiMongodb, SiDocker, SiRedis, SiGit, SiJavascript, SiVite, SiLaravel, SiMysql, SiElasticsearch, SiJenkins, SiGo, SiKotlin, SiRust, SiDart, SiSpring } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { FaNodeJs, FaJava, FaPhp, FaHtml5, FaCss3, FaBolt, FaTachometerAlt, FaVial, FaProjectDiagram, FaDatabase, FaPuzzlePiece, FaCode } from "react-icons/fa";

const about = {
    title: 'About me',
    description: "Software Developer focused on Node.js, NestJS, database design, and system design. Building scalable and reliable backend systems.",
    info: [
        { fieldName: "Name", fieldValue: "Baraa Pratama" },
        { fieldName: "Phone", fieldValue: "(+62) 897 9140 360" },
        { fieldName: "Experience", fieldValue: "3+ Years" },
        { fieldName: "Email", fieldValue: "baraaprtm@gmail.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Indonesian" },
    ]
};

// Experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: "Professional experience in building backend systems, APIs, and software architecture.",
    items: [
        {
            company: "Tech Company", 
            position: "Software Developer",
            duration: "2023 - Present", 
        },
        {
            company: "Startup Inc.",
            position: "Backend Engineer (Node.js/NestJS)",
            duration: "2022 - 2023", 
        },
        {
            company: "Freelance",
            position: "Backend & API Developer",
            duration: "2022", 
        },
        {
            company: "Tech Company",
            position: "Backend Developer Intern",
            duration: "2021 - 2022", 
        },
    ]
}

// Education
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "My academic background and continuous learning journey in software engineering.",
    items: [
        { 
            institution: "State University", 
            position: "Bachelor's in Informatics Engineering", 
            duration: "2018 - 2022" 
        },
        { 
            institution: "Coding Bootcamp", 
            position: "Immersive Backend Engineering Program", 
            duration: "2022" 
        },
        { 
            institution: "AWS Academy", 
            position: "Cloud & Backend Developer Certification", 
            duration: "2023" 
        },
        { 
            institution: "Coursera", 
            position: "Software Design and Architecture Specialization", 
            duration: "2024" 
        },
    ]
}

// Skills data
const skills = {
    title: "My skills",
    description: "Technologies and tools I use to build and maintain scalable backend systems.",
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
            ]
        },
        {
            title: "Frontend",
            skills: [
                { icon: <FaHtml5 />, name: "HTML" },
                { icon: <FaCss3 />, name: "CSS" },
                { icon: <SiJavascript />, name: "JavaScript" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiVite />, name: "Vite" },
            ]
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
            ]
        },
        {
            title: "Database",
            skills: [
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiRedis />, name: "Redis" },
                { icon: <SiElasticsearch />, name: "Elasticsearch" },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { icon: <SiGit />, name: "Git" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiJenkins />, name: "Jenkins" },
            ]
        },
        {
            title: "Testing",
            skills: [
                { icon: <FaTachometerAlt />, name: "k6" },
                { icon: <FaVial />, name: "Performance Testing" },
            ]
        },
        {
            title: "Concepts",
            skills: [
                { icon: <FaProjectDiagram />, name: "System Design" },
                { icon: <FaDatabase />, name: "Database Design" },
                { icon: <FaPuzzlePiece />, name: "Design Patterns" },
                { icon: <FaCode />, name: "RESTful API" },
            ]
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80hv] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] min-h-[160px] py-6 px-8 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="size-1.5 rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] min-h-[160px] py-6 px-8 rounded-xl flex flex-col items-center lg:items-start justify-center gap-2">
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

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <ScrollArea className="h-[600px] pr-4">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                
                                {skills.skillGroups.map((group, gIndex) => (
                                    <div key={gIndex} className="mb-10">
                                        <h4 className="text-2xl font-semibold text-accent mb-4 text-center xl:text-left">{group.title}</h4>
                                        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 xl:gap-[20px]">
                                            {group.skills.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={300}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-4xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </ScrollArea>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
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
    )
}

export default Resume;