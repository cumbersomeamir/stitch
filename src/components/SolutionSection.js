"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function SolutionSection() {
  return (
    <section className="py-24 bg-bg-hero relative overflow-hidden">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 210, 255, .3) 25%, rgba(0, 210, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 210, 255, .3) 75%, rgba(0, 210, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 210, 255, .3) 25%, rgba(0, 210, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 210, 255, .3) 75%, rgba(0, 210, 255, .3) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
      }}/>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="mb-8 flex justify-center">
             <AnimatedHeading 
                text="THE STITCH SOLUTION" 
                variant="reveal" 
                className="text-display-xl text-white"
             />
          </div>
          
          <div className="max-w-4xl mx-auto relative">
             <div className="absolute -inset-4 bg-tron-cyan/5 blur-xl rounded-full"></div>
             <p className="text-lead-statement relative z-10">
                We operationalize your brand with a <strong className="text-tron-cyan">dedicated "pod"</strong> and a living <strong className="text-tron-cyan">"Style Bible."</strong>
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Style Bible Card */}
          <div className="tron-card p-8 group hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-tron-cyan opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
            
            <h3 className="text-display-md text-white mb-4 uppercase tracking-wider">
              3.1 <span className="text-tron-cyan">Style Bible</span>
            </h3>
            <p className="text-body-md text-text-secondary mb-6 border-l-2 border-tron-cyan/30 pl-4">
              We decode your personal style into a living document.
            </p>
            
            <ul className="space-y-3 text-body-sm text-text-muted">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tron-cyan shadow-[0_0_5px_#00D2FF]" />
                Preferred pacing (fast vs cinematic)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tron-cyan shadow-[0_0_5px_#00D2FF]" />
                Visual language & transitions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tron-cyan shadow-[0_0_5px_#00D2FF]" />
                Meme syntax & inside jokes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-tron-cyan shadow-[0_0_5px_#00D2FF]" />
                Color grading & audio style
              </li>
            </ul>
          </div>

          {/* Stitch Pod Card */}
          <div className="tron-card p-8 group hover:border-tron-orange hover:shadow-[0_0_30px_rgba(255,156,0,0.2)] transition-all">
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-tron-orange opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />

            <h3 className="text-display-md text-white mb-4 uppercase tracking-wider">
              3.2 Dedicated <span className="text-tron-orange">Pod</span>
            </h3>
            <p className="text-body-md text-text-secondary mb-6 border-l-2 border-tron-orange/30 pl-4">
              A consistent team aligned to your output.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-3 border border-tron-cyan/20 bg-tron-cyan/5 hover:bg-tron-cyan/10 transition-colors">
                <div className="w-8 h-8 border border-tron-cyan flex items-center justify-center text-tron-cyan font-bold font-mono">01</div>
                <div>
                  <p className="text-body-medium text-white uppercase tracking-wide">Primary Editors</p>
                  <p className="text-caption text-text-muted">Handle most of your content</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border border-tron-orange/20 bg-tron-orange/5 hover:bg-tron-orange/10 transition-colors">
                <div className="w-8 h-8 border border-tron-orange flex items-center justify-center text-tron-orange font-bold font-mono">02</div>
                <div>
                  <p className="text-body-medium text-white uppercase tracking-wide">Backup Editor</p>
                  <p className="text-caption text-text-muted">Dedicated backup</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 border border-white flex items-center justify-center text-white font-bold font-mono">03</div>
                <div>
                  <p className="text-body-medium text-white uppercase tracking-wide">Account Manager</p>
                  <p className="text-caption text-text-muted">Coordinates deadlines & QA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
