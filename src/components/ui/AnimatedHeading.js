"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHeading({ 
  text, 
  className = "", 
  gradient = false,
  variant = "default", // default, glitch, reveal, typewriter
}) {
  
  if (variant === "reveal") {
    return (
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className={`${className} ${gradient ? "gradient-brand bg-clip-text text-transparent" : ""}`}
        >
          {text}
        </motion.h2>
      </div>
    );
  }

  if (variant === "glitch") {
    return (
      <div className="relative inline-block">
        <motion.h2
          className={`${className} relative z-10 ${gradient ? "gradient-creator bg-clip-text text-transparent" : ""}`}
          whileInView={{ 
            x: [0, -2, 2, -1, 0],
            skew: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 0.4, 
            repeat: Infinity, 
            repeatDelay: 3,
            repeatType: "reverse" 
          }}
        >
          {text}
        </motion.h2>
        <motion.span
          className={`absolute top-0 left-0 -z-10 opacity-50 text-secondary-cyan select-none ${className}`}
          animate={{ x: [-2, 2, -1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.1 }}
        >
          {text}
        </motion.span>
        <motion.span
          className={`absolute top-0 left-0 -z-10 opacity-50 text-secondary-magenta select-none ${className}`}
          animate={{ x: [2, -2, 1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.05 }}
        >
          {text}
        </motion.span>
      </div>
    );
  }

  // Default staggering characters
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} // Center alignment by default, override in parent if needed
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className={gradient ? "gradient-brand bg-clip-text text-transparent" : ""}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}

