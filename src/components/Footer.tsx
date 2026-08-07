import React from 'react';
import { GraduationCap, Heart, Clock, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] border-t-2 border-[#1A1A1A] text-[#E6E1D6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#CC5500] border border-white flex items-center justify-center text-white font-bold text-sm font-serif italic">
              MA
            </div>
            <div>
              <div className="font-serif font-bold text-[#F9F7F2] text-base">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-[#AAA] flex items-center gap-1 font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-[#CC5500]" /> B.Sc. Software Engineering Candidate
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs bg-[#222] px-3 py-1 border border-[#444] text-[#F9F7F2] font-mono">
            <Clock className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>4 Months Remaining to Degree Completion</span>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-bold">
            <button
              onClick={onOpenCvModal}
              className="text-[#F9F7F2] hover:text-[#CC5500] transition-colors cursor-pointer"
            >
              Curriculum Vitae
            </button>
            <span className="text-[#555]">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#F9F7F2] hover:text-[#CC5500] transition-colors"
            >
              Email Direct
            </a>
            <span className="text-[#555]">•</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#222] hover:bg-[#CC5500] text-white transition-colors cursor-pointer border border-[#444]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888] gap-4 font-mono">
          <p>
            © {new Date().getFullYear()} Mahin Alam. Editorial Portfolio.
          </p>
          <p className="flex items-center gap-1">
            Daffodil International University • Built for Recruiters & Research Collaborators
          </p>
        </div>
      </div>
    </footer>
  );
};
