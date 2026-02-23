import React from 'react';
import PageLayout from './PageLayout';

const POSITIONS = [
  {
    department: 'Sales & Marketing',
    roles: [
      { title: 'Sales Account Officer', type: 'Full-time', location: 'Laguna / Batangas / Bulacan' },
      { title: 'Digital Marketing Specialist', type: 'Full-time', location: 'Pasig City (Head Office)' },
      { title: 'Broker Relations Manager', type: 'Full-time', location: 'Pasig City (Head Office)' },
    ],
  },
  {
    department: 'Engineering & Construction',
    roles: [
      { title: 'Civil Engineer', type: 'Full-time', location: 'Various Project Sites' },
      { title: 'Site Supervisor', type: 'Full-time', location: 'Various Project Sites' },
    ],
  },
  {
    department: 'Corporate',
    roles: [
      { title: 'Finance Analyst', type: 'Full-time', location: 'Pasig City (Head Office)' },
      { title: 'HR Officer', type: 'Full-time', location: 'Pasig City (Head Office)' },
    ],
  },
];

const CareersPage: React.FC = () => (
  <PageLayout>
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-36 md:pt-48 pb-16">
      <div className="container mx-auto px-6 text-center">
        <span className="text-green-200 text-xs font-bold uppercase tracking-[0.3em] block mb-3">Join Our Team</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Careers</h1>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Grow With Us</span>
          <h2 className="text-4xl font-bold text-green-600 mb-4">Build Your Career at Ovialand</h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Be part of a fast-growing real estate developer committed to Premier Family Living. We are always looking for driven and passionate individuals to join our growing team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {[
            { title: 'Growth Opportunities', desc: 'Accelerate your career in one of the Philippines\' fastest-growing real estate companies.' },
            { title: 'Purpose-Driven Work', desc: 'Make a real difference by helping Filipino families achieve their dream of homeownership.' },
            { title: 'Competitive Benefits', desc: 'Enjoy competitive compensation, health benefits, and a supportive work environment.' },
          ].map((item) => (
            <div key={item.title} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-green-600 mb-10 text-center">Open Positions</h3>

          <div className="space-y-10">
            {POSITIONS.map((dept) => (
              <div key={dept.department}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-green-600 mb-4 border-b border-green-100 pb-3">
                  {dept.department}
                </h4>
                <div className="space-y-3">
                  {dept.roles.map((role) => (
                    <div
                      key={role.title}
                      className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors gap-3"
                    >
                      <div>
                        <p className="font-bold text-gray-800">{role.title}</p>
                        <p className="text-gray-400 text-sm">{role.type} · {role.location}</p>
                      </div>
                      <a
                        href="/contact"
                        className="text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-800 transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-600 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Don't See Your Role?</h3>
            <p className="text-white/80 font-light mb-6">
              Send your resume to our HR team and we'll reach out when an opportunity arises.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-50 transition-all duration-300"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CareersPage;
