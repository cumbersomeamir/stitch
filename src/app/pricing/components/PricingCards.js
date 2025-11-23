"use client";

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    tagline: "For Emerging Creators",
    price: "Basic", // Placeholder, usually dollar amount
    features: [
      "4 Long-Form Videos",
      "8 Short-Form Videos",
      "Style Bible Creation",
      "Slack/Discord Channel",
      "5-7 Day Turnaround"
    ],
    color: "border-white/20",
    bg: "bg-white/5",
    glow: "shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    buttonColor: "bg-white/10 hover:bg-white/20",
    details: [
        "Creators growing 10k → 50k",
        "Startup founders",
        "Coaches testing content"
    ]
  },
  {
    name: "Pro",
    tagline: "For Serious Scaling",
    price: "Standard",
    popular: true,
    features: [
      "8 Long-Form Videos",
      "20 Short-Form Videos",
      "Advanced Motion Graphics",
      "Priority Communication",
      "3-5 Day Turnaround"
    ],
    color: "border-tron-cyan",
    bg: "bg-tron-cyan/5",
    glow: "shadow-[0_0_40px_rgba(0,210,255,0.2)]",
    buttonColor: "bg-tron-cyan hover:bg-white hover:text-black text-black",
    details: [
        "Scaling 50k → 1M",
        "Podcasters (Audio+Video)",
        "High-velocity growth"
    ]
  },
  {
    name: "Growth",
    tagline: "Full Media Brand",
    price: "Elite",
    features: [
      "12-16 Long-Form Videos",
      "40-60 Short-Form Videos",
      "Full 6-Person Pod",
      "Weekly Creative Calls",
      "48h Turnaround"
    ],
    color: "border-tron-orange",
    bg: "bg-tron-orange/5",
    glow: "shadow-[0_0_40px_rgba(255,156,0,0.2)]",
    buttonColor: "bg-tron-orange hover:bg-white hover:text-black text-black",
    details: [
        "Daily YouTubers",
        "Multi-channel brands",
        "1M+ Followers"
    ]
  }
];

export default function PricingCards() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-2xl border ${plan.color} ${plan.bg} ${plan.glow} backdrop-blur-xl flex flex-col h-full group hover:scale-[1.02] transition-transform duration-300`}
          >
            {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tron-cyan text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_#00D2FF]">
                    Most Popular
                </div>
            )}

            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide font-display">{plan.name}</h3>
            <p className="text-sm text-text-secondary mb-8 font-mono uppercase tracking-widest">{plan.tagline}</p>
            
            {/* Output Stats */}
            <div className="space-y-4 mb-8 border-b border-white/10 pb-8">
                {plan.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <span className="text-white font-medium">{feat.split(' ').slice(1).join(' ')}</span>
                        <span className={`text-xl font-bold ${plan.name === 'Pro' ? 'text-tron-cyan' : plan.name === 'Growth' ? 'text-tron-orange' : 'text-white'}`}>
                            {feat.split(' ')[0]}
                        </span>
                    </div>
                ))}
            </div>

            {/* Feature List */}
            <ul className="space-y-4 mb-12 flex-1">
                {plan.features.slice(2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full ${plan.name === 'Pro' ? 'bg-tron-cyan' : plan.name === 'Growth' ? 'bg-tron-orange' : 'bg-white'}`} />
                        {feat}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all duration-200 ${plan.buttonColor}`}>
                Select Plan
            </button>
            
            {/* Target Audience */}
            <div className="mt-6 pt-6 border-t border-white/5 text-xs text-text-muted">
                <p className="uppercase tracking-widest mb-2">Best For:</p>
                <p>{plan.details.join(' • ')}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

