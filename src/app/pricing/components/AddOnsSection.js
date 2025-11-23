"use client";

import React from "react";

export default function AddOnsSection() {
  return (
    <section className="py-32 bg-bg-surface relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
            <h2 className="text-display-md text-white mb-4">SYSTEM UPGRADES</h2>
            <p className="text-text-secondary">Add-on modules for additional firepower.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Thumbnails", desc: "CTR-tested styles, 4-16 per month" },
                { title: "Motion Graphics", desc: "Explainers, titles, custom transitions" },
                { title: "YouTube Strategy", desc: "Titles, outlines, retention design" },
                { title: "Priority Delivery", desc: "Overnight turnaround for urgent drops" }
            ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 bg-white/5 hover:border-tron-cyan/50 transition-colors group">
                    <div className="w-8 h-8 border border-white/20 flex items-center justify-center mb-4 group-hover:border-tron-cyan group-hover:text-tron-cyan text-white font-bold text-xl transition-colors">
                        +
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

