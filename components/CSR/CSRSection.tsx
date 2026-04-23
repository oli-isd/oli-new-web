import React from 'react';
import Carousel from '../base/Carousel';

interface CSRSectionProps {
  id: string;
  title: string;
  description: string;
  items: string[];
  images: string[];
  reverse?: boolean;
}

const CSRSection: React.FC<CSRSectionProps> = ({ title, description, items, images, reverse = false }) => {
  return (
    <div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
    >
      {/* Text Side */}
      <div className="flex-1 w-full">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
          CSR Initiative
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h2>
        <div className="w-16 h-1.5 bg-green-500 rounded-full mb-6" />
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>
        
        {/* List Items */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Carousel Side */}
      <div className="flex-1 w-full shadow-2xl rounded-3xl overflow-hidden">
        <Carousel images={images} className="min-h-[300px] md:min-h-[420px]" />
      </div>
    </div>
  );
};

export default CSRSection;
