import React from 'react';

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

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <p className="text-gray-500 text-lg font-light">
            Stay in the loop—discover new projects, events, and milestones of Ovialand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, i) => (
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
          <button className="px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
