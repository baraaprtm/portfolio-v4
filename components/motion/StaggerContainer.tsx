"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

const StaggerContainer = ({ children, className }: StaggerContainerProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
