
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
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-28 md:pt-24">
        <div className="max-w-3xl mx-auto text-white text-center">
          <div className="hero-from-left flex items-center justify-center space-x-3 mb-4 md:mb-6" style={{ animationDelay: '0.2s' }}>
            <div className="h-[2px] w-8 md:w-12 bg-green-500"></div>
            <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm font-medium text-green-400">Welcome to Ovialand</span>
            <div className="h-[2px] w-8 md:w-12 bg-green-500"></div>
          </div>
          <h1 className="hero-from-right text-4xl md:text-7xl mb-4 md:mb-6 leading-tight font-bold" style={{ animationDelay: '0.7s' }}>
            Experience the <span className="italic font-light">Premier Family Living</span>
          </h1>
          <p className="hero-animate text-sm md:text-base text-gray-300 mb-8 md:mb-10 leading-relaxed font-light" style={{ animationDelay: '1.2s' }}>
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
