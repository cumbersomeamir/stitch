"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-hero border-t border-tron-cyan/20 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
                <AnimatedHeading 
                    text="WHY NOW?" 
                    variant="glitch"
                    className="text-display-lg text-white"
                />
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-tron-cyan pl-6 py-2">
                <h3 className="text-display-md text-tron-cyan mb-2 font-mono">20-24%</h3>
                <p className="text-subheading text-white uppercase tracking-widest mb-2">Annual Growth</p>
                <p className="text-body-md text-text-secondary">
                  The creator economy is expanding rapidly. Competition is fierce.
                </p>
              </div>
              <div className="border-l-2 border-tron-orange pl-6 py-2">
                <h3 className="text-display-md text-tron-orange mb-2 font-mono">0.5%</h3>
                <p className="text-subheading text-white uppercase tracking-widest mb-2">Reach 100K Subs</p>
                <p className="text-body-md text-text-secondary">
                  Only a fraction break out. Winners are hyper-consistent.
                </p>
              </div>
              <div className="border-l-2 border-white pl-6 py-2">
                <h3 className="text-display-md text-white mb-2 font-mono">10-20h</h3>
                <p className="text-subheading text-white uppercase tracking-widest mb-2">Saved Per Week</p>
                <p className="text-body-md text-text-secondary">
                  Offloading editing equals two extra cycles per week.
                </p>
              </div>
            </div>
          </div>

          <div className="tron-card p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tron-cyan opacity-5 blur-3xl rounded-full" />
            
            <h3 className="text-display-md text-white mb-8 uppercase tracking-wider text-center border-b border-tron-cyan/20 pb-4">
              System Benefits
            </h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 border border-tron-cyan bg-tron-cyan/10 flex items-center justify-center text-tron-cyan text-xl font-mono shadow-[0_0_10px_rgba(0,210,255,0.3)]">
                  01
                </div>
                <div>
                  <h4 className="text-subheading text-white uppercase tracking-wide">Reclaim Hours</h4>
                  <p className="text-body-sm text-text-secondary">Film more. Experiment. Avoid system failure (burnout).</p>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 border border-tron-orange bg-tron-orange/10 flex items-center justify-center text-tron-orange text-xl font-mono shadow-[0_0_10px_rgba(255,156,0,0.3)]">
                  02
                </div>
                <div>
                  <h4 className="text-subheading text-white uppercase tracking-wide">Algorithm Optimization</h4>
                  <p className="text-body-sm text-text-secondary">Predictable upload schedules drive maximum impressions.</p>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-12 h-12 border border-white bg-white/10 flex items-center justify-center text-white text-xl font-mono shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  03
                </div>
                <div>
                  <h4 className="text-subheading text-white uppercase tracking-wide">Scalable Protocol</h4>
                  <p className="text-body-sm text-text-secondary">From 10K to 1M followers, your editing language evolves.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
