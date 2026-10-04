"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
}

const FadeInUp = ({ children, className }: FadeInUpProps) => {
  return (
    <motion.div variants={fadeInUpVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
