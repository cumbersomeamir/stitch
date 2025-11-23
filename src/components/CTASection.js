"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function CTASection() {
  return (
    <section className="py-40 bg-bg-hero relative overflow-hidden flex items-center justify-center">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-bg-hero via-tron-cyan/5 to-bg-hero" />
         <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-tron-cyan shadow-[0_0_50px_#00D2FF]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <AnimatedHeading 
            text="READY TO RECLAIM YOUR TIME?" 
            variant="glitch"
            className="text-display-xl text-white mb-8"
        />
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Stop editing. Start creating. Upload your raw footage, and we handle the rest.
        </p>

        <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
        >
            <button className="relative inline-flex items-center justify-center px-12 py-6 font-bold text-tron-black transition-all duration-200 bg-tron-cyan clip-path-polygon group hover:bg-white hover:shadow-[0_0_50px_rgba(0,210,255,0.6)]">
                <span className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl uppercase tracking-[0.2em]">Start Your Journey</span>
            </button>
        </motion.div>
        
        <p className="mt-8 text-sm text-text-muted font-mono">
            STATUS: ACCEPTING NEW CREATORS
        </p>
      </div>
    </section>
  );
}
