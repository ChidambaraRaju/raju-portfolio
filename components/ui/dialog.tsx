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
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange?.(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className={cn(
                "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl scrollbar-hide",
                "border border-accent-purple/20 shadow-glow-strong"
              )}
            >
              {children}
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
      "flex flex-col space-y-1.5 text-center sm:text-left p-6 border-b border-border-subtle sticky top-0 glass-strong z-10",
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
      "text-2xl font-semibold leading-none tracking-tight text-gradient",
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
  <div ref={ref} className={cn("p-6", className)} {...props}>
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
    onClick={onClick}
    className={cn(
      "absolute right-4 top-4 rounded-lg p-2 text-text-muted hover:text-text-primary hover:bg-accent-purple/20 transition-colors",
      className
    )}
    {...props}
  >
    <X className="h-5 w-5" />
  </button>
));
DialogClose.displayName = "DialogClose";

export { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose };
