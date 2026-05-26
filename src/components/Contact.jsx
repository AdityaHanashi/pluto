import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, User, Mail, MessageSquare, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section-padding relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-left mb-16"
        >
          <span className="font-mono-jb text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-3">05 / Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight">
            Let's build <span className="gradient-text font-extrabold">something great</span>
          </h2>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Futuristic status console */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between glass rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            {/* Visual glow element */}
            <div className="absolute -left-12 -bottom-12 w-28 h-28 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <Terminal size={18} className="text-purple-400" />
                <h3 className="text-sm font-bold font-mono-jb text-white tracking-widest uppercase">
                  SYSTEM_STATUS
                </h3>
              </div>

              {/* Status checklist */}
              <div className="space-y-4 font-mono-jb text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span>Netlify Form Bridge: <span className="text-green-400 font-bold">READY</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span>PGP Encryption Tunnel: <span className="text-green-400 font-bold">ACTIVE</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span>Submissions Host: <span className="text-cyan-400 font-bold">NETLIFY</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={14} className="text-green-400" />
                  <span>No Database Storage: <span className="text-gray-300 font-bold">COMPLIANT</span></span>
                </div>
              </div>
            </div>

            {/* Quick response stats */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div className="glass rounded-2xl p-4 border border-white/5">
                <p className="text-[10px] font-mono-jb text-gray-500 uppercase tracking-widest">
                  Average Response
                </p>
                <p className="text-lg font-bold font-mono-jb text-white mt-1">
                  &lt; 12 Hours Latency
                </p>
              </div>
              <div className="text-[10px] font-mono-jb text-gray-500 leading-relaxed">
                By submitting, you route this lead through Netlify Forms directly to the founder inbox.
              </div>
            </div>
          </motion.div>

          {/* Right: Netlify Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div 
              className="glass rounded-3xl p-6 md:p-8 border border-white/5 relative"
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.1)',
                borderColor: 'rgba(139, 92, 246, 0.15)'
              }}
            >
              {/* Form definition using exact Netlify Forms configuration */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="space-y-6"
              >
                {/* Netlify hidden field required for processing submissions */}
                <input type="hidden" name="form-name" value="contact" />

                 {/* Name field */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-purple-400" htmlFor="name">
                    Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center text-gray-500 group-focus-within:text-purple-400 transition-colors">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-gray-600 text-sm focus:border-purple-500/50 transition-all duration-300 font-medium"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-purple-400" htmlFor="email">
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center text-gray-500 group-focus-within:text-purple-400 transition-colors">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-gray-600 text-sm focus:border-purple-500/50 transition-all duration-300 font-medium"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-purple-400" htmlFor="message">
                    Message
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-gray-600 text-sm focus:border-purple-500/50 transition-all duration-300 resize-none font-medium"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-lg text-xs font-semibold tracking-wider text-black bg-purple-500 hover:bg-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] transition-all cursor-pointer uppercase font-mono-jb"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
