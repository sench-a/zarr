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
  title: "zarr",
  description:
    "Crafting websites with elegant UI, evocative copywriting, reliable engineering, and advanced tooling.",
  siteName: "zarr | web engineer",
  email: "info@amberlens.design",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
