
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ConstructionBanner from '@/components/ConstructionBanner';
import HomePage from '@/pages/HomePage.jsx';
import ProjectsPage from '@/pages/ProjectsPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import InspectionReportsPage from '@/pages/InspectionReports.jsx';
import StandardsPage from '@/pages/StandardsPage.jsx';
import WorkForUsPage from '@/pages/WorkForUsPage.jsx';
import OrchidProjectPage from '@/pages/OrchidProjectPage.jsx';
import JasmineBungalowPage from '@/pages/JasmineBungalowPage.jsx';
import LotusProjectPage from '@/pages/LotusProjectPage.jsx';
import RoseProjectPage from '@/pages/RoseProjectPage.jsx';
import LilyProjectPage from '@/pages/LilyProjectPage.jsx';
import HomeCareProjectPage from '@/pages/HomeCareProjectPage.jsx';
import { Toaster } from '@/components/ui/toaster';
import { MainLayout } from '@/layouts/MainLayout.jsx';

/**
 * Main App Component
 * Routes and layout wrapper for Satash Community Care website
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <ConstructionBanner />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/orchid" element={<OrchidProjectPage />} />
            <Route path="/projects/jasmine" element={<JasmineBungalowPage />} />
            <Route path="/projects/lotus" element={<LotusProjectPage />} />
            <Route path="/projects/rose" element={<RoseProjectPage />} />
            <Route path="/projects/lily" element={<LilyProjectPage />} />
            <Route path="/projects/homecare" element={<HomeCareProjectPage />} />
            <Route path="/reports" element={<InspectionReportsPage />} />
            <Route path="/standards" element={<StandardsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkForUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </MainLayout>
      <Toaster />
    </Router>
  );
}

export default App;

