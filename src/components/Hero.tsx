import React, { useState } from 'react';
import { Download, Mail, Sparkles, Award, GraduationCap, Clock, FileText, ExternalLink, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePic from '../assets/images/regenerated_image_1786112837941.png';
import { MAHIN_PROFILE_IMAGE } from '../assets/profileImage';

interface HeroProps {
  onOpenCvModal: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onExploreProjects, onContactClick }) => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Recruiter Urgency Banner - Editorial Alert Strip */}
        <div className="mb-10 max-w-4xl mx-auto bg-[#E6E1D6] border border-[#1A1A1A] p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 bg-[#1A1A1A] text-[#F9F7F2] border border-[#1A1A1A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#CC5500]" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-[#1A1A1A] text-sm uppercase tracking-wider">Graduation Notice: 4 Months Remaining</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#CC5500] text-white border border-[#1A1A1A]">
                    Recruiting Open
                  </span>
                </div>
                <p className="text-xs text-[#444] mt-0.5">
                  Completing B.Sc. in Software Engineering • Available immediately for Software Engineer & AI/ML Associate roles.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenCvModal}
                className="px-3.5 py-1.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-[#F9F7F2] text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all cursor-pointer border border-[#1A1A1A]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Get Resume</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#CC5500]" />
              <span>Final Year Software Engineering Undergraduate</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif italic text-[#1A1A1A] tracking-tight leading-[0.95]">
                Mahin Alam
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#1A1A1A] italic">
                Software Engineer & Explainable AI Researcher
              </p>
            </div>

            <p className="text-[#333] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Driven final-year software engineering student with <strong>only 4 months remaining</strong> before graduation. Specializing in full-stack web engineering, scalable architectures, and Explainable Machine Learning (XAI) for human behavioral phenotyping.
            </p>

            {/* Academic Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white border border-[#1A1A1A] p-4 text-left shadow-sm">
                <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold flex items-center gap-1 mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#CC5500]" /> HSC Result
                </div>
                <div className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-1.5">
                  GPA 5.00 <span className="text-[9px] uppercase tracking-widest bg-[#CC5500] text-white px-1.5 py-0.5 font-sans font-bold">Golden</span>
                </div>
                <div className="text-[11px] text-[#555] truncate mt-1">Shaheed Bir Uttam Lt. Anwar Girls College</div>
              </div>

              <div className="bg-white border border-[#1A1A1A] p-4 text-left shadow-sm">
                <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold flex items-center gap-1 mb-1">
                  <Award className="w-3.5 h-3.5 text-[#1A1A1A]" /> SSC Result
                </div>
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">GPA 4.89</div>
                <div className="text-[11px] text-[#555] truncate mt-1">Shaheed Bir Uttam Lt. Anwar Girls College</div>
              </div>

              <div className="bg-white border border-[#1A1A1A] p-4 text-left shadow-sm">
                <div className="text-[10px] uppercase tracking-widest text-[#666] font-bold flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#CC5500]" /> Undergraduate
                </div>
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">Final Year</div>
                <div className="text-[11px] text-[#CC5500] font-bold uppercase tracking-wider mt-1">Daffodil International University</div>
              </div>
            </div>

            {/* Action Buttons - Perfectly Aligned & Spacious Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-6">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-[#F9F7F2] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A] group shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/Mahin_Alam_CV.pdf"
                download="Mahin_Alam_CV.pdf"
                className="px-6 py-3.5 bg-white hover:bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#CC5500]" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 bg-[#CC5500] hover:bg-[#A34400] text-white border border-[#1A1A1A] text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Mahin</span>
              </button>
            </div>
          </div>

          {/* Profile Card & Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Profile Card Box - Editorial Frame */}
              <div className="bg-white border-2 border-[#1A1A1A] p-5 shadow-lg space-y-4">
                {/* Image Frame */}
                <div className="relative aspect-[4/4] border border-[#1A1A1A] bg-[#E6E1D6] overflow-hidden group shadow-sm">
                  {/* High Quality Portrait photo of Mahin Alam */}
                  <img
                    src={profilePic || MAHIN_PROFILE_IMAGE}
                    alt="Mahin Alam - Daffodil International University"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = MAHIN_PROFILE_IMAGE || "/mahin-hijab.jpg";
                    }}
                  />
                </div>

                {/* Editorial Photo Caption Badge - Placed UNDER the image */}
                <div className="bg-[#1A1A1A] text-[#F9F7F2] p-3 text-left border border-[#1A1A1A] shadow-sm">
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[#CC5500] text-white inline-block mb-1">
                    Software Engineering Candidate
                  </span>
                  <h3 className="text-base font-serif italic text-white leading-tight">{PERSONAL_INFO.name}</h3>
                  <p className="text-[11px] text-[#DDD] flex items-center gap-1 mt-1 uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5 text-[#CC5500]" /> Daffodil International University
                  </p>
                </div>

                {/* Profile Stats Summary */}
                <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs border-b border-[#1A1A1A]/30 pb-1.5">
                    <span className="text-[#555] uppercase text-[10px] font-bold tracking-wider">Graduation Target:</span>
                    <span className="font-bold text-[#CC5500] flex items-center gap-1 uppercase text-[11px] tracking-wider">
                      <Clock className="w-3 h-3" /> Late 2026 (4 Months)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs border-b border-[#1A1A1A]/30 pb-1.5">
                    <span className="text-[#555] uppercase text-[10px] font-bold tracking-wider">Academic Record:</span>
                    <span className="font-bold text-[#1A1A1A] flex items-center gap-1 text-xs">
                      <CheckCircle2 className="w-3 h-3 text-[#CC5500]" /> Golden HSC (5.00)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#555] uppercase text-[10px] font-bold tracking-wider">Direct Email:</span>
                    <span className="font-semibold text-[#1A1A1A] select-all font-mono text-[11px]">
                      alammahin301@gmail.com
                    </span>
                  </div>
                </div>

                {/* Quick CTA inside card */}
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-[#F9F7F2] border border-[#1A1A1A] text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Preview & Download Full CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
