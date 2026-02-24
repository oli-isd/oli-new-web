import React from 'react';
import PageLayout from '../PageLayout';
import Company from '../../components/Company';
import { AWARDS } from '../../constants';

const CompanyPage: React.FC = () => (
  <PageLayout>
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
      </div>
    </section>

    <Company />

    <section id="awards" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
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
  </PageLayout>
);

export default CompanyPage;
