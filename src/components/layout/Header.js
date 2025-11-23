"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-10 h-10">
            <Image 
                src="/stitch-logo.png" 
                alt="Stitch Logo"
                fill
                className="object-contain"
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-tron-cyan transition-colors ${
                pathname === link.href ? "text-tron-cyan" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/pricing">
            <button className="px-6 py-2 border border-tron-cyan/50 text-tron-cyan font-bold uppercase text-xs tracking-widest hover:bg-tron-cyan hover:text-black transition-all">
                Start Now
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button (Simple Placeholder) */}
        <button className="md:hidden text-white">
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </header>
  );
}

