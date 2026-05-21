"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-strong py-2 border-b border-border-subtle"
            : "py-4 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-display font-extrabold text-gradient tracking-tighter uppercase"
          >
            CR
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-widest font-mono font-semibold transition-colors duration-200 relative py-1.5 group",
                    "text-text-secondary hover:text-accent-primary"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pl-6 border-l border-border-subtle">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-lg transition-all duration-300 border border-transparent",
                    "hover:bg-accent-primary/5 hover:border-accent-primary/20 hover:scale-105",
                    "text-text-muted hover:text-accent-primary"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300",
              "glass hover:bg-accent-primary/5 hover:border-accent-primary/20",
              isMobileMenuOpen && "bg-accent-primary/10 border-accent-primary/20"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-text-primary" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm glass-strong border-l border-border-subtle md:hidden"
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-xl font-display font-extrabold text-gradient tracking-tighter uppercase">CR</span>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-accent-primary/10 hover:text-accent-primary transition-colors duration-200 border border-transparent hover:border-accent-primary/15"
                    >
                      <X className="w-5 h-5 text-text-primary" />
                    </button>
                  </div>

                  <nav className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg hover:bg-accent-primary/5 border border-transparent hover:border-accent-primary/15 text-text-secondary hover:text-accent-primary transition-colors text-sm font-mono tracking-widest uppercase font-semibold"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="flex gap-4 pt-8 border-t border-border-subtle">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg glass hover:bg-accent-primary/5 hover:border-accent-primary/15 text-text-muted hover:text-accent-primary transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
