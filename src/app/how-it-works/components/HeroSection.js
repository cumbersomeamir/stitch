"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-white/20 bg-white/5 px-6 py-2 rounded-full backdrop-blur-md mb-8">
            <span className="text-sm font-mono tracking-widest uppercase text-tron-cyan">
              System Overview
            </span>
          </div>
          
          <AnimatedHeading 
            text="HOW STITCH WORKS" 
            className="text-display-xl text-white mb-6 drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
            variant="reveal"
          />
          
          <p className="text-lead-statement max-w-3xl mx-auto mb-12">
            We turn your raw footage into a <strong className="text-white">consistent, high-velocity content engine</strong> without you touching a timeline.
          </p>
        </motion.div>
      </div>

      {/* Animated Timeline Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <div className="w-full h-[1px] bg-white/20 absolute top-1/2 transform -translate-y-1/2" />
        {/* Ticks */}
        {[...Array(20)].map((_, i) => (
            <div 
                key={i} 
                className="absolute top-1/2 h-4 w-[1px] bg-white/20"
                style={{ left: `${i * 5}%`, transform: 'translateY(-50%)' }}
            />
        ))}
        {/* Playhead */}
        <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-tron-cyan shadow-[0_0_20px_#00D2FF]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}

