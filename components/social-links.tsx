"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles, Cpu, ArrowUpRight } from "lucide-react";

interface SocialLinksProps {
  mode?: "compact" | "labeled";
  className?: string;
}

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    url: "https://github.com/ChidambaraRaju",
    icon: Github,
    description: "Code and repositories",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chidambara-raju-g-22a152233/",
    icon: Linkedin,
    description: "Professional profile",
  },
  {
    name: "ReadyTensor",
    url: "https://app.readytensor.ai/users/juu",
    icon: Sparkles,
    description: "Publications and benchmarks",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/justjuu",
    icon: Cpu,
    description: "Models and demos",
  },
];

export default function SocialLinks({ mode = "compact", className = "" }: SocialLinksProps) {
  if (mode === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {SOCIAL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 text-text-secondary hover:text-accent-primary transition-colors"
              aria-label={item.name}
            >
              <Icon className="w-5 h-5" />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle ${className}`}>
      {SOCIAL_ITEMS.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col gap-4 bg-primary-dark p-6 hover:bg-primary-light transition-colors"
          >
            <div className="flex items-center justify-between">
              <Icon className="w-5 h-5 text-accent-primary" />
              <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" />
            </div>
            <div>
              <h3 className="text-lg text-text-primary">{item.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
