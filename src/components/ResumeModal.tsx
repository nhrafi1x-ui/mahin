import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, GraduationCap, Mail, Phone, MapPin, Globe, Award, BookOpen, Code2, ShieldCheck, UserCheck, Languages } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, THESIS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { MAHIN_PROFILE_IMAGE } from '../assets/profileImage';
import { downloadEuropassPDF } from '../utils/generateEuropassPDF';

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
EUROPASS CURRICULUM VITAE — MAHIN ALAM
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Position: Software Engineer & AI/ML Researcher (Final Year Student)
===================================================================

PERSONAL INFORMATION:
Name: MAHIN ALAM
Job Applied For: Software Engineer & AI/ML Researcher
Email: ${PERSONAL_INFO.email}
Location: Dhaka, Bangladesh
Nationality: Bangladeshi
Institution: Daffodil International University (Graduating in 4 Months)

WORK EXPERIENCE & RESEARCH:
[ 2025 – Present ]
Position: Undergraduate Thesis Researcher & AI Developer
Organisation: Daffodil International University — Department of Software Engineering
- Conducted research on "Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use Using Explainable Machine Learning (XAI)".
- Achieved 94.2% ROC-AUC classification accuracy using XGBoost, Random Forest, SHAP, and LIME on 1,200+ student records.
- Built interactive web dashboards mapping behavioral attributions directly to digital health interventions.

EDUCATION AND TRAINING:
[ 2022 – Present ] (EQF Level 6)
Qualification: Bachelor of Science (B.Sc.) in Software Engineering
Organisation: Daffodil International University, Dhaka, Bangladesh
Status: Enrolled in Final Semester (Graduating Late 2026)

[ 2019 – 2021 ]
Qualification: Higher Secondary Certificate (HSC) — Science
Organisation: Shaheed Bir Uttam Lt. Anwar Girls College, Dhaka
Result: GPA 5.00 / 5.00 (Golden GPA)

[ 2017 – 2019 ]
Qualification: Secondary School Certificate (SSC) — Science
Organisation: Shaheed Bir Uttam Lt. Anwar Girls College, Dhaka
Result: GPA 4.89 / 5.00

DIGITAL SKILLS:
- Languages: Python, TypeScript, JavaScript, C++, SQL, HTML5/CSS3
- AI & Data Science: Scikit-learn, XGBoost, SHAP, LIME, PyTorch, Pandas, NumPy, OpenCV, Gemini API
- Web Engineering: React.js, Node.js, Express.js, Tailwind CSS, REST APIs
- Tools: Git, GitHub, Docker, PostgreSQL, Firebase, Linux, Postman

LANGUAGE SKILLS:
- Mother Tongue: Bengali
- Foreign Language: English (CEFR Level C1/C2 - Proficient)
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-[#1A1A1A]/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border-2 border-[#0E4765] shadow-2xl overflow-hidden my-4 sm:my-6 rounded-sm">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-[#F0F4F8] sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#0E4765] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs">
              EUROPASS FORMAT
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#0E4765] truncate">
              Mahin Alam — Europass CV
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 bg-white hover:bg-[#0E4765] hover:text-white text-[#0E4765] border border-[#0E4765] text-xs font-bold transition-colors cursor-pointer rounded-xs flex items-center gap-1"
              title="Copy ATS text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy ATS Text'}</span>
            </button>

            <button
              onClick={downloadEuropassPDF}
              className="px-3 py-1.5 bg-[#0E4765] hover:bg-[#003366] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#002244] shadow-xs rounded-xs"
              title="Download Europass PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white hover:bg-gray-100 text-[#0E4765] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-300 rounded-xs"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5 text-[#0E4765]" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-white hover:bg-red-600 hover:text-white text-gray-700 border border-gray-300 transition-colors cursor-pointer rounded-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Europass Main View Container */}
        <div id="printable-resume" className="bg-white text-gray-800 max-h-[82vh] overflow-y-auto">
          
          {/* 1. EUROPASS HEADER BANNER */}
          <div className="bg-[#0E4765] text-white px-6 sm:px-10 py-5 flex items-center justify-between border-b-4 border-[#0066A1]">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans">
                europass
              </span>
              <span className="w-2.5 h-2.5 bg-[#FFCC00] rounded-full inline-block mb-3"></span>
            </div>
            <div className="text-right">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-100 opacity-90">
                Curriculum Vitae
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">

            {/* 2. PERSONAL INFORMATION */}
            <div className="bg-[#F0F4F8] border-l-4 border-[#0E4765] p-5 sm:p-6 shadow-xs rounded-r-xs">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Candidate Photo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xs border-2 border-[#0E4765] overflow-hidden bg-gray-200 shrink-0 shadow-sm">
                  <img
                    src={MAHIN_PROFILE_IMAGE}
                    alt="Mahin Alam"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/mahin-hijab.jpg";
                    }}
                  />
                </div>

                {/* Candidate Info */}
                <div className="space-y-2 flex-1">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0E4765] tracking-tight">
                      MAHIN ALAM
                    </h1>
                    <div className="text-xs sm:text-sm font-bold text-[#0066A1] uppercase tracking-wider mt-0.5">
                      Job Applied For: Software Engineer & AI/ML Researcher
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 pt-2 border-t border-gray-300 font-sans">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0E4765] shrink-0" />
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="truncate">{PERSONAL_INFO.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0E4765] shrink-0" />
                      <span className="font-semibold text-gray-900">Location:</span>
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#0E4765] shrink-0" />
                      <span className="font-semibold text-gray-900">GitHub:</span>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#0066A1] hover:underline truncate">github.com/mahin221</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0E4765] shrink-0" />
                      <span className="font-semibold text-gray-900">LinkedIn:</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#0066A1] hover:underline truncate">linkedin.com/in/mahin-alam</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. WORK EXPERIENCE & RESEARCH */}
            <div>
              <div className="bg-[#0E4765] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2 rounded-xs">
                <BookOpen className="w-4 h-4 text-[#FFCC00]" />
                <span>Work Experience & Research Activities</span>
              </div>

              <div className="pl-2 border-l-2 border-[#0066A1]/40 space-y-4">
                <div className="relative pl-4">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#0066A1] border-2 border-white"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <h3 className="text-sm font-bold text-[#0E4765]">
                      Undergraduate Thesis Researcher & AI Developer
                    </h3>
                    <span className="px-2 py-0.5 bg-[#F0F4F8] text-[#0E4765] font-bold rounded-xs text-[11px] border border-gray-300">
                      2025 – Present
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-gray-600 mb-2">
                    Daffodil International University — Department of Software Engineering (Dhaka, Bangladesh)
                  </div>

                  <ul className="text-xs text-gray-700 space-y-1.5 list-disc list-inside bg-gray-50 p-3.5 rounded-xs border border-gray-200">
                    <li>
                      <strong>Thesis Topic:</strong> "{THESIS_DATA.title}"
                    </li>
                    <li>
                      Achieved <strong>94.2% ROC-AUC predictive accuracy</strong> evaluating behavioral metrics across 1,200+ students.
                    </li>
                    <li>
                      Leveraged <strong>SHAP and LIME Explainable AI frameworks</strong> to convert black-box machine learning predictions into interpretable psychological risk factors.
                    </li>
                    <li>
                      Developed an interactive web intervention platform matching risk clusters to targeted screen-time constraints and digital wellbeing prompts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. EDUCATION AND TRAINING */}
            <div>
              <div className="bg-[#0E4765] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2 rounded-xs">
                <GraduationCap className="w-4 h-4 text-[#FFCC00]" />
                <span>Education and Training</span>
              </div>

              <div className="pl-2 border-l-2 border-[#0066A1]/40 space-y-5">
                {/* B.Sc */}
                <div className="relative pl-4">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#0066A1] border-2 border-white"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-[#0E4765] inline-block mr-2">
                        Bachelor of Science (B.Sc.) in Software Engineering
                      </h3>
                      <span className="text-[10px] font-bold text-[#0066A1] bg-blue-50 px-1.5 py-0.5 border border-blue-200 rounded-xs">
                        EQF Level 6
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#F0F4F8] text-[#0E4765] font-bold rounded-xs text-[11px] border border-gray-300 mt-1 sm:mt-0">
                      2022 – Present (Final Semester)
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-gray-600 mb-1">
                    Daffodil International University (Dhaka, Bangladesh)
                  </div>

                  <p className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xs border border-gray-200">
                    <strong>Principal Subjects & Skills:</strong> Software Architecture, Machine Learning, Web Engineering, Database Systems, Data Structures & Algorithms, System Design. <br />
                    <span className="text-[#0E4765] font-bold mt-1 inline-block">• Status: Enrolled - Final Semester (Graduating Late 2026 - Last 4 Months)</span>
                  </p>
                </div>

                {/* HSC */}
                <div className="relative pl-4">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-400 border-2 border-white"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <h3 className="text-sm font-bold text-[#0E4765]">
                      Higher Secondary Certificate (HSC) — Science
                    </h3>
                    <span className="px-2 py-0.5 bg-[#F0F4F8] text-gray-700 font-bold rounded-xs text-[11px] border border-gray-300">
                      2019 – 2021
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-gray-600 mb-1">
                    Shaheed Bir Uttam Lt. Anwar Girls College (Dhaka)
                  </div>

                  <div className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1.5 border border-emerald-200 rounded-xs inline-block">
                    Result: GPA 5.00 / 5.00 (Golden GPA Distinction)
                  </div>
                </div>

                {/* SSC */}
                <div className="relative pl-4">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-400 border-2 border-white"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                    <h3 className="text-sm font-bold text-[#0E4765]">
                      Secondary School Certificate (SSC) — Science
                    </h3>
                    <span className="px-2 py-0.5 bg-[#F0F4F8] text-gray-700 font-bold rounded-xs text-[11px] border border-gray-300">
                      2017 – 2019
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-gray-600 mb-1">
                    Shaheed Bir Uttam Lt. Anwar Girls College (Dhaka)
                  </div>

                  <div className="text-xs text-gray-700 font-bold bg-gray-50 px-3 py-1.5 border border-gray-200 rounded-xs inline-block">
                    Result: GPA 4.89 / 5.00
                  </div>
                </div>
              </div>
            </div>

            {/* 5. PERSONAL SKILLS & DIGITAL COMPETENCIES */}
            <div>
              <div className="bg-[#0E4765] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2 rounded-xs">
                <Code2 className="w-4 h-4 text-[#FFCC00]" />
                <span>Personal Skills & Digital Competencies</span>
              </div>

              {/* Digital Skills Table */}
              <div className="space-y-3 text-xs mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="bg-[#F0F4F8] p-3.5 border border-gray-300 rounded-xs">
                      <div className="font-bold text-[#0E4765] mb-1.5 flex items-center gap-1.5 text-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0066A1]" />
                        <span>{cat.title}</span>
                      </div>
                      <div className="text-gray-700 leading-relaxed font-sans">
                        {cat.skills.map(s => s.name).join(' • ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              <div className="bg-gray-50 p-4 border border-gray-200 rounded-xs space-y-3">
                <div className="text-xs font-bold text-[#0E4765] flex items-center gap-1.5 uppercase tracking-wider">
                  <Languages className="w-4 h-4 text-[#0066A1]" />
                  <span>Language Skills</span>
                </div>

                <div className="text-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">Mother Tongue(s):</span>
                    <span className="px-2 py-0.5 bg-[#0E4765] text-white font-semibold rounded-xs text-[11px]">Bengali</span>
                  </div>

                  <div>
                    <div className="font-bold text-gray-800 mb-1.5">Other Language(s) — English (CEFR Framework):</div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center text-[11px]">
                      <div className="bg-white p-1.5 border border-gray-300 rounded-xs">
                        <div className="text-gray-500 text-[10px]">Listening</div>
                        <div className="font-bold text-[#0E4765]">C1 (Proficient)</div>
                      </div>
                      <div className="bg-white p-1.5 border border-gray-300 rounded-xs">
                        <div className="text-gray-500 text-[10px]">Reading</div>
                        <div className="font-bold text-[#0E4765]">C2 (Mastery)</div>
                      </div>
                      <div className="bg-white p-1.5 border border-gray-300 rounded-xs">
                        <div className="text-gray-500 text-[10px]">Spoken Interaction</div>
                        <div className="font-bold text-[#0E4765]">C1 (Proficient)</div>
                      </div>
                      <div className="bg-white p-1.5 border border-gray-300 rounded-xs">
                        <div className="text-gray-500 text-[10px]">Spoken Production</div>
                        <div className="font-bold text-[#0E4765]">C1 (Proficient)</div>
                      </div>
                      <div className="bg-white p-1.5 border border-gray-300 rounded-xs col-span-2 sm:col-span-1">
                        <div className="text-gray-500 text-[10px]">Writing</div>
                        <div className="font-bold text-[#0E4765]">C1 (Proficient)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. KEY PROJECTS SUMMARY */}
            <div>
              <div className="bg-[#0E4765] text-white px-3 py-1.5 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2 rounded-xs">
                <Award className="w-4 h-4 text-[#FFCC00]" />
                <span>Selected Engineering Projects</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-gray-300 rounded-xs space-y-1">
                  <div className="font-bold text-[#0E4765]">MediSync Portal</div>
                  <div className="text-gray-600 text-[11px]">React, Node.js, Express, PostgreSQL</div>
                  <div className="text-gray-700 text-[11px]">Full-stack telemedicine booking and digitized doctor prescriptions.</div>
                </div>

                <div className="p-3 bg-white border border-gray-300 rounded-xs space-y-1">
                  <div className="font-bold text-[#0E4765]">EduPulse Essay AI</div>
                  <div className="text-gray-600 text-[11px]">Python, Gemini API, Flask, React</div>
                  <div className="text-gray-700 text-[11px]">Automated rubric grading & essay feedback engine.</div>
                </div>

                <div className="p-3 bg-white border border-gray-300 rounded-xs space-y-1">
                  <div className="font-bold text-[#0E4765]">DevFlow Hub</div>
                  <div className="text-gray-600 text-[11px]">React, TypeScript, Tailwind, Motion</div>
                  <div className="text-gray-700 text-[11px]">Developer sprint kanban board & snippet manager.</div>
                </div>
              </div>
            </div>

            {/* Europass Footer */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-[11px] text-gray-500">
              <div>Page 1 / 1 — Official Europass Curriculum Vitae Format</div>
              <div>Mahin Alam • Daffodil International University</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
