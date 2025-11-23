"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-bg-hero">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-tron-cyan/20 to-tron-orange/20 rounded-full blur-[100px] animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-white/20 bg-white/5 px-6 py-2 rounded-full backdrop-blur-md mb-8">
            <span className="text-sm font-mono tracking-widest uppercase text-tron-cyan">
              Mission Protocol: Scale
            </span>
          </div>
          
          <AnimatedHeading 
            text="COMPLETE EDITING BACKBONE" 
            className="text-display-xl text-white mb-6 drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
            variant="reveal"
          />
          
          <p className="text-lead-statement max-w-3xl mx-auto mb-12">
            At Stitch, we don’t offer "editing" as a commodity. We provide the <strong className="text-white">infrastructure</strong> to scale from solo hustle to full-fledged media brand.
          </p>

          <div className="p-6 border-l-2 border-tron-orange bg-gradient-to-r from-tron-orange/10 to-transparent text-left max-w-2xl mx-auto transform skew-x-[-10deg]">
            <p className="text-xl font-medium text-white italic transform skew-x-[10deg]">
              "Your edits, your style, delivered at the speed your growth demands."
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-tron-cyan to-transparent" />
      </motion.div>
    </section>
  );
}

