import React from 'react';

const Company: React.FC = () => {
	return (
		<section id="company" className="py-24 bg-white scroll-mt-24">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className="max-w-2xl">
						<h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
							About Us
						</h2>
						<h2 className="text-5xl md:text-6xl text-green-600 mb-6">
							A growing developer with a clear mission
						</h2>
						<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
							Ovialand, Inc., (OLI) is a fast-growing real estate developer pioneering the premium affordable housing market in the Philippines. Since 2014, OLI has completed and turned over more than 1,600 housing units to its satisfied clients.
						</p>
						<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
							By 2030, affordable residential real estate will comprise of 80% of the total real estate demand of the Philippines, with the nationwide backlog currently estimated at 6.8 million units. Ovialand is focused on serving this continuously growing aspirational market by making sure that its product range remains first-rate at all times.
						</p>
						<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
							Ovialand is working towards becoming a national real-estate developer, inching its way one region at a time. Current developments of the company are located in Laguna, Quezon, and Batangas, and has now started its first development in Bulacan. By 2033, Ovialand aims to be present in Luzon, Visayas and Mindanao.
						</p>
					</div>
					<div className="flex items-center justify-center">
						<video className="w-full h-auto rounded-2xl shadow-xl" controls>
							<source src="/Clip - 3.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>


				<div className="mt-24">

					<div className="relative h-[500px] md:h-[400px] overflow-hidden rounded-3xl shadow-2xl mb-16">
						<div className="absolute inset-0 grid md:grid-cols-2">

							<div id="vision" className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 p-12 flex flex-col justify-between overflow-hidden scroll-mt-24">
								<div className="relative z-10">
									<h3 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
										Our<br />Vision
									</h3>
									<p className="text-white text-lg leading-relaxed opacity-95">
										To be the top real estate brand for emerging generations of aspirational and discerning homebuyers across the country.
									</p>
								</div>
								<div className="relative z-10 flex justify-start">
									<svg className="w-24 h-24 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
									</svg>
								</div>
								
								<div className="absolute -right-32 top-0 bottom-0 w-96 bg-green-700 opacity-30 transform rotate-12"></div>
							</div>


							<div id="mission" className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex flex-col justify-between overflow-hidden scroll-mt-24">
								<div className="relative z-10 flex justify-end">
									<svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="10"/>
										<circle cx="12" cy="12" r="6"/>
										<circle cx="12" cy="12" r="2"/>
									</svg>
								</div>
								<div className="relative z-10">
									<h3 className="text-4xl md:text-5xl font-bold text-green-600 mb-6 uppercase tracking-wide">
										Our<br />Mission
									</h3>
									<p className="text-gray-700 text-lg leading-relaxed">
										To provide Premier Family Living
									</p>
								</div>
								
								<div className="absolute -left-32 top-0 bottom-0 w-96 bg-gray-300 opacity-30 transform -rotate-12"></div>
							</div>
						</div>
					</div>

					
					<div id="values" className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12">
						<h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 text-center">Our Values</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Integrity</span>
							</div>
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Innovation</span>
							</div>
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Excellence</span>
							</div>
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Leaders with a purpose</span>
							</div>
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Resourcefulness</span>
							</div>
							<div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
								<div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
								<span className="text-gray-700 text-lg">Respect for each other</span>
							</div>
						</div>
					</div>
				</div>

				
				<div id="leadership" className="mt-24 scroll-mt-24">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Leadership</h2>
						<p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
							Meet the people driving Ovialand's vision forward.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
						
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
							<div className="h-64 overflow-hidden">
								<img src="/Ms. Pammy - OLI.jpg" alt="Pammy Olivares-Vital" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
							</div>
							<div className="p-6">
								<h4 className="text-xl font-bold text-gray-800">Pammy Olivares-Vital</h4>
								<p className="text-green-600 font-medium text-sm mt-1">President & CEO</p>
					
							</div>
						</div>
						
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
							<div className="h-64 overflow-hidden">
								<img src="/Mr. John Bryan - OLI.jpg" alt="John Bryan Vital" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
							</div>
							<div className="p-6">
								<h4 className="text-xl font-bold text-gray-800">John Bryan Vital</h4>
								<p className="text-green-600 font-medium text-sm mt-1">Chief Operating Officer</p>
							
							</div>
						</div>
						
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
							<div className="h-64 overflow-hidden">
								<img src="/Ovialand-2.jpg" alt="Board of Directors" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
							</div>
							<div className="p-6">
								<h4 className="text-xl font-bold text-gray-800">Board of Directors</h4>
								<p className="text-green-600 font-medium text-sm mt-1">Corporate Governance</p>
								<p className="text-gray-500 text-sm mt-3 leading-relaxed">
									Guiding Ovialand's strategic direction with integrity, transparency, and long-term value creation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Company;
