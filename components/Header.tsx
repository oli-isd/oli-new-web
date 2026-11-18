import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NAVIGATION_LINKS, 
  BUSINESS_GROUPS, 
  INVESTORS_SUBMENU, 
  NEWS_SUBMENU 
} from '../data/navigation';
import NavDropdown from './Header/NavDropdown';
import DropdownLink from './Header/DropdownLink';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  
  const location = useLocation();

  const hrefMatches = (href: string) => {
    if (!href) return false;
    const [p, h] = href.split('#');
    const hashPart = h ? `#${h}` : '';
    return location.pathname === p && (hashPart === '' || location.hash === hashPart);
  };

  const linkIsActive = (link: any) => {
    if (!link) return false;
    if (link.submenu && link.submenu.length) {
      return link.submenu.some((s: any) => hrefMatches(s.href));
    }
    return hrefMatches(link.href);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdowns(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-12 left-0 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:top-0 z-50 transition-all duration-300 font-bold text-sm"
      >
        Skip to Content
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-50/95 backdrop-blur-md border-b border-gray-100 pt-4 pb-2 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center md:mr-8">
            <Link to="/" aria-label="Go to top" className="inline-flex transition-transform duration-200 hover:scale-105 hover:opacity-90" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/OLI-HD.png" alt="Ovialand Logo" className="h-11 md:h-14 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 mr-8 lg:mr-12">
            {NAVIGATION_LINKS.filter(l => l.name !== 'Home').map(link => {
              const active = linkIsActive(link);
              
              if (link.name === 'Our Business') {
                return (
                  <NavDropdown key={link.name} label={link.name} href={link.href} isActive={active} width="w-max" align="left">
                    <div className="flex divide-x divide-gray-100 px-2">
                      {BUSINESS_GROUPS.map(group => (
                        <div key={group.title} className="min-w-[14rem] px-4">
                          <div className="mb-2 flex items-center gap-2 px-3 text-[11px] font-bold uppercase tracking-widest text-green-700">
                            <span aria-hidden="true" className="h-0.5 w-4 rounded-full bg-green-500" />
                            {group.title}
                          </div>
                          <ul>
                            {group.items.map(item => (
                              <li key={item.name}>
                                <DropdownLink to={item.href} current={hrefMatches(item.href)}>{item.name}</DropdownLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavDropdown>
                );
              }

              if (link.name === 'Investors') {
                return (
                  <NavDropdown key={link.name} label={link.name} href={link.href} isActive={active} width="w-max" align="left">
                    <ul className="min-w-[13rem] px-4">
                      {INVESTORS_SUBMENU.map(item => (
                        <li key={item.name}>
                          <DropdownLink to={item.href} current={hrefMatches(item.href)}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </NavDropdown>
                );
              }

              if (link.name === 'Contact Us') {
                return (
                  <NavDropdown key={link.name} label={link.name} href={link.href} isActive={active} width="w-max" align="left">
                    <ul className="min-w-[13rem] px-4">
                      {link.submenu?.map(item => (
                        <li key={item.name}>
                          <DropdownLink to={item.href} current={hrefMatches(item.href)}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </NavDropdown>
                );
              }

              if (link.name === 'News & Updates') {
                return (
                  <NavDropdown key={link.name} label={link.name} href={link.href} isActive={active} width="w-max" align="left">
                    <ul className="min-w-[13rem] px-4">
                      {NEWS_SUBMENU.map(item => (
                        <li key={item.name}>
                          <DropdownLink to={item.href} current={hrefMatches(item.href)}>{item.name}</DropdownLink>
                        </li>
                      ))}
                    </ul>
                  </NavDropdown>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-3 rounded-lg text-green-700 hover:bg-green-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 space-y-4">
              {NAVIGATION_LINKS.filter(l => l.name !== 'Home').map(link => {
                const hasSubmenu = link.name === 'Our Business' || link.name === 'Investors' || link.name === 'Contact Us' || link.name === 'News & Updates';
                const isOpen = mobileDropdowns[link.name];

                if (hasSubmenu) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="w-full text-left text-green-600 text-lg font-medium flex items-center justify-between"
                      >
                        {link.name}
                        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="mt-3 space-y-2 bg-gray-50 rounded-xl p-3">
                          {link.name === 'Our Business' && BUSINESS_GROUPS.map(group => (
                            <div key={group.title}>
                              <div className="px-3 text-xs font-bold text-green-700 uppercase mb-1">{group.title}</div>
                              {group.items.map(item => (
                                <Link key={item.name} to={item.href} className="block py-2 px-3 text-gray-700 hover:text-green-500" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                              ))}
                            </div>
                          ))}
                          {link.name === 'Investors' && INVESTORS_SUBMENU.map(item => (
                            <Link key={item.name} to={item.href} className="block py-2 px-3 text-gray-700 hover:text-green-500" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          ))}
                          {link.name === 'News & Updates' && NEWS_SUBMENU.map(item => (
                            <Link key={item.name} to={item.href} className="block py-2 px-3 text-gray-700 hover:text-green-500" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          ))}
                          {link.name === 'Contact Us' && link.submenu?.map(item => (
                            <Link key={item.name} to={item.href} className="block py-2 px-3 text-gray-700 hover:text-green-500" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-green-600 text-lg font-medium border-b border-gray-100 pb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
