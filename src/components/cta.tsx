"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BLUR_ANIMATION } from "@/config/animation";

interface CTAButton {
  title: string;
  link: string;
}

interface CTAProps {
  primary: CTAButton;
  secondary?: CTAButton;
}

export const CTA = ({ primary, secondary }: CTAProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center gap-[12px]"
      variants={BLUR_ANIMATION.variants}
      transition={{
        ...BLUR_ANIMATION.transition,
        delay: BLUR_ANIMATION.transition.duration * 1.1,
      }}
    >
      <motion.div>
        <Button asChild>
          <Link href={primary.link}>{primary.title}</Link>
        </Button>
      </motion.div>

      {secondary ? (
        <motion.div>
          <Button variant="ghost" asChild>
            <Link href={secondary.link}>{secondary.title}</Link>
          </Button>
        </motion.div>
      ) : null}
    </motion.div>
  );
};
