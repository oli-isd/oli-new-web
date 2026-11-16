import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

const FADE_MS = 1000;

const PRELOAD_TIMEOUT_MS = 3000;

/**
 * Resolves once the browser has downloaded AND decoded the image. Always resolves: on error,
 * or after a timeout, so a stalled download/decode can never freeze the carousel.
 */
const preload = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      resolve();
    };
    const timeout = setTimeout(done, PRELOAD_TIMEOUT_MS);
    img.onerror = done;
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(done, done);
      } else {
        done();
      }
    };
    img.src = src;
  });

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 4500,
  className = ''
}) => {
  const [current, setCurrent] = useState(0);
  // The slide that is being faded out. It stays fully opaque underneath the incoming
  // slide until the fade completes, so there is never a see-through "ghost" moment.
  const [previous, setPrevious] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const requestRef = useRef(0);
  const clearPreviousRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Switch slides only after the target image is decoded, so it never pops in mid-fade.
  const goTo = useCallback(
    async (target: number) => {
      if (target === currentRef.current) return;
      const requestId = ++requestRef.current;
      await preload(images[target]);
      if (requestId !== requestRef.current) return; // a newer request superseded this one

      setPrevious(currentRef.current);
      currentRef.current = target;
      setCurrent(target);

      // Normally cleared by the incoming slide's `transitionend`. This is only a backstop for
      // cases where no transition runs (reduced motion), so keep it comfortably longer than the fade.
      if (clearPreviousRef.current) clearTimeout(clearPreviousRef.current);
      clearPreviousRef.current = setTimeout(() => setPrevious(null), FADE_MS * 3);
    },
    [images]
  );

  // Track visibility: don't autoplay or preload for carousels that are off-screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [images.length]);

  // Warm up the next slide while the current one is on screen.
  useEffect(() => {
    if (!inView || images.length < 2) return;
    preload(images[(current + 1) % images.length]);
  }, [current, inView, images]);

  // Autoplay: the dwell timer restarts after every change (including manual ones).
  useEffect(() => {
    if (images.length < 2 || hovered || !inView) return;
    const timer = setTimeout(() => {
      goTo((current + 1) % images.length);
    }, autoPlayInterval);
    return () => clearTimeout(timer);
  }, [current, hovered, inView, images.length, autoPlayInterval, goTo]);

  useEffect(() => {
    return () => {
      requestRef.current++;
      if (clearPreviousRef.current) clearTimeout(clearPreviousRef.current);
    };
  }, []);

  if (!images || images.length === 0) return null;

  const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
  const next = () => goTo(current === images.length - 1 ? 0 : current + 1);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-roledescription="carousel"
      className={`relative w-full h-full min-h-[280px] md:min-h-[360px] overflow-hidden rounded-2xl shadow-lg group bg-gray-200 ${className}`}
    >
      {images.map((src, i) => {
        const isCurrent = i === current;
        const isPrevious = i === previous;
        return (
          <img
            key={i}
            src={src}
            alt={`Carousel item ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={isCurrent ? { transitionDuration: `${FADE_MS}ms` } : undefined}
            onTransitionEnd={(e) => {
              // Drop the old slide only once the new one is fully opaque on top of it.
              if (isCurrent && e.propertyName === 'opacity') setPrevious(null);
            }}
            className={`absolute inset-0 w-full h-full object-cover ${
              isCurrent
                ? 'z-[2] opacity-100 transition-opacity ease-in-out motion-reduce:transition-none'
                : isPrevious
                  ? 'z-[1] opacity-100'
                  : 'z-0 opacity-0'
            }`}
          />
        );
      })}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to item ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
        {current + 1} / {images.length}
      </span>
    </div>
  );
};

export default Carousel;
