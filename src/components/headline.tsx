"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BLUR_ANIMATION } from "@/config/animation";
import { WEBSITE_CONFIG } from "@/config/site";

export const Headline = () => {
  return (
    <div className="relative flex flex-col justify-center gap-[40px] w-full">
      <div className="flex flex-col gap-[24px]">
        <motion.h1
          style={{
            fontSize: "clamp(32px, 5vw, 44px)",
            // textAlign: "center",

            maxWidth: "520px",
          }}
          initial="hidden"
          animate="visible"
          variants={BLUR_ANIMATION.wrapper}
        >
          {WEBSITE_CONFIG.title.split(" ").map((word, index) => (
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
          style={{
            maxWidth: "420px",
            // textAlign: "center",
          }}
          initial="hidden"
          animate="visible"
          variants={BLUR_ANIMATION.variants}
          transition={{
            ...BLUR_ANIMATION.transition,
            delay: BLUR_ANIMATION.transition.duration / 2,
          }}
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
        </motion.p>
      </div>

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
            delay: 1.4,
          }}
        >
          <Button asChild>
            <Link href={WEBSITE_CONFIG.routes.contact}>Get started</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={BLUR_ANIMATION.variants}
          transition={{
            ...BLUR_ANIMATION.transition,
            delay: 1.4,
          }}
        >
          <Button variant="ghost" asChild>
            <Link href={WEBSITE_CONFIG.routes.projects}>Our customers</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
