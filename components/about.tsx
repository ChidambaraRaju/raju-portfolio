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
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="02 — About"
          title="How I work"
          subtitle="From experiment to a system someone can actually use."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 font-display italic text-2xl md:text-3xl leading-snug text-text-primary"
          >
            Bridging foundational research and production systems.
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-8"
          >
            <div className="markdown-content max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: () => null,
                  h2: ({ children }) => (
                    <h2 className="font-display text-2xl text-text-primary mb-3 mt-8">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg text-text-primary mb-2 mt-6">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-text-secondary leading-relaxed mb-4 text-base">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4 ml-1">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-text-secondary leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-text-primary font-medium">{children}</strong>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary-light border-b border-accent-primary/40 hover:border-accent-primary-light"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
