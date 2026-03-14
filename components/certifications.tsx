"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Certification } from "@/lib/content";

interface CertificationsProps {
  certifications: Certification[];
}

function CertificationCard({ certification, index }: { certification: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="h-full hover:border-accent-purple/50 hover:shadow-glow transition-all duration-300 cursor-pointer">
        <CardContent className="p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent-purple/20">
              <Award className="w-5 h-5 text-accent-purple-light" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-text-primary mb-1 hover:text-accent-purple-light transition-colors">
                {certification.title}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {certification.provider}
              </Badge>
            </div>
          </div>
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-accent-purple-light transition-colors"
          >
            View Certificate
            <ExternalLink className="w-3 h-3" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Certifications
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
