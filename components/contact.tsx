import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Let’s build something serious."
          subtitle="Open to applied AI roles, collaborations, and a proper conversation about the work."
        />

        <div className="flex flex-col gap-12">
          <a
            href="mailto:chidambararaju.g@gmail.com"
            className="group inline-flex flex-wrap items-center gap-x-4 gap-y-2 self-start text-[clamp(1.35rem,5.6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]"
          >
            <span className="plasma-sweep pb-[0.12em]">chidambararaju.g@gmail.com</span>
            <ArrowUpRight className="h-[0.7em] w-[0.7em] text-fg-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-plasma-amber" />
          </a>

          <SocialLinks mode="labeled" />
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-sm text-fg-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Chidambara Raju G</p>
          <p>Applied AI Engineer</p>
        </footer>
      </div>
    </section>
  );
}
