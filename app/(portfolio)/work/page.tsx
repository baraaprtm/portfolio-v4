"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSlideButtons from "@/components/WorkSlideButtons";

const projects = [
  {
    num: "01",
    category: "web",
    title: "Coffee Shop",
    description:
      "A modern coffee shop website featuring a clean UI and smooth micro-interactions.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "/projects/coffee-shop",
    github: "https://github.com/baraaprtm/Coffee-Shop",
  },
  {
    num: "02",
    category: "backend",
    title: "Secure Authentication",
    description:
      "Secure authentication system developed using CodeIgniter 4 framework and Myth/Auth.",
    stack: [{ name: "PHP" }, { name: "CodeIgniter" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "/projects/secure-authentication",
    github: "https://github.com/baraaprtm/ci4login",
  },
  {
    num: "03",
    category: "css",
    title: "CSS Flexbox",
    description:
      "An interactive educational tool demonstrating of power and flexibility of CSS Flexbox layouts.",
    stack: [{ name: "CSS" }, { name: "Interactive" }],
    image: "/assets/work/thumb3.png",
    live: "/projects/css-flexbox",
    github: "https://github.com/baraaprtm/Flexbox-Animation",
  },
  {
    num: "04",
    category: "ui/ux",
    title: "UI/UX Landing Page",
    description:
      "High-conversion landing page design focused on clean layout hierarchy and modern visual aesthetics.",
    stack: [{ name: "UI/UX" }, { name: "Responsive" }],
    image: "/assets/work/thumb4.png",
    live: "/projects/ui-ux-landing-page",
    github: "https://github.com/baraaprtm/landing-page",
  },
  {
    num: "05",
    category: "game",
    title: "Browser Mini Game",
    description:
      "A fun browser-based mini-game demonstrating DOM manipulation logic and interactive state management.",
    stack: [{ name: "Game" }, { name: "Logic" }],
    image: "/assets/work/thumb5.png",
    live: "/projects/browser-mini-game",
    github: "https://github.com/baraaprtm/Pukul-Tikus-Tanah",
  },
  {
    num: "06",
    category: "corporate",
    title: "Corporate Profile",
    description:
      "Professional corporate profile website designed to effectively showcase business services.",
    stack: [{ name: "B2B" }, { name: "Corporate" }],
    image: "/assets/work/thumb6.png",
    live: "/projects/corporate-profile",
    github: "https://github.com/baraaprtm/Company-Profile",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  interface SwiperType {
    activeIndex: number;
  }
  const handleSlideChange = (swiper: SwiperType): void => {
    const currentIndex: number = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.44, ease: "easeIn" },
      }}
      className="h-auto lg:h-[calc(100vh-7rem)] flex flex-col justify-center py-6 lg:py-0"
    >
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[440px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-4 h-full">
              <div className="text-5xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-3xl lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[460px] mb-8"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[320px] sm:h-[400px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlideButtons
                containerStyles="slide-buttons flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-50 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-green-700 hover:text-white text-primary text-xl w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
