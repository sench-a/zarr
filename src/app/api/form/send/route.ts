import { Resend } from "resend";
import { v4 as uuid } from "uuid";
import { env } from "@/env";
import { FormSchema } from "@/components/contact-form";
import { NotificationEmail } from "@/components/notification-email";
import { WEBSITE_CONFIG } from "@/config/site";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { data }: { data: FormSchema } = await request.json();

  try {
    await resend.emails.send({
      from: "Reservations <contact@zarr.design>",
      to: WEBSITE_CONFIG.email,
      subject: "New reservation",
      react: NotificationEmail({ form: data }),
      headers: {
        "X-Entity-Ref-ID": uuid(),
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error.", { status: 500 });
  }
}
