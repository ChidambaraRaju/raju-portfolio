"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import SocialLinks from "@/components/social-links";

export default function Hero() {
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
                <span>Explore Systems</span>
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

        {/* Right Side: Visual Engineered AI Rotating Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative select-none z-10"
        >
          {/* Futuristic geometric rotation */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Glowing Aura Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent-primary/20 animate-spin opacity-20" style={{ animationDuration: '30s' }} />

            {/* Neural Net Nodes SVG Vector Artwork */}
            <svg 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-accent-primary opacity-80 animate-pulse-slow"
            >
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Central Active System nodes */}
              <motion.g 
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                {/* Connecting wireframe lines */}
                <path d="M200 60 L100 150 L100 250 L200 340 L300 250 L300 150 Z" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="5 5" className="opacity-40" />
                <path d="M200 60 L200 340 M100 150 L300 250 M100 250 L300 150" stroke="url(#glowGrad)" strokeWidth="0.75" className="opacity-20" />
                <circle cx="200" cy="200" r="110" stroke="url(#glowGrad)" strokeWidth="0.5" className="opacity-30" />

                {/* Nodes */}
                <circle cx="200" cy="60" r="4" fill="#10b981" />
                <circle cx="100" cy="150" r="4" fill="#06b6d4" />
                <circle cx="100" cy="250" r="4" fill="#10b981" />
                <circle cx="200" cy="340" r="4" fill="#06b6d4" />
                <circle cx="300" cy="250" r="4" fill="#10b981" />
                <circle cx="300" cy="150" r="4" fill="#06b6d4" />
              </motion.g>

              {/* Core central glowing node */}
              <motion.g
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle cx="200" cy="200" r="30" fill="url(#glowGrad)" className="opacity-10" />
                <circle cx="200" cy="200" r="12" fill="url(#glowGrad)" className="opacity-40" />
                <circle cx="200" cy="200" r="4" fill="#ffffff" />
              </motion.g>

              {/* Data streams floating around */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle cx="200" cy="200" r="140" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="30 180" className="opacity-60" />
                <circle cx="200" cy="200" r="160" stroke="url(#glowGrad)" strokeWidth="0.75" strokeDasharray="60 200" className="opacity-30" />
              </motion.g>
            </svg>
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
