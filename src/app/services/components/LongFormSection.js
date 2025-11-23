"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Image from "next/image";

export default function LongFormSection() {
  return (
    <section className="py-32 bg-bg-surface relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-display-lg text-white mb-6">
              01. <span className="text-tron-cyan">LONG-FORM</span> EDITING
            </h2>
            <p className="text-lead-statement mb-8">
              We transform raw footage into tight, engaging, <strong className="text-white">high-retention assets</strong> that feel exactly like your style.
            </p>
            <div className="flex gap-4 flex-wrap">
                {["YouTube", "Podcasts", "Vlogs", "Video Essays"].map(tag => (
                    <span key={tag} className="px-4 py-1 border border-white/20 rounded text-sm font-mono uppercase tracking-wide text-text-secondary">
                        {tag}
                    </span>
                ))}
            </div>
          </div>
          
          {/* Visual Placeholder - Timeline */}
          <div className="relative h-[400px] border border-white/10 bg-black/50 overflow-hidden rounded-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tron-cyan/10 to-purple-500/10 mix-blend-overlay z-10" />
                    <Image
                       src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
                       alt="Editing Timeline"
                       fill
                       className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    {/* Overlay UI elements */}
             <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-surface via-bg-surface/80 to-transparent p-6 z-20">
                <div className="flex gap-2 mb-2">
                    <div className="h-2 w-12 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="h-2 w-24 bg-blue-500 rounded-full"></div>
                    <div className="h-2 w-8 bg-yellow-500 rounded-full"></div>
                </div>
                <p className="font-mono text-xs text-tron-cyan">RENDERING PREVIEW... 98%</p>
             </div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Structure", items: ["Cut downs", "Removing fillers", "Pacing adjustments", "Retention optimization"] },
                { title: "Story Crafting", items: ["Narrative shaping", "Hook finding", "Emotional beats", "Structured flow"] },
                { title: "Visuals", items: ["Dynamic zooms", "Motion graphics", "Lower thirds", "Layered compositions"] },
                { title: "Audio", items: ["Noise reduction", "EQ & Compression", "Sound design", "Music mixing"] },
                { title: "Color", items: ["LUT-based grading", "Skin tone correction", "Camera matching", "Stylized looks"] },
                { title: "Formatting", items: ["Chapter markers", "End screens", "CTA integration", "4K Export"] }
            ].map((col, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors border-l-2 border-l-tron-cyan/50">
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">{col.title}</h3>
                    <ul className="space-y-3">
                        {col.items.map((item, j) => (
                            <li key={j} className="text-text-secondary text-sm flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-tron-cyan rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* The "Why" Banner */}
        <div className="mt-20 p-10 border-t border-b border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent text-center">
            <p className="text-2xl text-white font-light">
                Creators spend <span className="text-tron-orange font-bold">5–25 hours</span> per video editing. 
                <br/>
                With Stitch, you simply: <span className="text-white font-bold">1. Film → 2. Upload → 3. Approve.</span>
            </p>
        </div>
      </div>
    </section>
  );
}

