import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ADDITIONAL_NEWS from '../data/news.json';

const NEWS_ITEMS = [
  {
    date: 'February 2026',
    category: 'New Project',
    title: 'Housing that keeps its promise - Inquirer Business',
    excerpt:
      'Affordable housing has become a familiar phrase in Philippine property conversations officially breaks ground on its newest master-planned development in Bulacan.',
    image: '/News-1.jpg',
    link: 'https://business.inquirer.net/575224/housing-that-keeps-its-promise',
  },
  {
    date: 'December 2025',
    category: 'Milestone',
    title: 'Ovialand expects to post P880-M net income this 2025 - Inquirer Business',
    excerpt:
      'A proud milestone for Ovialand as we celebrate the turnover of our 1,600th home, fulfilling our promise of Premier Family Living.',
    image: '/News-2.jpg',
    link: 'https://business.inquirer.net/563687/ovialand-expects-to-post-p880-m-net-income-this-2025',
  },
  {
    date: 'November 2025',
    category: 'Event',
    title: "Ovialand rolls out third project with Japan's Takara Leben - The Manila Times",
    excerpt:
      'Ovialand Inc. has expanded its partnership with Japan’s Takara Leben Co. Ltd. with the launch of Anara, a 4.2-hectare residential development in Baliwag, Bulacan.',
    image: '/News-3.jpg',
    link: 'https://www.manilatimes.net/2025/11/26/business/corporate-news/ovialand-rolls-out-third-project-with-japans-takara-leben/2231476',
  },
];

const News: React.FC<{ moreNews?: any[]; filterYear?: string | null }> = ({ moreNews, filterYear = null }) => {
  const [expanded, setExpanded] = useState(!!filterYear);
  const placeholders = moreNews ?? (ADDITIONAL_NEWS as any[]);
  const allNews = [...NEWS_ITEMS, ...placeholders]; 
  const normalized = allNews.map((n) => ({ ...n, year: n.year ?? (n.date ? Number(String(n.date).match(/\d{4}$/)) : undefined) }));
  const filteredByYear = filterYear ? normalized.filter(n => Number(n.year) === Number(filterYear)) : null;
  const previewCount = 3;
  const visibleTop = filterYear ? filteredByYear ?? [] : normalized.slice(0, previewCount);
  const remaining = filterYear ? [] : normalized.slice(previewCount);
  const location = useLocation();
  const isNewsPage = location.pathname === '/news' || location.pathname.startsWith('/news');
  return (
    <section id="news" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600">News &amp; Updates</h1>
          <p className="text-gray-500 text-lg font-light">
            Stay in the loop—discover new projects, events, and milestones of Ovialand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleTop.map((item, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">{item.date}</p>
                <h3 className="text-green-600 font-bold text-xl mb-3 leading-snug group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed flex-grow">{item.excerpt}</p>
                <div className="mt-6">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:space-x-3 transition-all"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <button className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group-hover:space-x-3 transition-all">
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          {!isNewsPage ? (
            <Link to="/news" className="px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View All News
            </Link>
          ) : (
            <button
              aria-expanded={expanded}
              onClick={() => setExpanded(v => !v)}
              className="px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {expanded ? 'Show Less' : 'View All News'}
            </button>
          )}
        </div>

        {expanded && !filterYear && (
          <div className="mt-10">
            <div className="grid md:grid-cols-3 gap-8">
              {remaining.map((item, i) => (
                <article
                  key={`more-${i}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">{item.date}</p>
                    <h3 className="text-green-600 font-bold text-xl mb-3 leading-snug group-hover:text-green-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed flex-grow">{item.excerpt}</p>
                    <div className="mt-6">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:space-x-3 transition-all">
                          <span>Read More</span>
                        </a>
                      ) : (
                        <button className="text-green-600 font-bold text-xs uppercase tracking-widest flex items-center space-x-2 group-hover:space-x-3 transition-all" disabled>
                          <span>Coming Soon</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
