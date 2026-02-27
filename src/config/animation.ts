import { Easing } from "framer-motion";

export const BLUR_ANIMATION = {
  wrapper: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  },
  variants: {
    hidden: { filter: "blur(8px)", y: 10, opacity: 0 },
    visible: { filter: "none", y: 0, opacity: 1 },
  },
  transition: {
    duration: 1.1,
    ease: "easeOut",
  } as { duration: number; ease: Easing },
};
