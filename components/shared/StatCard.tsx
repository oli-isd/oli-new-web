import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface StatItem {
  label: string;
  target: number;
  suffix?: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StatCardProps {
  stat: StatItem;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const { count, ref } = useCountUp(stat.target);
  const formatted = count.toLocaleString() + (stat.suffix || '');

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-sm border border-green-100 px-6 py-6 flex flex-col items-center text-center cursor-default transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-400 hover:bg-green-50 group"
    >
      {/* Icon Circle */}
      {stat.icon && (
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-green-200">
          {stat.icon}
        </div>
      )}
      
      {/* Value */}
      <p className="text-3xl md:text-4xl font-extrabold text-green-700 leading-none mb-1.5 transition-colors duration-300 group-hover:text-green-600">
        {formatted}
      </p>
      
      {/* Label */}
      <p className="text-sm font-bold text-green-800 mb-1 transition-colors duration-300 group-hover:text-green-700">
        {stat.label}
      </p>
      
      {/* Description */}
      {stat.description && (
        <p className="text-sm text-gray-400 leading-snug transition-colors duration-300 group-hover:text-gray-500">
          {stat.description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
