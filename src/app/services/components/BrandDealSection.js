"use client";

import React from "react";
import Image from "next/image";

export default function BrandDealSection() {
  return (
    <section className="py-32 bg-white text-bg-dark-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-6">
                    Monetization
                </div>
                <h2 className="text-display-lg text-black mb-6">
                  04. BRAND DEAL EDITING
                </h2>
                <p className="text-xl font-medium text-gray-600 mb-8 leading-relaxed">
                  Creators earn serious money from brand deals — but only if the edit looks professional and the brand is satisfied.
                </p>
                
                <ul className="space-y-4">
                    {[
                        "Brand-safe transitions",
                        "Mandatory script placement",
                        "Logo integrations",
                        "Clean & Raw deliverables"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg text-gray-800 font-medium">
                            <span className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs rounded-sm flex-shrink-0">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-2xl border border-gray-200 relative">
                    <Image 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                        alt="Brand Deal Meeting"
                        fill
                        className="object-cover grayscale opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-black text-black mb-2">SPONSOR</h3>
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Integrated Segment</p>
                        </div>
                    </div>
                    
                    {/* Mock UI Elements */}
                    <div className="absolute bottom-8 left-8 right-8 h-12 bg-black/90 flex items-center px-4 rounded text-white text-sm">
                        <span className="text-green-400 mr-2">●</span> Client Approved
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

