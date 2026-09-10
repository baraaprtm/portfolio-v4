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
    live: "https://baraaprtm.github.io/Coffee-Shop/",
    github: "https://github.com/baraaprtm/Coffee-Shop",
  },
  {
    num: "02",
    category: "backend",
    title: "CI4Login",
    description:
      "Secure authentication system developed using CodeIgniter 4 framework and Myth/Auth.",
    stack: [{ name: "PHP" }, { name: "CodeIgniter" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "#",
    github: "https://github.com/baraaprtm/ci4login",
  },
  {
    num: "03",
    category: "css",
    title: "Flexbox Animation",
    description:
      "An interactive educational tool demonstrating of power and flexibility of CSS Flexbox layouts.",
    stack: [{ name: "CSS" }, { name: "Interactive" }],
    image: "/assets/work/thumb3.png",
    live: "https://baraaprtm.github.io/Flexbox-Animation/",
    github: "https://github.com/baraaprtm/Flexbox-Animation",
  },
  {
    num: "04",
    category: "ui/ux",
    title: "Landing Page",
    description:
      "High-conversion landing page design focused on clean layout hierarchy and modern visual aesthetics.",
    stack: [{ name: "UI/UX" }, { name: "Responsive" }],
    image: "/assets/work/thumb4.png",
    live: "https://baraaprtm.github.io/landing-page/",
    github: "https://github.com/baraaprtm/landing-page",
  },
  {
    num: "05",
    category: "game",
    title: "Whack-a-Mole",
    description:
      "A fun browser-based mini-game demonstrating DOM manipulation logic and interactive state management.",
    stack: [{ name: "Game" }, { name: "Logic" }],
    image: "/assets/work/thumb5.png",
    live: "https://baraaprtm.github.io/Pukul-Tikus-Tanah/",
    github: "https://github.com/baraaprtm/Pukul-Tikus-Tanah",
  },
  {
    num: "06",
    category: "corporate",
    title: "Company Profile",
    description:
      "Professional corporate profile website designed to effectively showcase business services.",
    stack: [{ name: "B2B" }, { name: "Corporate" }],
    image: "/assets/work/thumb6.png",
    live: "https://baraaprtm.github.io/Company-Profile/",
    github: "https://github.com/baraaprtm/Company-Profile",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  interface StackItem {
    name: string;
  }

  interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: StackItem[];
    image: string;
    live: string;
    github: string;
  }

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
        transition: {
          delay: 2.4,
          duration: 0.44,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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

          <div className="w-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
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
                containerStyles="slide-buttons flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-50 w-full justify-between md:w-max md:justify-none"
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
