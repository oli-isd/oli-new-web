import React from 'react';
import PageLayout from './PageLayout';


// Group positions by region
const REGIONS = [
  {
    name: 'South Luzon',
    positions: [
      { title: 'Sales Account Officer', type: 'Full-time', location: 'Laguna / Batangas' },
      { title: 'Civil Engineer', type: 'Full-time', location: 'Laguna / Batangas' },
      { title: 'Site Supervisor', type: 'Full-time', location: 'Laguna / Batangas' },
    ],
  },
  {
    name: 'Central Luzon',
    positions: [
      { title: 'Sales Account Officer', type: 'Full-time', location: 'Bulacan' },
      { title: 'Civil Engineer', type: 'Full-time', location: 'Bulacan' },
      { title: 'Site Supervisor', type: 'Full-time', location: 'Bulacan' },
    ],
  },
  {
    name: 'NCR',
    positions: [
      { title: 'Digital Marketing Specialist', type: 'Full-time', location: 'Pasig City (Head Office)' },
      { title: 'Broker Relations Manager', type: 'Full-time', location: 'Pasig City (Head Office)' },
      { title: 'Finance Analyst', type: 'Full-time', location: 'Pasig City (Head Office)' },
      { title: 'HR Officer', type: 'Full-time', location: 'Pasig City (Head Office)' },
    ],
  },
];

const CareersPage: React.FC = () => (
  <PageLayout>
    <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-6 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white">Grow With Us</h1>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-4xl font-bold text-green-600 mb-4">Build Your Career at Ovialand</h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Be part of a fast-growing real estate developer committed to Premier Family Living. We are always looking for driven and passionate individuals to join our growing team.
          </p>
        </div>



        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-green-600 mb-10 text-center">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REGIONS.map((region) => (
              <div key={region.name}>
                <h4 className="text-lg font-bold text-green-700 mb-6 text-center">{region.name}</h4>
                <div className="space-y-4">
                  {region.positions.map((role) => (
                    <div
                      key={role.title + role.location}
                      className="flex flex-col items-start bg-gray-50 rounded-xl px-6 py-4 hover:bg-green-50 transition-colors gap-2"
                    >
                      <div>
                        <p className="font-bold text-gray-800">{role.title}</p>
                        <p className="text-gray-400 text-sm">{role.type} · {role.location}</p>
                      </div>
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
              href="https://bit.ly/oliprescreen"
              className="inline-block px-8 py-3 bg-white text-green-600 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-green-50 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CareersPage;
