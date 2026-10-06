import { ArrowUpRight } from "lucide-react";
import { Certification } from "@/lib/content";

const GROUPS: { label: string; match: string[] }[] = [
  { label: "Models", match: ["Python", "PyTorch", "Hugging Face"] },
  { label: "Agents", match: ["LangChain", "LangGraph"] },
  { label: "Systems", match: ["FastAPI", "Streamlit", "Docker", "Redis"] },
];

interface ToolkitProps {
  skills: string[];
  certifications: Certification[];
}

export default function Toolkit({ skills, certifications }: ToolkitProps) {
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
    <section id="stack" className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-ink-raised p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg md:text-3xl">
            Tools I ship with
          </h2>
          <p className="mt-2 text-fg-muted">
            A short set, used across training, agents, and deployment.
          </p>

          <dl className="mt-8 divide-y divide-line border-t border-line">
            {groups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center">
                <dt className="w-24 shrink-0 text-sm text-fg-muted">{group.label}</dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line-strong bg-fg/[0.04] px-3.5 py-1.5 text-sm text-fg"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="certifications" className="rounded-3xl border border-line bg-ink-raised p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg md:text-3xl">
            Certifications
          </h2>
          <p className="mt-2 text-fg-muted">
            Formal work in agents, fine-tuning, retrieval, and deep learning.
          </p>

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.link}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-6 py-4"
                >
                  <span>
                    <span className="plasma-sweep block text-base font-medium leading-snug">
                      {cert.title}
                    </span>
                    <span className="mt-1 block text-sm text-fg-muted">{cert.provider}</span>
                  </span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-fg-faint transition-colors group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
