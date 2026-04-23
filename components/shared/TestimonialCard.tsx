import React from 'react';
import { Testimonial } from '../../types';
import { getEmbedUrl } from '../../utils/video';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const embedUrl = testimonial.videoUrl ? getEmbedUrl(testimonial.videoUrl) : null;

  return (
    <div className="rounded-3xl border border-[#c9a961]/20 bg-linear-to-b from-[#1a3a2e] to-[#0d2818] p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Serif 'f' Icon Background */}
      <div className="absolute -right-2 -top-4 font-serif text-8xl text-[#c9a961]/10 italic pointer-events-none">f</div>

      <div className="relative z-10">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a961] mb-8 flex items-center">
          <span className="h-px w-6 bg-[#c9a961]/30 mr-3" />
          Client Testimonial
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-8 w-8 text-[#c9a961]/20">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                  <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L19 16L19 14L16 14C14.899 14 14.017 13.101 14.017 12L14.017 9C14.017 7.899 14.899 7 16 7L19 7L19 2L16 2C12.134 2 9 5.134 9 9L9 12C9 12.899 8.101 12 7 12L4 12L4 14L7 14C8.101 14 9 14.899 9 16L9 19C9 20.101 8.101 21 7 21L4 21L4 24L7 24C10.866 24 14.017 20.866 14.017 17L14.017 21Z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-white italic font-light relative z-10 pt-4">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a961]">{testimonial.author}</span>
            </div>
          </div>

          {(testimonial.image || embedUrl) && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/20 group">
              {embedUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : testimonial.image ? (
                <img src={testimonial.image} alt="Testimonial" className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
