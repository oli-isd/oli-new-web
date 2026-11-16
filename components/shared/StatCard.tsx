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
  const suffix = stat.suffix || '';
  const formatted = count.toLocaleString() + suffix;
  const finalValue = stat.target.toLocaleString() + suffix;

  return (
    <div
      ref={ref}
      className="group relative h-full overflow-hidden rounded-2xl border border-green-100 bg-white px-6 pb-7 pt-8 flex flex-col items-center text-center cursor-default shadow-sm transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-green-300 hover:shadow-xl motion-reduce:hover:translate-y-0"
    >
      {/* Accent bar */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-green-700 via-green-500 to-lime-400"
      />

      {/* Icon Circle */}
      {stat.icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 ring-4 ring-green-50 transition-colors duration-300 group-hover:bg-green-200">
          {stat.icon}
        </div>
      )}

      {/* Value: animated for sighted users, final value announced once to screen readers */}
      <p
        aria-hidden="true"
        className="mb-2 text-4xl font-extrabold leading-none tabular-nums text-green-700 md:text-5xl"
      >
        {formatted}
      </p>
      <span className="sr-only">{finalValue}</span>

      {/* Label */}
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-green-900">
        {stat.label}
      </p>

      {/* Description */}
      {stat.description && (
        <p className="max-w-[16rem] text-sm leading-relaxed text-gray-600">
          {stat.description}
        </p>
      )}
    </div>
  );
};

export default StatCard;
