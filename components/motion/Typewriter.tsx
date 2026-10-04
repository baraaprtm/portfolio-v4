"use client";

import { useState, useEffect } from "react";
import { animate, useReducedMotion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number; // ms per karakter
}

const Typewriter = ({ text, className, speed = 45 }: TypewriterProps) => {
  const [typedLength, setTypedLength] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Jika user memilih reduced motion, langsung tampilkan teks utuh
    if (shouldReduceMotion) {
      setTypedLength(text.length);
      return;
    }

    // Auto-start animasi saat komponen mount (tidak butuh prop 'start')
    const controls = animate(0, text.length, {
      duration: Math.max(0.5, text.length * (speed / 1000)), // Slow & natural pace
      ease: "linear",
      onUpdate: (latest) => {
        setTypedLength(Math.floor(latest));
      },
    });

    return () => {
      controls.stop(); // Cleanup saat unmount
    };
  }, [text, speed, shouldReduceMotion]);

  // Fallback untuk reduced motion
  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {/* Teks yang sudah diketik (terlihat) */}
      <span aria-hidden="true" className="relative">
        {text.substring(0, typedLength)}
        {/* Subtle Caret */}
        {typedLength < text.length && (
          <span className="absolute top-1/2 -translate-y-1/2 ml-1 w-[2px] h-[0.9em] bg-current animate-pulse" />
        )}
      </span>
      {/* Sisa teks (invisible) untuk mencegah layout shift (word wrap) */}
      <span aria-hidden="true" style={{ opacity: 0 }}>
        {text.substring(typedLength)}
      </span>
    </span>
  );
};

export default Typewriter;
