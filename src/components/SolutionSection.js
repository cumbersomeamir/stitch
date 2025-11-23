"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function SolutionSection() {
  return (
    <section className="py-24 bg-bg-hero relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-luxury opacity-20 -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
             <AnimatedHeading 
                text="THE STITCH SOLUTION" 
                variant="reveal" 
                className="text-display-lg text-text-primary"
             />
          </div>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            We operationalize your brand with a dedicated "pod" and a living "Style Bible."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Style Bible Card */}
          <div className="group relative p-8 rounded-2xl bg-primary-3 border border-border-strong hover:border-primary transition-colors">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
            
            <h3 className="text-display-md text-text-primary mb-4">
              3.1 The <span className="text-primary">Style Bible</span>
            </h3>
            <p className="text-body-md text-text-secondary mb-6">
              Most agencies talk about “consistent branding”. We decode your personal style into a living document.
            </p>
            
            <ul className="space-y-3 text-body-sm text-text-muted">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
                Preferred pacing (fast cuts vs. cinematic)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
                Transition types & visual language
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
                Meme language & inside jokes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" />
                Color grading & audio signature
              </li>
            </ul>
          </div>

          {/* Stitch Pod Card */}
          <div className="group relative p-8 rounded-2xl bg-primary-3 border border-border-strong hover:border-secondary-magenta transition-colors">
             <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-magenta opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

            <h3 className="text-display-md text-text-primary mb-4">
              3.2 Your Dedicated <span className="text-secondary-magenta">Pod</span>
            </h3>
            <p className="text-body-md text-text-secondary mb-6">
              Instead of random freelancers, you get a consistent team that knows you.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-bg-surface border border-border-light">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="text-body-medium text-text-primary">Primary Editors</p>
                  <p className="text-caption text-text-muted">Handle most of your content</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-bg-surface border border-border-light">
                <div className="w-10 h-10 rounded-full bg-secondary-magenta flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="text-body-medium text-text-primary">Backup Editor</p>
                  <p className="text-caption text-text-muted">Trained for load spikes</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-bg-surface border border-border-light">
                <div className="w-10 h-10 rounded-full bg-secondary-cyan flex items-center justify-center text-primary-2 font-bold">3</div>
                <div>
                  <p className="text-body-medium text-text-primary">Pod Lead</p>
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

