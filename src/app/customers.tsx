"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useWindowWidth } from "@/hooks/use-window-width";

const CUSTOMERS = [
  {
    icon: "/projects/stpservice.avif",
    link: "https://www.stpservice.ee",
    title: "STP Service",
  },
  {
    icon: "/projects/ligneroset.avif",
    link: "https://www.ligneroset.ee",
    title: "Ligne Roset",
  },
  {
    icon: "/projects/amberlens.avif",
    link: "https://www.amberlens.design",
    title: "Amber Lens",
  },
  {
    icon: "/projects/clouderclub.avif",
    link: "https://www.clouderclub.com",
    title: "Clouder Club",
  },
];

export const Customers = () => {
  const isMobile = useWindowWidth() < 800; // px

  const content = (
    <ol className="h-[--marquee-height] flex flex-row items-center gap-[--marquee-gap]">
      {CUSTOMERS.map((project, i) => (
        <li
          key={project.title}
          className={`relative w-[100px] h-full ${i === 0 ? (isMobile ? "ml-[--marquee-gap]" : "ml-0") : ""}`}
        >
          <Image
            src={project.icon}
            alt={`${project.title} logo`}
            className="object-contain object-center"
            priority
            fill
          />
        </li>
      ))}
    </ol>
  );

  return (
    <div className="h-[--marquee-height]">
      {isMobile ? <Marquee>{content}</Marquee> : content}
    </div>
  );
};
