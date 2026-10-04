"use client";

import { useState, useRef } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export const ScrambleText = ({ text, className }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const shouldReduceMotion = useReducedMotion();
  const isAnimating = useRef(false);

  const scrambleChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ/\\|[]{}=+*?#-_=()&%$#@!0123456789";

  const handleMouseEnter = () => {
    if (shouldReduceMotion || isAnimating.current) return;
    isAnimating.current = true;

    const controls = animate(0, 1, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        const resolvedCount = Math.floor(latest * text.length);
        let result = "";

        for (let i = 0; i < text.length; i++) {
          if (i < resolvedCount) {
            result += text[i];
          } else {
            if (text[i] === " " || text[i] === "'") {
              result += text[i];
            } else {
              result +=
                scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            }
          }
        }
        setDisplay(result);
      },
      onComplete: () => {
        setDisplay(text);
        isAnimating.current = false;
      },
    });
  };

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      aria-label={text}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: "default" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span aria-hidden="true">{display}</span>
    </motion.span>
  );
};
