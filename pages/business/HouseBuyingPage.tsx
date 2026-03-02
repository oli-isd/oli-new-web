import React, { useEffect } from 'react';
import HouseasyPage from './HouseasyPage';

const HouseBuyingPage: React.FC = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      const el = document.getElementById('journey');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.hash = '#journey';
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return <HouseasyPage />;
};

export default HouseBuyingPage;
