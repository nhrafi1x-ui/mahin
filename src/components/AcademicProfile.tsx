import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award, Brain, BarChart3, Sliders, CheckCircle2, ChevronRight, Sparkles, Layers, ShieldAlert, Zap } from 'lucide-react';
import { EDUCATION_DATA, THESIS_DATA, THESIS_SHAP_FEATURES } from '../data/portfolioData';

export const AcademicProfile: React.FC = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);
  const activeFeature = THESIS_SHAP_FEATURES[selectedFeatureIndex];

  return (
    <section id="academic" className="py-20 bg-[#F9F7F2] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>Academic Distinction & Capstone Research</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight">
            Academic Track Record & Thesis
          </h2>
          <p className="text-[#444] text-sm sm:text-base">
            Consistently demonstrated academic excellence from secondary school to undergraduate Software Engineering, culminating in high-impact Explainable AI thesis research.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {EDUCATION_DATA.map((item) => (
            <div
              key={item.id}
              className={`relative bg-white border border-[#1A1A1A] p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm ${
                item.id === 'bsc-se'
                  ? 'bg-white border-2 border-[#1A1A1A]'
                  : ''
              }`}
            >
              {item.id === 'bsc-se' && (
                <div className="absolute -top-3 right-4 px-3 py-0.5 text-[9px] font-bold bg-[#CC5500] text-white uppercase tracking-widest border border-[#1A1A1A]">
                  Current Status
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A]">
                    <GraduationCap className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A] bg-[#E6E1D6] px-2.5 py-1 border border-[#1A1A1A]">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] leading-snug mb-1">
                  {item.degree}
                </h3>
                <p className="text-xs font-bold text-[#CC5500] uppercase tracking-wider mb-2">
                  {item.institution}
                </p>

                <div className="inline-block px-2.5 py-1 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] font-mono text-xs font-bold mb-4">
                  Result: {item.result}
                </div>

                <p className="text-[#444] text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/30">
                <div className="text-[10px] font-bold text-[#1A1A1A] mb-2 uppercase tracking-widest">
                  Highlights
                </div>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#333] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CC5500] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Thesis Research Spotlight Card */}
        <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="px-3.5 py-1 text-xs font-bold bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A] flex items-center gap-1.5 uppercase tracking-wider">
              <Brain className="w-4 h-4 text-[#CC5500]" />
              <span>Undergraduate Capstone Thesis</span>
            </span>
            <span className="px-3 py-1 text-xs font-mono font-bold bg-[#1A1A1A] text-[#F9F7F2]">
              Model Accuracy: {THESIS_DATA.accuracy}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif italic text-[#1A1A1A] leading-tight mb-4">
            "{THESIS_DATA.title}"
          </h3>

          <p className="text-[#333] text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            {THESIS_DATA.tagline}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-4">
              <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#CC5500]" /> Research Objective
              </div>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {THESIS_DATA.objective}
              </p>
            </div>

            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-4">
              <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#1A1A1A]" /> Dataset & Cohort
              </div>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {THESIS_DATA.dataset}
              </p>
            </div>

            <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-4">
              <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#CC5500]" /> XAI & Intervention
              </div>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {THESIS_DATA.xaiFramework}
              </p>
            </div>
          </div>

          {/* Interactive Explainable AI (SHAP) Model Demo Widget */}
          <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#CC5500]" />
                  <h4 className="text-lg font-serif font-bold text-[#1A1A1A]">
                    Interactive SHAP Feature Importance & Intervention Explorer
                  </h4>
                </div>
                <p className="text-xs text-[#555] mt-1">
                  Click on behavioral factors extracted by the XAI model to view explainability impact and mapped intervention protocols.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A] bg-[#E6E1D6] px-2.5 py-1 border border-[#1A1A1A] shrink-0">
                SHAP Explainer Engine
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Feature selector buttons */}
              <div className="lg:col-span-5 space-y-2">
                <div className="text-[10px] font-bold text-[#1A1A1A] mb-2 uppercase tracking-widest">
                  Top Predictor Features
                </div>
                {THESIS_SHAP_FEATURES.map((feat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFeatureIndex(idx)}
                    className={`w-full text-left p-3 border transition-all flex items-center justify-between cursor-pointer ${
                      selectedFeatureIndex === idx
                        ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A]'
                        : 'bg-white border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#E6E1D6]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-xs font-bold flex items-center gap-2">
                        <span>{feat.feature}</span>
                        <span className={`px-1.5 py-0.2 text-[9px] font-mono uppercase font-bold ${
                          selectedFeatureIndex === idx
                            ? 'bg-[#CC5500] text-white'
                            : feat.impact === 'high'
                            ? 'bg-[#CC5500] text-white'
                            : 'bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A]'
                        }`}>
                          {feat.impact} Risk
                        </span>
                      </div>
                      {/* SHAP Bar progress */}
                      <div className={`w-36 h-1.5 border border-[#1A1A1A] overflow-hidden ${
                        selectedFeatureIndex === idx ? 'bg-[#333]' : 'bg-[#E6E1D6]'
                      }`}>
                        <div
                          className="h-full bg-[#CC5500]"
                          style={{ width: `${feat.importance * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs font-mono font-bold ${
                        selectedFeatureIndex === idx ? 'text-[#CC5500]' : 'text-[#CC5500]'
                      }`}>
                        +{(feat.importance).toFixed(2)}
                      </div>
                      <span className={`text-[9px] uppercase tracking-wider ${
                        selectedFeatureIndex === idx ? 'text-[#CCC]' : 'text-[#666]'
                      }`}>SHAP Value</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active feature deep-dive card */}
              <div className="lg:col-span-7 bg-white border border-[#1A1A1A] p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#CC5500] uppercase tracking-widest">
                      {activeFeature.category}
                    </span>
                    <h5 className="text-xl font-serif font-bold text-[#1A1A1A] mt-0.5">
                      {activeFeature.feature}
                    </h5>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#666] block">Attribution Weight</span>
                    <span className="text-xl font-serif font-bold text-[#CC5500]">
                      {(activeFeature.importance * 100).toFixed(0)}% Impact
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-wider block mb-1">
                      XAI Behavioral Discovery:
                    </span>
                    <p className="text-[#333] bg-[#F9F7F2] p-3 border border-[#1A1A1A]">
                      {activeFeature.description}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                      <Zap className="w-4 h-4 text-[#CC5500]" />
                      Mapped Intervention Strategy:
                    </span>
                    <div className="bg-[#E6E1D6] border border-[#1A1A1A] p-3 text-[#1A1A1A] font-medium">
                      {activeFeature.intervention}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
