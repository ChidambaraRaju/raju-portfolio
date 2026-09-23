"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="05 — Contact"
          title="Let’s build something serious."
          subtitle="Open to applied AI roles, collaborations, and a proper conversation about the work."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <a
            href="mailto:chidambararaju.g@gmail.com"
            className="group inline-flex items-center gap-3 font-display text-3xl sm:text-4xl md:text-5xl text-text-primary hover:text-accent-primary-light transition-colors"
          >
            chidambararaju.g@gmail.com
            <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 text-accent-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <SocialLinks mode="labeled" />
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Chidambara Raju G</p>
          <p>Applied AI Engineer</p>
        </footer>
      </div>
    </section>
  );
}
