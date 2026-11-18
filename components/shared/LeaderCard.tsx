import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LeaderCardProps {
  name: string;
  title: string;
  image: string;
  /** Seconds to hold back the whole entrance, e.g. to stagger cards across a row. */
  delay?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const; // easeOutExpo, same as ScrollReveal

/**
 * Board member card. When it scrolls into view the card rises, a green panel wipes off the
 * photo while the photo settles from a slight zoom, and the name and title slide up in turn.
 * On hover the card lifts and an accent bar sweeps across the bottom.
 *
 * Child `motion` elements only declare variants; they inherit `hidden`/`visible` from the root.
 * (Wrap in <MotionConfig reducedMotion="user"> to drop the movement for users who opt out.)
 */
const LeaderCard: React.FC<LeaderCardProps> = ({ name, title, image, delay = 0 }) => {
  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: EASE } },
  };
  const wipe: Variants = {
    hidden: { scaleY: 1 },
    visible: { scaleY: 0, transition: { duration: 0.9, delay: delay + 0.15, ease: EASE } },
  };
  const photo: Variants = {
    hidden: { scale: 1.25 },
    visible: { scale: 1, transition: { duration: 1.4, delay: delay + 0.15, ease: EASE } },
  };
  const text = (offset: number): Variants => ({
    hidden: { opacity: 0, y: 14 },
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
      <div className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
          {/* Hover zoom lives on this wrapper so it doesn't fight the entrance transform on the image. */}
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
            <motion.img
              variants={photo}
              src={image}
              alt={name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <motion.div
            aria-hidden="true"
            variants={wipe}
            className="absolute inset-0 origin-bottom bg-green-700"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        <div className="p-5">
          <motion.h4
            variants={text(0.5)}
            className="text-base font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-green-700"
          >
            {name}
          </motion.h4>
          <motion.p variants={text(0.65)} className="mt-1 text-sm font-medium text-green-600">
            {title}
          </motion.p>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-linear-to-r from-green-700 via-green-500 to-lime-400 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>
    </motion.article>
  );
};

export default LeaderCard;
