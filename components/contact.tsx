"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Sparkles, Cpu } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Let's Connect
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in hearing about new opportunities and challenging AI projects.
          Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button size="lg" className="group" asChild>
            <a
              href="mailto:chidambararaju.g@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/ChidambaraRaju"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5 text-text-secondary" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors font-medium">
              GitHub
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://linkedin.com/in/chidambara-raju-g-22a152233/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-text-secondary" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors font-medium">
              LinkedIn
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://app.readytensor.ai/users/juu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors font-medium">
              ReadyTensor
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
          <a
            href="https://huggingface.co/justjuu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all hover:scale-105"
          >
            <Cpu className="w-5 h-5 text-text-secondary hover:text-accent-purple-light" />
            <span className="text-text-secondary hover:text-accent-purple-light transition-colors font-medium">
              Hugging Face
            </span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border-subtle text-center text-text-muted text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Chidambara Raju G. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript & Framer Motion</p>
        </motion.footer>
      </motion.div>
    </section>
  );
}
