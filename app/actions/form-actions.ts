"use server";

import { FormData } from "@/components/FormTemplate";

/**
 * Example server action for handling contact form submissions
 *
 * This demonstrates a basic implementation. In production, you would:
 * - Send emails via a service like Resend, SendGrid, etc.
 * - Save to a database (e.g., PostgreSQL, MongoDB)
 * - Add rate limiting
 * - Validate data server-side (double validation)
 * - Log submissions for analytics
 */

export async function submitContactForm(
  data: FormData,
  token: string
): Promise<{ success: boolean; message?: string }> {
  try {
    // Optional: Add server-side validation as an extra layer of security
    if (!data.email || !data.name || !data.message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // ------------------------------
    // ---- CLOUDFLARE TURNSTILE ----
    // ------------------------------

    // Verify Turnstile token
    if (!token) {
      return {
        success: false,
        message: "Verification token is missing",
      };
    }

    const secret = process.env.CF_TURNSTILE_SECRET;
    if (!secret) {
      console.error("CF_TURNSTILE_SECRET is not configured");
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      };
    }

    // Verify the token with Cloudflare Turnstile
    const verifyParams = new URLSearchParams();
    verifyParams.append("secret", secret);
    verifyParams.append("response", token);

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyParams,
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData || !verifyData.success) {
      console.error("Turnstile verification failed:", verifyData);
      return {
        success: false,
        message: "Verification failed. Please try again.",
      };
    }

    // Token verified successfully, proceed with form processing

    // Example: Log the submission
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual implementation
    // Examples:

    // 1. Send email
    // await sendEmail({
    //   to: "support@example.com",
    //   from: data.email,
    //   subject: `Contact Form: ${data.name}`,
    //   text: data.message,
    // });

    // 2. Save to database
    // await db.contacts.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     message: data.message,
    //     createdAt: new Date(),
    //   },
    // });

    // 3. Send to external API
    // await fetch("https://api.example.com/contacts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);

    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    };
  }
}

/**
 * Example server action with email service integration
 * Uncomment and configure when you have an email service set up
 */
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
//
// export async function submitContactFormWithEmail(data: FormData) {
//   try {
//     // Send email using Resend
//     await resend.emails.send({
//       from: "noreply@yourdomain.com",
//       to: "support@yourdomain.com",
//       subject: `New Contact Form Submission from ${data.name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${data.message}</p>
//       `,
//     });
//
//     return {
//       success: true,
//       message: "Thank you! We've received your message and will respond soon.",
//     };
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return {
//       success: false,
//       message: "Failed to send message. Please try again.",
//     };
//   }
// }

/**
 * Example server action with database integration
 * Uncomment and configure when you have a database set up
 */
// import { db } from "@/lib/db"; // Your database client (Prisma, Drizzle, etc.)
//
// export async function submitContactFormWithDB(data: FormData) {
//   try {
//     // Save to database
//     const contact = await db.contact.create({
//       data: {
//         name: data.name,
//         email: data.email,
//         message: data.message,
//         status: "new",
//         createdAt: new Date(),
//       },
//     });
//
//     // Optionally, also send a notification email
//     // await sendNotificationEmail(contact);
//
//     return {
//       success: true,
//       message: `Thank you, ${data.name}! Your message has been received (ID: ${contact.id}).`,
//     };
//   } catch (error) {
//     console.error("Database error:", error);
//     return {
//       success: false,
//       message: "Failed to save your message. Please try again.",
//     };
//   }
// }

/**
 * Example server action with rate limiting
 * Prevents spam by limiting submissions per IP/user
 */
// import { ratelimit } from "@/lib/ratelimit"; // Redis-based rate limiter
//
// export async function submitContactFormWithRateLimit(data: FormData) {
//   try {
//     // Check rate limit (e.g., 3 submissions per hour)
//     const { success: rateLimitOk } = await ratelimit.limit(data.email);
//
//     if (!rateLimitOk) {
//       return {
//         success: false,
//         message: "Too many submissions. Please try again later.",
//       };
//     }
//
//     // Process form...
//     // Your submission logic here
//
//     return {
//       success: true,
//       message: "Form submitted successfully!",
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return {
//       success: false,
//       message: "An error occurred. Please try again.",
//     };
//   }
// }
