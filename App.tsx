
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLayout from './pages/PageLayout';
import ScrollToTop from './components/ScrollToTop';

import Hero from './components/Hero';
import Houseasy from './components/Houseasy';
import DevelopmentCard from './components/DevelopmentCard';
import News from './components/News';
import ContactUs from './components/ContactUs';
import { DEVELOPMENTS, AWARDS } from './constants';

import CompanyPage from './pages/company/CompanyPage';
import BusinessPage from './pages/business/BusinessPage';
import HouseasyPage from './pages/business/HouseasyPage';
import CommunitiesPage from './pages/business/CommunitiesPage';
import GovernancePage from './pages/investors/GovernancePage';
import FinancialsPage from './pages/investors/FinancialsPage';
import DisclosurePage from './pages/investors/DisclosurePage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);

const PILLARS = [
  {
    title: 'Premier Homes',
    description:
      'Each home is made of solid concrete fully finished with quality materials, built by skilled workers. We assure quality in every home we build.',
    image: '/Image-1.jpg',
    video: '/Caliya.mp4',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Premier Services',
    description:
      'A personal Account Officer is dedicated to assist you with your needs. Ovialand also offers hassle-free loan applications and low downpayment deals to help you settle in easily and conveniently in as fast as 6 months!',
    image: '/Image-2.jpg',
    video: '/Services.mp4',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Premier Communities',
    description:
      'With Ovialand, you are assured to have your new home nested in a safe, secure, and peaceful neighborhood. Each development offers family-centered amenities and reliable utilities such as water, electricity, and internet.',
    image: '/Image-3.jpg',
    video: '/Santevi.mp4',
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];


const HomePage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>
      <div id="main-content" className="focus:outline-none">
        <Hero />
        

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <section id="pillars" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">What We Stand For</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">
                Pillars of Premier Family Living
              </h2>
            </div>

            <div className="space-y-8 px-4 md:px-0">
              {PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch min-h-[380px] rounded-3xl overflow-hidden shadow-md`}
                >
                  <div className="w-full lg:w-1/2 relative overflow-hidden">
                    <video
                      className="w-full h-80 lg:h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={pillar.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-none"></div>
                  </div>
                  <div className="w-full lg:w-1/2 bg-white flex items-center px-6 md:px-10 lg:px-16 py-8 md:py-12">
                    <div className="max-w-lg">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-4">{pillar.title}</h3>
                      <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <section id="communities" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Where We Build</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Our Communities</h2>
              <p className="text-gray-500 text-lg font-light">
                Explore our master-planned communities across South Luzon and Central Luzon.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setActiveRegion('south')}
                  className={`px-4 sm:px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    activeRegion === 'south'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-500 hover:text-green-600'
                  }`}
                >
                  South Luzon
                </button>
                <button
                  onClick={() => setActiveRegion('central')}
                  className={`px-4 sm:px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    activeRegion === 'central'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-500 hover:text-green-600'
                  }`}
                >
                  Central Luzon
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              {activeRegion === 'south' && (
                <div 
                  key="south"
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn"
                >
                  {southLuzon.map(dev => (
                    <DevelopmentCard key={dev.id} development={dev} />
                  ))}
                </div>
              )}

              {activeRegion === 'central' && (
                <div 
                  key="central"
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn"
                >
                  {centralLuzon.length > 0 ? (
                    centralLuzon.map(dev => (
                      <DevelopmentCard key={dev.id} development={dev} />
                    ))
                  ) : (
                    <div className="col-span-4 text-center py-20 text-gray-400">
                      <p className="text-lg font-light">More communities coming soon in Central Luzon.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>


        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

        <Houseasy />


        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <section id="trusted" className="py-24 bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Our Track Record</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">Trusted Developer</h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                With a proven track record of excellence, we are a trusted developer committed to delivering the highest standards of craftsmanship, safety, and community design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">6+</p>
                <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Communities</h3>
                <p className="text-gray-500 font-light text-sm">Master-planned across Luzon</p>
              </div>


              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">1,600+</p>
                <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Houses Built</h3>
                <p className="text-gray-500 font-light text-sm">Solid concrete homes delivered</p>
              </div>


              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-green-100 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-4xl md:text-6xl font-bold text-green-600 mb-3">1,600+</p>
                <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2">Families Served</h3>
                <p className="text-gray-500 font-light text-sm">Happy families in their dream homes</p>
              </div>
            </div>
          </div>
        </section>


        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <section id="awards" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Milestones</span>
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Awards and Recognition</h2>
              <p className="text-gray-500 text-lg font-light">
                Celebrating industry awards that reflect our commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">{award.year}</span>
                  <h3 className="text-green-600 font-bold text-lg mb-2 leading-snug">{award.title}</h3>
                  <p className="text-gray-500 text-sm font-light mt-auto">{award.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <News />


        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>


        <ContactUs />
      </div>
    </PageLayout>
  );
};

const App: React.FC = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/company" element={<CompanyPage />} />

      <Route path="/business" element={<BusinessPage />} />
      <Route path="/business/houseasy" element={<HouseasyPage />} />
      <Route path="/business/communities" element={<CommunitiesPage />} />

      <Route path="/investors/governance" element={<GovernancePage />} />
      <Route path="/investors/financials" element={<FinancialsPage />} />
      <Route path="/investors/disclosure" element={<DisclosurePage />} />

      <Route path="/news" element={<NewsPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </>
);

export default App;
