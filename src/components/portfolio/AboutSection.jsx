import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Shield, Server } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Server, label: 'Java & Spring Boot' },
    { icon: Database, label: 'MySQL & SQL Server' },
    { icon: Shield, label: 'Microservices & APIs' },
    { icon: Code2, label: 'Full Stack Development' },
  ];

  return (
    <section id="about" className="py-32 relative bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Crafting Backend Excellence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-8 shadow-lg">
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    Backend development professional with strong foundation in <span className="text-cyan-400 font-medium">server-side logic</span>, <span className="text-cyan-400 font-medium">database management</span>, and <span className="text-cyan-400 font-medium">API integration</span>. Known for effective team collaboration, adaptability, and delivering reliable code.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Skilled in programming languages such as <span className="text-cyan-400">Java</span>, <span className="text-cyan-400">Spring Boot</span>, <span className="text-cyan-400">Node.js</span>, and <span className="text-cyan-400">SQL</span>. My experience includes developing HRMS portals, background verification systems, and building RESTful APIs that facilitate seamless data exchange in distributed environments.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Valued for problem-solving abilities, clear communication, and commitment to high quality outcomes. Currently pursuing Master of Computer Application (MCA) from A.K.T. University while working as a Backend Developer at Parishram Resources.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg h-full shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-slate-900 font-medium">{label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}