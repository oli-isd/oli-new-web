import React from 'react';
import PageLayout from './PageLayout';
import Ambassadors from '../components/Ambassadors';

const AmbassadorsPage: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-linear-to-r from-[#152d25] via-[#5f7960] to-[#bb9c60] pt-12 md:pt-16 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#eae1d0]">Meet Our OLI Ambassadors</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-[#eae1d0]/92 md:text-base leading-relaxed">
            Experience a more convenient, guided, and premier way to find your future home with people you can trust. Our trusted partner brokers and sellers are here to help guide you through out your homebuying journey.
          </p>
        </div>
      </section>

      <Ambassadors />
    </PageLayout>
  );
};

export default AmbassadorsPage;
