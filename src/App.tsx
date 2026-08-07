import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AcademicProfile } from './components/AcademicProfile';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleExploreProjects = () => {
    setActiveSection('projects');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setActiveSection('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans antialiased selection:bg-[#CC5500] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onExploreProjects={handleExploreProjects}
          onContactClick={handleContactClick}
        />

        {/* Academic & Thesis Section */}
        <AcademicProfile />

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Projects & Visual Gallery Section */}
        <ProjectsGallery />

        {/* Integrated Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* CV Download / Preview Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
