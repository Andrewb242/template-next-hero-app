# Carousel Component Documentation

A fully responsive, customizable, and feature-rich carousel component built with React, TypeScript, Framer Motion, and HeroUI.

## Features

✅ **Responsive Design** - Adapts to different screen sizes with configurable breakpoints  
✅ **Multiple Items Per Slide** - Display 1 or more items per slide  
✅ **Auto-Play** - Automatic slide transitions with configurable intervals  
✅ **Touch/Swipe Support** - Smooth swipe gestures on mobile devices  
✅ **Keyboard Navigation** - Arrow keys for navigation  
✅ **Animation Options** - Slide, fade, or scale animations  
✅ **Customizable Styling** - Full control over appearance  
✅ **Infinite Loop** - Seamless continuous scrolling  
✅ **Indicators & Arrows** - Navigation dots and arrow buttons  
✅ **Accessibility** - ARIA labels and keyboard support  
✅ **TypeScript Support** - Fully typed for better DX

---

## Installation

The component is already part of this project. Import it as needed:

```tsx
import { Carousel } from "@/components/Carousel";
```

---

## Basic Usage

```tsx
import { Carousel } from "@/components/Carousel";

export function MyCarousel() {
  const items = [
    <div key={1}>Slide 1</div>,
    <div key={2}>Slide 2</div>,
    <div key={3}>Slide 3</div>,
  ];

  return <Carousel items={items} autoPlay={5000} loop={true} />;
}
```

---

## Props

| Prop                 | Type                                           | Default      | Description                                                  |
| -------------------- | ---------------------------------------------- | ------------ | ------------------------------------------------------------ |
| `items`              | `ReactNode[]`                                  | **required** | Array of items to display                                    |
| `itemsPerSlide`      | `number`                                       | `1`          | Number of items per slide                                    |
| `autoPlay`           | `number`                                       | `0`          | Auto-play interval (ms), 0 to disable                        |
| `loop`               | `boolean`                                      | `true`       | Enable infinite loop                                         |
| `showArrows`         | `boolean`                                      | `true`       | Show navigation arrows                                       |
| `showIndicators`     | `boolean`                                      | `true`       | Show indicator dots                                          |
| `animationDuration`  | `number`                                       | `0.5`        | Animation duration (seconds). For continuous, controls speed |
| `animationType`      | `"slide" \| "fade" \| "scale" \| "continuous"` | `"slide"`    | Animation type                                               |
| `gap`                | `number`                                       | `16`         | Gap between items (pixels)                                   |
| `className`          | `string`                                       | `""`         | Custom container class                                       |
| `slideClassName`     | `string`                                       | `""`         | Custom slide container class                                 |
| `arrowClassName`     | `string`                                       | `""`         | Custom arrow button class                                    |
| `indicatorClassName` | `string`                                       | `""`         | Custom indicator class                                       |
| `arrowPosition`      | `"center" \| "top" \| "bottom"`                | `"center"`   | Arrow vertical position                                      |
| `arrowVariant`       | `"default" \| "ghost" \| "shadow"`             | `"default"`  | Arrow button style                                           |
| `indicatorPosition`  | `"top" \| "bottom" \| "none"`                  | `"bottom"`   | Indicator position                                           |
| `pauseOnHover`       | `boolean`                                      | `true`       | Pause auto-play on hover                                     |
| `keyboardNavigation` | `boolean`                                      | `true`       | Enable keyboard navigation                                   |
| `swipeEnabled`       | `boolean`                                      | `true`       | Enable swipe gestures                                        |
| `onSlideChange`      | `(index: number) => void`                      | -            | Callback on slide change                                     |
| `responsive`         | `{ [breakpoint: number]: number }`             | -            | Responsive items per slide                                   |

---

## Examples

### 1. Basic Image Carousel

```tsx
const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
];

const items = images.map((src, i) => (
  <img key={i} src={src} className="w-full h-96 object-cover rounded-lg" />
));

<Carousel items={items} autoPlay={5000} />;
```

### 2. Multiple Items with Responsive Breakpoints

```tsx
<Carousel
  items={cardItems}
  itemsPerSlide={3}
  gap={20}
  responsive={{
    0: 1, // Mobile: 1 item
    640: 2, // Tablet: 2 items
    1024: 3, // Desktop: 3 items
  }}
/>
```

### 3. Fade Animation Carousel

```tsx
<Carousel
  items={testimonials}
  animationType="fade"
  autoPlay={6000}
  showArrows={false}
/>
```

### 4. Auto-scrolling Logo Carousel

```tsx
<Carousel
  items={logos}
  itemsPerSlide={4}
  autoPlay={3000}
  showArrows={false}
  showIndicators={false}
  loop={true}
/>
```

### 5. Continuous Scrolling Carousel

```tsx
<Carousel
  items={brands}
  itemsPerSlide={4}
  animationType="continuous"
  animationDuration={2}
  pauseOnHover={true}
  showArrows={false}
  showIndicators={false}
/>
```

### 6. Custom Styled Carousel

```tsx
<Carousel
  items={slides}
  autoPlay={7000}
  arrowVariant="shadow"
  arrowClassName="bg-white/80 hover:bg-white"
  indicatorClassName="!bg-primary-500"
  className="rounded-2xl overflow-hidden"
/>
```

### 7. Carousel with Callback

```tsx
<Carousel
  items={items}
  onSlideChange={(index) => {
    console.log(`Now showing slide ${index + 1}`);
    // Update analytics, load more data, etc.
  }}
/>
```

---

## Animation Types

### Slide (Default)

Slides transition horizontally with smooth motion.

```tsx
<Carousel items={items} animationType="slide" />
```

### Fade

Cross-fade between slides.

```tsx
<Carousel items={items} animationType="fade" />
```

### Scale

Zoom effect during transitions.

```tsx
<Carousel items={items} animationType="scale" />
```

### Continuous

Seamless infinite scrolling without stopping. Perfect for logos, testimonials, or partner showcases.

```tsx
<Carousel
  items={items}
  animationType="continuous"
  animationDuration={2} // Higher = slower
  pauseOnHover={true}
/>
```

**Note:** When using continuous animation:

- Navigation arrows and indicators are automatically hidden
- The `animationDuration` prop controls the speed per item (higher = slower)
- Content seamlessly loops without gaps
- Hover to pause is supported
- Auto-play setting is ignored (continuous mode is always "playing")

---

## Responsive Configuration

Configure different items per slide at various breakpoints:

```tsx
<Carousel
  items={items}
  itemsPerSlide={4} // Default for large screens
  responsive={{
    0: 1, // 0px and up: 1 item
    640: 2, // 640px and up: 2 items
    768: 3, // 768px and up: 3 items
    1024: 4, // 1024px and up: 4 items
  }}
/>
```

---

## Keyboard Navigation

When enabled (default), users can navigate using:

- **Left Arrow** - Previous slide
- **Right Arrow** - Next slide

Disable with:

```tsx
<Carousel items={items} keyboardNavigation={false} />
```

---

## Touch/Swipe Gestures

Enabled by default for mobile devices. Swipe left/right to navigate.

Disable with:

```tsx
<Carousel items={items} swipeEnabled={false} />
```

---

## Auto-Play Configuration

```tsx
// Auto-play every 5 seconds
<Carousel items={items} autoPlay={5000} />

// Pause on hover (default)
<Carousel items={items} autoPlay={5000} pauseOnHover={true} />

// Continue playing on hover
<Carousel items={items} autoPlay={5000} pauseOnHover={false} />

// Disable auto-play
<Carousel items={items} autoPlay={0} />
```

---

## Styling & Customization

### Custom Classes

```tsx
<Carousel
  items={items}
  className="shadow-xl rounded-2xl"
  slideClassName="p-4"
  arrowClassName="bg-primary text-white"
  indicatorClassName="!bg-secondary"
/>
```

### Arrow Variants

```tsx
// Solid background (default)
<Carousel items={items} arrowVariant="default" />

// Transparent with hover effect
<Carousel items={items} arrowVariant="ghost" />

// With shadow
<Carousel items={items} arrowVariant="shadow" />
```

### Arrow Positioning

```tsx
// Center (default)
<Carousel items={items} arrowPosition="center" />

// Top
<Carousel items={items} arrowPosition="top" />

// Bottom
<Carousel items={items} arrowPosition="bottom" />
```

### Indicator Positioning

```tsx
// Bottom (default)
<Carousel items={items} indicatorPosition="bottom" />

// Top
<Carousel items={items} indicatorPosition="top" />

// Hide indicators
<Carousel items={items} indicatorPosition="none" />
// or
<Carousel items={items} showIndicators={false} />
```

---

## Advanced Examples

### Product Carousel with Cards

```tsx
import { Card, CardBody, Image } from "@heroui/react";

const products = [
  { title: "Product 1", price: "$29", image: "..." },
  // ... more products
];

const items = products.map((product) => (
  <Card key={product.title}>
    <Image src={product.image} />
    <CardBody>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </CardBody>
  </Card>
));

<Carousel
  items={items}
  itemsPerSlide={3}
  gap={24}
  responsive={{ 0: 1, 768: 2, 1024: 3 }}
/>;
```

### Hero Banner Carousel

```tsx
const slides = [
  {
    image: "hero1.jpg",
    title: "Welcome",
    subtitle: "Discover amazing features",
  },
  // ... more slides
];

const items = slides.map((slide) => (
  <div className="relative h-[600px]">
    <img src={slide.image} className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">{slide.title}</h1>
        <p className="text-2xl mt-4">{slide.subtitle}</p>
      </div>
    </div>
  </div>
));

<Carousel
  items={items}
  autoPlay={7000}
  animationType="fade"
  showIndicators={true}
/>;
```

---

## Accessibility

The carousel includes:

- ARIA labels on navigation buttons
- Keyboard navigation support
- Semantic HTML structure
- Focus management

---

## Performance Tips

1. **Optimize Images** - Use appropriate image sizes and formats (WebP)
2. **Lazy Loading** - Consider lazy loading for off-screen items
3. **Limit Auto-Play Speed** - Avoid very fast auto-play (<3000ms)
4. **Reduce Items** - For better performance, limit items per slide on mobile

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Dependencies

- React 18+
- Framer Motion
- HeroUI React
- TypeScript (optional but recommended)

---

## License

This component is part of the template-next-hero-app project.
