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
  title: "Websites crafted to grow your revenue",
  description:
    "Reliable engineering, elegant UI, evocative copywriting, and technologies used to scale any modern business.",
  siteName: "zarr | web engineer",
  email: "poulpawker@gmail.com",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
