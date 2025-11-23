"use client";

import React from "react";

export default function PodsExplainer() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 text-center mb-16">
        <h2 className="text-display-lg text-white mb-6">YOUR DEDICATED POD</h2>
        <p className="text-text-secondary">Not freelancers. A structured unit.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-4">
        {[
            { role: "Lead Editor", color: "bg-tron-cyan" },
            { role: "Second Editor", color: "bg-white" },
            { role: "Backup Unit", color: "bg-tron-orange" },
            { role: "Manager", color: "bg-gray-500" }
        ].map((member, i) => (
            <div key={i} className="bg-bg-hero border border-white/10 p-6 text-center group hover:border-white/30 transition-colors">
                <div className={`w-3 h-3 rounded-full ${member.color} mx-auto mb-4 shadow-[0_0_10px_currentColor]`} />
                <h3 className="text-white font-bold uppercase text-sm tracking-wider">{member.role}</h3>
            </div>
        ))}
      </div>
    </section>
  );
}

