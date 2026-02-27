"use client";

import { motion } from "framer-motion";
import { BLUR_ANIMATION } from "@/config/animation";
import { cn } from "@/lib/utils";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Banner = ({ className, children }: BannerProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={BLUR_ANIMATION.variants}
      transition={{
        ...BLUR_ANIMATION.transition,
        delay: BLUR_ANIMATION.transition.duration * 1.6,
      }}
      className={cn(
        "w-full h-full card-wrapper left-gradient backdrop-blur-sm",
        className,
      )}
    >
      <div className="rounded-sm bg-background">{children}</div>
    </motion.div>
  );
};
