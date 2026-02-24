import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import Houseasy from '../../components/Houseasy';
import DevelopmentCard from '../../components/DevelopmentCard';
import { DEVELOPMENTS } from '../../constants';

const PILLARS = [
  {
    title: 'Premier Homes',
    description:
      'Each home is made of solid concrete fully finished with quality materials, built by skilled workers. We assure quality in every home we build.',
    video: '/Caliya.mp4',
  },
  {
    title: 'Premier Services',
    description:
      'A personal Account Officer is dedicated to assist you with your needs. Ovialand also offers hassle-free loan applications and low downpayment deals to help you settle in easily and conveniently in as fast as 6 months!',
    video: '/Services.mp4',
  },
  {
    title: 'Premier Communities',
    description:
      'With Ovialand, you are assured to have your new home nested in a safe, secure, and peaceful neighborhood. Each development offers family-centered amenities and reliable utilities such as water, electricity, and internet.',
    video: '/Santevi.mp4',
  },
];

const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);

const BusinessPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>

      {/* ── Premier Family Living ── */}
      <section id="premier-family-living" className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-200 text-xs font-bold uppercase tracking-[0.3em] block mb-3">Our Business</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Premier Family Living</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">What We Stand For</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Pillars of Premier Family Living
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Ovialand is committed to delivering homes and communities that redefine quality living for every Filipino family.
            </p>
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

      <section className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-green-100">
              <p className="text-6xl font-bold text-green-600 mb-3">6+</p>
              <h3 className="text-xl font-bold text-green-600 mb-2">Communities</h3>
              <p className="text-gray-500 font-light text-sm">Master-planned across Luzon</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-green-100">
              <p className="text-6xl font-bold text-green-600 mb-3">2,997+</p>
              <h3 className="text-xl font-bold text-green-600 mb-2">Houses Built</h3>
              <p className="text-gray-500 font-light text-sm">Solid concrete homes delivered</p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-green-100">
              <p className="text-6xl font-bold text-green-600 mb-3">2,997+</p>
              <h3 className="text-xl font-bold text-green-600 mb-2">Families Served</h3>
              <p className="text-gray-500 font-light text-sm">Happy families in their dream homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HousEasy ── */}
      <section id="houseasy" className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-200 text-xs font-bold uppercase tracking-[0.3em] block mb-3">Home Buying Made Easy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">HousEasy</h2>
        </div>
      </section>

      <Houseasy />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg font-light">
              Own your dream home in as fast as 6 months with our streamlined home buying process.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Choose Your Home', desc: 'Browse our communities and select the home that fits your lifestyle and budget.' },
              { step: '02', title: 'Secure Your Slot', desc: 'Reserve your unit with a low reservation fee and lock in your preferred unit.' },
              { step: '03', title: 'Loan Processing', desc: 'Our Account Officers guide you through hassle-free loan applications.' },
              { step: '04', title: 'Move In', desc: 'Complete turnover in as fast as 6 months and start living your premier life.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://olihome.ovialand.com/App/Register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Home Journey
            </a>
          </div>
        </div>
      </section>

      {/* ── Our Communities ── */}
      <section id="communities" className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-green-200 text-xs font-bold uppercase tracking-[0.3em] block mb-3">Where We Build</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Communities</h2>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {southLuzon.map(dev => (
                  <DevelopmentCard key={dev.id} development={dev} />
                ))}
              </div>
            )}
            {activeRegion === 'central' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

    </PageLayout>
  );
};

export default BusinessPage;
