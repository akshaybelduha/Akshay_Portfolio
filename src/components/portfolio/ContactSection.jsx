import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, Linkedin, Github, MapPin, Phone, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'akshaybelduha@gmail.com', href: 'mailto:akshaybelduha@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-8968745921', href: 'tel:+918968745921' },
  { icon: Github, label: 'GitHub', value: 'github.com/AKsh258', href: 'https://github.com/AKsh258' },
  { icon: MapPin, label: 'Location', value: 'Sector 17, Gurugram, Haryana', href: null },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative bg-slate-50">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Let's Work Together
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 transition-all duration-300 group shadow-sm"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          <p className="text-slate-900 font-medium group-hover:text-cyan-600 transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          <p className="text-slate-900 font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button
                  className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-8 shadow-lg">
                    <div className="space-y-5">
                      <div>
                        <label className="text-sm font-medium text-slate-400 mb-2 block">Your Name</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Akshay Kumar"
                          required
                          className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="text-sms font-medium text-slate-400 mb-2 block">Email Address</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@example.com"
                          required
                          className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-400 mb-2 block">Message</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project..."
                          required
                          rows={5}
                          className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-xl resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}