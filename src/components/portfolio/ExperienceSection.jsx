import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer',
    company: 'Parishram Resources',
    location: 'Gurugram, Haryana',
    period: 'December 2024 - Present',
    description: 'Leading backend development for enterprise applications, focusing on HRMS portal and background verification systems with seamless API integration.',
    achievements: [
      'Managed efficient SQL queries and data transport mechanisms',
      'Built RESTful APIs and data clients for API consumption',
      'Defined and maintained databases to deliver responsiveness to data client requests',
      'Streamlined API integration for seamless communication between frontend and backend systems',
      'Developed distributed environment solutions with seamless data exchange',
    ],
    current: true,
  },
  {
    title: 'Java Full Stack Developer Certification',
    company: 'Ducat Gurugram',
    location: 'Gurugram',
    period: '2023 - 2024',
    description: 'Comprehensive training in Java full stack development covering Spring Boot, Hibernate, microservices, and modern web technologies.',
    achievements: [
      'Mastered Java, Spring Boot, and Hibernate frameworks',
      'Built multiple full-stack projects using Spring MVC and REST APIs',
      'Learned microservices architecture and implementation',
      'Gained expertise in frontend technologies (HTML, CSS, JavaScript)',
    ],
    current: false,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-8 -translate-x-1/2 top-8">
                    <div className={`w-4 h-4 rounded-full ${exp.current ? 'bg-cyan-500 shadow-lg shadow-cyan-400/50' : 'bg-slate-300'} border-4 border-white`} />
                  </div>

                  <div className="md:pl-20">
                    <div className="group relative">
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                      <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-transparent transition-all duration-500 shadow-lg">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {exp.current && (
                                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                  Current
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                            <p className="text-cyan-400 font-medium">{exp.company}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-4">{exp.description}</p>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}