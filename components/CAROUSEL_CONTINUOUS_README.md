# CarouselContinuous Component

A specialized React carousel component for creating seamless infinite scrolling animations. Perfect for logo showcases, brand displays, or any content that needs continuous movement.

## Features

- ✨ **Seamless Infinite Loop** - No jump or gap when looping
- 🎯 **Smooth Animation** - Linear continuous scrolling
- 🖱️ **Pause on Hover** - Optional hover to pause functionality
- 📱 **Responsive** - Breakpoint-based items per slide
- ⚡ **Performance Optimized** - Uses Framer Motion for GPU-accelerated animations
- 🎨 **Customizable** - Fully configurable spacing, speed, and styling

## Basic Usage

```tsx
import { CarouselContinuous } from "@/components/CarouselContinuous";

export function LogoShowcase() {
  const logos = [
    <img key="1" src="/logo1.png" alt="Company 1" />,
    <img key="2" src="/logo2.png" alt="Company 2" />,
    <img key="3" src="/logo3.png" alt="Company 3" />,
    <img key="4" src="/logo4.png" alt="Company 4" />,
  ];

  return (
    <CarouselContinuous
      items={logos}
      itemsPerSlide={4}
      animationDuration={1.5}
      gap={32}
      pauseOnHover={true}
    />
  );
}
```

## Props

### Required Props

| Prop    | Type          | Description                                        |
| ------- | ------------- | -------------------------------------------------- |
| `items` | `ReactNode[]` | Array of React elements to display in the carousel |

### Layout Props

| Prop            | Type                               | Default     | Description                                |
| --------------- | ---------------------------------- | ----------- | ------------------------------------------ |
| `itemsPerSlide` | `number`                           | `1`         | Number of items visible at once            |
| `gap`           | `number`                           | `16`        | Space between items in pixels              |
| `responsive`    | `{ [breakpoint: number]: number }` | `undefined` | Responsive breakpoints for items per slide |

### Animation Props

| Prop                | Type      | Default | Description                                    |
| ------------------- | --------- | ------- | ---------------------------------------------- |
| `animationDuration` | `number`  | `0.5`   | Duration in seconds per item (higher = slower) |
| `pauseOnHover`      | `boolean` | `true`  | Pause animation when hovering                  |

### Styling Props

| Prop             | Type     | Default | Description                          |
| ---------------- | -------- | ------- | ------------------------------------ |
| `className`      | `string` | `""`    | Custom class for the container       |
| `slideClassName` | `string` | `""`    | Custom class for the slide container |

## Examples

### Logo Carousel

```tsx
export function BrandShowcase() {
  const brands = [
    { name: "Company A", logo: "/logos/company-a.svg" },
    { name: "Company B", logo: "/logos/company-b.svg" },
    { name: "Company C", logo: "/logos/company-c.svg" },
    { name: "Company D", logo: "/logos/company-d.svg" },
    { name: "Company E", logo: "/logos/company-e.svg" },
  ];

  const items = brands.map((brand, index) => (
    <div key={index} className="flex items-center justify-center p-6">
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      />
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Trusted by Leading Companies
      </h2>
      <CarouselContinuous
        items={items}
        itemsPerSlide={5}
        animationDuration={2}
        gap={40}
        pauseOnHover={true}
        responsive={{
          0: 2,
          640: 3,
          1024: 5,
        }}
      />
    </div>
  );
}
```

### Testimonial Ticker

```tsx
export function TestimonialTicker() {
  const testimonials = [
    { text: "Amazing product!", author: "John D." },
    { text: "Best service ever!", author: "Sarah M." },
    { text: "Highly recommend!", author: "Mike R." },
  ];

  const items = testimonials.map((testimonial, index) => (
    <div key={index} className="bg-content2 p-6 rounded-lg">
      <p className="italic mb-2">"{testimonial.text}"</p>
      <p className="font-bold">- {testimonial.author}</p>
    </div>
  ));

  return (
    <CarouselContinuous
      items={items}
      itemsPerSlide={3}
      animationDuration={3}
      gap={24}
      pauseOnHover={true}
    />
  );
}
```

### Product Showcase

```tsx
export function ProductShowcase() {
  const products = [
    { id: 1, name: "Product A", image: "/products/a.jpg", price: "$29" },
    { id: 2, name: "Product B", image: "/products/b.jpg", price: "$39" },
    { id: 3, name: "Product C", image: "/products/c.jpg", price: "$49" },
    { id: 4, name: "Product D", image: "/products/d.jpg", price: "$59" },
  ];

  const items = products.map((product) => (
    <Card key={product.id} className="h-full">
      <CardBody>
        <Image src={product.image} alt={product.name} className="mb-2" />
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-primary font-bold">{product.price}</p>
      </CardBody>
    </Card>
  ));

  return (
    <CarouselContinuous
      items={items}
      itemsPerSlide={4}
      animationDuration={1.5}
      gap={20}
      responsive={{
        0: 1,
        640: 2,
        1024: 4,
      }}
    />
  );
}
```

## Responsive Breakpoints

Use the `responsive` prop to change the number of items per slide based on screen width:

```tsx
<CarouselContinuous
  items={items}
  itemsPerSlide={4}
  responsive={{
    0: 1, // Mobile: 1 item
    640: 2, // Tablet: 2 items
    1024: 4, // Desktop: 4 items
  }}
/>
```

## Animation Speed

Control the scrolling speed with `animationDuration`:

- **Lower values (0.5-1)**: Faster scrolling
- **Medium values (1-2)**: Normal speed
- **Higher values (2-4)**: Slower, more leisurely pace

```tsx
// Fast scrolling
<CarouselContinuous items={items} animationDuration={0.5} />

// Slow scrolling
<CarouselContinuous items={items} animationDuration={3} />
```

## Styling

### Custom Container Styling

```tsx
<CarouselContinuous
  items={items}
  className="bg-content1 rounded-lg shadow-lg p-4"
  slideClassName="py-2"
/>
```

### Custom Item Styling

Style the items themselves when creating the `items` array:

```tsx
const items = data.map((item, index) => (
  <div
    key={index}
    className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg"
  >
    {item.content}
  </div>
));
```

## Best Practices

1. **Item Count**: Use at least 6-8 items for smooth continuous scrolling
2. **Consistent Sizing**: Ensure all items have similar widths for best results
3. **Performance**: Avoid heavy components or animations within items
4. **Gap Spacing**: Use appropriate gap values (16-32px) for visual separation
5. **Hover Behavior**: Enable `pauseOnHover` for better user experience

## Differences from Standard Carousel

| Feature           | Carousel         | CarouselContinuous |
| ----------------- | ---------------- | ------------------ |
| Navigation Arrows | ✅ Yes           | ❌ No              |
| Indicators        | ✅ Yes           | ❌ No              |
| Animation Types   | slide/fade/scale | continuous only    |
| Keyboard Nav      | ✅ Yes           | ❌ No              |
| Swipe Gestures    | ✅ Yes           | ❌ No              |
| Auto-play         | ✅ Yes           | ✅ Always on       |
| Pause on Hover    | ✅ Yes           | ✅ Yes             |

## When to Use

**Use CarouselContinuous for:**

- Logo/brand showcases
- Partner displays
- Feature highlights
- Testimonial tickers
- Product showcases
- Continuous content streams

**Use standard Carousel for:**

- Image galleries with navigation
- Product detail slides
- Hero banners with controls
- Content that needs user-controlled navigation

## Technical Notes

- Built with **Framer Motion** for smooth animations
- Uses CSS transforms for GPU acceleration
- Implements seamless looping by duplicating items
- Automatically handles responsive breakpoints
- No layout shift when pausing/resuming animation

## Browser Support

Works on all modern browsers that support:

- CSS transforms
- Flexbox
- ES6+ JavaScript
- Framer Motion

## Accessibility

- Semantic HTML structure
- Respects `prefers-reduced-motion`
- Keyboard accessible (pause/resume with mouse)
- Screen reader friendly content
