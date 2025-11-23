"use client";

import React from "react";

export default function StyleBibleExplainer() {
  return (
    <section className="py-32 bg-bg-hero relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-display-lg text-white mb-6">THE STYLE BIBLE</h2>
            <p className="text-lead-statement mb-8">
                Consistency isn't accidental. It's engineered.
            </p>
            <p className="text-text-secondary mb-8">
                We create a living document that decodes your pacing, subtitles, color grading, SFX preferences, and meme language. This ensures every editor on your pod speaks your creative language fluently.
            </p>
        </div>
        
        {/* Visual Mockup */}
        <div className="relative aspect-[4/3] bg-white/5 border border-white/10 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-tron-cyan" />
            <h3 className="text-2xl font-bold text-white uppercase mb-8">Creator Protocol: V1.0</h3>
            
            <div className="space-y-6">
                <div className="h-2 w-3/4 bg-white/20 rounded" />
                <div className="h-2 w-1/2 bg-white/20 rounded" />
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="h-20 bg-tron-cyan/20 border border-tron-cyan/50 rounded flex items-center justify-center text-tron-cyan font-bold text-xs">PACING</div>
                    <div className="h-20 bg-tron-orange/20 border border-tron-orange/50 rounded flex items-center justify-center text-tron-orange font-bold text-xs">COLOR</div>
                    <div className="h-20 bg-white/10 border border-white/30 rounded flex items-center justify-center text-white font-bold text-xs">FONTS</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

