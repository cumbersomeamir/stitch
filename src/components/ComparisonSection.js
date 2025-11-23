"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function ComparisonSection() {
  return (
    <section className="py-32 bg-bg-hero relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
           <AnimatedHeading 
              text="WHY STITCH?" 
              className="text-display-lg text-white mb-4"
           />
           <p className="text-tron-cyan uppercase tracking-widest text-sm">The Comparison</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Freelancer Column */}
          <div className="border border-white/10 bg-white/5 p-6 opacity-50 hover:opacity-80 transition-opacity">
             <h3 className="text-xl font-bold text-text-muted mb-6 uppercase text-center">Freelancers</h3>
             <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Reliability</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[40%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Style Match</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[60%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Scalability</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[20%]"></div>
                    </div>
                </div>
             </div>
             <div className="mt-8 text-center text-sm text-text-muted font-mono">
                RISK: HIGH
             </div>
          </div>

          {/* Stitch Column - Highlighted */}
          <div className="border-2 border-tron-cyan bg-tron-cyan/5 p-8 transform scale-105 shadow-[0_0_40px_rgba(0,210,255,0.15)] relative z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tron-cyan text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                Recommended
             </div>
             <h3 className="text-2xl font-bold text-white mb-8 uppercase text-center tracking-widest">Stitch Agency</h3>
             <div className="space-y-8">
                <div>
                    <div className="flex justify-between text-xs uppercase text-tron-cyan mb-1">Reliability</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden relative">
                        <div className="h-full bg-tron-cyan w-[98%] shadow-[0_0_10px_#00D2FF]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-tron-cyan mb-1">Style Match</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden relative">
                        <div className="h-full bg-tron-cyan w-[100%] shadow-[0_0_10px_#00D2FF]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-tron-cyan mb-1">Scalability</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden relative">
                        <div className="h-full bg-tron-cyan w-[100%] shadow-[0_0_10px_#00D2FF]"></div>
                    </div>
                </div>
             </div>
             <div className="mt-10 text-center text-sm text-tron-cyan font-mono font-bold">
                RISK: NONE
             </div>
          </div>

          {/* In-House Column */}
          <div className="border border-white/10 bg-white/5 p-6 opacity-50 hover:opacity-80 transition-opacity">
             <h3 className="text-xl font-bold text-text-muted mb-6 uppercase text-center">In-House Team</h3>
             <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Reliability</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Cost Efficiency</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[30%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-text-muted mb-1">Management Overhead</div>
                    <div className="h-2 bg-bg-surface w-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[10%]"></div>
                    </div>
                </div>
             </div>
             <div className="mt-8 text-center text-sm text-text-muted font-mono">
                COST: HIGH
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
