"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function FinalCTA() {
  return (
    <section className="py-40 bg-bg-hero relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 text-center max-w-4xl px-6">
        <AnimatedHeading 
            text="READY TO BUILD YOUR TEAM?" 
            variant="glitch"
            className="text-display-lg text-white mb-8"
        />
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-tron-cyan text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_#00D2FF] transition-all"
            >
                Book Strategy Call
            </motion.button>
        </div>
      </div>
    </section>
  );
}

