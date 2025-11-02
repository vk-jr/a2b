import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqPage = lazy(() => import('./pages/FaqPage')); // Added FAQ page route
const PricingPage = lazy(() => import('./pages/PricingPage')); // Added Pricing page

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/solutions" element={<ServicesPage />} />
                <Route path="/solutions/:serviceId" element={<ServicesPage />} /> {/* Example detail view */}
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/pricing" element={<PricingPage />} /> {/* Added Pricing page route */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} /> {/* Added FAQ page route */}
                {/* A placeholder for resources page */}
                <Route path="/resources" element={<div className="text-center p-20">Resources Page - Coming Soon</div>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;