"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Certification } from "@/lib/content";
import SectionHeading from "@/components/section-heading";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          number="03" 
          title="Certifications" 
          subtitle="Accredited technical credentials in Artificial Intelligence" 
        />

        {/* Elegant Timeline / Compact List Layout */}
        <div className="relative border-l border-border-subtle pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
          
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="relative group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-border-subtle bg-primary-light/5 hover:bg-primary-light/20 hover:border-accent-primary/20 transition-all duration-300 shadow-sm"
            >
              {/* Vertical timeline node indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary-dark bg-primary-dark flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary group-hover:bg-accent-secondary transition-colors duration-300" />
              </div>

              {/* Certification info */}
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2.5 rounded-lg border border-border-subtle bg-primary-dark/80 text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary/20 transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  {/* Provider badge */}
                  <div className="mt-1.5">
                    <Badge variant="secondary" className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                      {cert.provider}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* External verify link */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-primary font-mono uppercase tracking-wider font-semibold border border-border-subtle group-hover:border-accent-primary/20 bg-primary-dark/50 px-4 py-2 rounded-lg transition-all duration-300"
              >
                <span>Verify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
              
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
