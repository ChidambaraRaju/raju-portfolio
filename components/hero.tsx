"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Sparkles, ExternalLink, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/90 to-primary-dark" />

      {/* Animated glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-accent-purple-light text-sm font-medium">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient text-glow whitespace-nowrap">Hi, I'm Chidambara Raju G</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-accent-purple-light mb-4 text-glow"
        >
          Applied AI Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          Building production-ready AI systems with LLMs and Agentic AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" className="group">
            <a href="/projects" className="flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/ChidambaraRaju"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors text-sm font-medium">
              GitHub
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://linkedin.com/in/chidambara-raju-g-22a152233/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors text-sm font-medium">
              LinkedIn
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://app.readytensor.ai/users/juu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-110 text-sm font-medium text-text-secondary"
            aria-label="ReadyTensor"
          >
            <Sparkles className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors">ReadyTensor</span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://huggingface.co/justjuu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-110"
            aria-label="Hugging Face"
          >
            <Cpu className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors text-sm font-medium">
              Hugging Face
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border-subtle rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent-purple rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
