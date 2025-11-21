"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@heroui/react";

/**
 * This page demonstrates various HeroBanner configurations
 */
export default function HeroExamples() {
  return (
    <div className="space-y-16">
      {/* Example 1: Default Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Default Hero</h2>
        <HeroBanner
          title="Welcome to Our Platform"
          subtitle="The best solution for your business needs"
          alignment="center"
          variant="default"
          height="medium"
        />
      </section>

      {/* Example 2: Gradient Hero with Actions */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Gradient Hero with Actions</h2>
        <HeroBanner
          title="Build Something Amazing"
          subtitle="Start your journey with our powerful tools and intuitive interface"
          variant="gradient"
          height="large"
          alignment="center"
          primaryAction={{
            label: "Get Started",
            href: "/signup",
          }}
          secondaryAction={{
            label: "Learn More",
            href: "/about",
          }}
        />
      </section>

      {/* Example 3: Image Background Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Image Background Hero</h2>
        <HeroBanner
          title="Discover New Possibilities"
          subtitle="Transform your ideas into reality with our innovative platform"
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
          overlayOpacity={0.6}
          height="screen"
          alignment="center"
          primaryAction={{
            label: "Explore Features",
            href: "/features",
          }}
        />
      </section>

      {/* Example 4: Left-Aligned Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Left-Aligned Hero</h2>
        <HeroBanner
          title="Your Success Starts Here"
          subtitle="Join thousands of users who trust our platform for their business growth"
          alignment="left"
          variant="default"
          height="medium"
          primaryAction={{
            label: "Start Free Trial",
            href: "/trial",
          }}
          secondaryAction={{
            label: "View Pricing",
            href: "/pricing",
          }}
        />
      </section>

      {/* Example 5: Right-Aligned Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Right-Aligned Hero</h2>
        <HeroBanner
          title="Innovation Meets Simplicity"
          subtitle="Experience the perfect balance of power and ease of use"
          alignment="right"
          variant="gradient"
          height="medium"
          primaryAction={{
            label: "Get Started",
            onClick: () => console.log("Get Started clicked"),
          }}
        />
      </section>

      {/* Example 6: Small Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Small Hero (Compact)</h2>
        <HeroBanner
          title="Quick Introduction"
          subtitle="Perfect for landing pages with limited space"
          alignment="center"
          variant="default"
          height="small"
          primaryAction={{
            label: "Learn More",
            href: "/learn",
          }}
        />
      </section>

      {/* Example 7: Full Screen Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Full Screen Hero</h2>
        <HeroBanner
          title="Make an Impact"
          subtitle="Create unforgettable first impressions with full-screen hero sections"
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920"
          overlayOpacity={0.5}
          height="screen"
          alignment="center"
          primaryAction={{
            label: "Get Started",
            href: "/start",
          }}
          secondaryAction={{
            label: "Watch Demo",
            href: "/demo",
          }}
        />
      </section>

      {/* Example 8: Hero with Custom Children */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Hero with Custom Content</h2>
        <HeroBanner
          title="Flexible & Customizable"
          subtitle="Add any custom content to your hero section"
          variant="gradient"
          height="large"
          alignment="center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-sm opacity-90">Active Users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-sm opacity-90">Uptime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm opacity-90">Support</p>
            </div>
          </div>
        </HeroBanner>
      </section>

      {/* Example 9: Minimal Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Minimal Hero (No Actions)</h2>
        <HeroBanner
          title="Clean & Simple"
          subtitle="Sometimes less is more"
          variant="default"
          height="medium"
          alignment="center"
        />
      </section>

      {/* Example 10: Hero with Only Primary Action */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Single Action Hero</h2>
        <HeroBanner
          title="Focus on What Matters"
          subtitle="One clear call-to-action for better conversion"
          variant="gradient"
          height="medium"
          alignment="center"
          primaryAction={{
            label: "Get Started Now",
            href: "/signup",
          }}
        />
      </section>

      {/* Example 11: Dark Image Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Dark Image Background</h2>
        <HeroBanner
          title="Powerful Technology"
          subtitle="Built for developers, designed for everyone"
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920"
          overlayOpacity={0.7}
          height="large"
          alignment="center"
          primaryAction={{
            label: "View Documentation",
            href: "/docs",
          }}
          secondaryAction={{
            label: "API Reference",
            href: "/api",
          }}
        />
      </section>

      {/* Example 12: Light Image Hero */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Light Image Background</h2>
        <HeroBanner
          title="Beautiful & Modern"
          subtitle="Create stunning experiences for your users"
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=1920"
          overlayOpacity={0.3}
          height="large"
          alignment="left"
          primaryAction={{
            label: "Start Building",
            href: "/build",
          }}
        />
      </section>

      {/* Example 13: Hero with Custom Class */}
      <section>
        <h2 className="text-2xl font-bold mb-4 px-6">Custom Styled Hero</h2>
        <HeroBanner
          title="Completely Customizable"
          subtitle="Add your own classes for unique designs"
          variant="default"
          height="medium"
          alignment="center"
          className="border-t-4 border-primary-500"
          primaryAction={{
            label: "Explore",
            href: "/explore",
          }}
        />
      </section>
    </div>
  );
}
