"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";

function FloatingShape({ position, color, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.1} 
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function BackgroundOrb({ position, color }) {
    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 32, 32]} position={position} scale={2}>
                <meshStandardMaterial 
                    color={color} 
                    transparent 
                    opacity={0.05} 
                    roughness={0} 
                />
            </Sphere>
        </Float>
    )
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-bg-hero overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          {/* Brighter lighting setup */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#6B4EFF" />
          <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2} />
          
          <FloatingShape position={[-3, 1, -2]} color="#6B4EFF" scale={0.9} />
          <FloatingShape position={[3.5, -1, -3]} color="#27E6F5" scale={0.7} />
          <FloatingShape position={[0, -2.5, -1]} color="#FF66C4" scale={0.6} />
          
          <BackgroundOrb position={[0, 0, -5]} color="#1A1A24" />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            {/* Main Title - Solid White, High Contrast */}
            <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter mb-2 text-white drop-shadow-[0_0_30px_rgba(107,78,255,0.5)]">
              STITCH
            </h1>
            <span className="text-xl sm:text-3xl font-medium tracking-[0.2em] uppercase text-text-secondary mt-4 border-t border-white/10 pt-6">
                Your Always-On Editing Team
            </span>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary mt-8 mb-12 leading-relaxed"
        >
          We protect your style and free your time, so you can create more and grow faster.
        </motion.p>

        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.8, type: "spring" }}
        >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(107,78,255,0.6)]">
                <span className="relative text-lg">Book a Free Strategy Call</span>
                <svg className="relative w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
        </motion.div>
      </div>
    </section>
  );
}

