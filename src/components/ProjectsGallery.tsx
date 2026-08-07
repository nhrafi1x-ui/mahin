import React, { useState } from 'react';
import { Layers, ExternalLink, Github, Eye, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'research', label: 'Thesis & ML Research' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'web', label: 'Utilities & Tools' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#F9F7F2] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>Visual Project Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight">
            Engineering & Research Gallery
          </h2>
          <p className="text-[#444] text-sm sm:text-base">
            Explore hands-on full-stack web applications, explainable machine learning models, and algorithm research projects built during Mahin's degree.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-bold transition-all cursor-pointer border border-[#1A1A1A] ${
                activeCategory === cat.id
                  ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E6E1D6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border-2 border-[#1A1A1A] overflow-hidden shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E6E1D6] border-b border-[#1A1A1A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#F9F7F2] border border-[#1A1A1A]">
                    {project.categoryLabel}
                  </span>

                  {project.isThesis && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[#CC5500] text-white border border-[#1A1A1A]">
                      Thesis Focus
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#CC5500] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#444] line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold bg-[#1A1A1A] text-white">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 mt-2 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-[#F9F7F2] border border-[#1A1A1A] text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <Eye className="w-4 h-4 text-[#CC5500] group-hover/btn:text-white" />
                  <span>View Full Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
