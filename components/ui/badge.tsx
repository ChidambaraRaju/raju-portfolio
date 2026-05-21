import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
        secondary: "bg-accent-secondary/10 text-accent-secondary-light border border-accent-secondary/20",
        outline: "text-text-muted border border-border-subtle hover:border-accent-primary/30 hover:text-text-secondary transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
