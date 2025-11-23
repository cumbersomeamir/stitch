"use client";

import React from "react";
import { motion } from "framer-motion";

const details = [
    {
        title: "01. Discovery Call",
        desc: "We analyze your content DNA.",
        points: ["Review existing channel analytics", "Identify bottlenecks", "Set growth goals"]
    },
    {
        title: "02. Style Bible",
        desc: "We encode your visual language.",
        points: ["Define pacing & humor", "Select fonts & colors", "Create asset library"]
    },
    {
        title: "03. Pilot Edits",
        desc: "Calibration phase.",
        points: ["Test batch of content", "Direct feedback loop", "Refining the Bible"]
    },
    {
        title: "04. Your Editing Pod",
        desc: "Team assembly.",
        points: ["Dedicated Lead Editor", "Backup capacity", "Project Manager assignment"]
    }
];

export default function StepBreakdown() {
  return (
    <section className="py-24 bg-bg-surface">
      <div className="mx-auto max-w-5xl px-6 space-y-24">
        {details.map((step, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                className="grid md:grid-cols-2 gap-12 border-l-2 border-white/10 pl-8"
            >
                <div>
                    <h3 className="text-3xl font-bold text-white uppercase mb-2">{step.title}</h3>
                    <p className="text-tron-cyan font-mono text-sm tracking-widest uppercase">{step.desc}</p>
                </div>
                <ul className="space-y-4">
                    {step.points.map((point, j) => (
                        <li key={j} className="flex items-center gap-3 text-text-secondary">
                            <span className="w-1 h-1 bg-white rounded-full" />
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
      </div>
    </section>
  );
}

