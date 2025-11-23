"use client";

import React from "react";

export default function PodModelSection() {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="text-display-lg text-black mb-6">07. YOUR PERSONAL POD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Instead of freelancers, you get a dedicated unit.
            </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {[
                { role: "Lead Editor", desc: "Knows your style better than you." },
                { role: "Second Editor", desc: "Handles volume and cutdowns." },
                { role: "Backup", desc: "Overflow capacity on standby." },
                { role: "Manager", desc: "Your single point of contact." },
            ].map((member, i) => (
                <div key={i} className="text-center group">
                    <div className="w-24 h-24 bg-black rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                        {i + 1}
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-2">{member.role}</h3>
                    <p className="text-sm text-gray-500">{member.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

