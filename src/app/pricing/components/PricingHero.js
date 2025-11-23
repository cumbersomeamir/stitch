"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function PricingHero() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-bg-hero">
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-white/20 bg-white/5 px-6 py-2 rounded-full backdrop-blur-md mb-8">
            <span className="text-sm font-mono tracking-widest uppercase text-tron-cyan">
              Output-Based. Not Hourly.
            </span>
          </div>
          
          <AnimatedHeading 
            text="SCALABLE CONTENT INFRASTRUCTURE" 
            className="text-display-lg text-white mb-6 drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
            variant="reveal"
          />
          
          <p className="text-lead-statement max-w-3xl mx-auto mb-12">
            Creators grow faster when their process is predictable. <br/>
            <strong className="text-white">You pay for results, not time.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

