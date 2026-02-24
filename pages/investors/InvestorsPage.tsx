import React from 'react';
import PageLayout from '../PageLayout';

const InvestorsPage: React.FC = () => (
  <PageLayout>

    {/* ── Governance ── */}
    <section id="governance" className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-6 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white">Governance</h1>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Committed to Transparency</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Ovialand is dedicated to upholding the highest standards of corporate governance, ensuring accountability, fairness, and transparency to all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Board of Directors', desc: 'Our Board provides strategic oversight and ensures that the company operates with integrity and in the best interests of all shareholders.' },
              { title: 'Audit Committee', desc: 'The Audit Committee oversees financial reporting, internal controls, and compliance with applicable laws and regulations.' },
              { title: 'Code of Conduct', desc: 'Our comprehensive Code of Conduct guides every decision made at Ovialand, reinforcing our commitment to ethical business practices.' },
              { title: 'Compliance & Risk', desc: 'We maintain a robust compliance and risk management framework to safeguard the interests of investors and stakeholders.' },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-600 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Investor Inquiries</h3>
            <p className="text-white/80 font-light mb-6">For governance documents and investor relations inquiries, please reach out to us directly.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Financials ── */}
    <section id="financials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Financial Reports</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Financial Performance</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Access Ovialand's annual reports, quarterly results, and financial statements.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-600 mb-8 border-b border-green-100 pb-4">Annual Reports</h3>
            <div className="space-y-4">
              {['2024 Annual Report', '2023 Annual Report', '2022 Annual Report'].map((report) => (
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
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-8 border-b border-green-100 pb-4">Quarterly Results</h3>
            <div className="space-y-4">
              {['Q3 2024 Results', 'Q2 2024 Results', 'Q1 2024 Results'].map((report) => (
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
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center bg-green-50 rounded-2xl p-10">
            <p className="text-gray-500 font-light mb-4">Need access to specific financial documents?</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-green-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-700 transition-all duration-300">
              Contact Investor Relations
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── Disclosure ── */}
    <section id="disclosure" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Regulatory Filings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Disclosures & Filings</h2>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
              Ovialand complies with all SEC and PSE disclosure requirements to ensure transparency with our stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'SEC Filings',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                desc: 'Annual reports, information statements, and other mandatory SEC filings.',
              },
              {
                title: 'Material Information',
                icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                desc: 'Timely disclosures of material information that may affect shareholder decisions.',
              },
              {
                title: 'Press Releases',
                icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
                desc: 'Official press releases and public announcements from Ovialand.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-8 border-b border-green-100 pb-4">Recent Disclosures</h3>
            <div className="space-y-4">
              {[
                { date: 'February 2026', title: 'Notice of Annual Stockholders Meeting', type: 'Corporate Action' },
                { date: 'January 2026', title: 'Q4 2025 Financial Results Disclosure', type: 'Financial' },
                { date: 'December 2025', title: 'Material Disclosure: New Project in Bulacan', type: 'Material Information' },
                { date: 'November 2025', title: 'Amended Articles of Incorporation', type: 'SEC Filing' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-green-600 block mb-1">{item.type}</span>
                    <p className="font-medium text-gray-700">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                  <button className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors whitespace-nowrap">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  </PageLayout>
);

export default InvestorsPage;
