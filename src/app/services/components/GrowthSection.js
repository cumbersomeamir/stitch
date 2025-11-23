"use client";

import React from "react";

export default function GrowthSection() {
  return (
    <section className="py-24 bg-bg-dark-hero border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-display-md text-white mb-8">08. GROWTH STRATEGY</h2>
        <div className="flex flex-wrap justify-center gap-4">
            {["Content Strategy", "SEO Titles", "Hook Optimization", "Topic Selection", "Upload Scheduling"].map((tag, i) => (
                <span key={i} className="px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors cursor-default">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
}

