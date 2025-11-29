"use client";

import { FormTemplate, FormData } from "../FormTemplate";

/**
 * Example 1: Basic Contact Form
 * Simple contact form with default styling
 */
export function BasicContactFormExample() {
  async function handleSubmit(data: FormData) {
    "use server";
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Thank you for contacting us!",
    };
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <FormTemplate onSubmit={handleSubmit} submitButtonText="Send Message" />
    </div>
  );
}

/**
 * Example 2: Form with Callbacks
 * Demonstrates using onSuccess and onError callbacks
 */
export function FormWithCallbacksExample() {
  async function handleSubmit(data: FormData) {
    "use server";
    // Simulate random success/failure
    const success = Math.random() > 0.3;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success,
      message: success
        ? "Form submitted successfully!"
        : "Something went wrong. Please try again.",
    };
  }

  const handleSuccess = (data: FormData) => {
    console.log("Form submitted successfully:", data);
    // You could redirect, show a modal, etc.
  };

  const handleError = (error: string) => {
    console.error("Form submission failed:", error);
    // You could track analytics, show additional help, etc.
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold">Feedback Form</h2>
      <p className="text-sm text-gray-600">
        This form randomly succeeds or fails to demonstrate callbacks
      </p>
      <FormTemplate
        onSubmit={handleSubmit}
        submitButtonText="Submit Feedback"
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
}

/**
 * Example 3: Newsletter Signup
 * Minimal form for email collection
 */
export function NewsletterFormExample() {
  async function handleSubmit(data: FormData) {
    "use server";
    // In a real app, you'd add the email to your mailing list
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: `Thanks ${data.name}! Check your inbox for a confirmation email.`,
    };
  }

  return (
    <div className="w-full max-w-md space-y-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-950 dark:to-purple-950">
      <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Get the latest updates and exclusive content delivered to your inbox
      </p>
      <FormTemplate onSubmit={handleSubmit} submitButtonText="Subscribe" />
    </div>
  );
}

/**
 * Example 4: Support Ticket Form
 * More formal business use case
 */
export function SupportTicketExample() {
  async function handleSubmit(data: FormData) {
    "use server";
    // Create support ticket
    const ticketId = Math.random().toString(36).substring(7).toUpperCase();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      success: true,
      message: `Support ticket #${ticketId} created. We'll respond within 24 hours.`,
    };
  }

  return (
    <div className="w-full max-w-md space-y-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Submit a Support Ticket</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Our team typically responds within 24 hours
        </p>
      </div>
      <FormTemplate onSubmit={handleSubmit} submitButtonText="Create Ticket" />
      <p className="text-xs text-gray-500">
        For urgent issues, please call us at 1-800-SUPPORT
      </p>
    </div>
  );
}

/**
 * Example Collection Component
 * Renders all examples for demonstration
 */
export function FormExamples() {
  return (
    <div className="container mx-auto space-y-12 p-8">
      <div>
        <h1 className="mb-2 text-4xl font-bold">FormTemplate Examples</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Various use cases for the FormTemplate component
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <BasicContactFormExample />
        <FormWithCallbacksExample />
        <NewsletterFormExample />
        <SupportTicketExample />
      </div>

      <div className="rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
        <h3 className="mb-2 font-semibold">Note:</h3>
        <p className="text-sm">
          These examples use simulated server actions. In production, you would
          create proper server actions in separate files (e.g.,{" "}
          <code className="rounded bg-gray-200 px-1 dark:bg-gray-800">
            app/actions/form-actions.ts
          </code>
          ) with real backend logic.
        </p>
      </div>
    </div>
  );
}
