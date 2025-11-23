"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";
import { motion } from "framer-motion";

function ChaoticTimeline() {
    // Deterministic values for widths to prevent hydration errors
    const row1 = [20, 45, 15, 60, 30, 25, 50, 10, 35, 40];
    const row2 = [55, 20, 65, 30, 15, 45, 25, 50];
    const row3 = [15, 30, 10, 40, 25, 35, 20, 45, 10, 30, 15, 25];

    return (
        <div className="w-full h-32 bg-[#1a1a1a] rounded-lg overflow-hidden relative border border-red-500/30 opacity-70">
            {/* Tracks */}
            <div className="absolute top-4 left-0 right-0 h-6 bg-[#2a2a2a] flex items-center gap-1 px-2">
                {row1.map((width, i) => (
                    <div key={i} className="h-4 rounded-sm bg-red-500/40" style={{ width: `${width}%` }}></div>
                ))}
            </div>
            <div className="absolute top-12 left-0 right-0 h-6 bg-[#2a2a2a] flex items-center gap-1 px-2">
                 {row2.map((width, i) => (
                    <div key={i} className="h-4 rounded-sm bg-yellow-500/40" style={{ width: `${width}%` }}></div>
                ))}
            </div>
            <div className="absolute top-20 left-0 right-0 h-6 bg-[#2a2a2a] flex items-center gap-1 px-2">
                 {row3.map((width, i) => (
                    <div key={i} className="h-4 rounded-sm bg-blue-500/20" style={{ width: `${width}%` }}></div>
                ))}
            </div>
            {/* Error Indicators */}
            <div className="absolute top-2 right-10 w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
            <div className="absolute bottom-4 left-20 w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
    )
}

export default function ProblemSection() {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center mb-24">
          <div className="mb-8 inline-block">
             <span className="px-4 py-2 border border-tron-orange/50 bg-tron-orange/10 text-tron-orange text-sm font-bold tracking-[0.2em] uppercase mb-6 block w-fit mx-auto">
                System Failure Imminent
             </span>
             <AnimatedHeading 
                text="THE BOTTLENECK" 
                variant="glitch" 
                className="text-display-xl text-white mb-8"
             />
          </div>
          
          <div className="relative p-8 border-x border-tron-orange/20 bg-gradient-to-b from-transparent via-tron-orange/5 to-transparent">
            <p className="text-lead-statement">
              As a creator, your real job is being on camera, connecting with your audience, and <strong className="text-tron-orange">growing your brand</strong> — not scrubbing through timelines and syncing audio at 2 a.m.
            </p>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tron-orange"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tron-orange"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tron-orange"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tron-orange"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-subheading text-tron-orange mb-4 uppercase tracking-widest border-b border-tron-orange/30 pb-2 inline-block">
                The Cost of Growth
            </h3>
            <ul className="space-y-6 text-body-md text-text-secondary mt-4">
              <li className="flex gap-4 items-start group">
                <span className="text-tron-orange mt-1 group-hover:animate-pulse">►</span>
                <span><strong className="text-white">Time Drain:</strong> 27% of creators lose 5–10 hours/week to the timeline.</span>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-tron-orange mt-1 group-hover:animate-pulse">►</span>
                <span><strong className="text-white">Consistency Killer:</strong> Managing freelancers becomes a second job.</span>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-tron-orange mt-1 group-hover:animate-pulse">►</span>
                <span><strong className="text-white">Quality Variance:</strong> Freelancers often miss the mark on your unique style.</span>
              </li>
            </ul>
          </div>
          
          <div className="tron-card p-8 rounded-none relative group">
            {/* Visualization of Chaos */}
            <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-red-400 mb-2">Current Status: Unstable</p>
                <ChaoticTimeline />
            </div>

            <h3 className="text-subheading text-white mb-6 uppercase tracking-widest">Why “Just Hiring” Fails</h3>
            <div className="space-y-4">
              <div className="p-4 bg-bg-hero border-l-2 border-tron-orange hover:bg-tron-orange/5 transition-colors">
                <h4 className="text-body-medium text-tron-orange mb-1">Unreliable Freelancers</h4>
                <p className="text-body-sm text-text-muted">Editors disappear mid-project or don't deliver on time.</p>
              </div>
              <div className="p-4 bg-bg-hero border-l-2 border-tron-orange hover:bg-tron-orange/5 transition-colors">
                <h4 className="text-body-medium text-tron-orange mb-1">Unpredictable Costs</h4>
                <p className="text-body-sm text-text-muted">Hourly billing creates financial instability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
