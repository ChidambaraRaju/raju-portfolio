"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const GROUPS: { label: string; match: string[] }[] = [
  { label: "Models", match: ["Python", "PyTorch", "Hugging Face"] },
  { label: "Agents", match: ["LangChain", "LangGraph"] },
  { label: "Systems", match: ["FastAPI", "Streamlit", "Docker", "Redis"] },
];

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  const assigned = new Set<string>();
  const groups = GROUPS.map((group) => {
    const items = group.match.filter((skill) => skills.includes(skill));
    items.forEach((item) => assigned.add(item));
    return { label: group.label, items };
  }).filter((group) => group.items.length > 0);

  const remaining = skills.filter((skill) => !assigned.has(skill));
  if (remaining.length > 0) {
    groups.push({ label: "Also", items: remaining });
  }

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="03 — Stack"
          title="Tools I ship with"
          subtitle="A short set, used across training, agents, and deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-primary-dark p-8 md:p-10"
            >
              <p className="text-sm tracking-[0.16em] uppercase text-accent-primary mb-6">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="text-xl md:text-2xl text-text-primary font-display">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
