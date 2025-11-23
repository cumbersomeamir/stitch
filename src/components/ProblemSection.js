"use client";

import React, { useEffect, useRef } from "react";

import AnimatedHeading from "./ui/AnimatedHeading";

export default function ProblemSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let paper;
    import("paper").then((paperModule) => {
        paper = paperModule.default;
        if (canvasRef.current) {
            paper.setup(canvasRef.current);
            
            // Create a chaotic path representing the "Problem"
            const count = 30;
            const path = new paper.Path({
              strokeColor: '#6B4EFF',
              strokeWidth: 2,
              strokeCap: 'round'
            });
      
            // Initialize chaotic points
            for (let i = 0; i < count; i++) {
              path.add(new paper.Point(i * (window.innerWidth / count), Math.random() * 200 + 50));
            }
            path.smooth();
      
            const view = paper.view;
      
            view.onFrame = (event) => {
              // Animate points to simulate "unraveling" or "chaos"
              for (let i = 0; i < count; i++) {
                const segment = path.segments[i];
                const sine = Math.sin(event.time * 2 + i);
                segment.point.y = 150 + sine * 50; // Gentle wave motion
              }
              path.smooth();
            };
      
            const handleResize = () => {
              paper.view.viewSize = new paper.Size(window.innerWidth, 300);
            };
      
            window.addEventListener('resize', handleResize);
        }
    });

    return () => {
      // Cleanup
      window.removeEventListener('resize', () => {}); // Basic cleanup
      if (paper && paper.project) {
          paper.project.remove();
      }
    };
  }, []);

  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[300px] opacity-20 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-6 inline-block">
             <span className="px-3 py-1 rounded-full border border-error/30 bg-error/10 text-error text-sm font-medium tracking-wide uppercase mb-4 block w-fit mx-auto">
                The Bottleneck
             </span>
             <AnimatedHeading 
                text="THE PROBLEM" 
                variant="glitch" 
                className="text-display-lg text-text-primary"
             />
          </div>
          <p className="text-body-lg text-text-secondary">
            As a creator, your real job is being on camera, connecting with your audience, and growing your brand – not scrubbing through timelines and syncing audio at 2 a.m.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-subheading text-primary-1 mb-4">The Brutal Reality</h3>
            <ul className="space-y-4 text-body-md text-text-secondary">
              <li className="flex gap-3">
                <span className="text-error">•</span>
                <span><strong>Time Drain:</strong> 27% of creators spend 5–10 hours per week creating content.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-error">•</span>
                <span><strong>Consistency Killer:</strong> Managing reliable editors becomes a second job.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-error">•</span>
                <span><strong>Quality Rollercoaster:</strong> Freelancers often miss the mark on your unique style.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-3 p-8 rounded-xl border border-border-strong">
            <h3 className="text-subheading text-text-primary mb-4">Why “Just Hiring” Fails</h3>
            <div className="space-y-4">
              <div className="p-4 bg-bg-surface rounded-lg border border-border-light">
                <h4 className="text-body-medium text-text-primary mb-1">Unreliable Freelancers</h4>
                <p className="text-body-sm text-text-muted">Editors disappear mid-project or ghost during launches.</p>
              </div>
              <div className="p-4 bg-bg-surface rounded-lg border border-border-light">
                <h4 className="text-body-medium text-text-primary mb-1">Unpredictable Costs</h4>
                <p className="text-body-sm text-text-muted">Hourly billing means you never know the final invoice price.</p>
              </div>
              <div className="p-4 bg-bg-surface rounded-lg border border-border-light">
                <h4 className="text-body-medium text-text-primary mb-1">Inconsistent Style</h4>
                <p className="text-body-sm text-text-muted">Most editors can’t instantly “think like you”.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

