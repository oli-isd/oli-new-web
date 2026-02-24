import React from 'react';

const Company: React.FC = () => {
	return (
		<section id="company" className="py-12 bg-white scroll-mt-24">
			<div className="container mx-auto px-6">
				<div className="w-full">
					
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						Ovialand Inc. (OLI) is a fast-growing real estate developer pioneering the premium affordable housing market in the Philippines. Since 2014, OLI has completed and turned over more than 3,500 housing units to its satisfied homeowners.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						By 2030, affordable residential real estate is projected to account for 80% of the country's total housing demand, with a nationwide backlog currently estimated at 6.5 million units. OLI is focused on serving this continuously growing aspirational market by making sure that its product range remains first-rate at all times.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						OLI's proprietary pre-cast methodology allows it to build homes in as fast as 45 days and, together with its housing finance partners, OLI's clients can move into their brand new homes in as fast as 60–90 days. While OLI is continuously increasing its housing production capacity, they make sure that quality remains priority at all times.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						OLI is steadily establishing itself as a trusted developer nationwide—growing one region at a time. Its current developments are located in Laguna, Quezon, Batangas, and Bulacan, with plans to expand across Luzon, Visayas, and Mindanao by 2033.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						OLI is committed to the Premier Family Living® promise for all its clients. Beautiful homes in masterplanned communities, capped off with attention to service is unique to OLI, and its growing market base can attest to this.
					</p>
				</div>


				<div className="mt-24">

					<div id="mission-vision" className="mb-16">
					<div className="max-w-2xl">
						<h2 className="text-4xl md:text-5xl font-bold mb-10" style={{ color: '#32893b' }}>Mission &amp; Vision</h2>
						<div className="space-y-8">
							<div id="vision" className="scroll-mt-24">
								<p className="text-gray-800 text-lg leading-relaxed">
									To be the trusted top real estate brand for emerging generations of aspirational and discerning homebuyers across the country.
								</p>
							</div>
							<div id="mission" className="scroll-mt-24">
								<p className="text-gray-800 text-lg leading-relaxed">
									To provide <strong>Premier Family Living</strong>
								</p>
							</div>
						</div>
					</div>
				</div>

					
					<div id="values" className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#32893b' }}>
						<div className="px-8 py-16 md:py-20">
							<h3 className="text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-[0.25em] mb-16">
								Our Core Values
							</h3>
							<div className="flex flex-nowrap justify-center gap-6 md:gap-8">
								{[
									{
										label: 'Excellence',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
											</svg>
										),
									},
									{
										label: 'Integrity',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
											</svg>
										),
									},
									{
										label: 'Innovation',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M21 8.5l-1.5-1.5-8 8-4-4L6 12.5l5.5 5.5z"/>
												<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
											</svg>
										),
									},
									{
										label: 'Leaders with a purpose',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
											</svg>
										),
									},
									{
										label: 'Resourcefulness',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
											</svg>
										),
									},
									{
										label: 'Respect for each other',
										icon: (
											<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
											</svg>
										),
									},
								].map((value) => (
									<div key={value.label} className="flex flex-col items-center gap-3 group">
										<div className="w-16 h-16 rounded-full flex items-center justify-center text-[#32893b] transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#ffffff' }}>
											{value.icon}
										</div>
										<span className="text-white text-[10px] font-bold uppercase tracking-[0.15em] text-center max-w-[90px]">{value.label}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				
				<div id="leadership" className="mt-24 scroll-mt-24">
					<div className="text-center mb-4">
						<h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Leadership</h2>
					</div>
					<div className="mb-10">
						<h3 className="text-2xl font-bold text-gray-700 mb-8 border-b border-gray-200 pb-4">Board of Directors</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{ name: 'Giovanni J. Olivares', title: 'Chairman' },
								{ name: 'Marie Leonore Fatima Olivares-Vital', title: 'CEO & President' },
								{ name: 'Nanette V. Olivares', title: 'Director' },
								{ name: 'Paolo Giovanni V. Olivares', title: 'Director' },
								{ name: 'Therese Marie V. Olivares', title: 'Director' },
								{ name: 'Januario Jesus Gregorio B. Atensio', title: 'Director' },
								{ name: 'Victorio Valledor', title: 'Director' },
							].map((person) => (
								<div key={person.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
									<div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
										<svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
										</svg>
									</div>
									<div className="p-5">
										<h4 className="text-base font-bold text-gray-800 leading-snug">{person.name}</h4>
										<p className="text-green-600 font-medium text-sm mt-1">{person.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="mt-16">
						<h3 className="text-2xl font-bold text-gray-700 mb-8 border-b border-gray-200 pb-4">Management Team</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
							{[
								{ name: 'John Bryan Vital', title: 'Chief Financial Officer' },
								{ name: 'Engr. Reynaldo Abrencillo', title: 'Business Development and Design Head' },
								{ name: 'Jhennifer Amante', title: 'Project Revenue Head' },
								{ name: 'Engr. Jerico Samaniego', title: 'Construction Management Head' },
								{ name: 'Jelane Malabanan', title: 'Client Services Head' },
								{ name: 'Mariz Mudlong', title: 'Finance Manager' },
								{ name: 'Monica Ann Mendoza', title: 'Investor Relations and Compliance Manager' },
								{ name: 'Engr. Joseph Oabel', title: 'Cost and Design Manager' },
								{ name: 'Michelle Pua', title: 'Sales Manager' },
								{ name: 'Roselle Cequeña', title: 'People and Culture Manager' },
								{ name: 'Miriam Reyes', title: 'Marketing and Communications Manager' },
								{ name: 'Anjo Connie Caudor', title: 'Accounting Manager' },
								{ name: 'Danielle Lyn Perez', title: 'Treasury and Cash Management Manager' },
								{ name: 'Karen Quilala', title: 'Account Management Manager' },
								{ name: 'Jerrel Cabañes', title: 'Business Development Manager' },
								{ name: 'Jackilyn Infante-Adao', title: 'Client Services Manager' },
							].map((person) => (
								<div key={person.name} className="flex items-start gap-3 py-3 border-b border-gray-100">
									<div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
									<div>
										<span className="font-bold text-gray-800 text-sm">{person.name}</span>
										<span className="text-gray-500 text-sm">, {person.title}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Company;
