import React from 'react';
import PageLayout from '../PageLayout';
import Houseasy from '../../components/Houseasy';

const HouseasyPage: React.FC = () => (
  <PageLayout>
    

    <Houseasy />

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Homebuying Journey</h2>
          <p className="text-gray-500 text-lg font-light">
            We are committed to offering you the Premier Home of your dreams. From securing your reservation to handing you the keys, experience how easy it is to achieve homeownership with Ovialand.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: '01', title: 'Choose Your Home', desc: 'Browse our communities and select the home that fits your lifestyle and budget.' },
            { step: '02', title: 'Secure Your Slot', desc: 'Reserve your unit with a low reservation fee and lock in your preferred unit.' },
            { step: '03', title: 'Loan Processing', desc: 'Our Account Officers guide you through hassle-free loan applications.' },
            { step: '04', title: 'Move In', desc: 'Complete turnover in as fast as 6 months and start living your premier life.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://olihome.ovialand.com/App/Register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Home Journey
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default HouseasyPage;
