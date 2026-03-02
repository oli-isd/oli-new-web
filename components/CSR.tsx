import React, { useState, useEffect, useRef } from 'react';

// Count-up hook: triggers when element enters viewport
function useCountUp(target: number, duration = 2400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-in-out sine: smooth S-curve — gradual start, fast middle, gentle finish
            const eased = -(Math.cos(Math.PI * progress) - 1) / 2;
            setCount(Math.round(eased * target));
            if (progress < 1) {
              rafId.current = requestAnimationFrame(step);
            }
          };
          rafId.current = requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [target, duration]);

  return { count, ref };
}

interface CSRSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  reverse: boolean;
}

const CSR_SECTIONS: CSRSection[] = [
  {
    id: 'tree-planting',
    title: 'Tree Planting',
    description:
      'We build responsibly. In every project we develop, we plant trees to promote environmental balance, enhance green spaces, and nurture healthier communities for generations to come.',
    images: Array.from({ length: 14 }, (_, i) => `/Tree Planting/TP-${i + 1}.jpg`),
    reverse: false,
  },
  {
    id: 'scholarships',
    title: 'Scholarship Grant',
    description:
      'At Ovialand, we believe education transforms lives. Through our scholarship program, we support the children of our construction workers, helping them continue their studies and move closer to achieving their dreams.',
    images: Array.from({ length: 11 }, (_, i) => `/Scholars/SC-${i + 1}.png`),
    reverse: true,
  },
  {
    id: 'classroom',
    title: 'Community Building',
    description:
      ' Education is at the heart of strong communities. Ovialand donates classrooms in every barangay where we operate, creating better learning environments and supporting the growth of young minds.',
    images: Array.from({ length: 11 }, (_, i) => `/Classroom/CR-${i + 1}.jpg`),
    reverse: false,
  },
  {
    id: 'manila-boys',
    title: 'Outreach Program',
    description:
      'Our commitment to care extends beyond our developments. We support Manila Boys Town and Manila Girls Town by providing monthly essentials and organizing donation drives, especially during times of calamity, to help communities recover and rebuild.',
    images: Array.from({ length: 11 }, (_, i) => `/Manila-Boys/MB-${i + 1}.jpg`),
    reverse: true,
  },
];

const Carousel: React.FC<{ images: string[]; sectionId: string }> = ({ images, sectionId }) => {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 3000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [images.length]);

  const prev = () => { setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); resetAutoPlay(); };
  const next = () => { setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)); resetAutoPlay(); };

  return (
      <div className="relative w-full h-full min-h-[280px] md:min-h-[360px] overflow-hidden rounded-2xl shadow-lg group">
      {images.map((src, i) => (
        <img
          key={`${sectionId}-${i}`}
          src={src}
          alt={`${sectionId} photo ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetAutoPlay(); }}
            aria-label={`Go to photo ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
        {current + 1} / {images.length}
      </span>
    </div>
  );
};

const STATS = [
  {
    label: 'Trees Planted',
    target: 10000,
    suffix: '+',
    value: '10,000',  // fallback
    description: 'Native trees planted across project sites',
    icon: (
      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 22V12m0 0C12 7 7 4 7 4s1 4 5 8zm0 0c0-5 5-8 5-8s-1 4-5 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 17c-2 .5-3 1.5-3 3h12c0-1.5-1-2.5-3-3" />
      </svg>
    ),
  },
  {
    label: 'Scholars',
    target: 25,
    suffix: '',
    value: '25',  // fallback
    description: 'Students supported through our scholarship program',
    icon: (
      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 3.314-4.03 6-9 6s-9-2.686-9-6a12.08 12.08 0 012.84-7.922L12 14z" />
      </svg>
    ),
  },
  {
    label: 'Classrooms Built',
    target: 14,
    suffix: '',
    value: '14',  // fallback
    description: 'Safe learning spaces built for public school students',
    icon: (
      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 21V12h6v9" />
      </svg>
    ),
  },
];

interface StatItem {
  label: string;
  target: number;
  suffix: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<{ stat: StatItem }> = ({ stat }) => {
  const { count, ref } = useCountUp(stat.target);
  const formatted = count.toLocaleString() + stat.suffix;

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-sm border border-green-100 px-6 py-6 flex flex-col items-center text-center cursor-default transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-400 hover:bg-green-50 group"
    >
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-green-200">
        {stat.icon}
      </div>
      {/* Value */}
      <p className="text-3xl md:text-4xl font-extrabold text-green-700 leading-none mb-1.5 transition-colors duration-300 group-hover:text-green-600">
        {formatted}
      </p>
      {/* Label */}
      <p className="text-sm font-bold text-green-800 mb-1 transition-colors duration-300 group-hover:text-green-700">{stat.label}</p>
      {/* Description */}
      <p className="text-sm text-gray-400 leading-snug transition-colors duration-300 group-hover:text-gray-500">{stat.description}</p>
    </div>
  );
};

const CSR: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Stats Section */}
      <div className="bg-[#f0f7ee] py-10 md:py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {CSR_SECTIONS.map((section, idx) => (
        <section
          key={section.id}
          className={`py-10 md:py-14 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col ${
                section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 md:gap-10`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                  CSR Initiative
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {section.title}
                </h2>
                <div className="w-12 h-1 bg-green-500 rounded-full mb-4" />
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Carousel Side */}
              <div className="flex-1 w-full">
                <Carousel images={section.images} sectionId={section.id} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CSR;
