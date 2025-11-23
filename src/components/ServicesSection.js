"use client";

import React from "react";
import AnimatedHeading from "./ui/AnimatedHeading";
import Image from "next/image";

const services = [
  {
    title: "Long-form Editing",
    description: "YouTube, podcasts, vlogs. Narrative construction and color grading.",
    color: "from-purple-500 to-blue-500",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&w=800&q=80" // Video Editing timeline
  },
  {
    title: "Short-form Content",
    description: "Reels, Shorts, TikTok. High-retention loops with visual hooks.",
    color: "from-pink-500 to-rose-500",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80" // Social Media/TikTok
  },
  {
    title: "Content Repurposing",
    description: "Turning long-form into multiple platform-specific assets.",
    color: "from-green-500 to-emerald-500",
    img: "https://images.unsplash.com/photo-1603539279542-e819d7990986?auto=format&fit=crop&w=800&q=80" // Multi-device/content
  },
  {
    title: "Brand Integrations",
    description: "Seamless sponsorship segments following strict brand guidelines.",
    color: "from-amber-500 to-orange-500",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" // Business/Handshake
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-bg-surface relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="mb-8 flex justify-center">
            <AnimatedHeading 
                text="OUR SERVICES" 
                className="text-display-xl text-white"
            />
          </div>
          
          <div className="max-w-3xl mx-auto p-6 border border-white/10 bg-black/40 backdrop-blur-sm">
            <p className="text-lead-statement">
                Full-service editing <strong className="text-white">tailored</strong> for the modern digital creator.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="tron-card p-0 hover:bg-tron-cyan/5 transition-all group overflow-hidden flex flex-col"
            >
              {/* Visual Preview Area */}
              <div className="h-48 relative group-hover:opacity-100 opacity-80 transition-opacity overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10`}></div>
                <Image 
                    src={service.img} 
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-20 bg-bg-surface/90 backdrop-blur-sm -mt-10 border-t border-white/10">
                <h3 className="text-subheading text-white mb-3 uppercase tracking-wide group-hover:text-tron-cyan transition-colors">{service.title}</h3>
                <p className="text-body-sm text-text-secondary group-hover:text-white transition-colors flex-1">{service.description}</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-tron-cyan opacity-50 z-30"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-tron-cyan opacity-50 z-30"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="mb-8 flex justify-center">
             <AnimatedHeading 
                text="Ready to scale?" 
                className="text-display-md text-white"
             />
          </div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-tron-black transition-all duration-200 bg-tron-cyan hover:bg-white hover:text-black hover:shadow-[0_0_20px_#ffffff] clip-path-polygon">
            <span className="uppercase tracking-widest">View Pricing Plans</span>
          </button>
        </div>
      </div>
    </section>
  );
}
