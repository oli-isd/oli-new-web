import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const TrustedStats: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const communities = useCountUp(9, 1200, isInView);
  const houses = useCountUp(3500, 2000, isInView);
  const families = useCountUp(3416, 2000, isInView);

  return (
    <section id="trusted" ref={ref} className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4 md:mb-6">Trusted Developer</h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            With more than 4,000 homes turned over in the past decade, we are a trusted developer committed to deliver our commitments to our homebuyers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">{communities}+</p>
            <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Communities</h3>
            <p className="text-gray-500 font-light text-sm">Master-planned across Luzon</p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">{houses.toLocaleString()}+</p>
            <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Houses Built</h3>
            <p className="text-gray-500 font-light text-sm">Solid concrete homes delivered</p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">{families.toLocaleString()}</p>
            <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Families Served</h3>
            <p className="text-gray-500 font-light text-sm">Happy families in their dream homes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedStats;
