"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Discovery Call" },
    { num: "02", title: "Style Bible" },
    { num: "03", title: "Pilot Edits" },
    { num: "04", title: "Your Pod" },
    { num: "05", title: "Weekly Rhythm" },
    { num: "06", title: "Feedback Loop" },
    { num: "07", title: "Scale Up" }
];

export default function ProcessTimeline() {
  return (
    <section className="py-32 bg-bg-hero overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center mb-16">
        <h2 className="text-display-md text-white">THE PIPELINE</h2>
      </div>
      
      {/* Horizontal Scroll/Timeline */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2" />
        
        <div className="flex justify-between max-w-7xl mx-auto px-6 overflow-x-auto pb-12 gap-8">
            {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center flex-shrink-0 w-32 group cursor-default">
                    <div className="w-4 h-4 rounded-full bg-bg-hero border-2 border-tron-cyan z-10 mb-4 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-tron-cyan font-mono text-sm mb-2 opacity-50 group-hover:opacity-100">{step.num}</span>
                    <span className="text-white text-sm font-bold uppercase text-center opacity-70 group-hover:opacity-100">{step.title}</span>
                    
                    {/* Active Glow */}
                    <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[1px] bg-tron-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

