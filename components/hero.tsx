"use client";

import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AttentionField from "@/components/attention-field";
import SocialLinks from "@/components/social-links";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <div className="pointer-events-none absolute -top-48 right-[-12%] -z-20 h-[620px] w-[620px] rounded-full bg-plasma-indigo/30 blur-[140px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.15 }}
          className="absolute inset-0 -z-10 lg:left-[34%]"
        >
          <div className="hero-field h-full w-full">
            <AttentionField />
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 md:pb-24"
        >
          <motion.p
            variants={itemVariants}
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-sm text-fg"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plasma-amber opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-plasma-amber" />
            </span>
            Open to new opportunities
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.25rem,10.5vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.03em] text-fg"
          >
            Chidambara
            <br />
            Raju G
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-xl font-medium tracking-tight text-fg md:text-2xl"
          >
            Applied AI Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg"
          >
            Designing and building production-grade AI systems — large language models,
            agent architectures, and computer vision pipelines that hold up outside a demo.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#work" className="group">
                View work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 -ml-2.5">
            <SocialLinks mode="compact" />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
