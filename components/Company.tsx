import React from 'react';

const Company: React.FC = () => {
	return (
		<section id="company" className="py-12 bg-white scroll-mt-24">
			<div className="container mx-auto px-6">
				<div className="w-full">
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						Ovialand Inc. (OLI) is a fast-growing real estate developer committed to building thoughtfully designed homes and communities for Filipino families. Since 2014, OLI has successfully completed and turned over more than 3,500 homes—each one a step toward stability, security, and a better everyday life for its homeowners.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						At the heart of Ovialand is a clear purpose: to create homes that families can grow into, and communities where life can truly unfold. Every development is guided by a deep understanding of what matters most to Filipino homeowners—safety, quality, accessibility, and a sense of belonging.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						Through its proprietary pre-cast construction methodology, Ovialand is able to build homes efficiently—without compromising the integrity and durability that families deserve. Together with its trusted housing finance partners, this allows homeowners to move into their new homes in as fast as 60–90 days, making the journey to homeownership both seamless and reassuring.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						More than just building houses, Ovialand is dedicated to delivering a complete homebuying experience—one defined by clarity, reliability, and care at every stage. This commitment has shaped its growing reputation as a trusted homebuilder, with communities that reflect both thoughtful planning and genuine attention to the people who live in them.
					</p>
					<p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
						Anchored in its Premier Family Living® promise, Ovialand continues to create environments where families can feel secure, connected, and proud to call home—because every home is more than a structure; it is where life begins and grows.
					</p>
				</div>
				<div className="mt-24">
					<div id="mission-vision" className="mb-16 scroll-mt-24">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
							<div id="vision" className="relative overflow-hidden rounded-3xl min-h-64 flex items-center p-6 md:p-10 group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#32893b' }}>
								<div className="z-10">
									<h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Our Vision</h3>
									<p className="text-white text-lg leading-relaxed">
										To become the most trusted name in homebuilding for the next generation of Filipino families—where every home represents stability, dignity, and a better future.
									</p>
								</div>
								<div className="absolute bottom-6 left-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
									<svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 64 64" stroke="currentColor">
										<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M32 18c8 0 14 6 14 14s-6 14-14 14S18 40 18 32 24 18 32 18z" />
										<path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M44 32c0 6.627-5.373 12-12 12S20 38.627 20 32 25.373 20 32 20s12 5.373 12 12z" />
									</svg>
								</div>
							</div>
							<div id="mission" className="relative overflow-hidden rounded-3xl min-h-64 flex items-center p-6 md:p-10 group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#32893b' }}>
								<div className="z-10">
									<h3 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">Our Mission</h3>
									<p className="text-white text-lg leading-relaxed">
										To bring <strong>Premier Family Living&reg;</strong> to life by creating homes and communities that families can grow into&mdash;guided by quality, integrity, and genuine care for every homeowner we serve.
									</p>
								</div>
							<div className="absolute bottom-6 right-6 opacity-20 text-white group-hover:opacity-30 transition-opacity duration-300">
									<svg className="w-14 h-14" fill="none" viewBox="0 0 64 64" stroke="currentColor">
										<circle cx="32" cy="32" r="14" strokeWidth="2" />
										<path d="M44 20L36 28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
					</div>


					<div id="values" className="rounded-3xl overflow-hidden bg-white scroll-mt-24">
						<div className="px-4 md:px-8 py-12 md:py-20">
							<h3 className="text-2xl md:text-4xl font-bold text-green-600 text-center uppercase tracking-widest md:tracking-[0.25em] mb-10 md:mb-16">
								Our Core Values
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 w-full max-w-6xl mx-auto px-2 md:px-4 justify-items-center">
								{[
									{
										label: 'Excellence',
										description: 'We pursue excellence in every detail, consistently delivering homes and communities that meet the highest standards of quality and care.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
											</svg>
										),
									},
									{
										label: 'Integrity',
										description: 'We do what is right, always—building trust through honesty, accountability, and transparency in everything we do.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
												<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
											</svg>
										),
									},
									{
										label: 'Innovation',
										description: 'We continuously improve how we build and serve, embracing better ideas and smarter solutions to enhance the homebuying experience.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
												<path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-20C7.31 1 5 3.31 5 6c0 2.05.84 3.89 2.2 5.22.14 1.56.63 3.06 1.52 4.37.47.6.77 1.22.77 1.91V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1.5c0-.69.3-1.31.77-1.91.89-1.31 1.38-2.81 1.52-4.37C18.16 9.89 19 8.05 19 6c0-2.69-2.31-5-5-5zm0 2c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3z" />
											</svg>
										),
									},
									{
										label: 'Leaders with a Purpose',
										description: 'We lead with intention and responsibility, guided by a shared purpose to serve our homebuyers and uplift the communities we build.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
											</svg>
										),
									},
									{
										label: 'Resourcefulness',
										description: 'We find ways to move forward, maximizing what we have with creativity, discipline, and a solutions-oriented mindset.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zM19 6.41V5h-1.5v1.41c-1.12.33-2.13 1.05-2.9 2.02-.32.36-.59.78-.82 1.23-.83-.26-1.7-.4-2.59-.4-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10c0-.88-.14-1.75-.4-2.59.45-.23.87-.5 1.23-.82.97-.77 1.69-1.78 2.02-2.9H19v-1.5z" />
											</svg>
										),
									},
									{
										label: 'Respect for Each Other',
										description: 'We value every individual, fostering a culture of empathy, collaboration, and mutual respect in all our relationships.',
										icon: (
											<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
											</svg>
										),
									},
								].map((value) => (
									<div key={value.label} className="flex flex-col items-center gap-4 group bg-gray-50/50 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
										<div className="w-20 h-20 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 p-1 bg-green-600 shadow-md">
											{value.icon}
										</div>
										<div className="flex flex-col items-center text-center">
											<span className="text-green-600 text-sm md:text-base font-bold uppercase tracking-[0.12em] mb-3">{value.label}</span>
											<p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div id="leadership" className="mt-16 md:mt-24 scroll-mt-24">
					<div className="text-center mb-4">
						<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-600 mb-4">Leadership</h2>
					</div>
					<div className="mb-10">
						<h3 className="text-2xl font-bold text-gray-700 mb-8">Board of Directors</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{ name: 'Giovanni J. Olivares', title: 'Chairman', image: '/BOD/Chairman.png' },
								{ name: 'Marie Leonore Fatima Olivares-Vital', title: 'CEO & President', image: '/BOD/CEO.png' },
								{ name: 'Nanette V. Olivares', title: 'Director', image: '/BOD/Director-1.png' },
								{ name: 'Paolo Giovanni V. Olivares', title: 'Director', image: '/BOD/Director-4.png' },
								{ name: 'Therese Marie V. Olivares', title: 'Director', image: '/BOD/Director-2.png' },
								{ name: 'Januario Jesus Gregorio B. Atencio', title: 'Director', image: '/BOD/Director-3.png' },
								{ name: 'Victorio Valledor', title: 'Director', image: '/BOD/Director-5.png' },
							].map((person) => (
								<div key={person.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
									<div className="aspect-4/5 md:aspect-square lg:aspect-4/5 bg-gray-100 overflow-hidden">
										{person.image ? (
											<img
												src={person.image}
												alt={person.name}
												className="w-full h-full object-cover object-top"
											/>
										) : (
											<div className="w-full h-full flex flex-col items-center justify-center gap-2">
												<svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
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
