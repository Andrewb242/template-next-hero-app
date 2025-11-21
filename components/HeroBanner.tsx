"use client";

import { Button } from "@heroui/react";
import { ReactNode } from "react";

export interface HeroBannerProps {
  /**
   * The main title of the hero banner
   */
  title: string;
  /**
   * Optional subtitle or description text
   */
  subtitle?: string;
  /**
   * Optional alignment of text content
   * @default "center"
   */
  alignment?: "left" | "center" | "right";
  /**
   * Background variant
   * @default "default"
   */
  variant?: "default" | "gradient" | "image";
  /**
   * Background image URL (used when variant is "image")
   */
  backgroundImage?: string;
  /**
   * Optional overlay opacity for background images
   * @default 0.5
   */
  overlayOpacity?: number;
  /**
   * Height of the hero banner
   * @default "screen"
   */
  height?: "small" | "medium" | "large" | "screen";
  /**
   * Primary call-to-action button
   */
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /**
   * Secondary call-to-action button
   */
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /**
   * Additional custom content to display
   */
  children?: ReactNode;
  /**
   * Custom class name for the container
   */
  className?: string;
}

export function HeroBanner({
  title,
  subtitle,
  alignment = "center",
  variant = "default",
  backgroundImage,
  overlayOpacity = 0.5,
  height = "screen",
  primaryAction,
  secondaryAction,
  children,
  className = "",
}: HeroBannerProps) {
  // Height classes
  const heightClasses = {
    small: "min-h-[300px]",
    medium: "min-h-[500px]",
    large: "min-h-[700px]",
    screen: "min-h-screen",
  };

  // Alignment classes
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // Background styles
  const getBackgroundStyle = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-700";
      case "image":
        return backgroundImage
          ? `bg-cover bg-center bg-no-repeat`
          : "bg-content1";
      default:
        return "bg-content1";
    }
  };

  const containerStyle =
    variant === "image" && backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : undefined;

  const handleAction = (action?: { href?: string; onClick?: () => void }) => {
    if (action?.onClick) {
      action.onClick();
    } else if (action?.href) {
      window.location.href = action.href;
    }
  };

  return (
    <section
      className={`relative w-full ${heightClasses[height]} ${getBackgroundStyle()} ${className}`}
      style={containerStyle}
    >
      {/* Overlay for background images */}
      {variant === "image" && backgroundImage && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content container */}
      <div
        className={`relative z-10 flex flex-col justify-center ${alignmentClasses[alignment]} ${heightClasses[height]} px-6 md:px-12 lg:px-24`}
      >
        <div className="max-w-4xl">
          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              variant === "image" ? "text-white" : ""
            }`}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`text-lg md:text-xl lg:text-2xl mb-8 ${
                variant === "image" ? "text-white/90" : "text-foreground/80"
              }`}
            >
              {subtitle}
            </p>
          )}

          {/* Action buttons */}
          {(primaryAction || secondaryAction) && (
            <div
              className={`flex flex-wrap gap-4 ${
                alignment === "center"
                  ? "justify-center"
                  : alignment === "right"
                    ? "justify-end"
                    : "justify-start"
              }`}
            >
              {primaryAction && (
                <Button
                  color="primary"
                  size="lg"
                  radius="md"
                  onPress={() => handleAction(primaryAction)}
                  className="font-semibold"
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  color="default"
                  variant="bordered"
                  size="lg"
                  radius="md"
                  onPress={() => handleAction(secondaryAction)}
                  className={`font-semibold ${
                    variant === "image" ? "border-white text-white" : ""
                  }`}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}

          {/* Custom children content */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
