import Image from "next/image";
import { Code } from "@/components/code";
import { Card } from "@/components/card";
import { Grid } from "@/components/grid";
import { Headline } from "@/components/headline";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";

const TOOLS = [
  {
    icon: "/icons/stripe.svg",
    title: "Stripe",
    description:
      "Stripe is a financial platform for instant, secure online payments.",
    link: "https://stripe.com/",
    priority: true,
  },
  {
    icon: "/icons/sanity.svg",
    title: "Sanity",
    description:
      "Sanity is a system for effortless real-time content management.",
    link: "https://www.sanity.io/",
  },
  {
    icon: "/icons/resend.svg",
    title: "Resend",
    description: "Resend is a service for reliable, branded email delivery.",
    link: "https://resend.com/home",
  },
  {
    icon: "/icons/shopify.svg",
    title: "Shopify",
    description:
      "Shopify is an e-commerce platform for creating and managing online stores.",
    link: "https://www.shopify.com/",
    priority: true,
  },
  {
    icon: "/icons/nextjs.svg",
    title: "Next.js",
    description:
      "Next.js is a framework for high-performance, SEO-optimized websites.",
    link: "https://nextjs.org/",
  },
  {
    icon: "/icons/vercel.svg",
    title: "Vercel",
    description:
      "Vercel is an AI cloud platform for global hosting and fast website delivery.",
    link: "https://vercel.com/home",
  },
];

const PROJECTS = [
  {
    icon: "/projects/ligneroset.svg",
    link: "https://www.ligneroset.ee",
    title: "Ligne Roset",
    description:
      "Ligne Roset is a French luxury house established in 1860, crafting high-end designer furniture.",
  },
  {
    icon: "/projects/amberlens.svg",
    link: "https://www.amberlens.design",
    title: "Amber Lens",
    description:
      "Amber Lens is an agency crafting story-driven marketing websites for restaurant brands.",
  },
];

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <main className="h-full w-full">
        <section>
          <Image
            src="/bg-hero.webp"
            className="pointer-events-none absolute top-0 left-0 right-0 mx-auto hidden h-screen w-full select-none md:block opacity-60 transition-opacity duration-500"
            alt="background"
            priority
            fill
          />

          <Container className="px-0 lg:px-[--padding-x] gap-[48px] lg:flex-row items-start lg:items-center">
            <div className="px-[--padding-x] lg:px-0 h-[40vh] lg:h-full flex flex-col items-center justify-end">
              <Headline />
            </div>

            <Code />
          </Container>
        </section>

        <section id="projects" className="md:border-t">
          <Container>
            <h2>Trusted by the visionaries</h2>

            <Grid>
              {PROJECTS.map((project, i) => {
                return (
                  <li key={project.title} className="group card-wrapper">
                    <Card
                      index={i}
                      card={project}
                      className="aspect-[1] sm:aspect-[4/3]"
                    />
                  </li>
                );
              })}
            </Grid>
          </Container>
        </section>

        <section id="tools" className="md:border-b">
          <Container>
            <h2>Partnered with the best to scale your business</h2>

            <Grid className="grid-rows-3">
              {TOOLS.map((tool, i) => {
                return (
                  <li
                    key={tool.title}
                    className={cn(`group card-wrapper`, {
                      "row-span-2": !!tool.priority,
                    })}
                  >
                    <Card
                      index={i}
                      card={tool}
                      className="aspect-[1] md:aspect-[4/3] lg:aspect-[16/9]"
                    />
                  </li>
                );
              })}
            </Grid>
          </Container>
        </section>

        <section id="contact">
          <Container className="px-0 lg:px-[--padding-x] md:flex-row">
            <div className="px-[--padding-x] text-center flex flex-col items-center md:items-start md:text-start gap-[24px]">
              <h2>Get in touch</h2>
              <p className="max-w-sm">
                I am here to cater to your expectations and tailor my expertise
                to fit your needs and requirements.
              </p>
            </div>

            <ContactForm />
          </Container>
        </section>
      </main>

      <Spotlight />
    </div>
  );
}
