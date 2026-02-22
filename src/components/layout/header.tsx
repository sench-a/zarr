"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WEBSITE_CONFIG } from "@/config/site";

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (currentY) => {
    setScrolled(currentY >= 550); // px
  });

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled
          ? "hsl(var(--background) / 0.8)"
          : "transparent",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "var(--header-z-index)",
        width: "100%",
        transitionDuration: "500ms",
        transitionTimingFunction: "ease-out",
      }}
      className="backdrop-blur-sm border-b"
    >
      <div
        className="flex flex-row items-center justify-between max-w-[--layout-width] px-[--padding-x] xl:px-0 mx-auto w-full duration-300"
        style={{ height: "var(--header-height)" }}
      >
        <Link href={WEBSITE_CONFIG.routes.home}>
          <p className="text-xl text-primary font-normal tracking-normal">
            zarr.design
          </p>
          <span className="sr-only">{WEBSITE_CONFIG.title} Logo</span>
        </Link>

        <Button variant="outline" asChild>
          <Link href={WEBSITE_CONFIG.routes.contact}>Contact</Link>
        </Button>
      </div>
    </motion.header>
  );
};
