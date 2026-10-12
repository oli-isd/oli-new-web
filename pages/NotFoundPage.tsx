import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const NotFoundPage: React.FC = () => (
  <PageLayout>
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-20">
      <div className="text-center">
        <p className="text-7xl md:text-8xl font-bold text-green-600">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#16a34a] to-[#059669] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#bb9c60] px-6 py-2.5 font-semibold text-[#bb9c60] transition-all duration-300 hover:bg-[#bb9c60] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default NotFoundPage;
