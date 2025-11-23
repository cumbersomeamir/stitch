"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function PricingCTA() {
  return (
    <section className="py-40 bg-bg-surface relative overflow-hidden flex items-center justify-center border-t border-white/10">
      <div className="relative z-10 text-center max-w-4xl px-6">
        <AnimatedHeading 
            text="READY TO SCALE?" 
            variant="glitch"
            className="text-display-lg text-white mb-8"
        />
        
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Get your dedicated editing pod and consistent publishing rhythm today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-tron-cyan text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_#00D2FF] transition-all"
            >
                Book Strategy Call
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
                7-Day Trial Edit
            </motion.button>
        </div>
      </div>
    </section>
  );
}

