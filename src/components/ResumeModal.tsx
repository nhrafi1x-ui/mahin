import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, GraduationCap, Mail, Phone, MapPin, Award, BookOpen, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, THESIS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `
===================================================================
MAHIN ALAM — SOFTWARE ENGINEER & AI/ML RESEARCHER
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Status: Final Year Student (Graduating Late 2026 - Last 4 Months)
===================================================================

SUMMARY:
Final year Software Engineering student with 4 months remaining until graduation.
Specializing in Full-Stack Web Development, Algorithms, and Explainable AI (XAI)
for human behavioral phenotyping.

ACADEMIC QUALIFICATIONS:
1. B.Sc. in Computer Science & Software Engineering (2022 - 2026)
   - Final Semester (Graduating in 4 Months)
   - Focus: Software Architecture, Machine Learning, Web Engineering
   
2. Higher Secondary Certificate (HSC) - Science (2019 - 2021)
   - Shaheed Bir Uttam Lt. Anwar Girls College
   - GPA: 5.00 / 5.00 (Golden GPA)

3. Secondary School Certificate (SSC) - Science (2017 - 2019)
   - Shaheed Bir Uttam Lt. Anwar Girls College
   - GPA: 4.89 / 5.00

UNDERGRADUATE THESIS RESEARCH:
Title: "${THESIS_DATA.title}"
- Applied XGBoost, Random Forest, SHAP & LIME for behavioral phenotyping.
- Achieved ${THESIS_DATA.accuracy} on cohort of 1,200+ students.

TECHNICAL SKILLS:
- Languages: Python, C++, TypeScript, JavaScript, SQL, HTML5/CSS3
- AI & Data Science: Scikit-learn, XGBoost, SHAP, LIME, Pandas, PyTorch
- Web Engineering: React.js, Node.js, Express.js, Tailwind CSS, REST APIs
- Tools: Git, GitHub, Docker, PostgreSQL, Firebase

KEY PROJECTS:
1. Behavioral Phenotyping & XAI Platform (Thesis Project)
2. MediSync - Healthcare Scheduling & Telemedicine Web App
3. EduPulse - Intelligent Essay & Feedback Analyzer
4. DevFlow - Developer Task & Code Snippet Hub
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1A1A1A]/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F9F7F2] border-2 border-[#1A1A1A] shadow-2xl overflow-hidden my-6">
        {/* Modal Top Control Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#E6E1D6] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#CC5500]" />
            <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#1A1A1A]">
              Mahin Alam — Official Curriculum Vitae
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              title="Copy ATS text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#CC5500]" /> : <Copy className="w-3.5 h-3.5 text-[#1A1A1A]" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy ATS Text'}</span>
            </button>

            <a
              href="/Mahin_Alam_CV.pdf"
              download="Mahin_Alam_CV.pdf"
              className="px-3.5 py-1.5 bg-[#CC5500] hover:bg-[#A34400] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer border border-[#1A1A1A] shadow-sm"
              title="Download PDF File directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-white hover:bg-[#E6E1D6] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer border border-[#1A1A1A]"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#CC5500]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-resume" className="p-6 sm:p-10 space-y-8 bg-[#F9F7F2] text-[#1A1A1A] max-h-[82vh] overflow-y-auto">
          {/* Resume Title Header */}
          <div className="border-b-2 border-[#1A1A1A] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                  MAHIN ALAM
                </h1>
                <p className="text-sm font-bold text-[#CC5500] uppercase tracking-widest mt-1">
                  Software Engineer & AI/ML Researcher
                </p>
                <p className="text-xs text-[#1A1A1A] font-semibold mt-0.5 uppercase tracking-wider">
                  🎓 Final Year B.Sc. Candidate (Graduating in 4 Months)
                </p>
              </div>

              <div className="text-xs text-[#333] space-y-1 sm:text-right font-mono">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#CC5500]" /> {PERSONAL_INFO.email}
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" /> {PERSONAL_INFO.location}
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#CC5500]" /> Daffodil International University
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#CC5500]" /> Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#333] leading-relaxed bg-white p-4 border border-[#1A1A1A]">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Academic Background */}
          <div>
            <h2 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#CC5500]" /> Academic Qualifications
            </h2>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="bg-white p-4 border border-[#1A1A1A] space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold text-[#1A1A1A] text-sm">{edu.degree}</span>
                    <span className="font-mono text-[#CC5500] font-bold">{edu.year}</span>
                  </div>
                  <div className="text-xs text-[#555] font-medium">{edu.institution}</div>
                  <div className="text-xs font-bold text-[#CC5500] uppercase tracking-wider pt-0.5">
                    Result: {edu.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Undergraduate Thesis */}
          <div>
            <h2 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#CC5500]" /> Undergraduate Thesis Research
            </h2>
            <div className="bg-[#E6E1D6] border border-[#1A1A1A] p-4 space-y-2">
              <div className="text-base font-serif italic font-bold text-[#1A1A1A]">
                "{THESIS_DATA.title}"
              </div>
              <p className="text-xs text-[#1A1A1A]">
                <strong>Accuracy:</strong> {THESIS_DATA.accuracy} • <strong>Frameworks:</strong> {THESIS_DATA.xaiFramework}
              </p>
              <p className="text-xs text-[#333] leading-relaxed">
                {THESIS_DATA.objective}
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#CC5500]" /> Key Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="bg-white p-3 border border-[#1A1A1A]">
                  <div className="font-bold text-[#1A1A1A] mb-1">{cat.title}:</div>
                  <div className="text-[#444]">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
