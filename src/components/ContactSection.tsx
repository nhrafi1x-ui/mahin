import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, GraduationCap, Github, Linkedin, Briefcase, Sparkles, Clock, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: 'Software Engineer Role',
    roleType: 'Full-time',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Recruiter Inquiry - ${formData.roleType}] ${formData.subject} - ${formData.company || 'Company'}`
  )}&body=${encodeURIComponent(
    `Hi Mahin,\n\nMy name is ${formData.name} from ${formData.company || 'our team'}.\n\nMessage:\n${formData.message}\n\nContact Email: ${formData.email}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#E6E1D6] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-[#CC5500]" />
            <span>Recruiter & Technical Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight">
            Get In Touch With Mahin
          </h2>
          <p className="text-[#444] text-sm sm:text-base">
            Graduating in 4 months and actively open for full-time Software Engineer, Machine Learning, and Web Development opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center gap-3 border-b border-[#1A1A1A] pb-4">
                <div className="p-3 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A]">
                  <Briefcase className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Recruiter Quick Connect</h3>
                  <p className="text-xs text-[#CC5500] font-bold uppercase tracking-wider flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> Graduating in 4 Months
                  </p>
                </div>
              </div>

              {/* Direct Email Box */}
              <div className="bg-[#F9F7F2] border border-[#1A1A1A] p-4 space-y-2">
                <div className="text-xs text-[#555] flex items-center justify-between">
                  <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[10px]">Direct Email Address:</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-bold text-[#CC5500] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#CC5500]" /> : <Copy className="w-3.5 h-3.5 text-[#1A1A1A]" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-[#CC5500] hover:underline block break-all font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Contact info list */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#1A1A1A]">
                  <div className="p-2 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#CC5500]" />
                  </div>
                  <div>
                    <span className="text-[#666] uppercase tracking-wider text-[9px] font-bold block">Academic Alma Mater:</span>
                    <span className="font-bold text-[#1A1A1A]">
                      {PERSONAL_INFO.schoolCollege}
                    </span>
                    <div className="text-[11px] text-[#CC5500] font-mono font-bold mt-0.5">
                      HSC Golden GPA 5.00 • SSC GPA 4.89
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#1A1A1A]">
                  <div className="p-2 bg-[#E6E1D6] border border-[#1A1A1A] text-[#1A1A1A] shrink-0">
                    <MapPin className="w-4 h-4 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <span className="text-[#666] uppercase tracking-wider text-[9px] font-bold block">Location & Availability:</span>
                    <span className="font-bold text-[#1A1A1A]">
                      Dhaka, Bangladesh (Open for On-site & Remote)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#1A1A1A] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-white border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-white hover:bg-[#E6E1D6] text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#CC5500]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Integrated Interactive Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-[#E6E1D6] border-2 border-[#1A1A1A] text-[#CC5500] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif italic font-bold text-[#1A1A1A]">Message Prepared!</h3>
                <p className="text-[#444] text-xs sm:text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. You can click the button below to send this directly to <strong>{PERSONAL_INFO.email}</strong> via your email client.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#CC5500] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all border border-[#1A1A1A]"
                  >
                    <Send className="w-4 h-4" /> Open Email Client Now
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-[#E6E1D6]"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3">
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Send Direct Recruiter Message</h3>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-[#CC5500] px-2.5 py-0.5 border border-[#1A1A1A]">
                    4-Month Notice
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F9F7F2] border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F9F7F2] border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Software Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#F9F7F2] border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Opportunity Type
                    </label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full bg-[#F9F7F2] border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:bg-white cursor-pointer font-medium"
                    >
                      <option value="Full-time">Full-time Software Engineer</option>
                      <option value="Associate AI/ML">Associate AI/ML Engineer</option>
                      <option value="Research">Research & Graduate Collaboration</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#F9F7F2] border border-[#1A1A1A] px-4 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:bg-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Mahin, we reviewed your Software Engineering portfolio and thesis research. We would love to discuss an interview opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F9F7F2] border border-[#1A1A1A] p-4 text-xs text-[#1A1A1A] placeholder-[#888] focus:outline-none focus:bg-white font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#CC5500] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#1A1A1A]"
                >
                  <Send className="w-4 h-4" /> Send Email Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
