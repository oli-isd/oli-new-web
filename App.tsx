import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import SearchButton from './components/SearchButton';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CompanyPage = React.lazy(() => import('./pages/company/CompanyPage'));
const CSRPage = React.lazy(() => import('./pages/company/CSRPage'));
const BusinessPage = React.lazy(() => import('./pages/business/BusinessPage'));
const HouseasyPage = React.lazy(() => import('./pages/business/HouseasyPage'));
const CommunitiesPage = React.lazy(() => import('./pages/business/CommunitiesPage'));
const HouseBuyingPage = React.lazy(() => import('./pages/business/HouseBuyingPage'));
const HomeBP = React.lazy(() => import('./pages/business/HomeBP'));
const InvestorsPage = React.lazy(() => import('./pages/investors/InvestorsPage'));
const NewsPage = React.lazy(() => import('./pages/NewsPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SocialsPage = React.lazy(() => import('./pages/SocialsPage'));
const AmbassadorsPage = React.lazy(() => import('./pages/AmbassadorsPage'));



const App: React.FC = () => (
  <>
    <PageLoader />
    <ScrollToTop />
    <SearchButton />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/csr" element={<CSRPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/business/houseasy" element={<HouseasyPage />} />
        <Route path="/business/housebuying" element={<HouseBuyingPage />} />
        <Route path="/business/homebuyersportal" element={<HomeBP />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/socials" element={<SocialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-ambassadors" element={<AmbassadorsPage />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
