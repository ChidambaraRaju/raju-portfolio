"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/ChidambaraRaju",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/chidambara-raju-g-22a152233/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Navigation() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    // A thin band across the middle of the viewport decides which section is current.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          } else {
            setActive((current) => (current === entry.target.id ? null : current));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <motion.nav
          aria-label="Primary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass pointer-events-auto flex items-center gap-1 rounded-full p-1.5 pl-5 shadow-panel"
        >
          <Link href="/" className="mr-2 text-base font-bold tracking-tight text-fg sm:mr-4">
            CR
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 sm:px-4",
                active === link.id ? "text-fg" : "text-fg-muted hover:text-fg"
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: "spring", damping: 30, stiffness: 380 }}
                  className="absolute inset-0 rounded-full bg-fg/10"
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}

          <div className="ml-2 hidden items-center border-l border-line pl-2 sm:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-fg-muted transition-colors hover:text-fg"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.nav>
      </header>
    </MotionConfig>
  );
}
