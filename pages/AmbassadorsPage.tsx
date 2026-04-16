import React from 'react';
import PageLayout from './PageLayout';
import Ambassadors from '../components/Ambassadors';

const AmbassadorsPage: React.FC = () => {
  return (
    <PageLayout>
      <section className="bg-linear-to-r from-[#152d25] via-[#5f7960] to-[#bb9c60] pt-12 md:pt-6 pb-6">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto my-4 flex h-20 items-center justify-center overflow-visible md:h-28">
            <img
              src="/Ambassadors/Gold-Logo.png"
              alt="OLI Ambassadors"
              className="h-full w-auto max-w-none object-contain scale-110 md:scale-350"
            />
          </div>
        </div>
      </section>

      <Ambassadors />
    </PageLayout>
  );
};

export default AmbassadorsPage;
