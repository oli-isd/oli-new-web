import React from 'react';
import PageLayout from './PageLayout';
import Ambassadors from '../components/Ambassadors';

const AmbassadorsPage: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 via-green-600 to-green-500 pt-12 md:pt-16 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">OLI Ambassadors</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 md:text-base">
            Spotlighting our Top 10 sellers with premium profile cards and detailed ambassador views.
          </p>
        </div>
      </section>

      <Ambassadors />
    </PageLayout>
  );
};

export default AmbassadorsPage;
