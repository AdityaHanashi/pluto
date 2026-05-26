import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section-padding relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
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

        {/* Simplified Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Direct info & statement */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-syne text-white leading-snug">
                Let's turn your ideas into automated systems.
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Whether you need custom calling agent pipelines, responsive frontends, or automated database connections, we build solutions that deliver measurable efficiency.
              </p>
            </div>

            {/* Quick Details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'buildwithpluto@gmail.com', href: 'mailto:buildwithpluto@gmail.com' },
                { icon: Phone, label: 'Phone', value: '7022951232', href: 'tel:7022951232' },
                { icon: MapPin, label: 'Location', value: 'Remote / Global', href: null }
              ].map((item, idx) => {
                const Icon = item.icon
                const CardWrapper = item.href ? 'a' : 'div'
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <CardWrapper
                      href={item.href || undefined}
                      className={`flex items-center gap-4 glass rounded-2xl px-5 py-4 border border-white/5 transition-all duration-300 block ${item.href ? 'hover:bg-purple-500/5 hover:border-purple-500/20 group' : ''}`}
                    >
                      <div className={`w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 ${item.href ? 'group-hover:scale-110 transition-transform' : ''}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold font-mono-jb text-gray-500 uppercase tracking-widest">{item.label}</p>
                        <p className="text-gray-300 text-sm font-semibold mt-0.5 tracking-wide group-hover:text-white transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </CardWrapper>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column: Clean Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div 
              className="glass rounded-3xl p-6 md:p-8 border border-white/5 relative"
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(124, 58, 237, 0.05)',
                borderColor: 'rgba(124, 58, 237, 0.1)'
              }}
            >
              {/* Form definition using Netlify Forms configuration */}
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
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-lg text-xs font-semibold tracking-wider text-black bg-purple-500 hover:bg-white hover:shadow-[0_8px_30px_rgba(124, 58, 237, 0.3)] transition-all cursor-pointer uppercase font-mono-jb"
                >
                  <Send size={12} />
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
