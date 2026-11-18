import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownLinkProps {
  to: string;
  /** True when this link points at the page the visitor is currently on. */
  current?: boolean;
  children: React.ReactNode;
}

/** A single row inside a header dropdown: rounded hover highlight, trailing arrow, current-page state. */
const DropdownLink: React.FC<DropdownLinkProps> = ({ to, current = false, children }) => (
  <Link
    to={to}
    aria-current={current ? 'page' : undefined}
    className={`group/item flex items-center justify-between gap-6 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
      current
        ? 'bg-green-50 font-semibold text-green-700'
        : 'text-gray-700 hover:bg-green-50 hover:text-green-700 focus-visible:bg-green-50 focus-visible:text-green-700'
    }`}
  >
    {children}
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-150 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:opacity-100"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);

export default DropdownLink;
