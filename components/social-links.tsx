"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles, Cpu, ExternalLink } from "lucide-react";

interface SocialLinksProps {
  mode?: "compact" | "labeled";
  className?: string;
}

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    url: "https://github.com/ChidambaraRaju",
    icon: Github,
    description: "Code & Contributions",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chidambara-raju-g-22a152233/",
    icon: Linkedin,
    description: "Professional Network",
  },
  {
    name: "ReadyTensor",
    url: "https://app.readytensor.ai/users/juu",
    icon: Sparkles,
    description: "AI Benchmarks & Publications",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/justjuu",
    icon: Cpu,
    description: "Open Source AI Models",
  },
];

export default function SocialLinks({ mode = "compact", className = "" }: SocialLinksProps) {
  if (mode === "compact") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {SOCIAL_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group p-3 rounded-lg border border-border-subtle bg-primary-light/40 hover:bg-accent-primary/5 hover:border-accent-primary/30 transition-all duration-300"
              aria-label={item.name}
            >
              <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors duration-300" />
              
              {/* Modern minimalist tooltip */}
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-primary-light border border-border-subtle text-[10px] uppercase tracking-wider font-semibold font-display text-text-secondary opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl scale-90 group-hover:scale-100 whitespace-nowrap z-50">
                {item.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full ${className}`}>
      {SOCIAL_ITEMS.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col p-5 rounded-xl border border-border-subtle bg-primary-light/20 hover:bg-primary-light/50 hover:border-accent-primary/20 hover:shadow-2xl hover:shadow-accent-primary/5 group transition-all duration-300 text-left relative overflow-hidden"
          >
            {/* Visual indicator line on top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-lg border border-border-subtle bg-primary-dark/80 group-hover:border-accent-primary/20 group-hover:bg-accent-primary/5 transition-all duration-300">
                <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors duration-300" />
              </div>
              <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-primary-light opacity-50 group-hover:opacity-100 transition-all duration-300" />
            </div>
            
            <h3 className="font-display font-bold text-text-primary text-base group-hover:text-accent-primary transition-colors duration-300">
              {item.name}
            </h3>
            
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              {item.description}
            </p>
          </motion.a>
        );
      })}
    </div>
  );
}
