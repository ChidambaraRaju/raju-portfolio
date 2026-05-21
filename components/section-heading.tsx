"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number: string; // e.g., "01"
  className?: string;
}

export default function SectionHeading({ title, subtitle, number, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 text-left relative z-10 ${className}`}>
      <div className="flex items-baseline gap-4 md:gap-6 mb-2 overflow-hidden">
        {/* Technical/Industrial section index */}
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-sm md:text-base text-accent-primary font-bold tracking-widest"
        >
          // {number}
        </motion.span>
        
        {/* Main section title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-text-primary"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-sm md:text-base max-w-xl font-mono text-left tracking-wide mt-2 border-l border-accent-primary/20 pl-4 py-1"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Industrial minimalist underline border */}
      <div className="w-full h-[1px] bg-border-subtle mt-6 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.15 }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-primary origin-left"
        />
      </div>
    </div>
  );
}
