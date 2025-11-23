"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    desc: "We analyze your content style, goals, and current bottlenecks."
  },
  {
    id: "02",
    title: "Style Bible",
    desc: "We document your pacing, visual language, and humor into a guide."
  },
  {
    id: "03",
    title: "Pilot Project",
    desc: "We edit a test batch. You give feedback; we refine the style."
  },
  {
    id: "04",
    title: "Set Your Rhythm",
    desc: "Regular delivery cadence established. Reliable delivery."
  },
  {
    id: "05",
    title: "Scale Up",
    desc: "Increase volume, add platforms, expand your reach."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-bg-hero relative overflow-hidden">
      {/* Background decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-tron-cyan/20 -translate-x-1/2 hidden md:block" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-24">
           <AnimatedHeading 
              text="HOW IT WORKS" 
              className="text-display-lg text-white mb-4"
           />
           <p className="text-tron-cyan uppercase tracking-widest text-sm">Our Process</p>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Node */}
              <div className="flex-1 text-center md:text-left">
                <div className={`p-6 border-l-4 border-tron-cyan bg-gradient-to-r from-tron-cyan/10 to-transparent ${index % 2 === 0 ? 'md:border-l-0 md:border-r-4 md:bg-gradient-to-l md:text-right' : ''}`}>
                  <h3 className="text-display-md text-white mb-2">{step.title}</h3>
                  <p className="text-body-md text-text-secondary">{step.desc}</p>
                </div>
              </div>

              {/* Central Node Marker */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-tron-cyan bg-bg-hero flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.4)] z-10 relative">
                  <span className="font-mono font-bold text-tron-cyan text-xl">{step.id}</span>
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-tron-cyan opacity-20 animate-ping" />
              </div>

              {/* Empty Spacer for balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
