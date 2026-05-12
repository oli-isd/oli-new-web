import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container: React.FC<ContainerProps> = ({ children, className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-(--breakpoint-2xl)'
  };

  return (
    <div className={`container mx-auto px-4 md:px-6 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
