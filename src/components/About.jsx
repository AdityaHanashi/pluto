import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, ExternalLink, Shield, Cpu, Target, CheckCircle2, Globe, Zap, Briefcase } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section 
      className="relative overflow-hidden pb-16 md:pb-24 pt-4 md:pt-8" 
      id="about"
      ref={ref}
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute top-[20%] right-[10%] w-[380px] h-[380px] rounded-full bg-[#C9A84C]/5 blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[420px] h-[420px] rounded-full bg-[#C9A84C]/6 blur-[130px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      
      <div className="w-full max-w-[98%] xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 glass-card rounded-3xl py-12 md:py-16 shadow-[0_20px_50px_rgba(10,5,0,0.4)]">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-left mb-16"
        >
          <span className="font-mono text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase block mb-3 font-bold">01 / About Pluto.ai</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-[-0.02em] text-white leading-[1.1] max-w-4xl">
            Helping Businesses Scale Through <span className="text-[#C9A84C] font-extrabold">AI Automation</span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Founder Card & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center md:items-center w-full"
          >
            {/* Premium Photo Card */}
            <div className="relative w-full max-w-[280px] shrink-0 aspect-[4/5] rounded-3xl group perspective-1000">
              <div className="w-full h-full rounded-3xl overflow-hidden glass-card p-1 shadow-[0_20px_50px_rgba(10,5,0,0.5)] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141110] via-transparent to-transparent opacity-80 z-10" />
                  <img loading="lazy" 
                    src="/avatar.webp" 
                    alt="Aditya Hanashi" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Removed Active Indicator Dot */}
                </div>
              </div>
              {/* Premium border glow effect */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-[#C9A84C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10" />
            </div>

            {/* Founder Text & Details */}
            <div className="flex flex-col items-center md:items-start w-full">
              {/* Title / details */}
              <h3 className="text-4xl font-bold font-heading tracking-[-0.02em] text-white mb-4">Aditya Hanashi</h3>
              <div className="mb-10 flex flex-col items-center md:items-start w-full">
                <span className="text-[#C9A84C] font-medium text-xs tracking-[0.2em] uppercase font-mono mb-1.5">
                  Founder, Pluto.ai
                </span>
                <span className="text-gray-500 font-bold text-[11px] tracking-wider uppercase font-mono text-center md:text-left">
                  AI Automation &bull; Voice AI &bull; Web Development &bull; Business Systems
                </span>
              </div>

              {/* Founder Statement */}
              <p className="text-base text-gray-300 italic leading-[1.7] border-l-2 border-[#C9A84C]/40 pl-5 py-1.5 mb-10 text-center md:text-left font-sans max-w-md">
                "I've helped businesses cut manual work by 70% — AI should feel effortless, not experimental."
              </p>

              {/* Credibility Stats Block */}
              <div className="w-full max-w-md flex flex-col gap-4 mb-6">
                <div className="glass-card rounded-xl p-4 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="text-[#C9A84C]" />
                    <span className="text-white font-medium text-sm md:text-base">AI Automation Specialist</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 hidden sm:block">Fast Deployment</span>
                </div>
                
                <div className="glass-card rounded-xl p-4 flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-[#C9A84C]" />
                    <span className="text-white font-medium text-sm md:text-base">Remote</span>
                  </div>
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">Global Services</span>
                </div>
              </div>

              {/* Quick Contact Panel */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-4">
                <motion.a
                  href="tel:+917022951232"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0E0E0E] rounded-xl p-4 transition-all duration-300 group hover:bg-white border border-transparent shadow-lg"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-bold tracking-wide transition-colors duration-200">
                    Call
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:buildwithpluto@gmail.com"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-3 bg-transparent border border-[#C9A84C] text-[#C9A84C] rounded-xl p-4 transition-all duration-300 group hover:bg-[#C9A84C]/10"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-bold tracking-wide transition-colors duration-200">
                    Email
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Story & Mission Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 lg:pl-4 flex flex-col space-y-14 mt-12 lg:-mt-10"
          >
            {/* Mission Section */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent flex items-center justify-center text-[#C9A84C] border border-[#C9A84C]/30 shrink-0 shadow-lg">
                  <Target size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white font-heading tracking-[-0.02em] tracking-wide">The Mission</h4>
              </div>
              <p className="text-gray-300 leading-[1.8] text-lg md:text-xl font-normal font-sans">
                We help businesses automate repetitive work, improve customer experiences, and scale operations through intelligent AI systems tailored to their needs.
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent flex items-center justify-center text-[#C9A84C] border border-[#C9A84C]/30 shrink-0 shadow-lg">
                  <Cpu size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white font-heading tracking-[-0.02em] tracking-wide">Intelligent Systems</h4>
              </div>
              <p className="text-gray-300 leading-[1.8] text-lg md:text-xl font-normal font-sans">
                From AI agents and voice automation to modern websites and custom business systems, we build solutions that save time, increase efficiency, and drive measurable business growth.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  'AI Automation',
                  'Voice AI',
                  'Web Development',
                  'Business Systems',
                  'Workflow Automation',
                  'Custom Solutions'
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 text-[13px] font-medium text-[#141110] bg-[#C9A84C] rounded-lg px-4 py-2.5 font-sans shadow-md hover:scale-105 transition-transform cursor-default">
                    <CheckCircle2 size={14} className="text-[#141110]/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
