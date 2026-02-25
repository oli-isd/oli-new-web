import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import DevelopmentCard from '../../components/DevelopmentCard';
import { DEVELOPMENTS } from '../../constants';

const southLuzon = DEVELOPMENTS.filter(d =>
  ['Laguna', 'Batangas', 'Quezon'].some(loc => d.location.includes(loc))
);

const centralLuzon = DEVELOPMENTS.filter(d =>
  ['Bulacan', 'Pampanga', 'Nueva Ecija', 'Tarlac', 'Zambales', 'Bataan'].some(loc => d.location.includes(loc))
);

const CommunitiesPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'south' | 'central'>('south');

  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white">Our Communities</h1>
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

export default CommunitiesPage;
