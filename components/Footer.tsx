"use client";

import { Link } from "@heroui/react";
import { ReactNode } from "react";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  DiscordIcon,
  EmailIcon,
} from "@/config/icons";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  type: "github" | "twitter" | "linkedin" | "discord" | "email" | "custom";
  href: string;
  label?: string;
  icon?: ReactNode;
}

export interface FooterProps {
  /**
   * Brand/Company name displayed in the footer
   */
  brandName?: string;
  /**
   * Tagline or short description
   */
  tagline?: string;
  /**
   * Sections with links to display in columns
   */
  sections?: FooterSection[];
  /**
   * Social media links
   */
  socialLinks?: SocialLink[];
  /**
   * Copyright text (year will be auto-appended if not included)
   */
  copyright?: string;
  /**
   * Additional legal/policy links shown in the bottom bar
   */
  legalLinks?: FooterLink[];
  /**
   * Layout variant
   * @default "default"
   */
  variant?: "default" | "compact" | "centered";
  /**
   * Background color variant
   * @default "default"
   */
  background?: "default" | "dark" | "gradient";
  /**
   * Show brand section
   * @default true
   */
  showBrand?: boolean;
  /**
   * Show divider between sections
   * @default true
   */
  showDivider?: boolean;
  /**
   * Custom content to display
   */
  children?: ReactNode;
  /**
   * Custom class name for the container
   */
  className?: string;
}

const getSocialIcon = (type: SocialLink["type"], size: number = 20) => {
  switch (type) {
    case "github":
      return <GithubIcon size={size} />;
    case "twitter":
      return <TwitterIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "discord":
      return <DiscordIcon size={size} />;
    case "email":
      return <EmailIcon size={size} />;
    default:
      return null;
  }
};

export function Footer({
  brandName = "Your Brand",
  tagline,
  sections = [],
  socialLinks = [],
  copyright,
  legalLinks = [],
  variant = "default",
  background = "default",
  showBrand = true,
  showDivider = true,
  children,
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText =
    copyright || `© ${currentYear} ${brandName}. All rights reserved.`;

  // Background styles
  const getBackgroundClass = () => {
    switch (background) {
      case "dark":
        return "bg-content1 dark:bg-background";
      case "gradient":
        return "bg-gradient-to-t from-primary-500/10 via-secondary-500/5 to-transparent";
      default:
        return "bg-content2/50";
    }
  };

  // Render centered variant
  if (variant === "centered") {
    return (
      <footer className={`w-full ${getBackgroundClass()} ${className}`}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            {/* Brand section */}
            {showBrand && (
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  {brandName}
                </h3>
                {tagline && (
                  <p className="text-foreground/70 max-w-md">{tagline}</p>
                )}
              </div>
            )}

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    isExternal
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label={social.label || social.type}
                  >
                    {social.icon || getSocialIcon(social.type, 24)}
                  </Link>
                ))}
              </div>
            )}

            {/* Links */}
            {sections.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-6">
                {sections.flatMap((section) =>
                  section.links.map((link, linkIndex) => (
                    <Link
                      key={`${section.title}-${linkIndex}`}
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            )}

            {/* Custom children */}
            {children && <div className="w-full">{children}</div>}

            {/* Divider */}
            {showDivider && (
              <div className="w-full max-w-md border-t border-divider" />
            )}

            {/* Copyright and legal */}
            <div className="space-y-2">
              <p className="text-sm text-foreground/60">{copyrightText}</p>
              {legalLinks.length > 0 && (
                <div className="flex items-center justify-center gap-4">
                  {legalLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-xs text-foreground/60 hover:text-foreground/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Render compact variant
  if (variant === "compact") {
    return (
      <footer className={`w-full ${getBackgroundClass()} ${className}`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand and copyright */}
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
              {showBrand && (
                <>
                  <h3 className="text-lg font-bold text-foreground leading-none">
                    {brandName}
                  </h3>
                  <span className="hidden sm:inline text-foreground/40 leading-none">
                    •
                  </span>
                </>
              )}
              <p className="text-sm text-foreground/60 leading-none">
                {copyrightText}
              </p>
            </div>

            {/* Links */}
            {sections.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-6">
                {sections.flatMap((section) =>
                  section.links.map((link, linkIndex) => (
                    <Link
                      key={`${section.title}-${linkIndex}`}
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            )}

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    isExternal
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    aria-label={social.label || social.type}
                  >
                    {social.icon || getSocialIcon(social.type, 20)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Custom children */}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </footer>
    );
  }

  // Render default variant
  return (
    <footer className={`w-full ${getBackgroundClass()} ${className}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand section */}
          {showBrand && (
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {brandName}
              </h3>
              {tagline && (
                <p className="text-foreground/70 max-w-sm">{tagline}</p>
              )}
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-4 pt-2">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      isExternal
                      className="text-foreground/70 hover:text-foreground transition-colors"
                      aria-label={social.label || social.type}
                    >
                      {social.icon || getSocialIcon(social.type, 22)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Link sections */}
          {sections.length > 0 && (
            <>
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`lg:col-span-${Math.floor(8 / sections.length)} space-y-4`}
                >
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Custom children */}
        {children && <div className="mt-8">{children}</div>}

        {/* Divider */}
        {showDivider && <div className="my-8 border-t border-divider" />}

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">{copyrightText}</p>
          {legalLinks.length > 0 && (
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
