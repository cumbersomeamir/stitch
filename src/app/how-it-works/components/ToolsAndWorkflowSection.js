"use client";

import React from "react";

export default function ToolsAndWorkflowSection() {
  return (
    <section className="py-24 bg-bg-hero border-y border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-4 gap-4 text-center">
            {[
                { icon: "⬆", label: "Upload" },
                { icon: "⚡", label: "Edit" },
                { icon: "💬", label: "Review" },
                { icon: "✔", label: "Final" }
            ].map((step, i) => (
                <div key={i} className="p-4">
                    <div className="text-2xl text-white mb-2">{step.icon}</div>
                    <p className="text-xs uppercase tracking-widest text-text-muted">{step.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

