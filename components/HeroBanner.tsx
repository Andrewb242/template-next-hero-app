"use client";

import { Button } from "@heroui/react";
import { ReactNode } from "react";

export interface HeroBannerProps {
  /**
   * The main title of the hero banner
   */
  title?: string;
  /**
   * Custom class name for the title
   */
  titleClassName?: string;
  /**
   * Optional logo image URL to display instead of text title
   */
  logo?: string;
  /**
   * Alt text for the logo image
   */
  logoAlt?: string;
  /**
   * Custom class name for the logo
   */
  logoClassName?: string;
  /**
   * Optional subtitle or description text
   */
  subtitle?: string;
  /**
   * Custom class name for the subtitle
   */
  subtitleClassName?: string;
  /**
   * Optional alignment of text content
   * @default "center"
   */
  alignment?: "left" | "center" | "right";
  /**
   * Background variant
   * @default "default"
   */
  variant?: "default" | "gradient-dark" | "gradient-light" | "image";
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
    variant?: "ghost" | "faded" | "light" | "flat" | "shadow" | "bordered";
    color?:
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | "default";
    className?: string;
    onClick?: () => void;
  };
  /**
   * Secondary call-to-action button
   */
  secondaryAction?: {
    label: string;
    href?: string;
    variant?: "ghost" | "faded" | "light" | "flat" | "shadow" | "bordered";
    color?:
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | "default";
    className?: string;
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
  titleClassName = "",
  logo,
  logoAlt = "Logo",
  logoClassName = "",
  subtitle,
  subtitleClassName = "",
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

  // Font size classes based on height
  const titleSizeClasses = {
    small: "text-2xl md:text-3xl lg:text-4xl",
    medium: "text-3xl md:text-4xl lg:text-5xl",
    large: "text-4xl md:text-5xl lg:text-6xl",
    screen: "text-4xl md:text-5xl lg:text-6xl",
  };

  const subtitleSizeClasses = {
    small: "text-sm md:text-base lg:text-lg",
    medium: "text-base md:text-lg lg:text-xl",
    large: "text-lg md:text-xl lg:text-2xl",
    screen: "text-lg md:text-xl lg:text-2xl",
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
      case "gradient-dark":
        return "bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-700";
      case "gradient-light":
        return "bg-gradient-to-br from-background via-secondary-200 to-primary-300";
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
      className={`font-sans relative w-full ${heightClasses[height]} ${getBackgroundStyle()} ${className}`}
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
          {/* Title or Logo */}
          {logo && (
            <div className="mb-6">
              <img
                src={logo}
                alt={logoAlt}
                className={`max-w-full h-auto ${logoClassName}`}
              />
            </div>
          )}
          {!logo && title && (
            <h1
              className={`${titleSizeClasses[height]} font-bold mb-6  ${titleClassName}`}
            >
              {title}
            </h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`${subtitleSizeClasses[height]} mb-8  ${subtitleClassName}`}
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
              {secondaryAction && (
                <Button
                  color={secondaryAction.color || "default"}
                  variant={secondaryAction.variant || "bordered"}
                  size="lg"
                  radius="sm"
                  onPress={() => handleAction(secondaryAction)}
                  className={secondaryAction.className}
                >
                  {secondaryAction.label}
                </Button>
              )}
              {primaryAction && (
                <Button
                  color={primaryAction.color || "primary"}
                  variant={primaryAction.variant || "shadow"}
                  size="lg"
                  radius="sm"
                  onPress={() => handleAction(primaryAction)}
                  className={primaryAction.className}
                >
                  {primaryAction.label}
                </Button>
              )}
            </div>
          )}

          {/* Custom children content */}
          {children && <div>{children}</div>}
        </div>
      </div>
    </section>
  );
}
