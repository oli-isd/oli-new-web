import React from 'react';
import { motion, MotionConfig, Variants } from 'framer-motion';
import { AWARDS } from '../data/awards';
import { ScrollReveal } from './shared/ScrollReveal';

const EASE = [0.16, 1, 0.3, 1] as const; // easeOutExpo, same as ScrollReveal

type AwardCardProps = (typeof AWARDS)[number] & {
  /** Seconds to hold back the entrance so cards stagger across a row. */
  delay: number;
};

/**
 * One award. The title sits below the artwork (the artwork often has its own large text, so
 * overlaying a caption made both unreadable), and the whole card is the link via a stretched anchor.
 * Children only declare variants; they inherit hidden/visible from the root `motion.article`.
 */
const AwardCard: React.FC<AwardCardProps> = ({ year, title, body, url, imageUrl, delay }) => {
  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } },
  };
  const artwork: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: delay + 0.1, ease: EASE } },
  };
  const badge: Variants = {
    hidden: { opacity: 0, x: 14 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: delay + 0.4, ease: EASE } },
  };
  const text = (offset: number): Variants => ({
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: delay + offset, ease: EASE } },
  });

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={card}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-within:ring-2 focus-within:ring-green-500">
        {/* Artwork. Hover zoom is on the wrapper so it doesn't fight the entrance transform. */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
            <motion.img
              variants={artwork}
              src={imageUrl}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Light sweep across the artwork on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"
          />

          <motion.span
            variants={badge}
            className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-700 shadow"
          >
            {year}
          </motion.span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <motion.h3
            variants={text(0.5)}
            className="text-base font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-green-700"
          >
            {title}
          </motion.h3>

          {body && (
            <motion.p variants={text(0.6)} className="mt-2 text-sm font-light text-gray-600">
              {body}
            </motion.p>
          )}

          <motion.div variants={text(0.7)} className="mt-auto pt-5">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more: ${title}`}
                // The pseudo-element stretches the link over the whole card, making all of it clickable.
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 after:absolute after:inset-0 after:content-[''] focus:outline-none"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
          </motion.div>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-linear-to-r from-green-700 via-green-500 to-lime-400 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>
    </motion.article>
  );
};

const AwardsList: React.FC = () => {
  return (
    <section id="awards" className="py-8 md:py-12 bg-white scroll-mt-24">
      <MotionConfig reducedMotion="user">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4">Awards and Recognition</h2>
            {/* Inherits the reveal state from ScrollReveal, so the underline draws in with the title. */}
            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.35, ease: EASE } },
              }}
              className="mx-auto mb-5 block h-1.5 w-20 origin-center rounded-full bg-green-500"
            />
            <p className="text-gray-500 text-base md:text-lg font-light">
              Celebrating industry awards reflect our commitment to excellence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {AWARDS.map((award, i) => (
              <AwardCard key={`${award.year}-${award.title}`} {...award} delay={(i % 4) * 0.1} />
            ))}
          </div>
        </div>
      </MotionConfig>
    </section>
  );
};

export default AwardsList;
