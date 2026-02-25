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
          className="max-w-lg md:max-w-xl lg:max-w-2xl"
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
          className="max-w-sm sm:max-w-lg text-pretty"
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
            delay: BLUR_ANIMATION.transition.duration * 1.2,
          }}
        >
          <Button asChild>
            <Link href={WEBSITE_CONFIG.routes.contact}>Get started</Link>
          </Button>
        </motion.div>

        {/* <motion.div
          variants={BLUR_ANIMATION.variants}
          transition={{
            ...BLUR_ANIMATION.transition,
            delay: BLUR_ANIMATION.transition.duration * 1.6,
          }}
        >
          <Button variant="ghost" asChild>
            <Link href={WEBSITE_CONFIG.routes.customers}>Customers</Link>
          </Button>
        </motion.div> */}
      </motion.div>
    </div>
  );
};
