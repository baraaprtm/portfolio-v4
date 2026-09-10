"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
        num: "01",
        title: "Database Design",
        description:
            "Designing efficient, normalized, and scalable database schemas for relational and non-relational databases.",
        href: "/services",
    },
    {
        num: "02",
        title: "Backend Development",
        description:
            "Developing scalable backend systems using Node.js, NestJS, and modern software engineering practices.",
        href: "/services",
    },
    {
        num: "03",
        title: "API Development",
        description:
            "Designing and developing structured, secure, and reliable REST APIs for modern applications and services.",
        href: "/services",
    },
    {
        num: "04",
        title: "System Design",
        description:
            "Designing scalable, reliable, and maintainable software architectures with a focus on performance and flexibility.",
        href: "/services",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                                        {service.num}
                                    </div>

                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>

                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>

                                <p>{service.description}</p>

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