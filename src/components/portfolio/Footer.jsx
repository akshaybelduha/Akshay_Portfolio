import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AKsh258', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:akshaybelduha@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {new Date().getFullYear()} Akshay Kumar. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-slate-100 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-slate-200 transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}