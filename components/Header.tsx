import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [investorsDropdownOpen, setInvestorsDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const businessCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const investorsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contactCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const newsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const businessGroups = [
    {
      title: 'ABOUT US',
      items: [
        { name: 'About Us', href: '/company' },
        { name: 'Vision and Mission', href: '/company#mission-vision' },
        { name: 'Core Values', href: '/company#values' },
        { name: 'Leadership', href: '/company#leadership' },
        { name: 'Awards and Recognition', href: '/company#awards' },
      ]
    },
    {
      title: 'HOUSEASY',
      items: [
        { name: 'HousEasy', href: '/business/houseasy' },
        { name: 'Homebuying Journey', href: '/business/houseasy#journey' },
      ]
    }
  ];

  const investorsSubmenu = [
    { name: 'GOVERNANCE', href: '/investors#governance' },
    { name: 'DISCLOSURE', href: '/investors#disclosure' },
    { name: 'CONTACT US', href: '/contact' },
  ];


  const newsSubmenu = [
    { name: 'News & Updates', href: '/news' },
    { name: 'Corporate Social Responsibility', href: '/company/csr' },
  ];

  const BuySubmenu = [
    { name: 'EXPLORE OLIHOME', href: 'https://olihome.ovialand.com/App/Register' },
  ]

  const location = useLocation();
  const currentLocation = `${location.pathname}${location.hash || ''}`;

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
    if (link.href) return hrefMatches(link.href);
    return false;
  };

  const handleBusinessItemClick = (itemName: string, isMobile = false) => {
    (document.activeElement as HTMLElement)?.blur();
    if (isMobile) setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
    const upper = itemName ? itemName.toUpperCase() : '';
    if (upper === 'ABOUT US' || upper === 'HOUSEASY' || upper === 'HOUSEASy'.toUpperCase()) {
      // small timeout to allow route change/navigation to happen first
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>

      <a
        href="#main-content"
        className="absolute -top-12 left-0 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:top-0 z-50 transition-all duration-300 font-bold text-sm"
      >
        Skip to Content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-40 bg-gray-50/95 backdrop-blur-md border-b border-gray-100 pt-4 pb-2 shadow-sm transition-all duration-300"
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

          <div className="flex items-center md:mr-8 self-start -mt-0.5 md:-mt-1">
            <Link to="/" aria-label="Go to top" className="inline-flex transition-transform duration-200 hover:scale-105 hover:opacity-90" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/OLI-HD.png" alt="Ovialand Logo" className="h-11 md:h-14 w-auto scale-125 md:scale-150 origin-left" />
            </Link>
          </div>


          <nav className="hidden md:flex items-center space-x-6 mr-8 lg:mr-12">
            {NAVIGATION_LINKS.filter((link) => link.name !== 'Home').map((link) => {
              const active = linkIsActive(link);
              if (link.name === 'Our Business') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => { if (businessCloseTimer.current) clearTimeout(businessCloseTimer.current); setBusinessDropdownOpen(true); }}
                    onMouseLeave={() => { businessCloseTimer.current = setTimeout(() => setBusinessDropdownOpen(false), 250); }}
                  >
                    <Link
                      to={link.href}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                      onClick={() => { (document.activeElement as HTMLElement)?.blur(); }}
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {businessDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-137.5 bg-white rounded-xl shadow-2xl py-4 border border-gray-100">
                        <div className="container mx-auto px-4 flex gap-6">
                          {businessGroups.map((group) => (
                            <div key={group.title} className="w-1/2 px-3">
                              <div className="text-xs font-bold uppercase text-gray-500 mb-2">{group.title}</div>
                              <div className="bg-white rounded-lg overflow-hidden shadow-none">
                                {group.items.map((item, idx) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                                    onClick={() => handleBusinessItemClick(item.name)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'Investors') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => { if (investorsCloseTimer.current) clearTimeout(investorsCloseTimer.current); setInvestorsDropdownOpen(true); }}
                    onMouseLeave={() => { investorsCloseTimer.current = setTimeout(() => setInvestorsDropdownOpen(false), 250); }}
                  >
                    <Link
                      to={link.href}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                      onClick={() => { (document.activeElement as HTMLElement)?.blur(); }}
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {investorsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-3 border border-gray-100">
                        {investorsSubmenu.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${index !== investorsSubmenu.length - 1 ? 'border-b border-gray-50' : ''}`}
                            onClick={() => {
                              (document.activeElement as HTMLElement)?.blur();
                              setInvestorsDropdownOpen(false);
                              if (item.name === 'GOVERNANCE') {
                                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
                              }
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'Contact Us') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => { if (contactCloseTimer.current) clearTimeout(contactCloseTimer.current); setContactDropdownOpen(true); }}
                    onMouseLeave={() => { contactCloseTimer.current = setTimeout(() => setContactDropdownOpen(false), 250); }}
                  >
                    <Link
                      to={link.href}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                      onClick={() => { (document.activeElement as HTMLElement)?.blur(); }}
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {contactDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100">
                        <div className="px-2 py-1">
                          <div className="text-xs font-bold uppercase text-gray-500 px-4 py-2">Contact Us</div>
                          {link.submenu?.map((item, index) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-150 ${index !== (link.submenu?.length || 0) - 1 ? 'border-b border-gray-50' : ''}`}
                              onClick={() => { (document.activeElement as HTMLElement)?.blur(); setContactDropdownOpen(false); }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === 'News & Updates') {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => { if (newsCloseTimer.current) clearTimeout(newsCloseTimer.current); setNewsDropdownOpen(true); }}
                    onMouseLeave={() => { newsCloseTimer.current = setTimeout(() => setNewsDropdownOpen(false), 250); }}
                  >
                    <Link
                      to={link.href}
                      className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                      onClick={() => { (document.activeElement as HTMLElement)?.blur(); }}
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {newsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 border border-gray-100">
                        {newsSubmenu.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${index !== newsSubmenu.length - 1 ? 'border-b border-gray-50' : ''}`}
                            onClick={() => { (document.activeElement as HTMLElement)?.blur(); setNewsDropdownOpen(false); }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }



              // default link
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out relative text-green-600 hover:text-green-800 after:bg-green-600 ${active ? 'text-green-700 after:scale-x-100' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                  onClick={() => { (document.activeElement as HTMLElement)?.blur(); if (link.name === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>


          <button
            className="md:hidden p-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 touch-manipulation min-w-11 min-h-11 flex items-center justify-center text-green-700 hover:bg-green-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 border-t max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4 md:p-6 space-y-4">
              {NAVIGATION_LINKS.filter((link) => link.name !== 'Home').map((link, index, arr) => (
                link.name === 'Our Business' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                      className="w-full text-left text-green-600 text-lg font-medium hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform ${businessDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {businessDropdownOpen && (
                      <div className="mt-3 space-y-3 bg-gray-50/80 rounded-xl p-3">
                        {businessGroups.map((group) => (
                          <div key={group.title} className="py-1">
                            <div className="px-3 text-sm font-bold text-green-700 uppercase mb-2">{group.title}</div>
                            <div className="space-y-1 bg-white rounded-lg p-2">
                              {group.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block text-gray-700 text-base py-2 px-3 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium"
                                  onClick={() => handleBusinessItemClick(item.name, true)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.name === 'Investors' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setInvestorsDropdownOpen(!investorsDropdownOpen)}
                      className="w-full text-left text-green-600 text-lg font-medium hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform ${investorsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {investorsDropdownOpen && (
                      <div className="mt-3 space-y-1 bg-gray-50/80 rounded-xl p-2">
                        {investorsSubmenu.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${index !== investorsSubmenu.length - 1 ? 'border-b border-gray-100' : ''
                              }`}
                            onClick={() => {
                              (document.activeElement as HTMLElement)?.blur();
                              setMobileMenuOpen(false);
                              if (item.name === 'GOVERNANCE') {
                                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
                              }
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.name === 'Contact Us' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                      className="w-full text-left text-green-600 text-lg font-medium hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform ${contactDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {contactDropdownOpen && (
                      <div className="mt-3 space-y-1 bg-gray-50/80 rounded-xl p-2">
                        {link.submenu?.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${index !== (link.submenu?.length || 0) - 1 ? 'border-b border-gray-100' : ''
                              }`}
                            onClick={() => {
                              (document.activeElement as HTMLElement)?.blur();
                              setMobileMenuOpen(false);
                              setContactDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.name === 'News & Updates' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setNewsDropdownOpen(!newsDropdownOpen)}
                      className="w-full text-left text-green-600 text-lg font-medium hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transition-transform ${newsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {newsDropdownOpen && (
                      <div className="mt-3 space-y-1 bg-gray-50/80 rounded-xl p-2">
                        {newsSubmenu.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${index !== newsSubmenu.length - 1 ? 'border-b border-gray-100' : ''}`}
                            onClick={() => { (document.activeElement as HTMLElement)?.blur(); setMobileMenuOpen(false); setNewsDropdownOpen(false); }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-green-600 text-lg font-medium hover:text-green-500 transition-colors duration-200 ${index !== arr.length - 1 ? 'border-b border-gray-100 pb-2' : ''}`}
                    onClick={() => { setMobileMenuOpen(false); if (link.name === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    {link.name}
                  </Link>
                )
              ))}

            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

