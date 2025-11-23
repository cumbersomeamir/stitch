"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";

const faqs = [
  {
    q: "Will my content still feel like 'me'?",
    a: "Yes. The Style Bible ensures 100% consistency. We document your specific creative style before editing a single frame."
  },
  {
    q: "How is this different from a marketplace?",
    a: "Marketplaces offer random freelancers. Stitch provides a dedicated pod (team) with shared knowledge of your brand."
  },
  {
    q: "Can I scale up later?",
    a: "The system is flexible. You can increase volume or add platforms at any time without starting over."
  },
  {
    q: "Do you work with brands?",
    a: "Yes. We execute brand integrations seamlessly, adhering to strict compliance guidelines."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-32 bg-bg-surface relative">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-20">
           <AnimatedHeading 
              text="FAQ" 
              className="text-display-lg text-white mb-4"
           />
           <p className="text-tron-cyan uppercase tracking-widest text-sm">Common Questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 bg-white/5 overflow-hidden hover:border-tron-cyan/50 transition-colors"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="text-white font-mono uppercase tracking-wide group-hover:text-tron-cyan transition-colors">
                    <span className="text-tron-cyan mr-4 opacity-50">Q_0{index + 1} //</span>
                    {faq.q}
                </span>
                <span className={`text-tron-cyan transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 border-t border-white/5">
                       <div className="text-body-md text-text-secondary font-mono pl-12 border-l border-tron-cyan/30">
                            <span className="text-tron-orange mr-2">A_0{index + 1} //</span>
                            {faq.a}
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
