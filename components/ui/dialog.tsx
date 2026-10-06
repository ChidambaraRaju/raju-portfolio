"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange?.(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-md"
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) onOpenChange?.(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 320,
              }}
              className="plasma-edge glass-strong w-full max-w-3xl overflow-hidden rounded-3xl shadow-panel"
            >
              <div className="max-h-[88vh] overflow-y-auto scrollbar-hide">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "sticky top-0 z-10 flex flex-col gap-2 border-b border-line glass-strong p-6 pr-16 md:p-8 md:pr-20",
      className
    )}
    {...props}
  />
));
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-fg md:text-3xl",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 md:p-8", className)} {...props}>
    {children}
  </div>
));
DialogContent.displayName = "DialogContent";

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { onClick?: () => void }
>(({ className, onClick, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label="Close"
    onClick={onClick}
    className={cn(
      "absolute right-4 top-4 z-20 rounded-full border border-line p-2 text-fg-muted transition-colors hover:border-line-strong hover:text-fg md:right-6 md:top-6",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </button>
));
DialogClose.displayName = "DialogClose";

export { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose };
