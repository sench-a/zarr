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
  title: "Bespoke websites that keep your inbox busy",
  description:
    "Seductive UI, evocative copywriting, flawless engineering – crafted in harmony to grow your revenue.",
  siteName: "zarr | web engineer",
  email: "poulpawker@gmail.com",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
