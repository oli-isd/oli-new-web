import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoPlayInterval = 3000,
  className = ''
}) => {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, autoPlayInterval);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [images.length, autoPlayInterval]);

  const prev = () => { 
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); 
    resetAutoPlay(); 
  };
  
  const next = () => { 
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)); 
    resetAutoPlay(); 
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full min-h-[280px] md:min-h-[360px] overflow-hidden rounded-2xl shadow-lg group ${className}`}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Carousel item ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
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
            onClick={() => { setCurrent(i); resetAutoPlay(); }}
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
