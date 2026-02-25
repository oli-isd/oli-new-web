
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Development } from '../types';

interface Props {
  development: Development;
}

const DevelopmentCard: React.FC<Props> = ({ development }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
        <div className="relative overflow-hidden h-64">
          <img
            src={development.imageUrl}
            alt={development.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
            {development.status}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-white text-gray-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors"
            >
              Explore Details
            </button>
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center text-green-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <svg className="w-3 h-3 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {development.mapUrl ? (
              <a
                href={development.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-green-800 transition-colors"
              >
                {development.location}
              </a>
            ) : (
              development.location
            )}
          </div>
          <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{development.name}</h3>
        </div>
      </div>

      {open && <Modal development={development} onClose={() => setOpen(false)} />}
    </>
  );
};

// Modal component appended below so the file remains self-contained
const Modal: React.FC<{ development: Development; onClose: () => void }> = ({ development, onClose }) => {
  const mapQuery = encodeURIComponent(`${development.name} ${development.location}`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const models = development.houseModels || [];
  const selectedModel = models[selectedModelIndex] || null;
  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="bg-white max-h-[90vh] overflow-auto rounded-lg shadow-lg relative z-10 p-6 text-center"
        style={{ width: 'min(95vw, calc(50% + 3in))' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
        <h2 className="text-2xl font-bold mb-2">{development.name}</h2>
        {development.description && <p className="text-gray-600 mb-4">{development.description}</p>}

        <div className="mb-8">
          <h3 className="font-semibold mb-4 uppercase tracking-widest text-sm">House Models</h3>

          {models.length > 0 && (
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
              {models.map((m, i) => (
                <button
                  key={m + i}
                  onClick={() => setSelectedModelIndex(i)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${i === selectedModelIndex ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center text-center px-4">
              {(selectedModel === 'Estate') ? (
                <>
                  <h4 className="text-xl font-bold mb-2 uppercase">ESTATE</h4>
                  <p className="text-gray-600 mb-4 max-w-xl">The Santevi Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.</p>

                  <div className="grid grid-cols-5 gap-4 bg-gray-50 border border-gray-100 rounded-lg p-4 w-full max-w-xl text-sm">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Lot Area</div>
                      <div className="font-semibold">85</div>
                      <div className="text-xs text-gray-500">sqm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Floor Area</div>
                      <div className="font-semibold">73.55</div>
                      <div className="text-xs text-gray-500">sqm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Bedroom</div>
                      <div className="font-semibold">3</div>
                      <div className="text-xs text-gray-500">–</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Toilet&Bath</div>
                      <div className="font-semibold">2</div>
                      <div className="text-xs text-gray-500">–</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Carport</div>
                      <div className="font-semibold">1</div>
                      <div className="text-xs text-gray-500">–</div>
                    </div>
                  </div>
                </>
              ) : selectedModel === 'Mansion' ? (
                <>
                  <h4 className="text-xl font-bold mb-2 uppercase">MANSION</h4>
                  <p className="text-gray-600 mb-4 max-w-xl">The Santevi Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family both comfort and value.</p>

                  {(models || []).length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xs">
                      {(models || []).map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <h4 className="text-lg font-bold mb-2">{selectedModel || 'Model'}</h4>
                  {development.description && <p className="text-gray-600 mb-4 max-w-xl">{development.description}</p>}

                  {(models || []).length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xs">
                      {(models || []).map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>

            <div className="w-full flex justify-center items-start">
              <img
                src={
                  selectedModel === 'Estate'
                    ? (development.estateImageUrl || development.imageUrl)
                    : selectedModel === 'Mansion'
                      ? (development.mansionImageUrl || development.imageUrl)
                      : development.imageUrl
                }
                alt={`${development.name} ${selectedModel ? '- ' + selectedModel : ''}`}
                className="w-full md:w-80 object-cover rounded shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Google Map</h3>
          <div className="w-full md:w-3/4 mx-auto h-48 bg-gray-100">
            <iframe
              title={`map-${development.id}`}
              src={mapSrc}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Nearby Establishments</h3>
          <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xl">
            {(development.nearbyEstablishments || []).map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold text-[10px]">Inquire now and book a viewing</a>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? ReactDOM.createPortal(modal, document.body) : modal;
};


export default DevelopmentCard;
