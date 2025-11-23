"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-tron-cyan/50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="relative w-12 h-12 block mb-6">
                <Image 
                    src="/stitch-logo.png" 
                    alt="Stitch Logo"
                    fill
                    className="object-contain"
                />
            </Link>
            <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
              Your always-on editing team. We turn raw footage into a consistent, high-velocity content engine—in your style.
            </p>
            <div className="flex gap-4">
                {["Twitter", "Instagram", "YouTube", "LinkedIn"].map((social) => (
                    <a key={social} href="#" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-tron-cyan transition-colors">
                        {social}
                    </a>
                ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Platform</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="/services" className="hover:text-tron-cyan transition-colors">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-tron-cyan transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-tron-cyan transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-tron-cyan transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono">
          <p>&copy; {new Date().getFullYear()} Stitch Agency. All rights reserved.</p>
          <p>Designed for Creators.</p>
        </div>
      </div>
    </footer>
  );
}

