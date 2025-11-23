"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-hero border-t border-border-strong">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
                <AnimatedHeading 
                    text="WHY NOW?" 
                    variant="glitch"
                    gradient
                    className="text-display-lg"
                />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-display-md text-primary-1 mb-2">20-24%</h3>
                <p className="text-subheading text-text-primary mb-2">Annual Growth</p>
                <p className="text-body-md text-text-secondary">
                  The creator economy is projected to grow at ~20–24% CAGR over the next decade. Competition is fierce.
                </p>
              </div>
              <div>
                <h3 className="text-display-md text-secondary-cyan mb-2">0.5%</h3>
                <p className="text-subheading text-text-primary mb-2">Reach 100K Subs</p>
                <p className="text-body-md text-text-secondary">
                  Only a tiny fraction of channels break out. The winners are hyper-consistent.
                </p>
              </div>
              <div>
                <h3 className="text-display-md text-secondary-yellow mb-2">10-20h</h3>
                <p className="text-subheading text-text-primary mb-2">Saved Per Week</p>
                <p className="text-body-md text-text-secondary">
                  Offloading editing is like adding two extra working days to your week.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-3 rounded-2xl p-8 border border-border-strong relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 blur-3xl rounded-full" />
            
            <h3 className="text-display-md text-text-primary mb-6">
              Specific Benefits
            </h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
                  ⏰
                </div>
                <div>
                  <h4 className="text-subheading text-text-primary">Reclaim Hours</h4>
                  <p className="text-body-sm text-text-secondary">Film more, experiment with formats, and avoid burnout.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-cyan/10 flex items-center justify-center text-secondary-cyan text-xl">
                  📈
                </div>
                <div>
                  <h4 className="text-subheading text-text-primary">Consistency Algorithms Love</h4>
                  <p className="text-body-sm text-text-secondary">Hit predictable upload schedules that drive impressions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-magenta/10 flex items-center justify-center text-secondary-magenta text-xl">
                  🚀
                </div>
                <div>
                  <h4 className="text-subheading text-text-primary">Style That Scales</h4>
                  <p className="text-body-sm text-text-secondary">From 10K to 1M followers, your editing language grows with you.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

