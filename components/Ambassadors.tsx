import React from 'react';

const Ambassadors: React.FC = () => {
    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Trusted Partners',
            description: 'Work with verified brokers and sellers who prioritize your interests.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Expert Guidance',
            description: 'Get professional advice throughout every step of your homebuying journey.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: 'Premier Experience',
            description: 'Enjoy a seamless and convenient process in finding your dream home.'
        }
    ];

    return (
        <div className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Our Network</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 lowercase">
                        Experience a more <span className="text-green-600">convenient, guided, and premier</span> way to find your future home
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 font-light">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <svg className="w-16 h-16 mx-auto mb-8 opacity-90 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <h3 className="text-2xl md:text-4xl font-bold mb-6">Connect With Your Ambassador</h3>
                        <p className="text-white/80 text-lg md:text-xl font-light mb-10">
                            You may directly connect with your chosen OLI Ambassador for inquiries, property details, viewing schedules, and assistance in securing your dream home.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contact Us for Assistance
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ambassadors;
