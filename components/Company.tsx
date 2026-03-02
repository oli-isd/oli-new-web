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
					<div className="max-w-6xl">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div id="vision" className="relative overflow-hidden rounded-3xl h-56 md:h-64 flex items-center p-8 group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#32893b' }}>
								<div className="z-10 max-w-prose">
									<h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Our Vision</h3>
									<p className="text-white text-lg leading-relaxed">
										To be the trusted top real estate brand for emerging generations of aspirational and discerning homebuyers across the country.
									</p>
								</div>
								<div className="absolute bottom-6 left-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
									<svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 64 64" stroke="currentColor">
										<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M32 18c8 0 14 6 14 14s-6 14-14 14S18 40 18 32 24 18 32 18z" />
										<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M44 32c0 6.627-5.373 12-12 12S20 38.627 20 32 25.373 20 32 20s12 5.373 12 12z" />
									</svg>
								</div>
							</div>
							<div id="mission" className="relative overflow-hidden rounded-3xl h-56 md:h-64 flex items-center p-8 bg-white group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
								<div className="z-10 max-w-prose ml-auto text-right md:text-left">
									<h3 className="text-3xl md:text-4xl font-extrabold text-[#32893b] uppercase tracking-wide mb-4">Our Mission</h3>
									<p className="text-gray-800 text-lg leading-relaxed">
										To provide <strong>Premier Family Living</strong>
									</p>
								</div>
								<div className="absolute top-6 right-6 opacity-20 text-[#32893b] group-hover:opacity-30 transition-opacity duration-300">
									<svg className="w-14 h-14" fill="none" viewBox="0 0 64 64" stroke="currentColor">
										<circle cx="32" cy="32" r="14" strokeWidth="2" />
										<path d="M44 20L36 28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>

					
					<div id="values" className="rounded-3xl overflow-hidden shadow-2xl bg-white">
						<div className="px-8 py-16 md:py-20">
							<h3 className="text-3xl md:text-4xl font-bold text-[#32893b] text-center uppercase tracking-[0.25em] mb-16">
								Our Core Values
							</h3>
							<div className="grid grid-cols-3 sm:grid-cols-6 gap-8 md:gap-12 w-full max-w-5xl mx-auto px-4 justify-items-center">
								{[
									{
												label: 'Excellence',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M21 6h-3V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2H3v2a4 4 0 0 0 4 4v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-3a4 4 0 0 0 4-4V6zM9 5h6v1H9V5z" />
													</svg>
												),
											},
											{
												label: 'Integrity',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M12 2l8 4v6c0 5-3.58 9.74-8 11-4.42-1.26-8-6-8-11V6l8-4zM11 11v5h2v-5h-2z" />
													</svg>
												),
											},
											{
												label: 'Innovation',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M9 21h6v-1.5H9V21zM12 2a6 6 0 0 0-3 11.17V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.83A6 6 0 0 0 12 2z" />
													</svg>
												),
											},
											{
												label: 'Leaders with a purpose',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 2h-1.26A5.98 5.98 0 0 1 12 15c-1.63 0-3.12.58-4.24 1.54L6 17v3h12v-3z" />
													</svg>
												),
											},
											{
												label: 'Resourcefulness',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M12 2C8.13 2 5 5.13 5 9c0 4.97 5.17 10.74 6.06 11.66.37.36.99.36 1.36 0C13.83 19.74 19 13.97 19 9c0-3.87-3.13-7-7-7zm1 11l-4 2 2-4 4-2-2 4z" />
													</svg>
												),
											},
											{
												label: 'Respect for each other',
												icon: (
													<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
														<path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.31 0-2.41.84-2.83 2H10.83C10.41 6.84 9.31 6 8 6 6.34 6 5 7.34 5 9c0 1.66 1.34 3 3 3h8zM7 18c0-2 2-3 5-3s5 1 5 3v1H7v-1z" />
													</svg>
												),
											},
								].map((value) => (
									<div key={value.label} className="flex flex-col items-center gap-4 group">
										<div className="w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 p-1" style={{ backgroundColor: '#32893b' }}>
											{value.icon}
										</div>
										<span className="text-[#32893b] text-[12px] font-bold uppercase tracking-[0.12em] text-center max-w-[140px]">{value.label}</span>
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
								{ name: 'Giovanni J. Olivares', title: 'Chairman', image: '/GO.jpg' },
								{ name: 'Marie Leonore Fatima Olivares-Vital', title: 'CEO & President', image: '/FVO-1.webp' },
								{ name: 'Nanette V. Olivares', title: 'Director', image: '/NO.jpg' },
								{ name: 'Paolo Giovanni V. Olivares', title: 'Director', image: '/PGVO.jpg' },
								{ name: 'Therese Marie V. Olivares', title: 'Director', image: '/TMO.jpg' },
								{ name: 'Januario Jesus Gregorio B. Atensio', title: 'Director', image: '/JNR.jpg' },
								{ name: 'Victorio Valledor', title: 'Director', image: '/ViV.jpg' },
							].map((person) => (
								<div key={person.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
									<div className="h-56 bg-gray-100 overflow-hidden">
										{person.image ? (
											<img
												src={person.image}
												alt={person.name}
												className="w-full h-full object-cover object-top"
											/>
										) : (
											<div className="w-full h-full flex flex-col items-center justify-center gap-2">
												<svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
												</svg>
												<span className="text-gray-400 text-xs font-medium tracking-wide uppercase">Photo</span>
											</div>
										)}
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
						<h3 className="text-2xl font-bold text-gray-700 mb-6">Management Team</h3>
						<div className="text-base leading-tight text-gray-800">
							<ul className="list-none space-y-2 md:columns-2 lg:columns-3">
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
									<li key={person.name} className="break-inside-avoid-column">
										<strong className="font-bold text-gray-800 text-base">{person.name}</strong>
										<span className="text-gray-600 text-sm">, {person.title}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Company;
