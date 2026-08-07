import React, { useState, useEffect } from 'react';
import { GraduationCap, FileText, Mail, Menu, X, Clock, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'academic', label: 'Academic & Thesis' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects & Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#1A1A1A] py-3 shadow-sm'
          : 'bg-[#F9F7F2]/80 backdrop-blur-sm py-4 border-b border-[#1A1A1A]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo & status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-9 h-9 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F9F7F2] font-serif italic flex items-center justify-center font-bold text-lg group-hover:bg-[#CC5500] group-hover:border-[#CC5500] transition-colors">
              MA
            </div>
            <div>
              <div className="font-serif italic text-[#1A1A1A] text-2xl leading-none group-hover:text-[#CC5500] transition-colors flex items-center gap-2">
                {PERSONAL_INFO.name}
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A]">
                  <Clock className="w-3 h-3 mr-1 text-[#CC5500]" /> 4 Months Left
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#666] font-semibold mt-0.5 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 inline text-[#1A1A1A]" /> Software Engineering '26
              </p>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#E6E1D6] p-1 border border-[#1A1A1A]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all ${
                activeSection === link.id
                  ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                  : 'text-[#1A1A1A] hover:bg-[#F9F7F2]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold bg-white text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#E6E1D6] transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>Download CV</span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-bold bg-[#CC5500] hover:bg-[#A34400] text-white border border-[#1A1A1A] transition-all cursor-pointer shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Hire Mahin</span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCvModal}
            className="p-2 bg-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold flex items-center gap-1"
            title="Download CV"
          >
            <FileText className="w-4 h-4 text-[#CC5500]" />
            <span className="text-[10px] uppercase font-bold">CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#1A1A1A] text-[#F9F7F2] border border-[#1A1A1A] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#CC5500]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F7F2] border-b-2 border-[#1A1A1A] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="mb-3 px-3 py-2 bg-[#E6E1D6] border border-[#1A1A1A] flex items-center justify-between text-xs text-[#1A1A1A]">
            <span className="font-bold flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
              <Clock className="w-4 h-4 text-[#CC5500]" /> Final Semester: 4 Months Left
            </span>
            <span className="bg-[#CC5500] text-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold">Open to Hire</span>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-4 py-2.5 text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                    : 'text-[#1A1A1A] hover:bg-[#E6E1D6]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-[#1A1A1A] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 bg-white text-[#1A1A1A] border border-[#1A1A1A] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#CC5500]" /> Download Official CV
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 bg-[#CC5500] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-[#1A1A1A]"
              >
                <Mail className="w-4 h-4" /> Contact & Recruit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
