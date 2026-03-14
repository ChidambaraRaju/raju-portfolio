"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-2xl p-8 md:p-12 border border-border-subtle"
        >
          <div className="markdown-content prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold text-gradient mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold text-text-primary mb-3 mt-6">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold text-text-primary mb-2 mt-4">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4 ml-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-text-secondary leading-relaxed">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-accent-purple-light font-semibold">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-accent-purple-light transition-colors">
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
