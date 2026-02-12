import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Database, Shield, Wrench, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Frameworks',
    icon: Server,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'Node.js', 'Express.js'],
  },
  {
    title: 'Java Technologies',
    icon: Server,
    color: 'from-blue-500 to-indigo-500',
    skills: ['Java', 'Servlet', 'JSP', 'Java Swing', 'Microservices'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: ['MySQL', 'SQL Server', 'Oracle DB', 'Hibernate ORM'],
  },
  {
    title: 'API Development',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    skills: ['REST APIs', 'API Integration', 'Microservices', 'Data Transport'],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    color: 'from-orange-500 to-amber-500',
    skills: ['Git', 'Postman', 'VS Code', 'Maven'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'from-rose-500 to-red-500',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative bg-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Skills & Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit honed through real-world projects and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-500 hover:shadow-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-[1px]`}>
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-50 text-slate-700 border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skill badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 mb-4 text-sm uppercase tracking-widest">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Spring ORM', 'Data Structures', 'Algorithms', 'Problem Solving', 'TypeScript'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm bg-slate-100 text-slate-600 border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}