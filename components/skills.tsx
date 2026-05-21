"use client";

import { motion } from "framer-motion";
import {
  Code,
  Flame,
  Smile,
  Link as LinkIcon,
  GitGraph,
  MonitorPlay,
  Zap,
  Box,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";

// Skill to icon mapping
const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Python": Code,
  "PyTorch": Flame,
  "Hugging Face": Smile,
  "LangChain": LinkIcon,
  "LangGraph": GitGraph,
  "Streamlit": MonitorPlay,
  "FastAPI": Zap,
  "Docker": Box,
};

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          number="02" 
          title="Tech Stack" 
          subtitle="Engineering capabilities & deep learning technologies" 
        />

        {/* Elegant flowing pill/tag wrap layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="flex flex-wrap gap-4 justify-start items-center relative z-10"
        >
          {skills.map((skill) => {
            const Icon = skillIcons[skill] || Code;
            return (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
                  },
                }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group cursor-pointer flex items-center gap-3 px-6 py-4 rounded-xl border border-border-subtle bg-primary-light/10 hover:bg-accent-primary/5 hover:border-accent-primary/30 transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                {/* Visual active tech indicator dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tech Icon */}
                <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors duration-300" />
                
                {/* Skill Name */}
                <span className="font-mono text-sm md:text-base font-semibold tracking-wide text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {skill}
                </span>

                {/* Ambient glow in hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-radial from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
