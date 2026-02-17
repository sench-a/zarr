import { Easing } from "framer-motion";

export const BLUR_ANIMATION = {
  wrapper: {
    hidden: {},
    visible: {
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
