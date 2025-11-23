"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Circle, Plane } from "@react-three/drei";
import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimatedHeading";
import * as THREE from "three";

function IdentityDisc({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.1;
    meshRef.current.rotation.z = time * speed;
    innerRef.current.rotation.z = -time * speed * 1.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={scale}>
        {/* Outer Ring - Glassy */}
        <mesh ref={meshRef}>
          <torusGeometry args={[2, 0.2, 32, 100]} />
          <meshPhysicalMaterial
            color={color}
            roughness={0.2}
            metalness={0.1}
            transmission={0.6} // Glass effect
            thickness={2} // Glass thickness
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Inner Ring - Solid Light */}
        <mesh ref={innerRef}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial 
        color="#00D2FF" 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-bg-hero overflow-hidden flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          {/* TRON Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#00D2FF" />
          <pointLight position={[-10, -5, -5]} intensity={1} color="#FF9C00" />
          <fog attach="fog" args={['#050505', 5, 20]} />
          
          <IdentityDisc position={[-4, 1, -3]} color="#00D2FF" scale={0.8} speed={0.5} />
          <IdentityDisc position={[4, -1, -2]} color="#FF9C00" scale={0.6} speed={0.7} />
          <IdentityDisc position={[0, 0, -5]} color="#00D2FF" scale={1.2} speed={0.2} />
          
          <GridFloor />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            {/* Main Title - TRON Style */}
            <div className="relative">
                <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tighter mb-2 text-white drop-shadow-[0_0_15px_rgba(0,210,255,0.8)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                STITCH
                </h1>
                {/* Subtitle Glow Line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-tron-cyan to-transparent mt-2 mb-6 opacity-80"></div>
            </div>
            
            <span className="text-xl sm:text-2xl font-medium tracking-[0.3em] uppercase text-tron-cyan mt-4">
                The Editing Agency for Creators
            </span>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary mt-8 mb-12 leading-relaxed"
        >
          Your dedicated editing pod. Precise. Always-on. In your style.
        </motion.p>

        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8 }}
        >
            <button className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-tron-cyan rounded-none hover:bg-tron-cyan/10 hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white -mt-1 -ml-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white -mb-1 -mr-1"></span>
                <span className="relative text-lg tracking-widest uppercase">Book a Strategy Call</span>
            </button>
        </motion.div>
      </div>
    </section>
  );
}
