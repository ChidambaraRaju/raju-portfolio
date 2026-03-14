"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
          Tech Stack
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill] || Code;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center cursor-pointer hover:border-accent-purple/50 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent-purple/5 group h-full">
                  <Icon className="w-6 h-6 mx-auto mb-3 text-text-secondary group-hover:text-accent-purple-light transition-colors" />
                  <span className="text-lg font-medium text-text-secondary group-hover:text-accent-purple-light transition-colors">
                    {skill}
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
