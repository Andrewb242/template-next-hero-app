"use client";

import { Carousel } from "../Carousel";
import { CarouselContinuous } from "../CarouselContinuous";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

// ============================================
// EXAMPLE 1: Basic Image Carousel
// ============================================

export function BasicImageCarousel() {
  const images = [
    {
      src: "https://picsum.photos/800/400?random=1",
      alt: "Slide 1",
      title: "Beautiful Landscape",
    },
    {
      src: "https://picsum.photos/800/400?random=2",
      alt: "Slide 2",
      title: "City View",
    },
    {
      src: "https://picsum.photos/800/400?random=3",
      alt: "Slide 3",
      title: "Nature Scene",
    },
    {
      src: "https://picsum.photos/800/400?random=4",
      alt: "Slide 4",
      title: "Mountain Range",
    },
  ];

  const items = images.map((image, index) => (
    <div key={index} className="relative w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
        <h3 className="text-xl font-bold">{image.title}</h3>
      </div>
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Basic Image Carousel</h2>
      <Carousel
        items={items}
        autoPlay={5000}
        loop={true}
        showArrows={true}
        showIndicators={true}
        pauseOnHover={true}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 2: Card Carousel with Multiple Items
// ============================================

export function CardCarousel() {
  const products = [
    {
      title: "Product 1",
      price: "$29.99",
      image: "https://picsum.photos/300/200?random=5",
      description: "Amazing product with great features",
    },
    {
      title: "Product 2",
      price: "$39.99",
      image: "https://picsum.photos/300/200?random=6",
      description: "High quality and affordable",
    },
    {
      title: "Product 3",
      price: "$49.99",
      image: "https://picsum.photos/300/200?random=7",
      description: "Best seller this month",
    },
    {
      title: "Product 4",
      price: "$59.99",
      image: "https://picsum.photos/300/200?random=8",
      description: "Premium quality product",
    },
    {
      title: "Product 5",
      price: "$69.99",
      image: "https://picsum.photos/300/200?random=9",
      description: "Limited edition item",
    },
    {
      title: "Product 6",
      price: "$79.99",
      image: "https://picsum.photos/300/200?random=10",
      description: "Customer favorite",
    },
  ];

  const items = products.map((product, index) => (
    <Card key={index} className="h-full">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
          radius="none"
        />
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-bold mb-2">{product.title}</h3>
        <p className="text-sm text-default-500 mb-2">{product.description}</p>
        <p className="text-xl font-bold text-primary">{product.price}</p>
      </CardBody>
    </Card>
  ));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Product Card Carousel</h2>
      <Carousel
        items={items}
        itemsPerSlide={3}
        autoPlay={4000}
        loop={true}
        gap={20}
        showArrows={true}
        showIndicators={true}
        responsive={{
          0: 1,
          640: 2,
          1024: 3,
        }}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 3: Testimonial Carousel with Fade Animation
// ============================================

export function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        "This product changed my life! Highly recommended for anyone looking to improve their workflow.",
      author: "John Doe",
      role: "CEO, Tech Corp",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "Incredible quality and support. The team went above and beyond to help us succeed.",
      author: "Jane Smith",
      role: "Designer, Creative Agency",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      quote:
        "Best investment we've made this year. The ROI has been outstanding.",
      author: "Mike Johnson",
      role: "CTO, StartupXYZ",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const items = testimonials.map((testimonial, index) => (
    <div key={index} className="text-center max-w-2xl mx-auto p-8">
      <div className="mb-6 w-full flex justify-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
      </div>
      <blockquote className="text-xl italic text-default-600 mb-4">
        "{testimonial.quote}"
      </blockquote>
      <div>
        <p className="font-bold text-lg">{testimonial.author}</p>
        <p className="text-default-500">{testimonial.role}</p>
      </div>
    </div>
  ));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-content1 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">
        What Our Customers Say
      </h2>
      <Carousel
        items={items}
        autoPlay={6000}
        loop={true}
        animationType="fade"
        showArrows={false}
        showIndicators={true}
        pauseOnHover={true}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 4: Full-Featured Carousel
// ============================================

export function FullFeaturedCarousel() {
  const slides = [
    {
      title: "Welcome to Our Platform",
      subtitle: "Discover amazing features",
      image: "https://picsum.photos/1200/600?random=11",
      cta: "Get Started",
    },
    {
      title: "Boost Your Productivity",
      subtitle: "Work smarter, not harder",
      image: "https://picsum.photos/1200/600?random=12",
      cta: "Learn More",
    },
    {
      title: "Join Our Community",
      subtitle: "Connect with thousands of users",
      image: "https://picsum.photos/1200/600?random=13",
      cta: "Sign Up Now",
    },
  ];

  const items = slides.map((slide, index) => (
    <div key={index} className="relative w-full h-[600px]">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
        <div className="text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl md:text-2xl mb-6">{slide.subtitle}</p>
          <button className="bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            {slide.cta}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Full-Featured Hero Carousel</h2>
      <Carousel
        items={items}
        autoPlay={7000}
        loop={true}
        animationType="slide"
        animationDuration={0.7}
        showArrows={true}
        showIndicators={true}
        arrowPosition="center"
        arrowVariant="shadow"
        indicatorPosition="bottom"
        pauseOnHover={true}
        keyboardNavigation={true}
        swipeEnabled={true}
        onSlideChange={(index) => console.log(`Slide changed to ${index}`)}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 5: Logo Carousel (Auto-scrolling)
// ============================================

export function LogoCarousel() {
  const logos = [
    {
      name: "Company 1",
      url: "https://via.placeholder.com/150x80/4A90E2/FFF?text=Logo+1",
    },
    {
      name: "Company 2",
      url: "https://via.placeholder.com/150x80/E74C3C/FFF?text=Logo+2",
    },
    {
      name: "Company 3",
      url: "https://via.placeholder.com/150x80/2ECC71/FFF?text=Logo+3",
    },
    {
      name: "Company 4",
      url: "https://via.placeholder.com/150x80/F39C12/FFF?text=Logo+4",
    },
    {
      name: "Company 5",
      url: "https://via.placeholder.com/150x80/9B59B6/FFF?text=Logo+5",
    },
    {
      name: "Company 6",
      url: "https://via.placeholder.com/150x80/1ABC9C/FFF?text=Logo+6",
    },
  ];

  const items = logos.map((logo, index) => (
    <div
      key={index}
      className="flex items-center justify-center p-4 bg-content2 rounded-lg"
    >
      <img
        src={logo.url}
        alt={logo.name}
        className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
      />
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Trusted by Leading Companies
      </h2>
      <Carousel
        items={items}
        itemsPerSlide={4}
        autoPlay={3000}
        loop={true}
        gap={24}
        showArrows={false}
        showIndicators={false}
        animationType="fade"
        responsive={{
          0: 2,
          640: 3,
          1024: 4,
        }}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 6: Continuous Scrolling Carousel
// ============================================

export function ContinuousCarousel() {
  const brands = [
    {
      name: "Brand A",
      url: "https://via.placeholder.com/150x80/FF6B6B/FFF?text=Brand+A",
    },
    {
      name: "Brand B",
      url: "https://via.placeholder.com/150x80/4ECDC4/FFF?text=Brand+B",
    },
    {
      name: "Brand C",
      url: "https://via.placeholder.com/150x80/45B7D1/FFF?text=Brand+C",
    },
    {
      name: "Brand D",
      url: "https://via.placeholder.com/150x80/FFA07A/FFF?text=Brand+D",
    },
    {
      name: "Brand E",
      url: "https://via.placeholder.com/150x80/98D8C8/FFF?text=Brand+E",
    },
    {
      name: "Brand F",
      url: "https://via.placeholder.com/150x80/F7DC6F/FFF?text=Brand+F",
    },
    {
      name: "Brand G",
      url: "https://via.placeholder.com/150x80/BB8FCE/FFF?text=Brand+G",
    },
    {
      name: "Brand H",
      url: "https://via.placeholder.com/150x80/85C1E2/FFF?text=Brand+H",
    },
  ];

  const items = brands.map((brand, index) => (
    <div
      key={index}
      className="flex items-center justify-center p-6 bg-content2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={brand.url}
        alt={brand.name}
        className="max-h-20 object-contain"
      />
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Continuous Scrolling Animation
      </h2>
      <p className="text-center text-default-500 mb-6">
        Seamless infinite scroll - hover to pause
      </p>
      <CarouselContinuous
        items={items}
        itemsPerSlide={4}
        animationDuration={2}
        gap={24}
        pauseOnHover={true}
        responsive={{
          0: 2,
          640: 3,
          1024: 4,
        }}
      />
    </div>
  );
}

// ============================================
// ALL EXAMPLES DEMO PAGE
// ============================================

export function CarouselExamplesDemo() {
  return (
    <div className="space-y-12 py-12">
      <BasicImageCarousel />
      <CardCarousel />
      <TestimonialCarousel />
      <FullFeaturedCarousel />
      <LogoCarousel />
      <ContinuousCarousel />
    </div>
  );
}
