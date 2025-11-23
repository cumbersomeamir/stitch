"use client";

import React from "react";

export default function WhyMonthlySection() {
  return (
    <section className="py-32 bg-bg-hero relative">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-display-md text-white mb-8">WHY MONTHLY?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-1 bg-red-500 h-full"></div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-1">Hourly Model</h4>
                            <p className="text-text-secondary text-sm">Punishes creativity. Unpredictable bills. Editors rush to finish.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1 bg-tron-cyan h-full shadow-[0_0_10px_#00D2FF]"></div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-1">Stitch Model</h4>
                            <p className="text-text-secondary text-sm">Predictable costs. Outcome-based. We invest time to make it perfect.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-bg-surface border border-white/10 p-8 relative">
                <div className="absolute top-0 right-0 p-2 text-xs font-mono text-text-muted">DATA VISUALIZATION</div>
                {/* Simple Graph Visual */}
                <div className="mt-8 flex items-end gap-4 h-64 pb-4 border-b border-white/20">
                    <div className="flex-1 bg-red-500/20 h-1/3 relative group">
                        <div className="absolute bottom-full mb-2 text-xs text-red-400 text-center w-full">Variance</div>
                    </div>
                    <div className="flex-1 bg-red-500/40 h-2/3 relative"></div>
                    <div className="flex-1 bg-red-500/30 h-1/2 relative"></div>
                    
                    <div className="w-8"></div> {/* Spacer */}
                    
                    <div className="flex-1 bg-tron-cyan/20 h-1/2 relative"></div>
                    <div className="flex-1 bg-tron-cyan/20 h-1/2 relative"></div>
                    <div className="flex-1 bg-tron-cyan h-full relative shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                        <div className="absolute bottom-full mb-2 text-xs text-tron-cyan text-center w-full font-bold">Growth</div>
                    </div>
                </div>
                <div className="flex justify-between mt-4 text-xs text-text-muted uppercase tracking-widest">
                    <span>Freelancer Volatility</span>
                    <span>Stitch Consistency</span>
                </div>
            </div>
        </div>
    </section>
  );
}

