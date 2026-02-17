"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { BLUR_ANIMATION } from "@/config/animation";
import { Sample } from "./sample";

export const Code = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={BLUR_ANIMATION.variants}
      transition={{
        ...BLUR_ANIMATION.transition,
        delay: BLUR_ANIMATION.transition.duration * 2,
      }}
      className="w-full lg:max-w-xl border bg-background/60 backdrop-blur-sm rounded-sm"
    >
      <div className="p-4 flex items-center text-muted-foreground gap-3 border-b">
        <Icons.typescript />
        <p className="text-xs">@/stripe/lib</p>
      </div>

      <pre className="aspect-square md:aspect-video p-4 text-xs md:text-sm overflow-x-scroll">
        <Sample />
      </pre>
    </motion.div>
  );
};
