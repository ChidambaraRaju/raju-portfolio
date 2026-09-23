"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Certification } from "@/lib/content";
import SectionHeading from "@/components/section-heading";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="04 — Credentials"
          title="Certifications"
          subtitle="Formal work in agents, fine-tuning, retrieval, and deep learning."
        />

        <div className="border-t border-border-subtle">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.link}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group flex items-start justify-between gap-6 border-b border-border-subtle py-6"
            >
              <div>
                <h3 className="text-lg md:text-xl text-text-primary group-hover:text-accent-primary-light transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{cert.provider}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-text-muted group-hover:text-accent-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
