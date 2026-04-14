import React from 'react';
import PageLayout from '../PageLayout';

const InvestorsPage: React.FC = () => (
  <PageLayout>
    <section id="governance" className="bg-linear-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Investor Relations</h1>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Corporate Governance */}
          <div>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Corporate Governance</h2>
              <p className="text-gray-500 text-lg font-light max-w-2xl">
                Ovialand is dedicated to upholding the highest standards of corporate governance, ensuring accountability, fairness, and transparency to all stakeholders.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Manual on Corporate Governance', link: { href: '/OLI manual-on-corporate-governance.pdf' } },
                { title: 'Organizational Chart', link: { href: '/Organizational Chart - Updated.pdf' } },
                { title: 'Code of Conduct' },
                { title: 'Compliance & Risk' },
              ].map((item) => (
                <div key={item.title} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{item.title}</span>
                  </div>
                  {item.link && (
                    <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors">
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Financial Report */}
          <div>
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Financial Performance</h2>
              <p className="text-gray-500 text-lg font-light max-w-2xl">
                Access Ovialand's annual reports, quarterly results, and financial statements.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Annual Reports</h3>
              <div className="space-y-4">
                {['2024 Annual Report', '2025 Annual Report', '2026 Annual Report'].map((report) => (
                  <div key={report} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{report}</span>
                    </div>
                    <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">Quarterly Results</h3>
              <div className="space-y-4">
                {['2024 Quarterly Results', '2025 Quarterly Results', '2026 Quarterly Results'].map((report) => (
                  <div key={report} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{report}</span>
                    </div>
                    <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section className="bg-linear-to-r from-green-700 to-emerald-700 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-6xl mx-auto">
          {/* Logo and Button */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-10 md:mb-0">
            <img src="/new.png" alt="Ovialand Logo" className="h-24 w-auto object-contain mb-6" />
            <a
              href="/contact"
              className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-green-100 transition mb-4 md:mb-0"
            >
              Send Inquiry
            </a>
          </div>
          {/* Contact Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">ABOUT US</h4>
              <ul className="space-y-2">
                <li><a href="/company#mission-vision" className="text-white/90 hover:underline">Vision and Mission</a></li>
                <li><a href="/company#awards" className="text-white/90 hover:underline">Awards and Recognition</a></li>
                <li><a href="/socials" className="text-white/90 hover:underline">Socials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">PROPERTIES</h4>
              <ul className="space-y-2">
                <li><a href="/business#communities" className="text-white/90 hover:underline">Santevi</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Savana</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Sannera</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Terraza de Sto. Tomas</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Caliya</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Seriya</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Sentro</a></li>
                <li><a href="/business#communities" className="text-white/90 hover:underline">Anara</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-lg">CONTACT US</h4>
              <ul className="space-y-2">
                <li><a href="/careers" className="text-white/90 hover:underline">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  </PageLayout>
);

export default InvestorsPage;
