import { env } from "@/env";

export const FRONTEND_ROUTES = {
  home: "/",
  contact: "/#contact",
};

const BACKEND_ROUTES = {
  API: {
    form: "/api/form/send",
  },
  CMS: "/admin",
};

export const WEBSITE_CONFIG = {
  siteName: "zarr.design",
  title: "Get a bespoke website to launch your brand",
  description:
    "Pave the way for customers to order your product or service with brand-centric design, delivered on fast, reliable engineering.",
  email: "marketing@zarr.design",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
