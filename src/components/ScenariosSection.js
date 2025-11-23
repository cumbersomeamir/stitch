"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";
import Image from "next/image";

const scenarios = [
  {
    role: "The YouTuber",
    level: "50K Subs",
    status: "Overloaded",
    result: "Output Doubled",
    desc: "From sporadic uploads to 2 long-form + 10 shorts weekly. Creator focus shifted purely to filming.",
    color: "tron-cyan",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    role: "The Founder",
    level: "Startup CEO",
    status: "Time-Critical",
    result: "Brand Automated",
    desc: "Founder records 2hrs/month. We generate a month of LinkedIn clips, YouTube updates, and Tweets.",
    color: "tron-orange",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    role: "The Streamer",
    level: "Twitch Partner",
    status: "Content Waste",
    result: "Viral Expansion",
    desc: "6-hour streams repurposed into 3 YouTube videos and 15 TikToks weekly. Audience grew 300%.",
    color: "white",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export default function ScenariosSection() {
  return (
    <section className="py-32 bg-bg-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-24">
           <AnimatedHeading 
              text="GROWTH OUTCOMES" 
              className="text-display-xl text-white mb-8"
           />
           
           <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-tron-cyan/20 to-tron-orange/20 blur-lg opacity-50"></div>
              <p className="text-lead-statement relative z-10">
                 Projected outcomes based on <strong className="text-white border-b-2 border-tron-cyan">creator types</strong>.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {scenarios.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="relative group"
            >
              {/* Card Container - HUD Style */}
              <div className="h-full border border-white/10 bg-bg-hero p-8 relative overflow-hidden">
                {/* Top Bar */}
                <div className={`h-1 w-full absolute top-0 left-0 bg-${item.color === 'white' ? 'white' : item.color} shadow-[0_0_10px_currentColor]`} />
                
                {/* Holographic Scanline Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-[-100%] group-hover:translate-y-[100%]" />

                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full border-2 border-${item.color === 'white' ? 'white' : item.color}/50 overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                        <Image 
                            src={item.img} 
                            alt={item.role} 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className={`text-xl font-bold text-${item.color === 'white' ? 'white' : item.color} uppercase`}>{item.role}</h3>
                        <p className="text-xs font-mono text-text-muted uppercase tracking-widest">{item.level}</p>
                    </div>
                </div>

                <div className="flex justify-between text-xs font-mono text-text-muted mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
                   <span>Status: {item.status}</span>
                </div>

                <div className="mb-8">
                   <span className="block text-xs text-text-muted uppercase mb-1">Result</span>
                   <span className="text-2xl text-white font-bold uppercase tracking-wide">{item.result}</span>
                </div>

                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>

                {/* Corner decorations */}
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
