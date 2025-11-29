# Next.js SEO Checklist

A comprehensive checklist to ensure your Next.js application is optimized for search engines.

## 📋 Table of Contents

- [Meta Tags & Metadata](#meta-tags--metadata)
- [Performance Optimization](#performance-optimization)
- [Content & Structure](#content--structure)
- [Technical SEO](#technical-seo)
- [Images & Media](#images--media)
- [Social Media](#social-media)
- [Analytics & Monitoring](#analytics--monitoring)

---

## Meta Tags & Metadata

### Basic Meta Tags

- [ ] Set unique and descriptive `<title>` tags (50-60 characters)
- [ ] Add compelling meta descriptions (150-160 characters)
- [ ] Include viewport meta tag for mobile responsiveness
- [ ] Set charset to UTF-8
- [ ] Use Next.js `Metadata` API (App Router) or `Head` component (Pages Router)

### Open Graph Tags

- [ ] Add `og:title`
- [ ] Add `og:description`
- [ ] Add `og:image` (recommended: 1200x630px)
- [ ] Add `og:url`
- [ ] Add `og:type`
- [ ] Add `og:site_name`
- [ ] Add `og:locale`

### Twitter Card Tags

- [ ] Add `twitter:card` (summary, summary_large_image, etc.)
- [ ] Add `twitter:site`
- [ ] Add `twitter:creator`
- [ ] Add `twitter:title`
- [ ] Add `twitter:description`
- [ ] Add `twitter:image`

### Additional Meta Tags

- [ ] Set canonical URLs to prevent duplicate content
- [ ] Add `robots` meta tag if needed (index/noindex, follow/nofollow)
- [ ] Include language and alternate language tags for i18n
- [ ] Add theme-color for browser theming
- [ ] Set favicon and app icons (multiple sizes)

---

## Performance Optimization

### Core Web Vitals

- [ ] Optimize Largest Contentful Paint (LCP) - target < 2.5s
- [ ] Optimize First Input Delay (FID) - target < 100ms
- [ ] Optimize Cumulative Layout Shift (CLS) - target < 0.1
- [ ] Optimize Interaction to Next Paint (INP) - target < 200ms

### Image Optimization

- [ ] Use Next.js `<Image>` component for automatic optimization
- [ ] Implement lazy loading for images
- [ ] Use WebP or AVIF formats where possible
- [ ] Set proper width and height attributes
- [ ] Use responsive images with srcset
- [ ] Optimize image file sizes (compress before upload)
- [ ] Add `priority` prop to above-the-fold images

### Code Optimization

- [ ] Implement code splitting with dynamic imports
- [ ] Use React Server Components (App Router)
- [ ] Minimize JavaScript bundle size
- [ ] Remove unused dependencies
- [ ] Enable CSS module bundling
- [ ] Use font optimization (`next/font`)
- [ ] Implement tree shaking

### Caching & Loading

- [ ] Configure appropriate cache headers
- [ ] Use Static Site Generation (SSG) where possible
- [ ] Implement Incremental Static Regeneration (ISR)
- [ ] Add loading states and skeletons
- [ ] Use Suspense boundaries effectively
- [ ] Implement service workers/PWA if applicable

---

## Content & Structure

### URL Structure

- [ ] Use clean, descriptive URLs
- [ ] Implement proper URL hierarchy
- [ ] Use hyphens to separate words in URLs
- [ ] Keep URLs short and meaningful
- [ ] Avoid special characters and parameters when possible

### Semantic HTML

- [ ] Use proper heading hierarchy (H1 → H6)
- [ ] Include only one H1 per page
- [ ] Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] Implement proper list structures (`<ul>`, `<ol>`, `<dl>`)
- [ ] Use `<button>` for actions and `<a>` for navigation

### Content Quality

- [ ] Write unique, valuable content for each page
- [ ] Target specific keywords naturally
- [ ] Ensure content is readable and well-structured
- [ ] Include internal links to related pages
- [ ] Add external links to authoritative sources
- [ ] Keep content fresh and updated
- [ ] Use descriptive anchor text for links

### Accessibility (impacts SEO)

- [ ] Add alt text to all images
- [ ] Ensure proper color contrast ratios
- [ ] Make site keyboard navigable
- [ ] Use ARIA labels where appropriate
- [ ] Ensure forms have proper labels
- [ ] Test with screen readers

---

## Technical SEO

### Sitemap & Robots

- [ ] Generate and submit XML sitemap
- [ ] Create and optimize `robots.txt` file
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Structured Data (Schema.org)

- [ ] Implement JSON-LD structured data
- [ ] Add Organization schema
- [ ] Add WebSite schema with search action
- [ ] Add BreadcrumbList schema
- [ ] Add Article/BlogPosting schema for blog posts
- [ ] Add Product schema for e-commerce
- [ ] Add FAQ schema if applicable
- [ ] Validate structured data with Google's Rich Results Test

### Redirects & Error Handling

- [ ] Implement proper 301 redirects for moved pages
- [ ] Create custom 404 error page
- [ ] Handle 500 errors gracefully
- [ ] Set up redirect rules in `next.config.js`
- [ ] Avoid redirect chains

### HTTPS & Security

- [ ] Ensure site is served over HTTPS
- [ ] Force HTTPS redirects
- [ ] Set up proper security headers
- [ ] Implement CSP (Content Security Policy)
- [ ] Add hsts header

### Internationalization (if applicable)

- [ ] Implement proper hreflang tags
- [ ] Use appropriate URL structure for languages
- [ ] Set up i18n routing in Next.js
- [ ] Provide language selector

---

## Images & Media

### Image Best Practices

- [ ] Use descriptive, keyword-rich file names
- [ ] Add comprehensive alt text (not keyword stuffing)
- [ ] Include image titles when appropriate
- [ ] Use captions for context
- [ ] Optimize file sizes (aim for < 200KB)
- [ ] Serve images in next-gen formats
- [ ] Implement responsive images

### Video Optimization

- [ ] Host videos on platforms like YouTube/Vimeo when possible
- [ ] Add video transcripts
- [ ] Implement video schema markup
- [ ] Lazy load video embeds
- [ ] Add descriptive titles and descriptions

---

## Social Media

### Social Sharing

- [ ] Test Open Graph tags with Facebook Sharing Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Ensure social share images are optimized
- [ ] Add social sharing buttons if appropriate
- [ ] Monitor social signals

---

## Analytics & Monitoring

### Setup & Configuration

- [ ] Install Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Configure Bing Webmaster Tools
- [ ] Implement event tracking
- [ ] Set up custom dimensions if needed

### Monitoring & Testing

- [ ] Regularly check Core Web Vitals
- [ ] Monitor indexing status in Search Console
- [ ] Check for crawl errors
- [ ] Monitor page speed with PageSpeed Insights
- [ ] Test mobile-friendliness
- [ ] Use Lighthouse for audits
- [ ] Monitor backlinks
- [ ] Track keyword rankings
- [ ] Set up uptime monitoring

### Continuous Improvement

- [ ] Review analytics monthly
- [ ] Update content regularly
- [ ] Fix broken links
- [ ] Improve low-performing pages
- [ ] Test and optimize conversion funnels

---

## Next.js Specific Best Practices

### App Router (Next.js 13+)

- [ ] Use `generateMetadata` for dynamic metadata
- [ ] Implement `generateStaticParams` for dynamic routes
- [ ] Leverage Server Components for better performance
- [ ] Use streaming and Suspense for improved loading

### Pages Router

- [ ] Use `getStaticProps` for static pages
- [ ] Use `getServerSideProps` only when necessary
- [ ] Implement `getStaticPaths` for dynamic routes
- [ ] Export metadata in custom `_document.js` and `_app.js`

### General

- [ ] Use `next/link` for internal navigation
- [ ] Implement middleware for redirects if needed
- [ ] Configure `next.config.js` for optimal SEO
- [ ] Set up proper trailing slash behavior
- [ ] Use environment variables for dynamic configurations

---

## Quick Reference Code Snippets

### App Router Metadata Example

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Site Name",
  description: "Compelling description for search results",
  openGraph: {
    title: "Page Title",
    description: "Description for social sharing",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title",
    description: "Description for Twitter",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://example.com/page",
  },
};
```

### Sitemap Generation (App Router)

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://example.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

### Robots.txt Generation (App Router)

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://example.com/sitemap.xml",
  };
}
```

---

## Tools & Resources

### SEO Tools

- Google Search Console
- Bing Webmaster Tools
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- Screaming Frog SEO Spider
- Ahrefs/SEMrush/Moz (paid)

### Testing Tools

- Google Rich Results Test
- Facebook Sharing Debugger
- Twitter Card Validator
- Schema Markup Validator
- Mobile-Friendly Test

### Next.js Resources

- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

## Notes

- SEO is an ongoing process, not a one-time task
- Focus on creating valuable content for users first
- Technical optimization should support, not replace, quality content
- Stay updated with Google's algorithm changes
- Test changes and monitor their impact
- Be patient - SEO results take time (typically 3-6 months)

---

**Last Updated:** November 2025
