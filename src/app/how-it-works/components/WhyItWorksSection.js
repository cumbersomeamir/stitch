"use client";

import React from "react";

export default function WhyItWorksSection() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-display-lg text-white mb-12">WHY IT WORKS</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Predictability", desc: "Flat monthly rate. No surprises." },
                { title: "Consistency", desc: "Your style, every single time." },
                { title: "Speed", desc: "Always-on workflow. No downtime." }
            ].map((item, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/5">
                    <h3 className="text-2xl font-bold text-white uppercase mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

