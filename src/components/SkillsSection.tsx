import React, { useState } from 'react';
import { Code2, Brain, Layout, Wrench, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#E6E1D6] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
              <Code2 className="w-3.5 h-3.5 text-[#CC5500]" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight">
              Engineering Skills & Stack
            </h2>
            <p className="text-[#444] text-sm max-w-xl">
              Proficient across full-stack software development, machine learning algorithms, and explainable AI frameworks.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1A1A1A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, React)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#1A1A1A] pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] placeholder-[#666] focus:outline-none focus:bg-[#F9F7F2] transition-colors font-medium"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter(s =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.tag.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="bg-white border-2 border-[#1A1A1A] p-6 shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1A1A]">
                  <div className="p-2.5 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A]">
                    {renderIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">{cat.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#666]">
                      {filteredSkills.length} Technologies
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredSkills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#CC5500] shrink-0" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-[#E6E1D6] text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]">
                            {skill.tag}
                          </span>
                          <span className="font-mono font-bold text-[#CC5500] text-xs">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Editorial Progress Bar */}
                      <div className="w-full h-2 bg-[#F9F7F2] overflow-hidden border border-[#1A1A1A]">
                        <div
                          className="h-full bg-[#CC5500] transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
