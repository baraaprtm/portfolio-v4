"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Building scalable backend systems with Node.js, NestJS, and modern server-side technologies.",
    href: "/services",
  },
  {
    num: "02",
    title: "API Development",
    description:
      "Designing and developing robust REST APIs for web applications and external integrations.",
    href: "/services",
  },
  {
    num: "03",
    title: "Database Design",
    description:
      "Designing structured and reliable databases using PostgreSQL, MySQL, MongoDB, and Redis.",
    href: "/services",
  },
  {
    num: "04",
    title: "System Design",
    description:
      "Designing scalable software architectures with focus on performance, reliability, caching, and maintainability.",
    href: "/services",
  },
];

const Services = () => {
  return (
    <section className="h-auto lg:h-[calc(100vh-7rem)] flex flex-col justify-center py-6 lg:py-0">
      <div className="container mx-auto px-4 xl:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;