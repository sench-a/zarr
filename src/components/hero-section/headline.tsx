"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BLUR_ANIMATION } from "@/config/animation";
import { WEBSITE_CONFIG } from "@/config/site";

interface HeadlineProps {
  title: string;
  description: string;
}

export const Headline = ({ title, description }: HeadlineProps) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <motion.h1
        className="max-w-lg md:max-w-xl lg:max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={BLUR_ANIMATION.wrapper}
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={BLUR_ANIMATION.variants}
            transition={BLUR_ANIMATION.transition}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="max-w-xs sm:max-w-lg text-pretty"
        initial="hidden"
        animate="visible"
        variants={BLUR_ANIMATION.variants}
        transition={{
          ...BLUR_ANIMATION.transition,
          delay: BLUR_ANIMATION.transition.duration / 2,
        }}
      >
        {description.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={BLUR_ANIMATION.variants}
            transition={BLUR_ANIMATION.transition}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
