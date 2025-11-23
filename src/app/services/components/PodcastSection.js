"use client";

import React from "react";

export default function PodcastSection() {
  return (
    <section className="py-32 bg-bg-dark-hero relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <h2 className="text-display-lg text-white mb-6">
                  05. PODCAST <span className="text-gray-500">AUDIO & VIDEO</span>
                </h2>
                <p className="text-lead-statement mb-8 text-text-secondary">
                  Podcasts are exploding. Editing them takes forever. We handle full episodes, clips, and audio mastering.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10">
                        <h4 className="text-white font-bold mb-1">Video</h4>
                        <p className="text-xs text-text-muted">YouTube • Clips • Reels</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10">
                        <h4 className="text-white font-bold mb-1">Audio</h4>
                        <p className="text-xs text-text-muted">Spotify • Apple • Mastering</p>
                    </div>
                </div>
            </div>

            {/* Visualizer Graphic */}
            <div className="flex-1 w-full h-64 bg-black border border-white/10 flex items-center justify-center gap-1 px-8">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-3 bg-white rounded-full animate-pulse" 
                        style={{ 
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

