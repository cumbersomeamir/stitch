"use client";

import React from "react";

export default function RepurposingSection() {
  return (
    <section className="py-32 bg-bg-surface relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="text-display-lg text-white mb-6">
              03. CONTENT <span className="text-white border-b-4 border-white">MULTIPLIER</span>
            </h2>
            <p className="text-lead-statement max-w-3xl mx-auto">
              Most creators only post 10-20% of their potential. We fix that.
            </p>
        </div>

        {/* Flowchart Visualization */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12">
            
            {/* Input Node */}
            <div className="w-64 p-8 border-2 border-white/30 bg-white/5 text-center relative z-10">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold text-white uppercase">1 Source</h3>
                <p className="text-sm text-text-muted mt-2">YouTube / Podcast / Stream</p>
                
                {/* Connector Line */}
                <div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-white/30 md:hidden"></div>
                <div className="absolute -right-12 top-1/2 h-[2px] w-12 bg-white/30 hidden md:block"></div>
            </div>

            {/* Processor Node */}
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl z-20 shadow-[0_0_30px_white]">
                X
            </div>

            {/* Output Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                {[
                    { label: "Shorts & Reels", count: "10-50" },
                    { label: "Mini Videos", count: "3-6" },
                    { label: "Teasers", count: "Launch" },
                    { label: "Story Slices", count: "Vertical" },
                    { label: "Micro-Moments", count: "Twitter/X" },
                    { label: "Highlight Reels", count: "Best Of" }
                ].map((item, i) => (
                    <div key={i} className="p-4 border border-white/10 bg-bg-hero hover:bg-white/10 transition-colors text-center">
                        <p className="text-tron-cyan font-mono text-lg font-bold">{item.count}</p>
                        <p className="text-xs text-white uppercase tracking-wide mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-xl text-text-secondary">
                Your Effort = <span className="text-white font-bold">Maximum Distribution</span>.
            </p>
        </div>
      </div>
    </section>
  );
}

