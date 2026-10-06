import { Github, Linkedin, Sparkles, Cpu, ArrowUpRight } from "lucide-react";

interface SocialLinksProps {
  mode?: "compact" | "labeled";
  className?: string;
}

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    url: "https://github.com/ChidambaraRaju",
    icon: Github,
    description: "Code and repositories",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chidambara-raju-g-22a152233/",
    icon: Linkedin,
    description: "Professional profile",
  },
  {
    name: "ReadyTensor",
    url: "https://app.readytensor.ai/users/juu",
    icon: Sparkles,
    description: "Publications and benchmarks",
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/justjuu",
    icon: Cpu,
    description: "Models and demos",
  },
];

export default function SocialLinks({ mode = "compact", className = "" }: SocialLinksProps) {
  if (mode === "compact") {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {SOCIAL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full p-2.5 text-fg-muted transition-colors hover:bg-fg/[0.06] hover:text-fg"
              aria-label={item.name}
            >
              <Icon className="h-5 w-5" />
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-fg-muted opacity-0 transition-opacity group-hover:opacity-100">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {SOCIAL_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-8 rounded-2xl border border-line bg-ink-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-ink-high"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-fg" />
              <ArrowUpRight className="h-4 w-4 text-fg-faint transition-colors group-hover:text-plasma-amber" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-fg">{item.name}</h3>
              <p className="mt-1 text-sm text-fg-muted">{item.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
