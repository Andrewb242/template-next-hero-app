"use client";

// ============================================
// IMPORTS
// ============================================
import { useState, useEffect, useRef, ReactNode, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface CarouselContinuousProps {
  // === REQUIRED PROPS ===
  /**
   * Array of items to display in the carousel
   * Each item should be a React node (JSX element)
   */
  items: ReactNode[];

  // === LAYOUT PROPS ===
  /**
   * Number of items to show per slide
   * @default 1
   * @example 3 - shows 3 items at once
   */
  itemsPerSlide?: number;

  /**
   * Gap between items in pixels
   * @default 16
   */
  gap?: number;

  /**
   * Responsive breakpoints for items per slide
   * Key = minimum screen width, Value = items to show
   * @example { 640: 2, 1024: 3 } - 2 items on tablet, 3 on desktop
   */
  responsive?: {
    [breakpoint: number]: number;
  };

  // === ANIMATION PROPS ===
  /**
   * Animation duration in seconds per item (higher = slower)
   * @default 0.5
   */
  animationDuration?: number;

  /**
   * Pause animation on hover
   * @default true
   */
  pauseOnHover?: boolean;

  // === STYLING PROPS ===
  /**
   * Custom class name for the container
   */
  className?: string;

  /**
   * Custom class name for the slide container
   */
  slideClassName?: string;
}

// ============================================
// MAIN COMPONENT
// ============================================

export function CarouselContinuous({
  // Required
  items,

  // Layout
  itemsPerSlide = 1,
  gap = 16,
  responsive,

  // Animation
  animationDuration = 0.5,
  pauseOnHover = true,

  // Styling
  className = "",
  slideClassName = "",
}: CarouselContinuousProps) {
  // ============================================
  // STATE & REFS
  // ============================================

  // Hover state for pause functionality
  const [isHovered, setIsHovered] = useState(false);

  // Current items per slide (responsive)
  const [currentItemsPerSlide, setCurrentItemsPerSlide] =
    useState(itemsPerSlide);

  // Animation controls
  const controls = useAnimation();
  const animationRef = useRef<any>(null);

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================

  useEffect(() => {
    if (!responsive) return;

    const handleResize = () => {
      const width = window.innerWidth;
      let newItemsPerSlide = itemsPerSlide;

      // Find the appropriate breakpoint
      const breakpoints = Object.keys(responsive)
        .map(Number)
        .sort((a, b) => a - b);

      for (const breakpoint of breakpoints) {
        if (width >= breakpoint) {
          newItemsPerSlide = responsive[breakpoint];
        }
      }

      setCurrentItemsPerSlide(newItemsPerSlide);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [responsive, itemsPerSlide]);

  // ============================================
  // CONTINUOUS ANIMATION
  // ============================================

  // Create duplicated items for seamless loop
  const continuousItems = useMemo(() => {
    // Duplicate items twice for seamless infinite scroll
    return [...items, ...items];
  }, [items]);

  // Handle continuous animation with pause/resume
  useEffect(() => {
    const startAnimation = async () => {
      // Calculate total duration for one complete loop
      const totalDuration = items.length * animationDuration;

      // If paused, stop the animation
      if (pauseOnHover && isHovered) {
        controls.stop();
        return;
      }

      // Start or resume animation
      animationRef.current = controls.start({
        x: "-50%", // Move by 50% (one complete set of items)
        transition: {
          duration: totalDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, [isHovered, pauseOnHover, items.length, animationDuration, controls]);

  // ============================================
  // RENDER
  // ============================================

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className={`flex ${slideClassName}`}
          style={{
            gap: `${gap}px`,
          }}
          animate={controls}
          initial={{ x: 0 }}
        >
          {continuousItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc((100% - ${gap * (currentItemsPerSlide - 1)}px) / ${currentItemsPerSlide})`,
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
