"use client";

import { Footer } from "@/components/Footer";

/**
 * This page demonstrates various Footer configurations
 */
export default function FooterExamples() {
  return (
    <div className="space-y-16">
      {/* Example 1: Default Footer */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Default Footer</h2>
        <Footer
          brandName="Your Company"
          tagline="Building amazing products for the modern web"
          sections={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Documentation", href: "/docs" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
            { type: "discord", href: "https://discord.com" },
          ]}
        />
      </section>

      {/* Example 2: Compact Footer */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Compact Footer</h2>
        <Footer
          brandName="Compact Co"
          variant="compact"
          sections={[
            {
              title: "Links",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
          ]}
        />
      </section>

      {/* Example 3: Centered Footer */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Centered Footer</h2>
        <Footer
          brandName="Centered Brand"
          tagline="Simple, clean, and centered"
          variant="centered"
          sections={[
            {
              title: "Links",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
            { type: "linkedin", href: "https://linkedin.com" },
          ]}
          legalLinks={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </section>

      {/* Example 4: Dark Background */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Dark Background</h2>
        <Footer
          brandName="Dark Theme"
          tagline="Professional footer with dark background"
          background="dark"
          sections={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Help Center", href: "/help" },
                { label: "Contact", href: "/contact" },
              ],
            },
          ]}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
          ]}
        />
      </section>

      {/* Example 5: Gradient Background */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Gradient Background</h2>
        <Footer
          brandName="Gradient Design"
          tagline="Eye-catching gradient footer"
          background="gradient"
          sections={[
            {
              title: "Resources",
              links: [
                { label: "Blog", href: "/blog" },
                { label: "Guides", href: "/guides" },
                { label: "API", href: "/api" },
              ],
            },
          ]}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
            { type: "discord", href: "https://discord.com" },
            { type: "linkedin", href: "https://linkedin.com" },
          ]}
        />
      </section>

      {/* Example 6: Minimal Footer */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Minimal Footer</h2>
        <Footer
          brandName="Minimal"
          variant="compact"
          showDivider={false}
          socialLinks={[
            { type: "github", href: "https://github.com" },
            { type: "twitter", href: "https://twitter.com" },
          ]}
          legalLinks={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />
      </section>

      {/* Example 7: No Brand Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Without Brand Section</h2>
        <Footer
          showBrand={false}
          sections={[
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ],
            },
          ]}
          copyright="© 2025 All rights reserved"
        />
      </section>

      {/* Example 8: With Custom Children */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">With Custom Content</h2>
        <Footer
          brandName="Custom Footer"
          tagline="With additional custom content"
          variant="default"
          sections={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
              ],
            },
          ]}
          socialLinks={[{ type: "github", href: "https://github.com" }]}
        >
          <div className="bg-primary-500/10 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-content1 border border-divider focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </Footer>
      </section>
    </div>
  );
}
