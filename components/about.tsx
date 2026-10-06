import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionHeading from "@/components/section-heading";

interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="How I work"
          subtitle="From experiment to a system someone can actually use."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <blockquote className="lg:col-span-5">
            <span aria-hidden="true" className="mb-6 block h-1 w-14 rounded-full bg-plasma" />
            <p className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-fg md:text-4xl">
              Bridging foundational research and production systems.
            </p>
          </blockquote>

          <div className="markdown-content max-w-2xl lg:col-span-7 [&>p:first-of-type]:text-xl [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:text-fg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: () => null,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
