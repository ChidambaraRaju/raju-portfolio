"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute left-0 bottom-0 w-72 h-[1px] bg-gradient-to-r from-accent-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          number="04" 
          title="Contact" 
          subtitle="Collaborations, architectures & opportunities" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Big Pitch Header & CTA (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight tracking-tight text-text-primary mb-6">
              Let's Build <br className="hidden lg:inline" />
              Something <span className="text-gradient">Serious</span>.
            </h3>
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-md">
              I am always keen on architecting state-of-the-art AI systems, solving complex pipeline constraints, and pushing the boundaries of autonomous agent setups. Let's schedule a deep-dive call.
            </p>

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="mailto:chidambararaju.g@gmail.com"
                className="flex items-center gap-3 justify-center"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
            </Button>
          </motion.div>

          {/* Right Panel: Reusable Social Links in Labeled Mode (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <SocialLinks mode="labeled" />
          </div>

        </div>

        {/* Integrated Clean Industrial Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted uppercase tracking-widest"
        >
          <div>
            &copy; {new Date().getFullYear()} Chidambara Raju G. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js & Framer Motion</span>
            <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
