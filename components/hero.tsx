"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import SocialLinks from "@/components/social-links";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  // Animation variants for staggering text entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden pt-20">
      {/* Refened Geometric Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark z-0" />
      
      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      {/* Asymmetric Core Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Headline & Bio Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary text-[11px] uppercase tracking-widest font-semibold font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Large Editorial Name Title */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-text-primary uppercase leading-[1.05] mb-6"
          >
            Hi, I'm <br className="hidden sm:inline" />
            <span className="text-gradient text-glow">Chidambara Raju G</span>
          </motion.h1>

          {/* Subtitle / Role Tag */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-accent-primary uppercase font-bold">
              // Applied AI Engineer
            </span>
            <div className="w-12 h-[1px] bg-accent-primary/30" />
          </motion.div>

          {/* Modern Clean Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-text-secondary mb-10 max-w-xl leading-relaxed text-center lg:text-left font-sans"
          >
            Designing and building robust, production-grade AI systems utilizing modern large language models, structured agent architectures, and specialized neural network pipelines.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <Button size="lg" className="group" asChild>
              <a href="/projects" className="flex items-center gap-2.5 justify-center">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact" className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div variants={itemVariants} className="pt-2 border-t border-border-subtle/50 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Connect:</span>
            <SocialLinks mode="compact" />
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Engineered AI Interactive Neural Mesh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative select-none z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Interactive Atmospheric Glows */}
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.25 : 1,
              opacity: isHovered ? 0.35 : 0.15,
            }}
            transition={{ duration: 0.8 }}
            className="absolute w-80 h-80 rounded-full bg-accent-primary/20 blur-3xl -z-10"
          />
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.35 : 1,
              opacity: isHovered ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.8 }}
            className="absolute w-80 h-80 rounded-full bg-accent-secondary/20 blur-3xl -z-10 translate-x-12 translate-y-12"
          />

          {/* Futuristic Interactive Artwork Container */}
          <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center">
            
            {/* Outer Orbit Ring */}
            <motion.div 
              animate={{ rotate: isHovered ? -360 : -180 }}
              transition={{ duration: isHovered ? 12 : 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-[92%] h-[92%] rounded-full border border-dashed border-accent-secondary/20 opacity-30" 
            />

            {/* Middle Orbit Ring */}
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 180 }}
              transition={{ duration: isHovered ? 10 : 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-accent-primary/10 opacity-40" 
            />

            {/* Neural Net Nodes SVG Vector Artwork */}
            <svg 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Layer 1: Clockwise Rotating Crystalline Lattice */}
              <motion.g 
                animate={{ rotate: isHovered ? 360 : 120 }}
                transition={{ duration: isHovered ? 25 : 50, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                {/* Connecting wireframe lines */}
                <path d="M200 90 L295 145 L295 255 L200 310 L105 255 L105 145 Z" stroke="url(#glowGrad)" strokeWidth="0.75" className="opacity-30" />
                <path d="M200 140 L252 170 L252 230 L200 260 L148 230 L148 170 Z" stroke="url(#glowGrad)" strokeWidth="0.5" className="opacity-20" />
                
                {/* Spokes connecting outer to inner */}
                <path d="M200 90 L200 140 M295 145 L252 170 M295 255 L252 230 M200 310 L200 260 M105 255 L148 230 M105 145 L148 170" stroke="url(#glowGrad)" strokeWidth="0.75" className="opacity-25" />

                {/* Active pulse streams (lasers shooting along paths) */}
                <motion.path 
                  d="M200 90 L295 145 L295 255 L200 310 L105 255 L105 145 Z" 
                  stroke="url(#glowGrad)" 
                  strokeWidth="1.5" 
                  strokeDasharray="40 120"
                  animate={{ strokeDashoffset: [0, -320] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="opacity-70 filter drop-shadow-[0_0_2px_#10b981]"
                />
                
                <motion.path 
                  d="M148 170 L200 140 L252 170 L252 230 L200 260 L148 230 Z" 
                  stroke="url(#glowGrad)" 
                  strokeWidth="1.25" 
                  strokeDasharray="20 80"
                  animate={{ strokeDashoffset: [0, 200] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                  className="opacity-60"
                />

                {/* Spokes pulse paths */}
                <motion.path 
                  d="M200 90 L200 140 M295 255 L252 230 M105 145 L148 170" 
                  stroke="url(#glowGrad)" 
                  strokeWidth="1" 
                  strokeDasharray="10 40"
                  animate={{ strokeDashoffset: [0, -50] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="opacity-80"
                />

                {/* Nodes with pulsing subtle size changes */}
                <circle cx="200" cy="90" r="4.5" fill="#10b981" />
                <circle cx="295" cy="145" r="4.5" fill="#06b6d4" />
                <circle cx="295" cy="255" r="4.5" fill="#10b981" />
                <circle cx="200" cy="310" r="4.5" fill="#06b6d4" />
                <circle cx="105" cy="255" r="4.5" fill="#10b981" />
                <circle cx="105" cy="145" r="4.5" fill="#06b6d4" />

                {/* Inner Hex Nodes */}
                <circle cx="200" cy="140" r="3.5" fill="#06b6d4" />
                <circle cx="252" cy="170" r="3.5" fill="#10b981" />
                <circle cx="252" cy="230" r="3.5" fill="#06b6d4" />
                <circle cx="200" cy="260" r="3.5" fill="#10b981" />
                <circle cx="148" cy="230" r="3.5" fill="#06b6d4" />
                <circle cx="148" cy="170" r="3.5" fill="#10b981" />
              </motion.g>

              {/* Layer 2: Counter-Clockwise Floating Active Satellite Data Packets */}
              <motion.g 
                animate={{ rotate: isHovered ? -360 : -90 }}
                transition={{ duration: isHovered ? 18 : 36, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                {/* Orbit paths */}
                <circle cx="200" cy="200" r="160" stroke="url(#glowGrad)" strokeWidth="0.5" className="opacity-10" />
                <circle cx="200" cy="200" r="120" stroke="url(#glowGrad)" strokeWidth="0.5" className="opacity-15" strokeDasharray="4 8" />

                {/* Satellites / Drifting Data Blocks */}
                <g style={{ transform: "translate(0, 0)" }}>
                  <circle cx="200" cy="40" r="6" fill="#10b981" className="filter drop-shadow-[0_0_4px_#10b981]" />
                  <circle cx="200" cy="40" r="12" stroke="#10b981" strokeWidth="0.5" className="opacity-20 animate-ping" />
                </g>

                <g style={{ transform: "translate(0, 0)" }}>
                  <circle cx="80" cy="200" r="5" fill="#06b6d4" className="filter drop-shadow-[0_0_4px_#06b6d4]" />
                  <circle cx="80" cy="200" r="10" stroke="#06b6d4" strokeWidth="0.5" className="opacity-25" />
                </g>

                <g style={{ transform: "translate(0, 0)" }}>
                  <circle cx="320" cy="200" r="7" fill="#fbbf24" className="filter drop-shadow-[0_0_6px_#fbbf24]" />
                  <circle cx="320" cy="200" r="14" stroke="#fbbf24" strokeWidth="0.75" className="opacity-30" />
                  <circle cx="320" cy="200" r="22" stroke="#fbbf24" strokeWidth="0.25" className="opacity-10 animate-pulse" />
                </g>
              </motion.g>

              {/* Layer 3: Central High-Frequency AI Processor Core */}
              <g style={{ transformOrigin: "200px 200px" }}>
                <circle cx="200" cy="200" r="45" fill="url(#glowGrad)" className="opacity-5 blur-sm" />
                
                {/* Expanding sonar waves emitting from the core */}
                <motion.circle 
                  cx="200" 
                  cy="200" 
                  animate={{ r: [12, 55], opacity: [0.8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  stroke="url(#glowGrad)" 
                  strokeWidth="0.75" 
                  fill="none" 
                />
                <motion.circle 
                  cx="200" 
                  cy="200" 
                  animate={{ r: [12, 40], opacity: [0.6, 0] }}
                  transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
                  stroke="url(#glowGrad)" 
                  strokeWidth="0.5" 
                  fill="none" 
                />

                <circle cx="200" cy="200" r="24" fill="#0a0a0f" stroke="url(#glowGrad)" strokeWidth="1" />
                
                <motion.circle 
                  cx="200" 
                  cy="200" 
                  r="14" 
                  animate={{ scale: isHovered ? [1, 1.18, 1] : [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  fill="url(#glowGrad)" 
                  className="opacity-40" 
                  style={{ filter: "url(#glow)" }}
                />
                
                <circle cx="200" cy="200" r="5" fill="#ffffff" className="filter drop-shadow-[0_0_3px_#ffffff]" />
              </g>
            </svg>

            {/* Floating Terminal-style HUD Chips */}
            <motion.div
              animate={{ 
                y: [-4, 4, -4],
                x: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-2 sm:left-6 px-2 py-0.5 rounded border border-accent-primary/20 bg-primary-dark/95 backdrop-blur text-[9px] font-mono text-accent-primary/90 tracking-widest shadow-lg shadow-accent-primary/5 select-none"
            >
              [AGNT_CORE_v1.2]
            </motion.div>

            <motion.div
              animate={{ 
                y: [4, -4, 4],
                x: [0, -3, 0]
              }}
              transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-2 sm:right-6 px-2 py-0.5 rounded border border-accent-secondary/20 bg-primary-dark/95 backdrop-blur text-[9px] font-mono text-accent-secondary/90 tracking-widest shadow-lg shadow-accent-secondary/5 select-none"
            >
              EMBED_DIM:1536
            </motion.div>

            <motion.div
              animate={{ 
                y: [3, -3, 3],
                x: [0, 2, 0]
              }}
              transition={{ duration: 5.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-2 sm:left-8 px-2 py-0.5 rounded border border-border-subtle bg-primary-dark/95 backdrop-blur text-[9px] font-mono text-text-secondary/80 tracking-widest shadow-lg select-none"
            >
              y = σ(Wx + b)
            </motion.div>

            <motion.div
              animate={{ 
                y: [-3, 3, -3],
                x: [0, -2, 0]
              }}
              transition={{ duration: 6.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-2 sm:right-10 px-2 py-0.5 rounded border border-accent-primary/10 bg-primary-dark/95 backdrop-blur text-[9px] font-mono text-accent-primary/80 tracking-widest shadow-lg select-none flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
              SYSTEM_OK
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modern Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-border-subtle relative overflow-hidden">
          <motion.div
            animate={{ y: [-24, 24] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-6 bg-accent-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
