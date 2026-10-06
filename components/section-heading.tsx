import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-fg md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
