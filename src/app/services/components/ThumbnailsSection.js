"use client";

import React from "react";

export default function ThumbnailsSection() {
  return (
    <section className="py-32 bg-bg-surface relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-display-lg text-white mb-4">06. THUMBNAILS</h2>
            <p className="text-text-secondary">Often more important than the video itself.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-video bg-gray-800 relative group overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-tron-cyan/20 to-purple-500/20 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black text-white drop-shadow-lg transform group-hover:scale-110 transition-transform">
                            CLICK ME
                        </span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                        12:45
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

