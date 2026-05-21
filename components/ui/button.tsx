import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-primary-dark font-bold shadow-md hover:shadow-accent-primary/20 hover:scale-[1.02] active:scale-95 border border-accent-primary/20",
        secondary:
          "glass text-text-primary border border-border-subtle hover:bg-accent-primary/5 hover:border-accent-primary/20 hover:scale-[1.02]",
        ghost:
          "text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 hover:scale-[1.02]",
        outline:
          "border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/5 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-sm tracking-widest",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    // If asChild is true, don't render our button - let parent render its child
    // Instead, apply our classes to a span wrapper
    if (asChild) {
      return (
        <span
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
