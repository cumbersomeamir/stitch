"use client";

import React from "react";

export default function CreatorPainPointsSection() {
  return (
    <section className="py-24 bg-bg-surface relative border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-display-md text-white mb-6">
                    THE CREATOR <span className="text-tron-orange">BOTTLENECK</span>
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                    You didn't start creating content to become a project manager.
                </p>
            </div>
            
            <div className="space-y-4">
                {[
                    "Time lost scrubbing timelines at 2 a.m.",
                    "Inconsistent freelancers ghosting projects",
                    "Rising demand for multi-platform clips",
                    "Quality variability between edits",
                    "No standardized style system"
                ].map((point, i) => (
                    <div key={i} className="p-4 bg-tron-orange/5 border-l-2 border-tron-orange flex items-center gap-4">
                        <span className="text-tron-orange font-mono">⚠</span>
                        <span className="text-white text-sm uppercase tracking-wide">{point}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

