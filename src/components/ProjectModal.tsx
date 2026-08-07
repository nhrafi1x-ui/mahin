import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Award, Code2, Layers, BarChart3, ShieldAlert } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1A1A]/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F9F7F2] border-2 border-[#1A1A1A] shadow-2xl overflow-hidden my-8">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#E6E1D6] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#F9F7F2]">
              {project.categoryLabel}
            </span>
            {project.isThesis && (
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#CC5500] text-white">
                Capstone Thesis
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Visual Image Banner */}
          <div className="relative aspect-[16/8] overflow-hidden border border-[#1A1A1A] bg-[#E6E1D6]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white drop-shadow">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-white border border-[#1A1A1A] p-3.5 text-center shadow-sm">
                  <div className="text-xl font-serif font-bold text-[#CC5500]">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#666] font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#CC5500]" /> Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#1A1A1A] p-5 space-y-2">
              <div className="text-[10px] font-bold text-[#CC5500] uppercase tracking-widest flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> The Engineering Challenge
              </div>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-white border border-[#1A1A1A] p-5 space-y-2">
              <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#CC5500]" /> Implemented Architecture
              </div>
              <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <div className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#CC5500]" /> Core Architectural Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-3 border border-[#1A1A1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC5500] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#333] font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="pt-4 border-t border-[#1A1A1A] flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" /> View Code Repository
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all cursor-pointer border border-[#1A1A1A]"
              >
                <ExternalLink className="w-4 h-4" /> Launch Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
