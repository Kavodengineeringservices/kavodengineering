"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/schema/contact";
import { CustomButton } from "@/components/shared/customButton";
import { LoadingOverlay } from "@/components/shared/loadingOverlay";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.status === "success") {
        form.reset();
        sessionStorage.setItem("consultationSuccess", "true");
        router.replace("/contact/success");
      } else {
        toast(`Error: ${data.message}`);
      }
    } catch {
      toast("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="kes-form-shell">
      {loading && <LoadingOverlay />}

      <div className="kes-form-heading">
        <p className="kes-kicker">Consultation request</p>
        <h2>Send us a message</h2>
        <p>
          Thank you for your interest in KAVOD Engineering Services. Use the
          form below to direct your inquiries, consultations, or service
          requests.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="kes-form">
          <div className="kes-form-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="kes-form-field">
                  <FormLabel>
                    Name <span aria-hidden="true">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="kes-form-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem className="kes-form-field">
                  <FormLabel>Contact number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="Enter contact number"
                      className="kes-form-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="kes-form-field">
                <FormLabel>
                  Email address <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email address"
                    className="kes-form-input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="kes-form-field">
                <FormLabel>
                  Subject <span aria-hidden="true">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="kes-form-input kes-form-select">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="kes-select-content">
                    <SelectItem value="Quality Assurance Inspection">
                      Quality Assurance Inspection
                    </SelectItem>
                    <SelectItem value="Non-Destructive Testing">
                      Non-Destructive Testing
                    </SelectItem>
                    <SelectItem value="Coatings Inspection">
                      Coatings Inspection
                    </SelectItem>
                    <SelectItem value="CWI Training">CWI Training</SelectItem>
                    <SelectItem value="Engineering Consulting">
                      Engineering Consulting
                    </SelectItem>
                    <SelectItem value="WPS, PQR, and WQTR/WPQ Preparation">
                      WPS, PQR, and WQTR/WPQ Preparation
                    </SelectItem>
                    <SelectItem value="Other Inquiries">Other Inquiries</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="kes-form-field">
                <FormLabel>
                  Message <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project"
                    className="kes-form-input kes-form-message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="kes-form-footer">
            <p>
              Fields marked with an asterisk are required. A member of our team
              will respond to you very soon.
            </p>
            <CustomButton
              type="submit"
              variant="secondary"
              className="kes-form-submit"
            >
              {loading ? "Sending…" : "Submit"}
            </CustomButton>
          </div>
        </form>
      </Form>
    </section>
  );
}
