import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'cream' | 'green' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-[#eae1d0]',
    green: 'bg-[#152d25]',
    gradient: 'bg-linear-to-b from-[#eae1d0] via-[#f4efe5] to-[#eae1d0]/60'
  };

  return (
    <section id={id} className={`py-10 md:py-16 ${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
