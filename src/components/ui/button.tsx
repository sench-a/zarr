"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap rounded-full text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary/90 text-primary-foreground shadow hover:bg-primary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border bg-background shadow-sm hover:bg-muted hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "text-accent-foreground/90 hover:text-accent-foreground tracking-wide",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[36px] px-[14px] py-[8px]",
        sm: "h-[32px] px-[12px]",
        lg: "h-[40px] px-[32px]",
        icon: "h-[32px] w-[32px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = HTMLMotionProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    className = cn(buttonVariants({ variant, size, className }));

    if (asChild) {
      return <Slot ref={ref} className={className} {...props} />;
    }

    return (
      <motion.button
        ref={ref}
        className={className}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
