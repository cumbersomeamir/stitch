"use client";

import React from "react";

export default function OnDemandSection() {
  return (
    <section className="py-24 bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-display-md text-white mb-12">09. ON-DEMAND EXTRAS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-text-secondary">
            {[
                "Motion Graphics", "Animated Titles", "Teaser Trailers", "Social Ads",
                "Reaction Edits", "Montages", "Showreels", "Course Editing",
                "Webinars", "Landing Page Videos", "BTS Edits", "Intros/Outros"
            ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                    {item}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

