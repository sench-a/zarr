import posthog from "posthog-js";
import { env } from "@/env";

/**
 * @description
 * The instrumentation-client.ts file allows to add monitoring, analytics code,
 * and other side-effects that run before the application becomes interactive.
 *
 * This is useful for setting up performance tracking, error monitoring, polyfills,
 * or any other client-side observability tools.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/instrumentation-client
 */

posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: env.NEXT_PUBLIC_POSTHOG_PROXY,
  ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2026-01-30",
});
