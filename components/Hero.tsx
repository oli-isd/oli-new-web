
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/Santevi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div> 
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-28 md:pt-24">
        <div className="max-w-3xl mx-auto text-white text-center">
          <div className="hero-from-left flex items-center justify-center space-x-3 mb-4 md:mb-6" style={{ animationDelay: '0.2s' }}>
            <div className="h-[2px] w-8 md:w-12 bg-green-400"></div>
            <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-2xl md:text-4xl font-bold text-green-400 whitespace-nowrap [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">Welcome to Ovialand</span>
            <div className="h-[2px] w-8 md:w-12 bg-green-400"></div>
          </div>
          <h1 className="hero-from-right text-4xl md:text-7xl mb-4 md:mb-6 leading-tight font-bold [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]" style={{ animationDelay: '0.7s' }}>
            Experience
            <span className="block italic font-light mt-2 text-3xl md:text-5xl">Premier Family Living</span>
          </h1>
          <p className="hero-animate text-sm md:text-base text-white mb-8 md:mb-10 leading-relaxed font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]" style={{ animationDelay: '1.2s' }}>
            At Ovialand, every home is built with comfort, quality, and long-term value in mind—offering well-planned spaces, secure neighborhoods, and family-centered amenities.
          </p>
          <div className="hero-animate flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" style={{ animationDelay: '1.6s' }}>
            <button
              onClick={() => document.getElementById('communities')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Communities
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
