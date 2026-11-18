import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDropdown } from '../../hooks/useDropdown';

interface NavDropdownProps {
  label: string;
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  width?: string;
  /** 'left' lines the panel's left edge up with the trigger; 'center' centers it under it. */
  align?: 'center' | 'left';
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  href,
  isActive,
  children,
  width = 'w-56',
  align = 'center'
}) => {
  const { isOpen, open, close } = useDropdown();
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  // Close after navigating so the panel doesn't linger over the new page.
  useEffect(() => {
    close(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  const alignment = align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2';

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={() => close()}
      onFocus={open}
      onBlur={(e) => {
        // Close only when focus leaves the whole dropdown, not when it moves between its links.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close(true);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && isOpen) {
          close(true);
          triggerRef.current?.focus();
        }
      }}
    >
      <Link
        ref={triggerRef}
        to={href}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${
          isActive ? 'text-green-700 after:scale-x-100' : ''
        } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100 ${
          isOpen ? 'after:scale-x-100' : ''
        }`}
        onClick={() => close(true)}
      >
        {label}
        <svg
          aria-hidden="true"
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <AnimatePresence>
        {isOpen && (
          // The wrapper's top padding is an invisible hover bridge: the cursor never leaves the
          // dropdown while travelling from the trigger to the panel, so it can't close early.
          <div className={`absolute top-full pt-8 ${alignment} ${width} z-50`}>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 py-4"
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
