"use client";

// ============================================
// IMPORTS
// ============================================
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
  useMemo,
} from "react";
import { Button } from "@heroui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/config/icons";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface CarouselProps {
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
   * Animation type
   * - "slide": horizontal slide transition
   * - "fade": cross-fade transition
   * - "scale": zoom effect transition
   * Note: For continuous/infinite scrolling, use CarouselContinuous component
   * @default "slide"
   */
  animationType?: "slide" | "fade" | "scale";

  /**
   * Animation duration in seconds
   * Time for transition between slides
   * @default 0.5
   */
  animationDuration?: number;

  // === AUTO-PLAY PROPS ===
  /**
   * Auto-play interval in milliseconds (0 to disable)
   * @default 0
   * @example 5000 - auto-advance every 5 seconds
   */
  autoPlay?: number;

  /**
   * Enable infinite loop
   * When true, carousel loops back to start after last slide
   * @default true
   */
  loop?: boolean;

  /**
   * Pause auto-play on hover
   * @default true
   */
  pauseOnHover?: boolean;

  // === NAVIGATION PROPS ===
  /**
   * Show navigation arrows
   * @default true
   */
  showArrows?: boolean;

  /**
   * Arrow position
   * @default "center"
   */
  arrowPosition?: "center" | "top" | "bottom";

  /**
   * Arrow button style
   * @default "default"
   */
  arrowVariant?: "default" | "ghost" | "shadow";

  /**
   * Show indicator dots
   * @default true
   */
  showIndicators?: boolean;

  /**
   * Indicator position
   * @default "bottom"
   */
  indicatorPosition?: "top" | "bottom" | "none";

  // === INTERACTION PROPS ===
  /**
   * Enable keyboard navigation (arrow keys)
   * @default true
   */
  keyboardNavigation?: boolean;

  /**
   * Enable touch/swipe gestures
   * @default true
   */
  swipeEnabled?: boolean;

  // === STYLING PROPS ===
  /**
   * Custom class name for the container
   */
  className?: string;

  /**
   * Custom class name for the slide container
   */
  slideClassName?: string;

  /**
   * Custom class name for navigation buttons
   */
  arrowClassName?: string;

  /**
   * Custom class name for indicators
   */
  indicatorClassName?: string;

  // === CALLBACK PROPS ===
  /**
   * Callback fired when slide changes
   * Receives the new slide index
   */
  onSlideChange?: (index: number) => void;
}

// ============================================
// MAIN COMPONENT
// ============================================

export function Carousel({
  // Required
  items,

  // Layout
  itemsPerSlide = 1,
  gap = 16,
  responsive,

  // Animation
  animationType = "slide",
  animationDuration = 0.5,

  // Auto-play
  autoPlay = 0,
  loop = true,
  pauseOnHover = true,

  // Navigation
  showArrows = true,
  arrowPosition = "center",
  arrowVariant = "default",
  showIndicators = true,
  indicatorPosition = "bottom",

  // Interaction
  keyboardNavigation = true,
  swipeEnabled = true,

  // Styling
  className = "",
  slideClassName = "",
  arrowClassName = "",
  indicatorClassName = "",

  // Callbacks
  onSlideChange,
}: CarouselProps) {
  // ============================================
  // STATE & REFS
  // ============================================

  // Current slide index (for slide/fade/scale modes)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hover state for pause functionality
  const [isHovered, setIsHovered] = useState(false);

  // Animation direction (-1 = left, 1 = right)
  const [direction, setDirection] = useState(0);

  // Current items per slide (responsive)
  const [currentItemsPerSlide, setCurrentItemsPerSlide] =
    useState(itemsPerSlide);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // ============================================
  // CALCULATIONS
  // ============================================

  // Calculate total slides based on items per slide
  const totalSlides = Math.ceil(items.length / currentItemsPerSlide);

  // Check if navigation buttons should be shown
  const canGoPrev = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < totalSlides - 1;

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================
  // Handles responsive items per slide based on screen width
  // Can be removed if you don't need responsive behavior

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
  // NAVIGATION FUNCTIONS
  // ============================================
  // Core functions for navigating between slides
  // Required for slide/fade/scale modes

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;

      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      onSlideChange?.(index);
    },
    [currentIndex, onSlideChange]
  );

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    if (currentIndex === totalSlides - 1) {
      if (loop) {
        goToSlide(0);
      }
    } else {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, totalSlides, loop, goToSlide]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    if (currentIndex === 0) {
      if (loop) {
        goToSlide(totalSlides - 1);
      }
    } else {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, totalSlides, loop, goToSlide]);

  // ============================================
  // AUTO-PLAY FUNCTIONALITY
  // ============================================
  // Automatically advances slides at regular intervals
  // Can be removed if you don't need auto-play

  useEffect(() => {
    if (autoPlay > 0 && (!pauseOnHover || !isHovered)) {
      autoPlayRef.current = setInterval(nextSlide, autoPlay);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, pauseOnHover, isHovered, nextSlide]);

  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  // Enables left/right arrow key navigation
  // Can be removed if you don't need keyboard support

  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyboardNavigation, prevSlide, nextSlide]);

  // ============================================
  // SWIPE/DRAG GESTURES
  // ============================================
  // Enables touch swipe and mouse drag navigation
  // Can be removed if you don't need gesture support

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!swipeEnabled) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  // ============================================
  // ANIMATION VARIANTS
  // ============================================
  // Defines animation behavior for slide/fade/scale modes
  // Can customize or remove variants you don't use

  const getAnimationVariants = () => {
    switch (animationType) {
      case "fade":
        return {
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case "scale":
        return {
          enter: { scale: 0.8, opacity: 0 },
          center: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
        };
      case "slide":
      default:
        return {
          enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
          }),
          center: { x: 0, opacity: 1 },
          exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
          }),
        };
    }
  };

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  // Get CSS classes for arrow positioning
  const getArrowPositionClasses = () => {
    switch (arrowPosition) {
      case "top":
        return "top-4";
      case "bottom":
        return "bottom-4";
      case "center":
      default:
        return "top-1/2 -translate-y-1/2";
    }
  };

  // Get items for current slide (used in slide/fade/scale modes)
  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * currentItemsPerSlide;
    return items.slice(startIndex, startIndex + currentItemsPerSlide);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========================================
          TOP INDICATORS
          Can be removed if you use indicatorPosition="bottom" or "none"
          ======================================== */}
      {showIndicators && indicatorPosition === "top" && (
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-default-300 w-2 hover:bg-default-400"
              } ${indicatorClassName}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* ========================================
          CAROUSEL CONTAINER
          ======================================== */}
      <div className="relative overflow-hidden">
        {/* ========================================
            STANDARD MODES
            Slide/Fade/Scale animations
            ======================================== */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={getAnimationVariants()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: animationDuration,
              ease: "easeInOut",
            }}
            drag={swipeEnabled ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`grid ${slideClassName}`}
            style={{
              gridTemplateColumns: `repeat(${currentItemsPerSlide}, 1fr)`,
              gap: `${gap}px`,
            }}
          >
            {getCurrentSlideItems().map((item, index) => (
              <div
                key={currentIndex * currentItemsPerSlide + index}
                className="w-full"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ========================================
            NAVIGATION ARROWS
            Can be removed if showArrows={false}
            ======================================== */}
        {showArrows && (
          <>
            {/* Previous button */}
            <Button
              isIconOnly
              variant={
                arrowVariant === "ghost"
                  ? "light"
                  : arrowVariant === "shadow"
                    ? "shadow"
                    : "solid"
              }
              color="default"
              className={`absolute left-2 z-10 ${getArrowPositionClasses()} ${arrowClassName} ${
                !canGoPrev ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onPress={prevSlide}
              isDisabled={!canGoPrev}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon size={20} />
            </Button>

            {/* Next button */}
            <Button
              isIconOnly
              variant={
                arrowVariant === "ghost"
                  ? "light"
                  : arrowVariant === "shadow"
                    ? "shadow"
                    : "solid"
              }
              color="default"
              className={`absolute right-2 z-10 ${getArrowPositionClasses()} ${arrowClassName} ${
                !canGoNext ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onPress={nextSlide}
              isDisabled={!canGoNext}
              aria-label="Next slide"
            >
              <ChevronRightIcon size={20} />
            </Button>
          </>
        )}
      </div>

      {/* ========================================
          BOTTOM INDICATORS
          Can be removed if indicatorPosition="top" or "none"
          ======================================== */}
      {showIndicators && indicatorPosition === "bottom" && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-default-300 w-2 hover:bg-default-400"
              } ${indicatorClassName}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
