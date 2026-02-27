import Link from "next/link";
import { Icons } from "@/components/icons";
import { Container } from "@/components/container";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Headline } from "@/components/hero-section/headline";
import { WEBSITE_CONFIG } from "@/config/site";
import { type Metadata } from "next/types";
import { CheckItem } from "@/components/check-item";
import { CTA } from "@/components/cta";
import { Banner } from "@/components/banner";

const SCOPE = [
  {
    headline: "Brand-centric UI / UX",
    content: [
      "Sitemap",
      "Page structure and layout",
      "Content placement",
      "Visual hierarchy",
      "User flow and navigation",
      "UI components design system",
      "Animations design",
      "Multi-device design prototypes (mobile, tablet, desktop)",
    ],
  },
  {
    headline: "Copywriting",
    content: ["Body text", "Headlines", "Descriptions", "Labels", "CTAs"],
  },
  {
    headline: "Development",
    content: [
      "Responsive UI / UX design implementation",
      "Performance optimization",
      "Cross-device & browser compatibility",
      "Optimization for search engines (SEO)",
      "Security",
      "Reservation system integration",
      "Content management system integration",
      "Other brand-tailored add-on integrations",
      "Error detection & logging implementation",
    ],
  },
  {
    headline: "Testing",
    content: [
      "Multi-device design responsiveness (mobile, tablet, desktop)",
      "Cross-device & browser compatibility",
      "Performance",
      "Security",
      "Routing & navigation",
      "Error detection & logging",
      "Form validations",
      "Analytics",
      "Cookie consent",
      "Analytics",
      "Third-party service integrations",
    ],
  },
  {
    headline: "Cloud hosting setup",
    content: [
      "Project configuration on the Vercel cloud platform",
      "Network security setup",
      "Configuration of DNS settings and redirects",
    ],
  },
  {
    headline: "Post-launch support",
    content: [
      "Email, chat, and phone support",
      "Escalations & SLAs",
      "User-friendly onboarding guides for website management",
      "One month of proactive monitoring of live production performance",
    ],
  },
];

const OPTIONAL = [
  "CRM",
  "Payment system",
  "Multilingual support",
  "Other integrations",
];

const style = {
  container: "space-y-[10px]",
  headline: "font-medium leading-relaxed",
  description: "text-muted-foreground text-xs leading-relaxed",
  section: "w-full space-y-[40px] py-[16px] px-0",
  link: "text-xs tracking-wider leading-relaxed text-muted-foreground hover:text-primary duration-300",
};

const TITLE = `Custom pricing`;
const DESCRIPTION =
  "Get a brand-tailored website that flexibly scales with your ambitions.";

export const metadata: Metadata = {
  title: `${WEBSITE_CONFIG.siteName} | ${TITLE}`,
  description: DESCRIPTION,
};

export default function PricingPage() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <main>
        <div className="relative overflow-hidden min-h-screen w-full pt-[40px] md:pt-0 flex items-center justify-center">
          <section id="hero-section" className="px-0">
            <Container className="gap-[80px] md:gap-[40px] md:flex md:flex-row md:items-center">
              <div className="relative xl:px-0 h-[55vh] sm:h-full flex flex-col items-center justify-end duration-300">
                <div className="relative px-[--padding-x] xl:px-0 flex flex-col justify-center gap-[40px] w-full">
                  <Headline title={TITLE} description={DESCRIPTION} />

                  <CTA
                    primary={{
                      title: "Get quote ",
                      link: WEBSITE_CONFIG.routes.contact,
                    }}
                  />
                </div>
              </div>

              <Banner className="md:max-w-lg">
                <div className="p-[24px] space-y-[24px]">
                  <h3 className="text-lg">Included scope of work:</h3>

                  <ul className="grid grid-cols-2 gap-[12px]">
                    {SCOPE.map(({ headline }) => (
                      <li key={headline}>
                        <CheckItem item={headline} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-[24px] space-y-[24px] border-t">
                  <h3 className="text-lg">Optional:</h3>

                  <ul className="grid grid-cols-2 gap-[12px]">
                    {OPTIONAL.map((item) => (
                      <li key={item}>
                        <CheckItem item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Banner>
            </Container>
          </section>
        </div>

        <section id="pricing-breakdown">
          <div className="pb-[--header-height] space-y-[--section-gap] relative w-full max-w-2xl mx-auto">
            <h2 className="text-3xl pt-[24px]">Included scope of work</h2>

            <ul className="space-y-[--section-gap]">
              {SCOPE.map(({ headline, content }) => (
                <li id={headline} key={headline} className="space-y-[40px]">
                  <h3 className="pl-[16px] border-l border-primary text-xl">
                    {headline}
                  </h3>

                  {content && (
                    <ul className="flex flex-col">
                      {content.map((item) => (
                        <li
                          key={item}
                          className="h-[56px] px-[12px] inline-flex items-center gap-[12px] odd:bg-secondary rounded-sm"
                        >
                          <CheckItem item={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Spotlight />
    </div>
  );
}
