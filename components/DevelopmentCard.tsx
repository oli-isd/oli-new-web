
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
    specs: { lotArea: string; floorArea: string; bedroom: string; toiletBath: string; carport: string };
  };

  const modelDataMap: Record<string, ModelData> = {
    // Santevi
    Estate: {
      label: 'ESTATE',
      description: 'The Santevi Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
      specs: { lotArea: '85', floorArea: '73.55', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    Mansion: {
      label: 'MANSION',
      description: 'The Santevi Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family both comfort and value.',
      specs: { lotArea: '80', floorArea: '65.69', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    'Manor Luxe': {
      label: 'MANOR LUXE',
      description: 'The Santevi Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
      specs: { lotArea: '60', floorArea: '55.98', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    'Manor Classic': {
      label: 'MANOR CLASSIC',
      description: 'The Santevi Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
      specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Savana South
    Mansion1: {
      label: 'MANSION',
      description: 'The Savana Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family the best living space in a beautiful community.',
      specs: { lotArea: '68', floorArea: '67', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    M1: {
      label: 'MANOR LUXE',
      description: 'The Savana Manor Luxe is a townhouse end unit that is designed for modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
      specs: { lotArea: '52', floorArea: '68', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    ML2: {
      label: 'MANOR CLASSIC',
      description: 'The Savana Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start up family.',
      specs: { lotArea: '48', floorArea: '48', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Savana
    Mansion11: {
      label: 'MANSION',
      description: 'The Savana Mansion is a duplex with the signature Ovialand back-to-back arrangement design. This exceptional design strives to give the Filipino family the best living space in a beautiful community.',
      specs: { lotArea: '68', floorArea: '67', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    M11: {
      label: 'MANOR LUXE',
      description: 'The Savana Manor Luxe is a townhouse end unit that is designed for modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
      specs: { lotArea: '52', floorArea: '68', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    ML12: {
      label: 'MANOR CLASSIC',
      description: 'The Savana Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start up family.',
      specs: { lotArea: '48', floorArea: '48', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Sentro
    Elm: {
      label: 'MANOR LUXE',
      description: 'The Sentro Manor Luxe is a 2-bedroom unit specially designed to be wheelchair-friendly, offering accessibility and comfort in a modern neighborhood setting.',
      specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
    },
    Fiora: {
      label: 'MANOR CLASSIC',
      description: 'The Sentro Manor Classic is a 3-bedroom home designed to cater to the modern Filipino family, featuring accessible design and contemporary finishes throughout.',
      specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Caliya
    Coral: {
      label: 'Estate',
      description: 'The Caliya Estate is a single attached unit. This offers an incredibly spacious area, designed to give your family a place to create your most unforgettable moments.',
      specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
    },
    Dune: {
      label: 'Mansion',
      description: 'The Caliya Mansion is a duplex unit. This offers enough living space in a beautiful community.',
      specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    ClManorLuxe: {
      label: 'MANOR LUXE',
      description: 'The Caliya Manor Luxe is a townhouse end unit that is designed for a modern Filipino home. The optimal space of the Manor Luxe is perfect for premier family living.',
      specs: { lotArea: '60', floorArea: '55.98', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    ClManorClassic: {
      label: 'MANOR CLASSIC',
      description: 'The Caliya Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
      specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Sannera
    Glen: {
      label: 'Manor Luxe',
      description: 'The Sannera Manor Luxe is a 2-bedroom unit in this move-in ready community, thoughtfully designed for practical and comfortable everyday family living.',
      specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
    },
    Haven: {
      label: 'Manor Classic',
      description: 'The Sannera Manor Classic is a 3-bedroom home offering generous space and modern comforts, perfect for families who value both style and practicality.',
      specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Terazza De Sto. Tomas
    Iris: {
      label: 'Model One',
      description: 'The Terraza model is a 2-bedroom townhome designed to maximize space efficiency while providing all the comforts of modern living in Sto. Tomas, Batangas.',
      specs: { lotArea: '50', floorArea: '50', bedroom: '2', toiletBath: '2', carport: '–' },
    },
    Juniper: {
      label: 'Model Two',
      description: 'The Terraza model is a 3-bedroom townhome featuring generous living areas and contemporary finishes, ideal for families in Sto. Tomas, Batangas.',
      specs: { lotArea: '50', floorArea: '70', bedroom: '3', toiletBath: '2', carport: '–' },
    },
    // Seriya
    Kestrel: {
      label: 'Mansion',
      description: "The Seriya Mansion is a 2-bedroom unit representing Ovialand's expansion into Central Luzon, offering modern living with the charm of Baliwag's cultural heritage.",
      specs: { lotArea: '60', floorArea: '45', bedroom: '2', toiletBath: '2', carport: '1' },
    },
    Luma: {
      label: 'Manor Luxe',
      description: 'The Seriya Manor Luxe is a 3-bedroom home inspired by the historic city of Baliwag, designed to give families both comfort and a connection to local culture.',
      specs: { lotArea: '80', floorArea: '65', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    SrManorClassic: {
      label: 'MANOR CLASSIC',
      description: 'The Seriya Manor Classic is a townhouse inner unit that provides comfort and security designed for the practical and sensible Filipino start-up family.',
      specs: { lotArea: '50', floorArea: '54.7', bedroom: '3', toiletBath: '2', carport: '1' },
    },
    // Anara
    Meadow: {
      label: 'Model Unit 1',
      description: 'Coming soon...',
      specs: { lotArea: '0', floorArea: '0', bedroom: '0', toiletBath: '0', carport: '' },
    },
    Noble: {
      label: 'Model Unit 2',
      description: 'Coming soon...',
      specs: { lotArea: '0', floorArea: '0', bedroom: '0', toiletBath: '0', carport: '' },
    },
  };

  const SpecTable: React.FC<{ specs: ModelData['specs'] }> = ({ specs }) => (
    <div className="grid grid-cols-5 gap-4 bg-gray-50 border border-gray-100 rounded-lg p-4 w-full max-w-xl text-sm">
      {[
        { label: 'Lot Area', value: specs.lotArea, unit: 'sqm' },
        { label: 'Floor Area', value: specs.floorArea, unit: 'sqm' },
        { label: 'Bedroom', value: specs.bedroom, unit: '–' },
        { label: 'Toilet & Bath', value: specs.toiletBath, unit: '–' },
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
            <img src="/santevi-logo.png" alt="Santevi Logo" className="h-16 object-contain" />
          </div>
        )}
        {development.name === 'Savana South' && (
          <div className="flex justify-center mb-3">
            <img src="/SVN-1.png" alt="Savana South Logo" className="h-16 object-contain" />
          </div>
        )}
        {development.name === 'Savana' && (
          <div className="flex justify-center mb-3">
            <img src="/Savana1.jpg" alt="Savana Logo" className="h-16 object-contain" />
          </div>
        )}
        {development.name === 'Caliya' && (
          <div className="flex justify-center mb-3">
            <img src="/CLY-1.png" alt="Caliya Logo" className="h-14 object-contain" />
          </div>
        )}
        {development.name === 'Anara' && (
          <div className="flex justify-center mb-3">
            <img src="/ANR-1.png" alt="Anara Logo" className="h-24 object-contain" />
          </div>
        )}
        {development.name === 'Sannera' && (
          <div className="flex justify-center mb-3">
            <img src="/SNR-1.webp" alt="Sannera Logo" className="h-24 object-contain" />
          </div>
        )}
        {development.name === 'Seriya' && (
          <div className="flex justify-center mb-3">
            <img src="/SRY-1.png" alt="Seriya Logo" className="h-24 object-contain" />
          </div>
        )}
        {development.name === 'Sentro' && (
          <div className="flex justify-center mb-3">
            <img src="/STR-1.png" alt="Sentro Logo" className="h-24 object-contain" />
          </div>
        )}
        {development.name !== 'Santevi' && development.name !== 'Savana South' && development.name !== 'Savana' && development.name !== 'Caliya' && development.name !== 'Anara' && development.name !== 'Sannera' && development.name !== 'Seriya' && development.name !== 'Sentro' && (
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
                <div key={m} className="group rounded-xl p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-md cursor-default">
                  {i > 0 && <hr className="border-gray-100 mb-12" />}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`flex flex-col px-4 ${isOdd ? 'md:order-2 items-start text-left' : 'items-center text-center'}`}>
                      <h4 className="text-xl font-bold mb-2 uppercase transition-colors duration-300 group-hover:text-green-600">{data.label}</h4>
                      <p className="text-gray-600 mb-4 max-w-xl">{data.description}</p>
                      <SpecTable specs={data.specs} />
                    </div>
                    <div className={`w-full flex justify-center items-center overflow-hidden rounded ${isOdd ? 'md:order-1' : ''}`}>
                      <img
                        src={development.houseModelImages?.[i] || development.imageUrl}
                        alt={`${development.name} - ${data.label}`}
                        className="w-full md:w-80 object-cover rounded shadow-sm transition-transform duration-500 group-hover:scale-105"
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

        {!['Sannera', 'Terraza', 'Terazza De Sto. Tomas'].includes(development.name) && (
          <div className="text-center">
            <a href="https://olihome.ovialand.com/App/Register" className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold text-[10px]">Book a viewing</a>
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? ReactDOM.createPortal(modal, document.body) : modal;
};
export default DevelopmentCard;
