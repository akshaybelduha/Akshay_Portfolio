import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Server, Calculator, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'HRMS Portal',
    description: 'A comprehensive Human Resource Management System for managing complete employee lifecycle, payroll processing, attendance tracking, and leave management with role-based access control and automated workflows.',
    features: [
      'Employee Lifecycle Management',
      'Payroll Processing',
      'Attendance & Leave Tracking',
      'Role-based Access Control',
    ],
    techStack: ['Spring Boot', 'Java', 'MySQL', 'REST APIs', 'Hibernate'],
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/AKsh258',
  },
  {
    title: 'Background Verification System',
    description: 'Full-stack web and mobile application for background verification vendors. Features area-wise task management, automatic vendor assignment based on geographic location, and seamless task allocation system for verification processes.',
    features: [
      'Area-wise Task Management',
      'Automatic Vendor Assignment',
      'Geographic Task Allocation',
      'Web & Mobile Platform',
    ],
    techStack: ['Java', 'Spring Boot', 'Node.js', 'SQL Server', 'REST APIs'],
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/AKsh258',
  },
  {
    title: 'RESTful API Development',
    description: 'Built multiple RESTful APIs that facilitate seamless data exchange between clients and servers in distributed environments. Implemented efficient SQL queries, data transport mechanisms, and API integration for frontend-backend communication.',
    features: [
      'RESTful Architecture',
      'Efficient SQL Queries',
      'Data Client Development',
      'API Integration',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'SQL Server'],
    icon: Calendar,
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/AKsh258',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative bg-slate-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Real-world applications built with modern technologies and best practices
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="group relative">
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-8 hover:border-transparent transition-all duration-500 shadow-lg">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px] mb-6`}>
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                            <project.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{project.description}</p>
                      </div>

                      <div className="lg:w-2/3">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-slate-700">
                                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 rounded-lg text-sm bg-slate-50 text-slate-700 border border-slate-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 transition-all duration-300 shadow-sm"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}