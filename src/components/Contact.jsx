import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (status === 'sending') return

    setStatus('sending')
    setErrorMsg('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing environment variables.')
      setStatus('error')
      setErrorMsg('Configuration keys are missing. Please verify your environment variables.')
      return
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
    .then((result) => {
      console.log('EmailJS Success:', result.text)
      setStatus('success')
      if (formRef.current) {
        formRef.current.reset()
      }
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    })
    .catch((error) => {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMsg(error.text || 'Failed to send message. Please try again.')
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    })
  }

  return (
    <section className="section-padding relative overflow-hidden" id="contact" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[130px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] rounded-full bg-cyan-500/6 blur-[130px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-[140px] animate-blob pointer-events-none" style={{ animationDelay: '6s' }} />

      <div className="max-w-[98%] mx-auto px-6 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-black/10">
        
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
        <div className="grid lg:grid-cols-12 gap-12 items-start w-full mx-auto">
          
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
                { icon: Phone, label: 'Phone', value: '+91 7022951232', href: 'tel:+917022951232' },
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

              {/* EmailJS Contact Form */}
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
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
                      disabled={status === 'sending'}
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                      disabled={status === 'sending'}
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={status === 'sending'}
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                      disabled={status === 'sending'}
                      className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white text-base focus:border-blue-500/50 transition-all duration-300 font-medium appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={status === 'sending'}
                    className="w-full bg-[#111119] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 text-base focus:border-blue-500/50 transition-all duration-300 min-h-[220px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Row 5: Submit Button and Status Messages */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold tracking-wider text-black transition-all cursor-pointer uppercase font-mono-jb mt-2 border border-transparent
                      ${status === 'sending' ? 'bg-blue-400/80 text-white cursor-wait opacity-80' : ''}
                      ${status === 'success' ? 'bg-emerald-500 text-white cursor-default' : ''}
                      ${status === 'error' ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-[0_8px_30px_rgba(225,29,72,0.25)]' : ''}
                      ${status === 'idle' ? 'bg-blue-500 hover:bg-white hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]' : ''}
                    `}
                  >
                    {status === 'sending' && (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>Sending Inquiry...</span>
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <CheckCircle2 size={16} />
                        <span>Message Sent Successfully!</span>
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <AlertCircle size={16} />
                        <span>Try Again</span>
                      </>
                    )}
                    {status === 'idle' && (
                      <>
                        <span>Send Message &rarr;</span>
                      </>
                    )}
                  </button>

                  {/* Elegant Alert Alerts using Framer Motion */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Inquiry Sent!</p>
                        <p className="text-emerald-400/80 mt-1">Thank you for reaching out. I'll personally review your inquiry and get back to you shortly.</p>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-3"
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Submission Failed</p>
                        <p className="text-rose-400/80 mt-1">{errorMsg}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
