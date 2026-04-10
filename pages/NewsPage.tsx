import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from './PageLayout';
import News from '../components/News';

const NewsPage: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const year = params.get('year');

  return (
    <PageLayout>
      <section className="bg-linear-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-white">Latest News</h1>
        </div>
      </section>
      <News filterYear={year} />
    </PageLayout>
  );
};

export default NewsPage;
