import React from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig, Variants } from 'framer-motion';
import { ScrollReveal, ScrollContainer } from './shared/ScrollReveal';

interface HouseasyProps {
	showButton?: boolean;
	showImage?: boolean;
}

const EASE = [0.16, 1, 0.3, 1] as const; // easeOutExpo, same as ScrollReveal

// Logo settles in with a small scale + tilt (inherits the state from its ScrollReveal wrapper).
const logoVariants: Variants = {
	hidden: { scale: 0.75, rotate: -8 },
	visible: { scale: 1, rotate: 0, transition: { duration: 1.1, ease: EASE } },
};

// Cards glide in from the outside toward the centre: the left card from the left, the right from the right.
const cardSlide = (direction: -1 | 1): Variants => ({
	hidden: { opacity: 0, x: direction * 70, y: 24, scale: 0.97 },
	visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 1, ease: EASE } },
});

// Text inside a card follows the card in, one beat after the other.
const cardText = (delay: number): Variants => ({
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: EASE } },
});

const Houseasy: React.FC<HouseasyProps> = ({ showButton = true, showImage = true }) => {
	return (
		<section id="houseasy" className="bg-white">
			{showImage && (
				<img
					src="/Megan-V2.jpeg"
					alt="HousEasy - Megan Young Brand Ambassador"
					className="w-full block object-cover"
				/>
			)}
			<MotionConfig reducedMotion="user">
			<div className="container mx-auto px-6 pt-8 md:pt-10 pb-8 md:pb-12">
				<ScrollContainer className="text-center" staggerChildren={0.12}>
					<ScrollReveal>
						<motion.img
							variants={logoVariants}
							src="/HousEasy Logo.png"
							alt="HousEasy Logo"
							className="h-20 md:h-24 w-auto object-contain mx-auto mb-4"
						/>
					</ScrollReveal>
					<ScrollReveal>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">HousEasy</h2>
					</ScrollReveal>
					<ScrollReveal>
						<p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
							Home buying can be daunting– but it should not be!
							<br />With HousEasy, owning your dream home is made easy and fast.
						</p>
					</ScrollReveal>
				</ScrollContainer>

				<ScrollContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10 md:mt-16" staggerChildren={0.2}>
					<motion.div variants={cardSlide(-1)} className="w-full flex">
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group cursor-pointer transform transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-green-200 w-full flex flex-col justify-between">
							<div>
								<motion.h3 variants={cardText(0.3)} className="text-2xl font-bold text-green-600 uppercase tracking-wide mb-4 group-hover:text-green-700 text-center">Instant Homes</motion.h3>
								<motion.p variants={cardText(0.45)} className="text-gray-600 text-base font-light leading-relaxed mb-4">
									Ovialand builds homes in 45 days! Yes, you read it right. This is possible with the technology Ovialand, Inc. is using and the highly skilled workers that the company has.
								</motion.p>
								<motion.p variants={cardText(0.6)} className="text-gray-600 text-base font-light leading-relaxed">
									Using proprietary pre-cast technology, Ovialand is able to build solid concrete homes with efficiency.
								</motion.p>
							</div>
						</div>
					</motion.div>

					<motion.div variants={cardSlide(1)} className="w-full flex">
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 group cursor-pointer transform transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-green-200 w-full flex flex-col justify-between">
							<div>
								<motion.h3 variants={cardText(0.3)} className="text-2xl font-bold text-green-600 uppercase tracking-wide mb-4 group-hover:text-green-700 text-center">Instant Financing</motion.h3>
								<motion.p variants={cardText(0.45)} className="text-gray-600 text-base font-light leading-relaxed">
									Get your housing loan approved in 30 days! Ovialand partnered with esteemed financial institutions like Pag-IBIG, BDO, Chinabank, RCBC, and BPI, to make this possible.
								</motion.p>
							</div>
						</div>
					</motion.div>
				</ScrollContainer>

				{showButton && (
					<ScrollReveal className="mt-12 flex justify-center" animation="scale-up" delay={0.15}>
						<Link
							to="/business/housebuying"
							className="inline-block px-8 py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out text-center"
						>
							Learn about the Ovialand homebuying process
						</Link>
					</ScrollReveal>
				)}
			</div>
			</MotionConfig>
		</section>
	);
};

export default Houseasy;
