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
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-strong py-3 border-b border-border-subtle/50"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
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
                    "text-sm font-medium transition-colors hover:text-accent-purple-light relative",
                    "text-text-secondary hover:text-accent-purple-light"
                  )}
                >
                  {link.label}
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
                    "p-2 rounded-lg transition-all duration-300",
                    "hover:bg-accent-purple/20 hover:scale-110",
                    "text-text-muted hover:text-accent-purple-light"
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
              "glass hover:bg-accent-purple/20",
              isMobileMenuOpen && "bg-accent-purple/20"
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
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm glass-strong md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold text-gradient">CR</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-accent-purple/20"
                  >
                    <X className="w-5 h-5 text-text-primary" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-accent-purple/20 text-text-secondary hover:text-accent-purple-light transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="flex gap-4 mt-8 pt-8 border-t border-border-subtle">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg glass hover:bg-accent-purple/20 text-text-muted hover:text-accent-purple-light transition-colors"
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
