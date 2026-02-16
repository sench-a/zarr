import Image from "next/image";
import { Headline } from "@/components/headline";
import { ContactForm } from "@/components/contact-form";
import { LinkIcon } from "@/components/icons/link";
import Link from "next/link";

const TOOLS = [
  {
    icon: "/icons/stripe.svg",
    name: "Stripe",
    description: "Collect payments instantly and securely..",
  },
  {
    icon: "/icons/sanity.svg",
    name: "Sanity",
    description: "Update your website content without friction – anytime.",
  },
  {
    icon: "/icons/resend.svg",
    name: "Resend",
    description: "Collect and send branded emails that always arrive.",
  },
  {
    icon: "/icons/nextjs.svg",
    name: "Next.js",
    description: "Deliver lightning-fast, SEO-optimized websites.",
  },
  {
    icon: "/icons/vercel.svg",
    name: "Vercel",
    description: "Host your website globally – fast and live 24/7.",
  },
];

const PROJECTS = [
  {
    icon: "/projects/ligneroset.svg",
    link: "https://www.ligneroset.ee",
    name: "Ligne Roset",
    description:
      "E-commerce webapp for Ligne Roset – luxury design furniture brand founded in 1860.",
  },
  {
    icon: "/projects/amberlens.svg",
    link: "https://www.amberlens.design",
    name: "Amber Lens",
    description:
      "Amber Lens is a marketing agency that designs and develops story-driven websites for restaurant brands.",
  },
];

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <section className="flex h-screen w-full items-center justify-center">
        <Headline />
      </section>

      <section id="projects" className="border-t">
        <div className="px-[--padding-x] border-x py-[--section-padding-y] relative flex flex-col items-center gap-[--section-gap] justify-between w-full max-w-[--layout-width] mx-auto">
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 48px)",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            Public cases
          </h2>

          <ol className="flex flex-col md:grid md:grid-cols-2 gap-[24px] w-full">
            {PROJECTS.map((project) => {
              return (
                <li key={project.name} className="group relative card-wrapper">
                  <Link href={project.link} target="_blank">
                    <LinkIcon
                      strokeWidth={1.5}
                      size={20}
                      className="absolute top-[20px] right-[20px]  z-10"
                    />

                    <div className="relative aspect-[4/3] bg-background/90 rounded-sm h-full w-full">
                      <div className="absolute h-full w-full flex items-center justify-center">
                        <figure>
                          <Image
                            src={project.icon}
                            alt={`${project.name} icon`}
                            quality={100}
                            priority
                            width={200}
                            height={140}
                          />
                        </figure>
                      </div>

                      <div className="p-[20px] flex flex-col justify-end items-start h-full gap-[20px]">
                        <div className="flex flex-row items-center justify-between gap-[40px]">
                          <figcaption
                            style={{
                              fontSize: "clamp(13px, 2.5vw, 14px)",
                            }}
                            className="text-white tracking-wide w-full max-w-[400px]"
                          >
                            {project.description}
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="tools" className="border-b">
        <div className="px-[--padding-x] border-x relative flex flex-col items-center py-[--section-padding-y] gap-[--section-gap] justify-between w-full max-w-[--layout-width] mx-auto">
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 48px)",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            Powerful websites with powerful features
          </h2>

          <ol className="flex flex-col md:grid md:grid-cols-2 gap-[24px] w-full">
            {TOOLS.map((tool) => {
              return (
                <li
                  key={tool.name}
                  className="first:row-span-2 group relative card-wrapper"
                >
                  <div className="relative aspect-video bg-background/90 rounded-sm h-full w-full">
                    <div className="absolute h-full w-full flex items-center justify-center">
                      <figure>
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} icon`}
                          quality={100}
                          priority
                          width={140}
                          height={140}
                        />
                      </figure>
                    </div>
                    <div className="p-[20px] flex flex-col justify-end items-start h-full gap-[20px]">
                      <figcaption
                        style={{
                          fontSize: "clamp(13px, 2.5vw, 14px)",
                        }}
                        className="text-white tracking-wide"
                      >
                        {tool.description}
                      </figcaption>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-[--section-padding-y]"
      >
        <div className="relative flex flex-col md:flex-row items-center gap-[--section-gap] justify-between w-full max-w-[--layout-width] mx-auto">
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 56px)",
              textAlign: "center",
            }}
          >
            Contact
          </h2>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
