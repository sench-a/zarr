"use client";

import z from "zod";
import { toast } from "sonner";
import posthog from "posthog-js";
import { useEffect, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { WEBSITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

export type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  brand_name: z.string().min(1),
  country: z.string().min(1),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  business_email: z.string().min(1),
});

const defaultValues = {
  brand_name: "",
  country: "",
  first_name: "",
  last_name: "",
  business_email: "",
};

export const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (formData: FormSchema): Promise<void> => {
    const response = await fetch(WEBSITE_CONFIG.routes.API.form, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }, null, 2),
    });

    if (response.ok) {
      posthog.capture("form_submitted");

      toast.success("Request successfully sent!", {
        position: "top-center",
        description: "Expect a response under 24 hours.",
      });

      form.reset();
    } else {
      toast.error("Request has not been sent", {
        description: "Please try again",
        position: "top-center",
      });
    }
  };

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>();
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="space-y-[--form-headline-gap]">
              <h3 className="form-headline">Introduce your brand</h3>
              <p className="form-description">
                Let&apos;s create something extraordinary.
              </p>
            </div>

            <div className="space-y-[24px]">
              <Controller
                name="brand_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="brand-name">Brand name</FieldLabel>

                    <Input
                      {...field}
                      id="brand-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="zarr.design"
                      autoComplete="off"
                    />
                  </Field>
                )}
              />

              <Controller
                name="country"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="country">Country</FieldLabel>

                    <Select
                      name={field.name}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        id="country"
                        aria-invalid={fieldState.invalid}
                        className={cn({
                          "text-muted-foreground": !field.value,
                        })}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>

                      <SelectContent position="item-aligned">
                        <SelectGroup>
                          {COUNTRIES.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="space-y-[--form-headline-gap]">
              <h3 className="form-headline">How can I reach you?</h3>
              <p className="form-description">
                Please provide your contact information.
              </p>
            </div>

            <div className="space-y-[24px]">
              <Controller
                name="first_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="first-name">First name</FieldLabel>

                    <Input
                      {...field}
                      id="first-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="John"
                      autoComplete="off"
                    />
                  </Field>
                )}
              />

              <Controller
                name="last_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="last-name">Last name</FieldLabel>

                    <Input
                      {...field}
                      id="last-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Smith"
                      autoComplete="off"
                    />
                  </Field>
                )}
              />

              <Controller
                name="business_email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="business-email">
                      Business email
                    </FieldLabel>

                    <Input
                      {...field}
                      id="business-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="john@smith.com"
                      autoComplete="off"
                    />
                  </Field>
                )}
              />
            </div>
          </>
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }, [form.formState.isSubmitSuccessful]);

  const { isSubmitting, dirtyFields } = form.formState;

  const isStepCompleted = (keys: Array<keyof FormSchema>) =>
    keys.every((k) => Boolean(dirtyFields[k]));

  const isFirstStepCompleted = isStepCompleted(["brand_name", "country"]);
  const isSecondStepCompleted = isStepCompleted([
    "first_name",
    "last_name",
    "business_email",
  ]);

  return (
    <div className="relative overflow-hidden w-full max-w-lg bg-background border rounded-sm">
      <MotionConfig
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0,
          ease: "easeOut",
        }}
      >
        <motion.div animate={{ height: bounds.height }}>
          <div
            ref={ref}
            className="flex flex-col gap-[--form-gap] p-[--form-padding]"
          >
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
              >
                <form className="flex flex-col gap-[--form-gap]">
                  {content}
                </form>
              </motion.div>
            </AnimatePresence>

            <motion.div
              layout
              className={cn("inline-flex justify-between", {
                "justify-end": currentStep === 0,
              })}
            >
              {currentStep === 1 ? (
                <Button
                  size="sm"
                  variant="ghost"
                  className="group text-sm p-0 text-muted-foreground duration-0"
                  onClick={() => {
                    setDirection(-1);
                    setCurrentStep((prev) => prev - 1);
                  }}
                >
                  <div className="inline-flex items-center gap-[4px]">
                    <Icons.back size={16} />
                    <p className="group-hover:text-primary text-sm">Back</p>
                  </div>
                </Button>
              ) : null}

              {currentStep === 1 ? (
                <Button
                  type="submit"
                  disabled={!isSecondStepCompleted}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  {isSubmitting ? (
                    <Icons.spinner
                      className="animate-spin"
                      size={16}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <p className="text-sm font-normal text-primary-foreground">
                      Submit
                    </p>
                  )}
                </Button>
              ) : (
                <Button
                  disabled={!isFirstStepCompleted}
                  onClick={() => {
                    setDirection(1);
                    setCurrentStep((prev) => prev + 1);
                  }}
                >
                  Continue
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </MotionConfig>

      <div className="flex flex-col gap-[8px] px-[--padding-x] py-[16px] border-t *:text-[10px] *:text-muted-foreground *:tracking-wider">
        <p className="text-xxs tracking-wider">
          You can also contact us at {WEBSITE_CONFIG.email}
        </p>
      </div>
    </div>
  );
};

const variants = {
  initial: (direction: number) => {
    return { x: `${110 * direction}%`, scale: 0.96, opacity: 0 };
  },
  active: { x: "0%", scale: 1, opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-110 * direction}%`, scale: 0.96, opacity: 0 };
  },
};

const COUNTRIES = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Andorra",
  "Australia",
  "Austria",
  "Belgium",
  "Bulgaria",
  "Canada",
  "Chile",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Guyana",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Japan",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "San Marino",
  "Saudi Arabia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Uruguay",
];
