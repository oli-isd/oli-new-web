import React from 'react';

const Houseasy: React.FC = () => {
	return (
		<section id="houseasy" className="py-24 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className="flex items-center justify-center">
					<div className="w-full rounded-3xl overflow-hidden shadow-xl flex justify-center">
						<img src="/MGY-HE.jpg" alt="HousEasy - Home Buying Made Easy" className="w-full h-auto object-cover mx-auto" />
						</div>
					</div>
					<div className="space-y-6">
						<div>
							<span className="text-green-600 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Home Buying Made Easy</span>
							<h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">HousEasy</h2>
						</div>
						<p className="text-gray-600 text-lg font-light leading-relaxed">
							Home buying can be daunting– but it should not be! With HousEasy, owning your dream home is made easy and fast.
						</p>
						<button className="inline-block w-full sm:w-auto px-6 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
							Learn about Ovialand Homebuying Process
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Houseasy;
