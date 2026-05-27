import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section-padding relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[94%] xl:max-w-[1360px] mx-auto px-6 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-black/10">
        
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

        {/* Simplified Layout matching referral theme */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct contact info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
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

          {/* Right Column: Complete Form Section matching referral image (Enlarged) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div 
              className="glass rounded-3xl p-6 md:p-10 border border-white/5 relative"
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 35px rgba(124, 58, 237, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.06)'
              }}
            >
              {/* Form Header */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <h3 className="text-2xl font-bold font-syne text-white tracking-wide">
                  Send a Message
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  I respond to every inquiry personally — usually within a business day.
                </p>
              </div>

              {/* Netlify Form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium"
                    />
                  </div>
                </div>

                {/* Row 2: Contact Number */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="phone">
                    Contact Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium"
                  />
                </div>

                {/* Row 3: Inquiry Type */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="inquiryType">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      defaultValue=""
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white text-base focus:border-blue-500/50 transition-all duration-300 font-medium appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic...</option>
                      <option value="ai-automation">AI Automations</option>
                      <option value="website-design">Website Design / Builder</option>
                      <option value="saas-platform">Custom SaaS Platform</option>
                      <option value="cybersecurity">Cybersecurity Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    {/* Select arrow */}
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 4: Project Details */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="message">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, the problem you're solving, and your timeline..."
                    rows={8}
                    required
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 min-h-[220px] font-medium"
                  />
                </div>

                {/* Row 5: Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold tracking-wider text-black bg-blue-500 hover:bg-white hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition-all cursor-pointer uppercase font-mono-jb mt-2"
                >
                  <span>Send Message &rarr;</span>
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
