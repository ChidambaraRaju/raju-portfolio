"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionHeading from "@/components/section-heading";

interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration line */}
      <div className="absolute right-0 top-0 w-72 h-[1px] bg-gradient-to-l from-accent-primary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          number="01" 
          title="About Me" 
          subtitle="Applied AI engineering & core systems methodology" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Industrial Pull-Quote & Blueprint (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Visual Pull-Quote Card */}
            <div className="p-6 rounded-xl border border-border-subtle bg-primary-light/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-accent-primary" />
              
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent-primary font-bold">
                // System Philosophy
              </span>
              
              <blockquote className="mt-4 text-lg md:text-xl font-display font-medium text-text-primary leading-relaxed uppercase">
                "Bridging foundational research and production systems."
              </blockquote>
            </div>

            {/* Minimalist Interactive Agent Node Diagram */}
            <div className="p-6 rounded-xl border border-border-subtle bg-primary-light/5 flex flex-col justify-between h-48 relative">
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                Methodology Blueprint
              </span>
              
              <div className="flex justify-between items-center my-auto px-4">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg border border-border-subtle bg-primary-dark flex items-center justify-center text-[10px] font-mono font-bold text-text-secondary">IN</div>
                  <span className="font-mono text-[8px] text-text-muted uppercase">Data</span>
                </div>

                <div className="h-[1px] flex-1 bg-dashed border-t border-border-subtle relative mx-2">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
                </div>

                <div className="flex flex-col items-center gap-1.5 relative">
                  <div className="w-10 h-10 rounded-lg border border-accent-primary/20 bg-accent-primary/5 flex items-center justify-center text-[10px] font-mono font-bold text-accent-primary animate-pulse-slow">
                    AGENT
                  </div>
                  <span className="font-mono text-[8px] text-accent-primary uppercase tracking-widest font-bold">LLM Pipeline</span>
                </div>

                <div className="h-[1px] flex-1 bg-dashed border-t border-border-subtle relative mx-2">
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-secondary animate-ping" style={{ animationDelay: '1s' }} />
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-lg border border-border-subtle bg-primary-dark flex items-center justify-center text-[10px] font-mono font-bold text-text-secondary">OUT</div>
                  <span className="font-mono text-[8px] text-text-muted uppercase">Result</span>
                </div>
              </div>
              
              <div className="absolute bottom-3 right-4 font-mono text-[9px] text-text-muted uppercase">SYS.v2.6</div>
            </div>
          </motion.div>

          {/* Right Column: Markdown Content (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="glass-strong rounded-xl p-8 md:p-10 border border-border-subtle shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/2 rounded-full blur-2xl pointer-events-none" />
              
              <div className="markdown-content prose prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold font-display text-gradient mb-4 uppercase tracking-tight">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg font-semibold text-text-primary mb-3 mt-6 border-b border-border-subtle pb-1 uppercase">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-base font-semibold text-text-primary mb-2 mt-4 font-mono">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-text-secondary leading-relaxed mb-4 text-sm md:text-base font-sans">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4 ml-2 text-sm md:text-base">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-text-secondary leading-relaxed pl-1">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-accent-primary-light font-bold">{children}</strong>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-primary-light transition-all border-b border-dashed border-accent-primary hover:border-solid duration-200">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
