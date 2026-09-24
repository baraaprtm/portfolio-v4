"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[252px] h-[252px] sm:w-[298px] sm:h-[298px] lg:w-[360px] lg:h-[360px] 2xl:w-[498px] 2xl:h-[498px] mix-blend-lighten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Baraa Pratama"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[364px] lg:h-[364px] 2xl:w-[506px] 2xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "24 10 0 0",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
