"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

// Example Zod schema - customize this to your needs
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormData = z.infer<typeof formSchema>;

export interface FormTemplateProps {
  /**
   * Server action to handle form submission
   * Should return an object with success status and optional message
   */
  onSubmit: (data: FormData) => Promise<{
    success: boolean;
    message?: string;
  }>;
  /**
   * Optional submit button text
   * @default "Submit"
   */
  submitButtonText?: string;
  /**
   * Optional callback for successful submission
   */
  onSuccess?: (data: FormData) => void;
  /**
   * Optional callback for failed submission
   */
  onError?: (error: string) => void;
}

/**
 * FormTemplate - A reusable form component integrated with Zod, React Hook Form, and Hero UI
 *
 * @example
 * ```tsx
 * // Create a server action
 * async function handleFormSubmit(data: FormData) {
 *   "use server";
 *   // Process the data
 *   return { success: true, message: "Form submitted successfully!" };
 * }
 *
 * // Use the component
 * <FormTemplate
 *   onSubmit={handleFormSubmit}
 *   submitButtonText="Send Message"
 * />
 * ```
 */
export function FormTemplate({
  onSubmit,
  submitButtonText = "Submit",
  onSuccess,
  onError,
}: FormTemplateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "danger";
    text: string;
  } | null>(null);

  // Cloudflare Turnstile Token
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const publicSitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simplified validation: just check your local state
    if (!turnstileToken) {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "danger",
        text: "Please complete the security check.",
      });
      return;
    }

    try {
      const result = await onSubmit(data);

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: result.message || "Form submitted successfully!",
        });
        reset();
        onSuccess?.(data);
      } else {
        setSubmitMessage({
          type: "danger",
          text: result.message || "Failed to submit form",
        });
        onError?.(result.message || "Failed to submit form");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      setSubmitMessage({
        type: "danger",
        text: errorMessage,
      });
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        {...register("name")}
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="bordered"
      />

      <Input
        {...register("email")}
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
      />

      <Input
        {...register("message")}
        errorMessage={errors.message?.message}
        isInvalid={!!errors.message}
        isRequired
        label="Message"
        placeholder="Enter your message"
        type="text"
        variant="bordered"
      />

      {/* Cloudflare Turnstile Widget */}
      <div className="flex flex-col gap-4">
        {publicSitekey && (
          <Turnstile
            siteKey={publicSitekey}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            options={{
              theme: "light", // or "auto"
              size: "flexible", // Fits container better
            }}
          />
        )}
      </div>

      {submitMessage && (
        <div
          className={`rounded-lg p-3 text-sm ${
            submitMessage.type === "success"
              ? "bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-400"
              : "bg-danger-50 text-danger-700 dark:bg-danger-900/20 dark:text-danger-400"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <Button
        color="primary"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}
        type="submit"
        fullWidth
      >
        {submitButtonText}
      </Button>
    </form>
  );
}
