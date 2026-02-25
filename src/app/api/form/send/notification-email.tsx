import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";
import { FormSchema } from "@/components/contact-form";

export interface NotificationMessageProps {
  form: FormSchema;
}

export const NotificationEmail = ({ form }: NotificationMessageProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#fff] font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded p-[20px]">
            <Heading className="text-[#000000] text-[36px]">
              <strong>Але, Ром! У нас заказ!</strong>
            </Heading>

            <TextField title="Brand name" text={form.brand_name} />
            <TextField title="Country" text={form.country} />

            <Heading className="text-[#000000] text-[28px] p-0 mt-[40px] mx-0 underline">
              <strong>Contact: </strong>
            </Heading>

            <TextField title="First name" text={form.first_name} />
            <TextField title="Last name" text={form.last_name} />
            <TextField title="Business email" text={form.business_email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

interface TextFieldProps {
  title: string;
  text: string;
}

export const TextField = ({ title, text }: TextFieldProps) => {
  return (
    <Text>
      <strong className="text-[#000000] text-[20px]">{title}: </strong>
      <p className="text-[#000000] text-[18px]">{text}</p>
    </Text>
  );
};
