import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import HeroExamples from "@/components/EXAMPLES/HeroExamples";
import PricingExamples from "@/components/EXAMPLES/PricingExamples";
import {
  CarouselExamplesDemo,
  ContinuousCarousel,
} from "@/components/EXAMPLES/CarouselExamples";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroBanner
          title="Template Project"
          subtitle="A modern Next.js application with customizable components"
          variant="image"
          backgroundImage="https://images.unsplash.com/photo-1756142752378-bb3bc11b438d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="large"
          alignment="center"
        />
      </main>

      <ContinuousCarousel />

      <Footer
        brandName="Template Site"
        tagline="Building modern web applications with Next.js"
        sections={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Documentation", href: "/docs" },
              { label: "API Reference", href: "/api" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Community", href: "/community" },
              { label: "Support", href: "/support" },
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
            ],
          },
        ]}
        socialLinks={[
          { type: "github", href: "https://github.com" },
          { type: "twitter", href: "https://twitter.com" },
          { type: "discord", href: "https://discord.com" },
          { type: "linkedin", href: "https://linkedin.com" },
        ]}
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
        ]}
        variant="default"
        background="default"
      />
    </div>
  );
}
