"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";

const services = [
  {
    title: "Long-form Editing",
    description: "YouTube, podcasts, vlogs. We handle cutting, storytelling, b-roll, and color grading.",
    icon: "🎬"
  },
  {
    title: "Short-form Content",
    description: "Reels, Shorts, TikTok. High-retention edits with hooks, punchlines, and motion graphics.",
    icon: "📱"
  },
  {
    title: "Content Repurposing",
    description: "Turn one long video into dozens of clips, teasers, and vertical formats.",
    icon: "🔄"
  },
  {
    title: "Brand Integrations",
    description: "Seamless sponsorship segments that follow guidelines and keep brands happy.",
    icon: "🤝"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedHeading 
                text="WHAT WE DO" 
                className="text-display-lg text-text-primary"
            />
          </div>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Full-service editing tailored for the modern creator economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-primary-3 border border-border-strong hover:border-primary-1 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-subheading text-text-primary mb-3">{service.title}</h3>
              <p className="text-body-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="mb-6 flex justify-center">
             <AnimatedHeading 
                text="Ready to reclaim your time?" 
                className="text-display-md text-text-primary"
             />
          </div>
          <button className="text-button rounded-lg gradient-creator px-8 py-4 text-white transition-opacity hover:opacity-90">
            View Pricing Plans
          </button>
        </div>
      </div>
    </section>
  );
}

