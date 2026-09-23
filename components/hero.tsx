"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SocialLinks from "@/components/social-links";

const WORDS = [
  { word: "Agents", line: "Multi-agent research" },
  { word: "Fine-tuning", line: "QLoRA on a small model" },
  { word: "Vision", line: "Real-time plate detection" },
  { word: "Retrieval", line: "Personas grounded in source text" },
  { word: "Pretraining", line: "A model trained from scratch" },
];

const wordTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

function ChangingWord() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % WORDS.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = WORDS[index];
  const count = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="flex h-full w-full items-center justify-center px-8"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
    >
      <div className="relative w-full max-w-lg">
        <div className="relative text-[clamp(2.75rem,4vw,4.25rem)]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-0 w-0">
            <AnimatePresence initial={false}>
              <motion.span
                key={count}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[2.6em] leading-none text-accent-primary/[0.09]"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </div>

        <div className="relative z-10 h-[1.25em] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.p
              key={current.word}
              initial={reduceMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              exit={reduceMotion ? undefined : { y: "-110%" }}
              transition={wordTransition}
              className="absolute inset-0 flex items-center justify-center text-center font-display italic leading-none text-accent-primary-light"
            >
              {current.word}
            </motion.p>
          </AnimatePresence>
        </div>
        </div>

        <div className="relative z-10 mt-5 flex items-center gap-4">
          <div className="relative h-4 w-7 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.span
                key={count}
                initial={reduceMotion ? false : { y: "100%" }}
                animate={{ y: "0%" }}
                exit={reduceMotion ? undefined : { y: "-100%" }}
                transition={wordTransition}
                className="absolute inset-0 text-xs tracking-[0.18em] text-accent-primary"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="relative h-px flex-1 overflow-hidden bg-border-subtle">
            <motion.div
              key={count}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 origin-left bg-accent-primary/80"
            />
          </div>
        </div>

        <div className="relative mt-4 h-6 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.p
              key={current.line}
              initial={reduceMotion ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              exit={reduceMotion ? undefined : { y: "-110%" }}
              transition={wordTransition}
              className="absolute inset-0 flex items-center justify-center text-center text-sm text-text-secondary"
            >
              {current.line}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden lg:grid lg:grid-cols-2">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[540px] w-[540px] rounded-full bg-accent-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-8%] h-[380px] w-[380px] rounded-full bg-[#3a3126]/40 blur-3xl" />

      <div className="relative z-10 flex items-end px-6 pt-28 pb-16 md:pb-24 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
            <span className="text-sm tracking-wide text-text-secondary">
              Open to new opportunities
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm md:text-base tracking-[0.18em] uppercase text-accent-primary"
          >
            Applied AI Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight text-text-primary"
          >
            Chidambara
            <br />
            Raju G
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-text-secondary"
          >
            Designing and building production-grade AI systems — large language models,
            agent architectures, and computer vision pipelines that hold up outside a demo.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Button size="lg" asChild>
              <a href="#work" className="flex items-center gap-2 justify-center">
                View work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact" className="flex items-center justify-center">
                Get in touch
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <SocialLinks mode="compact" />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none relative z-10 hidden min-h-[100svh] lg:flex">
        <ChangingWord />
      </div>
    </section>
  );
}
