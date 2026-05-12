import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  className = '', 
  disabled, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-linear-to-r from-[#16a34a] to-[#059669] text-white hover:shadow-lg hover:shadow-green-500/30',
    secondary: 'bg-[#152d25] text-white hover:bg-[#1b352d]',
    gold: 'bg-linear-to-r from-[#bb9c60]/66 via-[#bb9c60]/42 to-[#5f7960]/40 text-[#f8f3e9] border border-[#bb9c60]/88 backdrop-blur hover:from-[#bb9c60]/80 hover:via-[#bb9c60]/58 hover:to-[#5f7960]/55 shadow-[0_10px_25px_-14px_rgba(187,156,96,0.6)]',
    outline: 'border-2 border-[#bb9c60] text-[#bb9c60] hover:bg-[#bb9c60] hover:text-white',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full',
    full: 'w-full py-3 text-base rounded-full'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
