import React from 'react';
import PageLayout from './PageLayout';

const SocialsPage: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  const videoSources = [
    '/social1.mp4',
    '/social2.mp4',
    '/social3.mp4',
    '/social4.mp4',
    '/social5.mp4',
    '/social6.mp4',
    '/social7.mp4',
    '/social8.mp4',
    '/social9.mp4',
    '/social10.mp4',
    '/social11.mp4',
    '/social12.mp4',
  ];

  return (
    <PageLayout>
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Socials</h1>
          <p className="text-white/90 mt-2">Watch our latest community highlights and updates.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(showAll ? videoSources : videoSources.slice(0, 4)).map((src, idx) => (
                <div
                  key={idx}
                  className="relative bg-black rounded-xl shadow-md overflow-hidden w-full"
                  style={{ aspectRatio: '9/16' }}
                >
                  <video
                    src={src}
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="bg-[#32893b] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-green-700 transition-all"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </>
        </div>
      </section>
    </PageLayout>
  );
};

export default SocialsPage;