"use client";

import { Button, Chip } from "@heroui/react";
import { ReactNode } from "react";

export interface PricingFeature {
  /**
   * The feature text
   */
  text: string;
  /**
   * Whether the feature is included
   * @default true
   */
  included?: boolean;
  /**
   * Optional tooltip or additional info
   */
  tooltip?: string;
}

export interface PricingTier {
  /**
   * Name of the pricing tier
   */
  name: string;
  /**
   * Brief description of the tier
   */
  description?: string;
  /**
   * Price amount
   */
  price: number | string;
  /**
   * Currency symbol
   * @default "$"
   */
  currency?: string;
  /**
   * Billing period (e.g., "month", "year", "one-time")
   * @default "month"
   */
  period?: string;
  /**
   * List of features included in this tier
   */
  features: PricingFeature[];
  /**
   * Call-to-action button configuration
   */
  cta: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /**
   * Whether this is the recommended/popular tier
   */
  highlighted?: boolean;
  /**
   * Optional badge text (e.g., "Popular", "Best Value")
   */
  badge?: string;
  /**
   * Custom color for the tier
   */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

export interface PricingProps {
  /**
   * Section title
   */
  title?: string;
  /**
   * Section subtitle/description
   */
  subtitle?: string;
  /**
   * Array of pricing tiers to display
   */
  tiers: PricingTier[];
  /**
   * Layout variant
   * @default "cards"
   */
  variant?: "cards" | "table" | "minimal";
  /**
   * Show annual/monthly toggle
   * @default false
   */
  showBillingToggle?: boolean;
  /**
   * Billing period options when toggle is enabled
   */
  billingPeriods?: {
    monthly: string;
    annual: string;
    annualDiscount?: number;
  };
  /**
   * Maximum number of columns for responsive layout
   * @default 3
   */
  maxColumns?: 2 | 3 | 4;
  /**
   * Custom class name for the container
   */
  className?: string;
  /**
   * Additional footer content
   */
  footer?: ReactNode;
}

export function Pricing({
  title = "Pricing Plans",
  subtitle,
  tiers,
  variant = "cards",
  showBillingToggle = false,
  billingPeriods = {
    monthly: "Monthly",
    annual: "Annual",
    annualDiscount: 20,
  },
  maxColumns = 3,
  className = "",
  footer,
}: PricingProps) {
  // Grid column classes based on maxColumns
  const gridColumns = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const handleCTA = (cta: { href?: string; onClick?: () => void }) => {
    if (cta.onClick) {
      cta.onClick();
    } else if (cta.href) {
      window.location.href = cta.href;
    }
  };

  const renderFeature = (feature: PricingFeature, index: number) => {
    const included = feature.included !== false;
    return (
      <li
        key={index}
        className={`flex items-start gap-2 ${!included ? "opacity-50" : ""}`}
      >
        <span className="flex-shrink-0 mt-0.5">
          {included ? (
            <svg
              className="w-5 h-5 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-default-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </span>
        <span className={!included ? "line-through" : ""}>{feature.text}</span>
      </li>
    );
  };

  const renderCardVariant = () => (
    <div className={`grid ${gridColumns[maxColumns]} gap-6 lg:gap-8`}>
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`relative pt-3 pb-6 px-6 rounded-lg bg-content1 overflow-visible ${
            tier.highlighted
              ? "border-2 border-primary shadow-xl scale-105"
              : "border border-divider shadow-sm"
          }`}
        >
          {tier.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <Chip
                color={tier.color || "primary"}
                variant="solid"
                size="sm"
                className="font-semibold"
              >
                {tier.badge}
              </Chip>
            </div>
          )}

          <div className="flex flex-col gap-2 pb-4 pt-3">
            <h3 className="text-2xl font-bold">{tier.name}</h3>
            {tier.description && (
              <p className="text-sm text-foreground/60">{tier.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-6 pt-4 mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-medium">
                {tier.currency || "$"}
              </span>
              <span className="text-4xl font-bold">{tier.price}</span>
              {tier.period && (
                <span className="text-sm text-foreground/60">
                  /{tier.period}
                </span>
              )}
            </div>

            <ul className="space-y-3 text-sm">
              {tier.features.map((feature, idx) => renderFeature(feature, idx))}
            </ul>
          </div>

          <div className="mt-auto">
            <Button
              color={tier.color || (tier.highlighted ? "primary" : "default")}
              variant={tier.highlighted ? "solid" : "bordered"}
              size="lg"
              fullWidth
              onPress={() => handleCTA(tier.cta)}
              className="font-semibold"
            >
              {tier.cta.label}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMinimalVariant = () => (
    <div className={`grid ${gridColumns[maxColumns]} gap-6 lg:gap-8`}>
      {tiers.map((tier, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg ${
            tier.highlighted
              ? "bg-primary/10 border-2 border-primary"
              : "bg-content2 border border-divider"
          }`}
        >
          {tier.badge && (
            <Chip
              color={tier.color || "primary"}
              variant="flat"
              size="sm"
              className="mb-3"
            >
              {tier.badge}
            </Chip>
          )}

          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
          {tier.description && (
            <p className="text-sm text-foreground/60 mb-4">
              {tier.description}
            </p>
          )}

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm font-medium">{tier.currency || "$"}</span>
            <span className="text-3xl font-bold">{tier.price}</span>
            {tier.period && (
              <span className="text-sm text-foreground/60">/{tier.period}</span>
            )}
          </div>

          <Button
            color={tier.color || (tier.highlighted ? "primary" : "default")}
            variant={tier.highlighted ? "solid" : "ghost"}
            fullWidth
            onPress={() => handleCTA(tier.cta)}
            className="mb-6"
          >
            {tier.cta.label}
          </Button>

          <ul className="space-y-2 text-sm">
            {tier.features.map((feature, idx) => renderFeature(feature, idx))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderTableVariant = () => {
    // Get all unique features across all tiers
    const allFeatures = Array.from(
      new Set(tiers.flatMap((tier) => tier.features.map((f) => f.text)))
    );

    return (
      <div className="overflow-x-auto">
        <div className="min-w-[768px] pt-3">
          {/* Header Row with Plan Names and Prices */}
          <div
            className="grid gap-4 mb-4"
            style={{
              gridTemplateColumns: `250px repeat(${tiers.length}, 1fr)`,
            }}
          >
            {/* Empty cell for feature column header */}
            <div className="p-4"></div>

            {/* Plan headers */}
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg text-center overflow-visible ${
                  tier.highlighted
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-content1 border border-divider"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Chip
                      color={tier.color || "primary"}
                      variant="solid"
                      size="sm"
                      className="font-semibold"
                    >
                      {tier.badge}
                    </Chip>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>

                {tier.description && (
                  <p className="text-xs text-foreground/60 mb-4">
                    {tier.description}
                  </p>
                )}

                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-2xl font-medium">
                    {tier.currency || "$"}
                  </span>
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-xs text-foreground/60">
                      /{tier.period}
                    </span>
                  )}
                </div>

                <Button
                  color={
                    tier.color || (tier.highlighted ? "primary" : "default")
                  }
                  variant={tier.highlighted ? "solid" : "bordered"}
                  size="md"
                  fullWidth
                  onPress={() => handleCTA(tier.cta)}
                  className="font-semibold"
                >
                  {tier.cta.label}
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          <div className="space-y-2">
            {allFeatures.map((featureText, featureIndex) => (
              <div
                key={featureIndex}
                className="grid gap-4 items-center"
                style={{
                  gridTemplateColumns: `250px repeat(${tiers.length}, 1fr)`,
                }}
              >
                {/* Feature name */}
                <div className="p-4 font-medium text-sm">{featureText}</div>

                {/* Check/cross for each tier */}
                {tiers.map((tier, tierIndex) => {
                  const feature = tier.features.find(
                    (f) => f.text === featureText
                  );
                  const included = feature ? feature.included !== false : false;

                  return (
                    <div
                      key={tierIndex}
                      className={`p-4 text-center rounded-lg ${
                        tier.highlighted ? "bg-primary/5" : "bg-content1"
                      }`}
                    >
                      {included ? (
                        <svg
                          className="w-5 h-5 text-success mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-default-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`py-16 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Billing Toggle (if enabled) */}
        {showBillingToggle && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 p-1 bg-content2 rounded-lg">
              <Button size="sm" variant="flat">
                {billingPeriods.monthly}
              </Button>
              <Button size="sm" variant="solid" color="primary">
                {billingPeriods.annual}
                {billingPeriods.annualDiscount && (
                  <Chip size="sm" variant="flat" className="ml-2">
                    Save {billingPeriods.annualDiscount}%
                  </Chip>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Pricing Tiers */}
        {variant === "cards" && renderCardVariant()}
        {variant === "minimal" && renderMinimalVariant()}
        {variant === "table" && renderTableVariant()}

        {/* Footer */}
        {footer && <div className="mt-12 text-center">{footer}</div>}
      </div>
    </section>
  );
}
