"use client";

import React from "react";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 210, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 210, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
        }} 
      />
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-tron-cyan/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-tron-orange/5 blur-[150px] rounded-full" />
    </div>
  );
}

