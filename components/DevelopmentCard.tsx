
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
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-white text-gray-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors"
            >
              Explore Details
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow">
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
          <h3 className="text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{development.name}</h3>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden mt-auto w-full py-2 border border-green-600 text-green-600 text-xs font-bold uppercase tracking-widest hover:bg-green-600 hover:text-white transition-colors rounded-sm touch-manipulation"
          >
            Explore Details
          </button>
        </div>
      </div>

      {open && <Modal development={development} onClose={() => setOpen(false)} />}
    </>
  );
};

  const Modal: React.FC<{ development: Development; onClose: () => void }> = ({ development, onClose }) => {
  const mapQuery = encodeURIComponent(`${development.name} ${development.location}`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const models = development.houseModels || [];

  type ModelData = {
    label: string;
    description: string;
    imageUrl: string;
    specs: { lotArea: string; floorArea: string; bedroom: string; toiletBath: string; carport: string };
  };

  const modelDataMap: Record<string, ModelData> = {
    Estate: {
      label: 'ESTATE',
      description: 'The Santevi Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
      imageUrl: development.estateImageUrl || development.imageUrl,
      specs: { lotArea: '85', floorArea: '73.55', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    Mansion: {
      label: 'MANSION',
      description: 'The Santevi Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family both comfort and value.',
      imageUrl: development.mansionImageUrl || development.imageUrl,
      specs: { lotArea: '80', floorArea: '65.69', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    'Manor Luxe': {
      label: 'MANOR LUXE',
      description: 'The Santevi Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
      imageUrl: development.manorLuxeImageUrl || development.imageUrl,
      specs: { lotArea: '85', floorArea: '73.55', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    'Manor Classic': {
      label: 'MANOR CLASSIC',
      description: 'The Santevi Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
      imageUrl: development.manorClassicImageUrl || development.imageUrl,
      specs: { lotArea: '85', floorArea: '73.55', bedroom: '3', toiletBath: '2', carport: '1' },
    },
  };

  const SpecTable: React.FC<{ specs: ModelData['specs'] }> = ({ specs }) => (
    <div className="grid grid-cols-5 gap-4 bg-gray-50 border border-gray-100 rounded-lg p-4 w-full max-w-xl text-sm">
      {[
        { label: 'Lot Area', value: specs.lotArea, unit: 'sqm' },
        { label: 'Floor Area', value: specs.floorArea, unit: 'sqm' },
        { label: 'Bedroom', value: specs.bedroom, unit: '–' },
        { label: 'Toilet&Bath', value: specs.toiletBath, unit: '–' },
        { label: 'Carport', value: specs.carport, unit: '–' },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-xs text-gray-500">{s.label}</div>
          <div className="font-semibold">{s.value}</div>
          <div className="text-xs text-gray-500">{s.unit}</div>
        </div>
      ))}
    </div>
  );

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="bg-white max-h-[90vh] overflow-auto rounded-lg shadow-lg relative z-10 p-4 md:p-6 text-center"
        style={{ width: 'min(95vw, calc(50% + 3in))' }}
      >
        <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full text-lg touch-manipulation">✕</button>
        {development.name === 'Santevi' && (
          <div className="flex justify-center mb-3">
            <img src="/SVT.png" alt="Santevi Logo" className="h-16 object-contain" />
          </div>
        )}
        {development.name !== 'Santevi' && (
          <h2 className="text-xl md:text-2xl font-bold mb-2 pr-8">{development.name}</h2>
        )}
        {development.description && <p className="text-gray-600 mb-4">{development.description}</p>}

        <div className="mb-8">
          <h3 className="font-semibold mb-6 uppercase tracking-widest text-sm">House Models</h3>

          <div className="flex flex-col gap-12">
            {models.map((m, i) => {
              const data = modelDataMap[m];
              const isOdd = i % 2 !== 0;
              if (!data) return (
                <div key={m} className="text-gray-500 text-sm">{m}</div>
              );
              return (
                <div key={m}>
                  {i > 0 && <hr className="border-gray-100 mb-12" />}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`flex flex-col px-4 ${isOdd ? 'md:order-2 items-start text-left' : 'items-center text-center'}`}>
                      <h4 className="text-xl font-bold mb-2 uppercase">{data.label}</h4>
                      <p className="text-gray-600 mb-4 max-w-xl">{data.description}</p>
                      <SpecTable specs={data.specs} />
                    </div>
                    <div className={`w-full flex justify-center items-center ${isOdd ? 'md:order-1' : ''}`}>
                      <img
                        src={data.imageUrl}
                        alt={`${development.name} - ${data.label}`}
                        className="w-full md:w-80 object-cover rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
            {(development.nearbyEstablishments || []).map((n, idx) => (
              <li key={idx}>{n}</li>
            ))}
          </ul>
        </div>

        {!['Sannera', 'Terraza'].includes(development.name) && (
          <div className="text-center"> </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? ReactDOM.createPortal(modal, document.body) : modal;
}; 
export default DevelopmentCard;
