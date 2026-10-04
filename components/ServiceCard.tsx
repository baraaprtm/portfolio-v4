"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Service {
  num: string;
  title: string;
  description: string;
  href: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateMatch = () => setIsDesktop(media.matches);

    updateMatch();
    media.addEventListener("change", updateMatch);

    return () => media.removeEventListener("change", updateMatch);
  }, []);

  const cardContent = (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
          {service.num}
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
        {service.title}
      </h2>

      <p className="text-white/60">{service.description}</p>

      <div className="border-b border-white/20 w-full"></div>
    </>
  );

  const baseClassName = "flex-1 flex flex-col justify-center gap-4 group";

  if (isDesktop === null) {
    return (
      <div className={baseClassName} style={{ opacity: 0 }}>
        {cardContent}
      </div>
    );
  }

  const initialX = isDesktop ? (index % 2 === 0 ? -40 : 40) : 0;
  const initialY = isDesktop ? 0 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: 1.5 + index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={baseClassName}
    >
      {cardContent}
    </motion.div>
  );
};

export default ServiceCard;
