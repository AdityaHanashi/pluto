import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Zap, Globe, Sparkles, Cpu, Terminal, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      id="home"
    >
      {/* Moving Cyber Grid Background */}
      <div 
        className="absolute inset-0 grid-pattern opacity-[0.12] pointer-events-none" 
        style={{
          animation: 'gridScroll 22s linear infinite'
        }}
      />

      {/* Cinematic Lighting Flares */}
      <div className="absolute top-[20%] left-[15%] w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] animate-blob" />
      <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-600/10 blur-[100px] animate-blob" style={{ animationDelay: '6s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Futuristic Mini-Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-6"
          >
            <Sparkles size={13} className="text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-300 font-orbitron tracking-widest uppercase">
              Now Launching Pluto Core V2
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white leading-tight mb-6"
          >
            Building <span className="gradient-text font-extrabold">AI Systems</span> <br className="hidden sm:inline" />
            &amp; Modern Digital <br className="hidden lg:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Experiences</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            We build AI automations, autonomous AI agents, intelligent voice calling systems, custom chatbots, SaaS platforms, and premium high-converting interfaces to scale your business.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer"
            >
              <Zap size={16} /> Start a Project
            </ScrollLink>
            
            <ScrollLink
              to="ai-automation"
              smooth={true}
              duration={600}
              offset={-80}
              className="btn-outline inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-gray-200 hover:text-white cursor-pointer"
            >
              <Globe size={16} className="text-blue-400" /> Explore Automation
            </ScrollLink>
          </motion.div>
        </div>

        {/* Right: Premium Interactive Visual Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full h-[360px] md:h-[450px]">
          {/* Glowing central orb visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Spinning external ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-spin-slow scale-110" />
            {/* Orbiting blue ring */}
            <div 
              className="absolute inset-0 rounded-full border border-blue-500/20 scale-[1.25] animate-spin-slow"
              style={{ animationDuration: '28s', animationDirection: 'reverse' }}
            />
            
            {/* Center Glowing sphere */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)] flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-black/40 border border-purple-500/20 flex flex-col items-center justify-center gap-1">
                <Cpu size={32} className="text-purple-400 animate-pulse mb-1" />
                <span className="text-xs font-bold font-orbitron tracking-widest text-purple-300">CORE.AI</span>
                <span className="text-[10px] font-mono text-green-400/80 uppercase tracking-widest animate-pulse">● System Online</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Glassmorphic Status Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-10 right-4 sm:right-10 md:right-16 glass rounded-2xl p-4 border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md animate-float"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
              <Terminal size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Active Bots</p>
              <p className="text-sm font-bold text-white font-orbitron">1,420+ Execs/m</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-10 left-4 sm:left-10 md:left-16 glass rounded-2xl p-4 border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md animate-float"
            style={{ animationDelay: '3s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Zap size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Inference</p>
              <p className="text-sm font-bold text-white font-orbitron">0.12s Latency</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Downward indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Scroll Down</span>
        <ArrowDown size={14} className="text-purple-400" />
      </motion.div>

      <style>{`
        @keyframes gridScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
      `}</style>
    </section>
  )
}

export default Hero
