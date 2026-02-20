import { env } from "@/env";

export const FRONTEND_ROUTES = {
  home: "/",
  contact: "/#contact",
  projects: "/#projects",
  tools: "/#tools",
};

const BACKEND_ROUTES = {
  API: {
    form: "/api/form/send",
  },
  CMS: "/admin",
};

export const WEBSITE_CONFIG = {
  title: "Bespoke websites to grow your revenue",
  description:
    "Flawless engineering, elegant UI, evocative copywriting – crafted in harmony to scale any modern business.",
  siteName: "zarr | web engineer",
  email: "poulpawker@gmail.com",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
