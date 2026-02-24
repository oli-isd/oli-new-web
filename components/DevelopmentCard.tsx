
import React from 'react';
import { Development } from '../types';

interface Props {
  development: Development;
}

const DevelopmentCard: React.FC<Props> = ({ development }) => {
  return (
    <div className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
        <div className="relative overflow-hidden h-64">
        <img 
          src={development.imageUrl} 
          alt={development.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
          {development.status}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="bg-white text-gray-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors">
                Explore Details
            </button>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {development.location}
        </div>
        <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{development.name}</h3>
        <div className="pt-6 border-t border-gray-200 flex justify-end items-center">
          <div className="flex -space-x-1">
            {development.features.slice(0, 3).map((f, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-green-600" title={f}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCard;
