import React from 'react';
import PageLayout from './PageLayout';
import News from '../components/News';

const NewsPage: React.FC = () => (
  <PageLayout>
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-36 md:pt-48 pb-16">
      <div className="container mx-auto px-6 text-center">
        <span className="text-green-200 text-xs font-bold uppercase tracking-[0.3em] block mb-3">Latest from Ovialand</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">News &amp; Updates</h1>
      </div>
    </section>
    <News />
  </PageLayout>
);

export default NewsPage;
