"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardContainer } from "@/components/cards/card-container/card-container";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log("Newsletter subscription:", data);

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CardContainer className="text-center lg:py-20 py-20">
      <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
      <p className="text-muted-foreground mb-6">
        Subscribe to my newsletter for the latest updates on projects, articles,
        and tech insights.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-md mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Enter your email"
                        className="pl-10 bg-background"
                        {...field}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6"
                    >
                      {isSubmitting ? "Subscribing..." : <span>Subscribe</span>}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus === "success" && (
            <p className="text-green-600 text-sm">
              Successfully subscribed! Check your email for confirmation.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </Form>
    </CardContainer>
  );
};
