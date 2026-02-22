import { env } from "@/env";

export const FRONTEND_ROUTES = {
  home: "/",
  contact: "/#contact",
  customers: "/#customers",
  partners: "/#partners",
};

const BACKEND_ROUTES = {
  API: {
    form: "/api/form/send",
  },
  CMS: "/admin",
};

export const WEBSITE_CONFIG = {
  title: "Website as trailblazing marketing system",
  description:
    "Lead your target audience to your inbox with magnetic UI, passionate copywriting, and reliable engineering with eye-opening analytics.",
  siteName: "zarr | web engineer",
  email: "marketing@zarr.design",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
