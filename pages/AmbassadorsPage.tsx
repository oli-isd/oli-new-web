import React from 'react';
import PageLayout from './PageLayout';
import Ambassadors from '../components/Ambassadors';

const AmbassadorsPage: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-12 md:pt-16 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">PLACEHOLDER ONLY</h1>
        </div>
      </section>

      <Ambassadors />
    </PageLayout>
  );
};

export default AmbassadorsPage;
