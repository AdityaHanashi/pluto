import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, ExternalLink, Shield, Cpu, Target, User } from 'lucide-react'
import GithubIcon from './GithubIcon'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section 
      className="section-padding relative overflow-hidden" 
      id="about"
      ref={ref}
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-purple mb-4 inline-flex">The Visionary</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Meet Our <span className="gradient-text">Founder</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Connecting cutting-edge AI systems with modern frontend aesthetics to launch the future.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Pulsing Avatar Halo */}
            <div className="relative mb-8">
              <div className="rotating-border w-48 h-48 flex items-center justify-center p-[3px] rounded-full">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />
                  {/* Cyber avatar visual */}
                  <div className="relative w-40 h-40 rounded-full bg-black/60 border border-purple-500/20 flex items-center justify-center">
                    <User size={64} className="text-purple-400/80 animate-pulse" />
                    {/* Simulated laser scan */}
                    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 top-0 animate-bounce" style={{ animationDuration: '4s' }} />
                  </div>
                </div>
              </div>
              
              {/* Active Indicator dot */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-3.5 py-1.5 rounded-full border border-purple-500/30">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-green-300 font-bold uppercase tracking-wider font-mono">
                  Online
                </span>
              </div>
            </div>

            {/* Title / details */}
            <h3 className="text-3xl font-bold font-orbitron text-white mb-2">Aditya Hanashi</h3>
            <p className="text-purple-400 font-semibold text-lg tracking-widest uppercase mb-6 font-orbitron">
              Founder &bull; Pluto.ai
            </p>

            {/* Quick Contact Panel */}
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {[
                { 
                  icon: Mail, 
                  label: 'buildwithpluto@gmail.com', 
                  href: 'mailto:buildwithpluto@gmail.com', 
                  color: 'text-purple-400',
                  hoverBg: 'hover:bg-purple-500/10 hover:border-purple-500/30'
                },
                { 
                  icon: Phone, 
                  label: '7022951232', 
                  href: 'tel:7022951232', 
                  color: 'text-blue-400',
                  hoverBg: 'hover:bg-blue-500/10 hover:border-blue-500/30'
                },
                { 
                  icon: GithubIcon, 
                  label: 'github.com/pluto-system', 
                  href: 'https://github.com/pluto-system', 
                  color: 'text-cyan-400',
                  hoverBg: 'hover:bg-cyan-500/10 hover:border-cyan-500/30',
                  isGithub: true
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className={`flex items-center gap-4 glass rounded-2xl px-5 py-4 border border-white/5 transition-all duration-300 group ${item.hoverBg}`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.isGithub ? (
                      <GithubIcon className="w-5 h-5" />
                    ) : (
                      <item.icon size={18} />
                    )}
                  </div>
                  <span className="text-gray-300 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-200">
                    {item.label}
                  </span>
                  <ExternalLink size={12} className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Story & Mission Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Mission Section */}
            <div className="space-y-4">
              <div className="flex gap-4 items-center mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0">
                  <Target size={18} />
                </div>
                <h4 className="text-lg font-bold text-white font-orbitron">The Mission</h4>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Pluto.ai designs high-fidelity neural agents and operational voice pipelines. We replace manual administrative tasks with automated intelligence, turning computational pipelines into direct business value.
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-center mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                  <Cpu size={18} />
                </div>
                <h4 className="text-lg font-bold text-white font-orbitron">Intelligent Systems</h4>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                From self-contained calling streams to integrated MySQL databases, we orchestrate workflows that sync with your operational KPIs.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  'Voice Automations',
                  'Cognitive Chatbots',
                  'n8n Pipelines',
                  'MySQL Roster Hubs',
                  'Autonomous Agents'
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-950/20 border border-purple-500/15 rounded-full px-3.5 py-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Commitment Section */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-center mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Shield size={18} />
                </div>
                <h4 className="text-lg font-bold text-white font-orbitron">Technical Integrity</h4>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Clean architectures built using modern react interfaces and secure relational databases. Tested to deploy securely on modern platforms like Netlify.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
