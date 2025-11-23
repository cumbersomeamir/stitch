"use client";

import React from "react";
import Image from "next/image";

export default function ShortFormSection() {
  return (
    <section className="py-32 bg-bg-hero relative overflow-hidden">
      {/* Background Splash */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tron-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visuals */}
            <div className="relative h-[600px] flex items-center justify-center">
                {/* Phone Frame Mockup */}
                <div className="relative w-[300px] h-[580px] border-8 border-gray-900 rounded-[3rem] bg-black overflow-hidden shadow-[0_0_50px_rgba(255,156,0,0.3)] z-20 transform -rotate-3">
                    <Image 
                        src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80"
                        alt="Short Form Content"
                        fill
                        className="object-cover opacity-80"
                    />
                    {/* UI Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-b from-transparent via-transparent to-black/80">
                        <div className="w-full h-1 bg-white/20 rounded-full mt-2 flex gap-1">
                            <div className="h-full w-1/3 bg-white rounded-full"></div>
                        </div>
                        <div>
                            <div className="bg-tron-orange text-black text-xs font-bold px-2 py-1 rounded mb-2 w-fit">VIRAL HOOK</div>
                            <p className="text-white font-bold text-xl leading-tight drop-shadow-lg">
                                "Most people don't know this secret..."
                            </p>
                        </div>
                    </div>
                </div>
                {/* Background Phone */}
                <div className="absolute w-[280px] h-[540px] border-4 border-gray-800 rounded-[2.5rem] bg-gray-900 opacity-30 z-10 transform rotate-6 translate-x-12 translate-y-4 blur-sm"></div>
            </div>

            {/* Content */}
            <div>
                <h2 className="text-display-lg text-white mb-6">
                  02. <span className="text-tron-orange">SHORT-FORM</span> GROWTH ENGINE
                </h2>
                <p className="text-lead-statement mb-10">
                  We specialize in shaping raw clips into explosive, <strong className="text-white">scroll-stopping content</strong>.
                </p>

                <div className="space-y-8">
                    <div className="border-l-4 border-tron-orange pl-6">
                        <h3 className="text-xl font-bold text-white uppercase mb-2">Hook Optimization</h3>
                        <p className="text-text-secondary text-sm">
                            We restructure clips so the strongest moment hits in the first 1-2 seconds.
                        </p>
                    </div>
                    <div className="border-l-4 border-white/20 pl-6">
                        <h3 className="text-xl font-bold text-white uppercase mb-2">Kinetic Captions</h3>
                        <p className="text-text-secondary text-sm">
                            Bold, high-retention subtitles with bounce, color emphasis, and dynamic animations.
                        </p>
                    </div>
                    <div className="border-l-4 border-white/20 pl-6">
                        <h3 className="text-xl font-bold text-white uppercase mb-2">Trend Alignment</h3>
                        <p className="text-text-secondary text-sm">
                            We stay on top of current sounds, meme formats, and pacing trends.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6">
                    <div className="bg-white/5 p-4 text-center border border-white/10">
                        <p className="text-3xl font-bold text-tron-orange font-mono">2-5x</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Upload Volume</p>
                    </div>
                    <div className="bg-white/5 p-4 text-center border border-white/10">
                        <p className="text-3xl font-bold text-white font-mono">40-70%</p>
                        <p className="text-xs text-text-muted uppercase tracking-wide mt-1">Reach Boost</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

