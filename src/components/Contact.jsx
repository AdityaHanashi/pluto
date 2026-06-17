import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
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
      <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-[#C9A84C]/5 blur-[130px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] rounded-full bg-[#C9A84C]/6 blur-[130px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[140px] animate-blob pointer-events-none" style={{ animationDelay: '6s' }} />

      <div className="w-full max-w-[98%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-[#161311]/10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-left mb-16"
        >
          <span className="font-mono-jb text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase block mb-3">05 / Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-[-0.02em] leading-tight mb-4">
            Let's Build the <span className="text-[#C9A84C] font-extrabold">Future.</span>
          </h2>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div 
              className="glass rounded-3xl p-8 md:p-12 lg:p-16 border border-white/5 relative"
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 35px rgba(124, 58, 237, 0.04)',
                borderColor: 'rgba(255, 255, 255, 0.06)'
              }}
            >
              {/* Form Header */}
              <div className="mb-8 pb-8 border-b border-white/5 text-center">
                <h3 className="text-3xl font-bold font-heading tracking-[-0.02em] text-white tracking-wide">
                  Send a Message
                </h3>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                  I respond to every inquiry personally — usually within a business day.
                </p>
              </div>

              {/* EmailJS Contact Form */}
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="name">
                      Your Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Aditya"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-[#1f1a18] border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 text-lg focus:border-[#C9A84C]/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-xs font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="email">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      required
                      disabled={status === 'sending'}
                      className="w-full bg-[#1f1a18] border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 text-lg focus:border-[#C9A84C]/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Contact Number */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="phone">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    disabled={status === 'sending'}
                    className="w-full bg-[#1f1a18] border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 text-lg focus:border-[#C9A84C]/50 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold font-mono-jb uppercase tracking-widest text-gray-400" htmlFor="message">
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, the problem you're solving, and your timeline..."
                    rows={6}
                    required
                    disabled={status === 'sending'}
                    className="w-full bg-[#1f1a18] border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 text-lg focus:border-[#C9A84C]/50 focus:bg-[#1f1a18] transition-all duration-300 min-h-[200px] font-medium disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                  />
                </div>

                {/* Row 5: Submit Button and Status Messages */}
                <div className="space-y-5 pt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`w-full flex items-center justify-center gap-3 py-5 rounded-lg text-base font-bold tracking-wide text-[#0E0E0E] transition-all cursor-pointer uppercase font-heading mt-2 border border-transparent

                      ${status === 'sending' ? 'bg-[#C9A84C]/80 cursor-wait opacity-80' : ''}
                      ${status === 'success' ? 'bg-[#C9A84C] cursor-default' : ''}
                      ${status === 'error' ? 'bg-rose-600 hover:bg-rose-500 text-white' : ''}
                      ${status === 'idle' ? 'bg-[#C9A84C] hover:bg-white hover:scale-[1.02]' : ''}
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
                        <span>Send Message</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {/* Elegant Alert Alerts using Framer Motion */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Inquiry Sent!</p>
                        <p className="text-[#C9A84C]/80 mt-1">Thank you for reaching out. I'll personally review your inquiry and get back to you shortly.</p>
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
