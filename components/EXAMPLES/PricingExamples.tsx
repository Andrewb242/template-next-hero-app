"use client";

import { Pricing, PricingTier } from "../Pricing";

export default function PricingExamples() {
  return (
    <div className="space-y-20 py-10">
      <BasicPricingExample />
      <MinimalPricingExample />
      <FourTierPricingExample />
      <AnnualTogglePricingExample />
      <SaaSPricingExample />
      <ElearningPricingExample />
      <SaaSPricingTableExample />
    </div>
  );
}
/**
 * Example 1: Basic Three-Tier Pricing
 */
export function BasicPricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: 9,
      currency: "$",
      period: "month",
      features: [
        { text: "Up to 5 projects" },
        { text: "1 GB storage" },
        { text: "Basic support" },
        { text: "Community access" },
        { text: "Advanced analytics", included: false },
        { text: "Priority support", included: false },
      ],
      cta: {
        label: "Get Started",
        onClick: () => console.log("Starter plan selected"),
      },
    },
    {
      name: "Professional",
      description: "Best for growing teams and businesses",
      price: 29,
      currency: "$",
      period: "month",
      features: [
        { text: "Unlimited projects" },
        { text: "50 GB storage" },
        { text: "Priority support" },
        { text: "Advanced analytics" },
        { text: "Custom integrations" },
        { text: "API access" },
      ],
      cta: {
        label: "Start Free Trial",
        onClick: () => console.log("Professional plan selected"),
      },
      highlighted: true,
      badge: "Most Popular",
      color: "primary",
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: 99,
      currency: "$",
      period: "month",
      features: [
        { text: "Everything in Professional" },
        { text: "Unlimited storage" },
        { text: "24/7 dedicated support" },
        { text: "Custom SLA" },
        { text: "On-premise deployment" },
        { text: "Advanced security features" },
      ],
      cta: {
        label: "Contact Sales",
        onClick: () => console.log("Enterprise plan selected"),
      },
    },
  ];

  return (
    <Pricing
      title="Choose Your Plan"
      subtitle="Select the perfect plan for your needs. All plans include a 14-day free trial."
      tiers={tiers}
      variant="cards"
      maxColumns={3}
    />
  );
}

/**
 * Example 2: Minimal Design Variant
 */
export function MinimalPricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      description: "For hobbyists and personal use",
      price: 0,
      currency: "$",
      period: "forever",
      features: [
        { text: "3 projects" },
        { text: "500 MB storage" },
        { text: "Community support" },
      ],
      cta: {
        label: "Sign Up Free",
        onClick: () => console.log("Free plan selected"),
      },
    },
    {
      name: "Pro",
      description: "For professionals who need more",
      price: 19,
      currency: "$",
      period: "month",
      features: [
        { text: "Unlimited projects" },
        { text: "100 GB storage" },
        { text: "Email support" },
        { text: "Custom domain" },
      ],
      cta: {
        label: "Go Pro",
        onClick: () => console.log("Pro plan selected"),
      },
      highlighted: true,
      badge: "Best Value",
      color: "success",
    },
  ];

  return (
    <Pricing
      title="Simple, Transparent Pricing"
      subtitle="No hidden fees. Cancel anytime."
      tiers={tiers}
      variant="minimal"
      maxColumns={2}
    />
  );
}

/**
 * Example 3: Four-Tier Pricing with Custom Colors
 */
export function FourTierPricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Basic",
      price: 5,
      period: "month",
      features: [
        { text: "5 team members" },
        { text: "10 GB storage" },
        { text: "Email support" },
      ],
      cta: { label: "Start Basic" },
      color: "default",
    },
    {
      name: "Standard",
      price: 15,
      period: "month",
      features: [
        { text: "15 team members" },
        { text: "50 GB storage" },
        { text: "Priority email support" },
        { text: "Basic analytics" },
      ],
      cta: { label: "Start Standard" },
      color: "secondary",
    },
    {
      name: "Premium",
      price: 35,
      period: "month",
      features: [
        { text: "50 team members" },
        { text: "200 GB storage" },
        { text: "24/7 phone support" },
        { text: "Advanced analytics" },
        { text: "Custom integrations" },
      ],
      cta: { label: "Start Premium" },
      highlighted: true,
      badge: "Recommended",
      color: "primary",
    },
    {
      name: "Ultimate",
      price: 79,
      period: "month",
      features: [
        { text: "Unlimited team members" },
        { text: "Unlimited storage" },
        { text: "Dedicated account manager" },
        { text: "White-label options" },
        { text: "Custom development" },
      ],
      cta: { label: "Contact Us" },
      color: "warning",
    },
  ];

  return (
    <Pricing
      title="Scale with Confidence"
      tiers={tiers}
      variant="cards"
      maxColumns={4}
    />
  );
}

/**
 * Example 4: Annual vs Monthly Toggle (UI Only)
 */
export function AnnualTogglePricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: 12,
      period: "month",
      features: [
        { text: "10 projects" },
        { text: "5 GB storage" },
        { text: "Email support" },
      ],
      cta: { label: "Get Started" },
    },
    {
      name: "Business",
      price: 39,
      period: "month",
      features: [
        { text: "Unlimited projects" },
        { text: "100 GB storage" },
        { text: "Priority support" },
        { text: "Advanced features" },
      ],
      cta: { label: "Start Free Trial" },
      highlighted: true,
      badge: "Save 20%",
      color: "primary",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        { text: "Everything in Business" },
        { text: "Unlimited storage" },
        { text: "Dedicated support" },
        { text: "Custom solutions" },
      ],
      cta: { label: "Contact Sales" },
    },
  ];

  return (
    <Pricing
      title="Flexible Pricing Options"
      subtitle="Choose between monthly or annual billing"
      tiers={tiers}
      showBillingToggle={true}
      billingPeriods={{
        monthly: "Monthly",
        annual: "Annual",
        annualDiscount: 20,
      }}
    />
  );
}

/**
 * Example 5: SaaS Product Pricing
 */
export function SaaSPricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Personal",
      description: "For individual creators",
      price: 0,
      period: "forever",
      features: [
        { text: "1 user" },
        { text: "5 projects" },
        { text: "Basic templates" },
        { text: "Community support" },
        { text: "Export to PDF" },
        { text: "Advanced templates", included: false },
        { text: "Priority support", included: false },
      ],
      cta: {
        label: "Start Free",
        onClick: () => console.log("Personal plan"),
      },
      color: "default",
    },
    {
      name: "Team",
      description: "For small teams and startups",
      price: 49,
      period: "month",
      features: [
        { text: "Up to 10 users" },
        { text: "Unlimited projects" },
        { text: "All templates" },
        { text: "Priority email support" },
        { text: "Export to multiple formats" },
        { text: "Collaboration tools" },
        { text: "Version history" },
      ],
      cta: {
        label: "Try 14 Days Free",
        onClick: () => console.log("Team plan"),
      },
      highlighted: true,
      badge: "Most Popular",
      color: "primary",
    },
    {
      name: "Business",
      description: "For larger teams and agencies",
      price: 149,
      period: "month",
      features: [
        { text: "Unlimited users" },
        { text: "Unlimited projects" },
        { text: "Premium templates" },
        { text: "24/7 priority support" },
        { text: "Advanced analytics" },
        { text: "Custom branding" },
        { text: "API access" },
        { text: "Dedicated account manager" },
      ],
      cta: {
        label: "Start Free Trial",
        onClick: () => console.log("Business plan"),
      },
      color: "success",
    },
  ];

  return (
    <Pricing
      title="Pricing That Grows With You"
      subtitle="Start free and scale as you grow. No credit card required."
      tiers={tiers}
      variant="cards"
      maxColumns={3}
      footer={
        <div className="text-sm text-foreground/60">
          <p>All plans include SSL, automatic backups, and 99.9% uptime SLA.</p>
          <p className="mt-2">
            Need a custom plan?{" "}
            <a href="#" className="text-primary underline">
              Contact our sales team
            </a>
          </p>
        </div>
      }
    />
  );
}

/**
 * Example 6: E-learning Platform Pricing
 */
export function ElearningPricingExample() {
  const tiers: PricingTier[] = [
    {
      name: "Student",
      description: "Access to learning resources",
      price: 9.99,
      period: "month",
      features: [
        { text: "Access to all courses" },
        { text: "Download materials" },
        { text: "Community forum" },
        { text: "Mobile app access" },
        { text: "Certificates", included: false },
        { text: "1-on-1 mentorship", included: false },
      ],
      cta: { label: "Start Learning" },
      color: "secondary",
    },
    {
      name: "Professional",
      description: "Level up your career",
      price: 24.99,
      period: "month",
      features: [
        { text: "Everything in Student" },
        { text: "Completion certificates" },
        { text: "Career path guidance" },
        { text: "Project reviews" },
        { text: "Resume support" },
        { text: "Interview prep" },
      ],
      cta: { label: "Go Professional" },
      highlighted: true,
      badge: "Best For Career Growth",
      color: "primary",
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      price: "Custom",
      features: [
        { text: "Everything in Professional" },
        { text: "Team management dashboard" },
        { text: "Custom learning paths" },
        { text: "Dedicated support" },
        { text: "Analytics & reporting" },
        { text: "SSO integration" },
      ],
      cta: { label: "Request Demo" },
      color: "warning",
    },
  ];

  return (
    <Pricing
      title="Invest in Your Future"
      subtitle="Join thousands of learners advancing their careers"
      tiers={tiers}
      variant="cards"
    />
  );
}

/**
 * Example 6: Table Pricing for SaaS Product
 */
export function SaaSPricingTableExample() {
  const tiers: PricingTier[] = [
    {
      name: "Personal",
      description: "For individual creators",
      price: 0,
      period: "forever",
      features: [
        { text: "1 user" },
        { text: "5 projects" },
        { text: "Basic templates" },
        { text: "Community support" },
        { text: "Export to PDF" },
        { text: "Advanced templates", included: false },
        { text: "Priority support", included: false },
      ],
      cta: {
        label: "Start Free",
        onClick: () => console.log("Personal plan"),
      },
      color: "default",
    },
    {
      name: "Team",
      description: "For small teams and startups",
      price: 49,
      period: "month",
      features: [
        { text: "Up to 10 users" },
        { text: "Unlimited projects" },
        { text: "All templates" },
        { text: "Priority email support" },
        { text: "Export to multiple formats" },
        { text: "Collaboration tools" },
        { text: "Version history" },
      ],
      cta: {
        label: "Try 14 Days Free",
        onClick: () => console.log("Team plan"),
      },
      highlighted: true,
      badge: "Most Popular",
      color: "primary",
    },
    {
      name: "Business",
      description: "For larger teams and agencies",
      price: 149,
      period: "month",
      features: [
        { text: "Unlimited users" },
        { text: "Unlimited projects" },
        { text: "Premium templates" },
        { text: "24/7 priority support" },
        { text: "Advanced analytics" },
        { text: "Custom branding" },
        { text: "API access" },
        { text: "Dedicated account manager" },
      ],
      cta: {
        label: "Start Free Trial",
        onClick: () => console.log("Business plan"),
      },
      color: "success",
    },
  ];
  return (
    <Pricing
      title="Pricing That Grows With You"
      subtitle="Start free and scale as you grow. No credit card required."
      tiers={tiers}
      variant="table"
      maxColumns={3}
      footer={
        <div className="text-sm text-foreground/60">
          <p>All plans include SSL, automatic backups, and 99.9% uptime SLA.</p>
          <p className="mt-2">
            Need a custom plan?{" "}
            <a href="#" className="text-primary underline">
              Contact our sales team
            </a>
          </p>
        </div>
      }
    />
  );
}
