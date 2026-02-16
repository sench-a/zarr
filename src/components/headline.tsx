"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { WEBSITE_CONFIG } from "@/config/site";
import type { Easing } from "framer-motion";

const BLUR_ANIMATION = {
  wrapper: {
    hidden: {},
    visible: {
      y: 0,
      transition: { staggerChildren: 0.05 },
    },
  },
  variants: {
    hidden: { filter: "blur(8px)", y: 15, opacity: 0 },
    visible: { filter: "none", y: 0, opacity: 1 },
  },
  transition: {
    duration: 1.3,
    ease: "easeOut",
  } as { duration: number; ease: Easing },
};

export const Headline = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Spotlight />

      <div className="px-[--padding-x] flex items-center flex-col justify-center gap-[40px] w-full h-full">
        <motion.h1
          style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            textAlign: "center",
            maxWidth: "640px",
          }}
          className="text-center leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={BLUR_ANIMATION.wrapper}
        >
          {WEBSITE_CONFIG.description.split(" ").map((word, index) => (
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={BLUR_ANIMATION.wrapper}
          className="flex flex-row items-center gap-[12px]"
        >
          <motion.div
            variants={BLUR_ANIMATION.variants}
            transition={{
              ...BLUR_ANIMATION.transition,
              delay: 1.3,
            }}
          >
            <Button asChild>
              <Link href={WEBSITE_CONFIG.routes.projects}>Public cases</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={BLUR_ANIMATION.variants}
            transition={{
              ...BLUR_ANIMATION.transition,
              delay: 1.3 * 1.5,
            }}
          >
            <Button variant="outline" asChild>
              <Link href={WEBSITE_CONFIG.routes.tools}>Features</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
