import Image from "next/image";
import { Headline } from "@/app/headline";
import { Code } from "@/components/code";
import { Card } from "@/components/card";
import { Grid } from "@/components/grid";
import { Icons } from "@/components/icons";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FRONTEND_ROUTES } from "@/config/site";
import { cn } from "@/lib/utils";
import { Customers } from "./customers";

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
    icon: "/icons/posthog.svg",
    title: "PostHog",
    description: "PostHog is an analytics platform for tracking user behavior.",
    link: "https://posthog.com/",
  },
  {
    icon: "/icons/resend.svg",
    title: "Resend",
    description: "Resend is a service for reliable, branded email delivery.",
    link: "https://resend.com/home",
  },
  {
    icon: "/icons/sanity.svg",
    title: "Sanity",
    description:
      "Sanity is a system for effortless real-time content management.",
    link: "https://www.sanity.io/",
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

const TECH_FEATURES = [
  {
    id: "cms",
    headline: "Content Management System",
    description:
      "Make instant content edits that go live globally in seconds, or schedule them weeks or months in advance.",
    ROI: [
      "Make content edits that go live globally in seconds",
      "Control how your website is presented on social media",
      "Create and update content even from mobile",
    ],
  },
  // {
  //   id: "integrations",
  //   headline: "Brand-tailored integrations",
  //   description:
  //     "Scale your brand by adding custom integrations built around your existing tools.",
  //   ROI: ["CRM", "E-commerce", "Other third-party services"],
  // },
  {
    id: "analytics",
    headline: "Real-time analytics",
    description:
      "Gain clarity on which channels bring visits and which demographics reserve tables by measuring conversions from organic discovery and paid targeting campaigns.",
    ROI: [
      "Monitor unique visitors live and spot peak hours",
      "Identify what gets read and what gets skipped",
      "Measure every type of engagement",
    ],
  },
  {
    id: "performance",
    headline: "Global performance",
    description:
      "Greet guests instantly with fast application-level performance optimised for higher search engine ranking and delivered from a network of 100+ servers.",
    ROI: [
      "Crash-resistant reliability with 99.999% average uptime",
      "Resilient under real-world network errors",
      "Blazing-fast page and image loading",
    ],
  },
  {
    id: "responsiveness",
    headline: "Multi-device responsive design",
    description:
      "Protect brand perception with responsive design that preserves a delightful user experience across mobile, tablet, and desktop.",
    ROI: ["Immersive animations", "Smooth interactions", "Frictionless flow"],
  },
  // {
  //   id: "security",
  //   headline: "Proactive security",
  //   description:
  //     "Take care of the data of your guests and business with ironclad security that cuts off issues before they escalate into incidents.",
  //   ROI: [
  //     "Secure connection with data encryption",
  //     "Legal compliance (GDPR, SOC 2)",
  //     "Automatic data backups",
  //   ],
  // },
];

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <main className="h-full w-full">
        <section id="hero" className="px-0">
          <Image
            src="/bg-hero.webp"
            className="absolute top-0 left-0 right-0 -scale-y-[1.15] opacity-50 transition-opacity duration-500 pointer-events-none mx-auto w-full select-none"
            alt="background"
            priority
            fill
          />

          <Container className="gap-[80px] sm:border-none">
            <div className="relative px-[--padding-x] xl:px-0 h-[55vh] flex flex-col items-center justify-end duration-300">
              <Headline />
            </div>

            <Customers />

            <Code />
          </Container>
        </section>

        <section id="technical-features">
          <Container className="gap-[80px]">
            <div className="flex flex-col gap-[20px]">
              {/* <label className="label text-accent">Features</label> */}
              <h2>Push your brand further and faster with ...</h2>
            </div>

            <Grid>
              {TECH_FEATURES.map((feature) => {
                const Icon = Icons[feature.id as keyof typeof Icons];

                return (
                  <li
                    key={feature.id}
                    className="group card-wrapper left-gradient"
                  >
                    <div className="p-[24px] sm:p-[32px] relative h-full w-full bg-background/90 sm:group-hover:bg-background rounded-sm duration-300">
                      <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[20px]">
                          <Icon size={16} strokeWidth={1.5} />
                          <h3 className="text-2xl">{feature.headline}</h3>
                        </div>

                        <ul className="pl-[2px] flex flex-col gap-[12px]">
                          {feature.ROI.map((item) => {
                            return (
                              <div
                                key={item}
                                className="inline-flex items-center gap-[18px]"
                              >
                                <Icons.check
                                  size={12}
                                  strokeWidth={3}
                                  // className="text-accent"
                                />
                                <p className="text-sm text-balance leading-relaxed">
                                  {item}
                                </p>
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </Grid>
          </Container>
        </section>

        <section id={FRONTEND_ROUTES.partners.replace("/#", "")}>
          <Container>
            <div className="flex flex-col gap-[20px]">
              {/* <label className="label text-accent">Features</label> */}
              <h2>Partnered with the best to elevate your marketing</h2>
            </div>

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

        <section
          id={FRONTEND_ROUTES.contact.replace("/#", "")}
          className="px-0"
        >
          <Container className="sm:border-none md:flex-row items-start md:items-center justify-between">
            <div className="px-[--padding-x] md:px-0 flex flex-col gap-[24px]">
              <h2>Get in touch</h2>
              <p className="max-w-sm">
                I am here to cater to your expectations and tailor my expertise
                to fit your needs and requirements.
                <br />
                <br />
                Expect a response under 24 hours.
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
