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
      <div className="overflow-hidden relative group">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className={`${className} ${gradient ? "gradient-brand bg-clip-text text-transparent" : "text-white text-glow"}`}
          style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {text}
        </motion.h2>
        {/* Holographic scanline */}
        <motion.div 
            className="absolute top-0 left-0 w-full h-[2px] bg-tron-cyan opacity-50"
            initial={{ top: "100%" }}
            whileInView={{ top: "-10%" }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: true }}
        />
      </div>
    );
  }

  if (variant === "glitch") {
    return (
      <div className="relative inline-block">
        <motion.h2
          className={`${className} relative z-10 text-white text-glow`}
          style={{ textTransform: 'uppercase' }}
          whileInView={{ 
            x: [0, -2, 2, -1, 0],
            textShadow: [
                "0 0 5px #00D2FF", 
                "-2px 0 5px #FF9C00", 
                "2px 0 5px #00D2FF", 
                "0 0 5px #00D2FF"
            ]
          }}
          transition={{ 
            duration: 0.3, 
            repeat: Infinity, 
            repeatDelay: 4,
            repeatType: "mirror" 
          }}
        >
          {text}
        </motion.h2>
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

