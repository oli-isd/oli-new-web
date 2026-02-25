import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [investorsDropdownOpen, setInvestorsDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const companyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const businessCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const investorsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const newsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const companySubmenu = [
    { name: 'ABOUT US',          href: '/company' },
    { name: 'MISSION AND VISION', href: '/company#mission-vision' },
    { name: 'LEADERSHIP',        href: '/company#leadership' },
    { name: 'AWARDS',            href: '/company#awards' },
    
  ];

  const businessSubmenu = [
    { name: 'PREMIER FAMILY LIVING', href: '/business#premier-family-living' },
    { name: 'HOUSEASY',              href: '/business#houseasy' },
    { name: 'OUR COMMUNITIES',       href: '/business#communities' },
  ];

  const investorsSubmenu = [
    { name: 'GOVERNANCE',  href: '/investors#governance' },
    { name: 'FINANCIALS',  href: '/investors#financials' },
    { name: 'DISCLOSURE',  href: '/investors#disclosure' },
  ];

  const newsSubmenu = [
    { name: 'ALL NEWS', href: '/news' },
    { name: '2025', href: '/news?year=2025' },
    { name: '2026', href: '/news?year=2026' },
  ];

  const handleCompanyItemClick = (itemName: string, isMobile = false) => {
    if (isMobile) setMobileMenuOpen(false);
    setCompanyDropdownOpen(false);
    if (itemName === 'ABOUT US') {
      // allow navigation to happen first, then scroll to top
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
        Skip to Main Content
      </a>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out py-2 md:py-3 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center mr-8">
          <Link to="/" aria-label="Go to top" className="inline-flex transition-transform duration-200 hover:scale-105 hover:opacity-90" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/OLI-HD.png" alt="Ovialand Logo" className="h-10 md:h-14 w-auto" />
          </Link>
        </div>


        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION_LINKS.map((link) => (
            link.name === 'Our Company' ? (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => { if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current); setCompanyDropdownOpen(true); }}
                onMouseLeave={() => { companyCloseTimer.current = setTimeout(() => setCompanyDropdownOpen(false), 250); }}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative ${isScrolled ? 'text-green-600 hover:text-green-800 after:bg-green-600' : 'text-white hover:text-green-400 after:bg-green-400'} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                >
                  {link.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-3 border border-gray-100">
                    {companySubmenu.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${
                          index !== companySubmenu.length - 1 ? 'border-b border-gray-50' : ''
                        }`}
                        onClick={() => handleCompanyItemClick(item.name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.name === 'Our Business' ? (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => { if (businessCloseTimer.current) clearTimeout(businessCloseTimer.current); setBusinessDropdownOpen(true); }}
                onMouseLeave={() => { businessCloseTimer.current = setTimeout(() => setBusinessDropdownOpen(false), 250); }}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative ${isScrolled ? 'text-green-600 hover:text-green-800 after:bg-green-600' : 'text-white hover:text-green-400 after:bg-green-400'} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                >
                  {link.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {businessDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 border border-gray-100">
                    {businessSubmenu.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${
                          index !== businessSubmenu.length - 1 ? 'border-b border-gray-50' : ''
                        }`}
                        onClick={() => setBusinessDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.name === 'Investors' ? (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => { if (investorsCloseTimer.current) clearTimeout(investorsCloseTimer.current); setInvestorsDropdownOpen(true); }}
                onMouseLeave={() => { investorsCloseTimer.current = setTimeout(() => setInvestorsDropdownOpen(false), 250); }}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative ${isScrolled ? 'text-green-600 hover:text-green-800 after:bg-green-600' : 'text-white hover:text-green-400 after:bg-green-400'} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
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
                        className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${
                          index !== investorsSubmenu.length - 1 ? 'border-b border-gray-50' : ''
                        }`}
                        onClick={() => {
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
            ) : link.name === 'News & Updates' ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => { if (newsCloseTimer.current) clearTimeout(newsCloseTimer.current); setNewsDropdownOpen(true); }}
                onMouseLeave={() => { newsCloseTimer.current = setTimeout(() => setNewsDropdownOpen(false), 250); }}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out flex items-center gap-1 relative ${isScrolled ? 'text-green-600 hover:text-green-800 after:bg-green-600' : 'text-white hover:text-green-400 after:bg-green-400'} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                >
                  {link.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {newsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-3 border border-gray-100">
                    {newsSubmenu.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-500 transition-all duration-200 ${
                          index !== newsSubmenu.length - 1 ? 'border-b border-gray-50' : ''
                        }`}
                        onClick={() => setNewsDropdownOpen(false)}
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
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 ease-in-out relative ${isScrolled ? 'text-green-600 hover:text-green-800 after:bg-green-600' : 'text-white hover:text-green-400 after:bg-green-400'} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                onClick={link.name === 'Home' ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="https://olihome.ovialand.com/App/Register" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-green-700 hover:bg-green-700 hover:text-white' : 'text-white hover:bg-white hover:text-green-700'} px-4 py-2 rounded-lg font-bold uppercase tracking-widest hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out`}>
            Inquire Now
          </a>
        </nav>


        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${
            isScrolled ? 'text-green-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
          }`}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 border-t">
          <div className="flex flex-col p-6 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              link.name === 'Our Company' ? (
                <div key={link.name}>
                  <button
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className="w-full text-left text-green-600 text-lg font-medium border-b border-gray-100 pb-2 hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {companyDropdownOpen && (
                    <div className="mt-3 space-y-1 bg-gray-50/80 rounded-xl p-2">
                      {companySubmenu.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${
                            index !== companySubmenu.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          onClick={() => handleCompanyItemClick(item.name, true)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === 'Our Business' ? (
                <div key={link.name}>
                  <button
                    onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                    className="w-full text-left text-green-600 text-lg font-medium border-b border-gray-100 pb-2 hover:text-green-500 flex items-center justify-between transition-colors duration-200"
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${businessDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {businessDropdownOpen && (
                    <div className="mt-3 space-y-1 bg-gray-50/80 rounded-xl p-2">
                      {businessSubmenu.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${
                            index !== businessSubmenu.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === 'Investors' ? (
                <div key={link.name}>
                  <button
                    onClick={() => setInvestorsDropdownOpen(!investorsDropdownOpen)}
                    className="w-full text-left text-green-600 text-lg font-medium border-b border-gray-100 pb-2 hover:text-green-500 flex items-center justify-between transition-colors duration-200"
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
                          className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${
                            index !== investorsSubmenu.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          onClick={() => {
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
                ) : link.name === 'News & Updates' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setNewsDropdownOpen(!newsDropdownOpen)}
                      className="w-full text-left text-green-600 text-lg font-medium border-b border-gray-100 pb-2 hover:text-green-500 flex items-center justify-between transition-colors duration-200"
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
                            className={`block text-gray-700 text-base py-3 px-4 hover:text-green-500 hover:bg-white rounded-lg transition-all touch-manipulation font-medium ${
                              index !== newsSubmenu.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
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
                  className="text-green-600 text-lg font-medium border-b border-gray-100 pb-2 hover:text-green-500 transition-colors duration-200"
                  onClick={() => { setMobileMenuOpen(false); if (link.name === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="https://olihome.ovialand.com/App/Register" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-4 py-2 rounded-lg font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Inquire Now
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
