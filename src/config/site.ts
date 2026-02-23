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
  title: "Get a marketing website to launch your product",
  description:
    "Pave the way for customers to order your product with brand-centric design and copywriting, delivered on fast, reliable engineering.",
  siteName: "zarr | web engineer",
  email: "marketing@zarr.design",
  url: env.NEXT_PUBLIC_URL,
  routes: {
    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,
  },
};
