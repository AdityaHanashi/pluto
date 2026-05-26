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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-purple-300 font-mono-jb tracking-widest uppercase">
              ✦ Available for projects
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-syne text-white leading-[0.95] tracking-tight mb-6"
          >
            Pluto<span className="gradient-text font-extrabold">.ai</span>
          </motion.h1>

          {/* Subheadline */}
          <p className="text-purple-300 font-syne text-lg md:text-xl font-normal mb-6 tracking-tight">
            Building the intelligent layer of modern enterprise
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal"
          >
            We build custom AI automations, autonomous agents, voice calling pipelines, and high-performance MySQL business dashboards designed to scale operational KPIs.
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
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold tracking-wider text-black bg-purple-500 hover:bg-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] transition-all cursor-pointer uppercase font-mono-jb"
            >
              Start a Project
            </ScrollLink>
            
            <ScrollLink
              to="ai-automation"
              smooth={true}
              duration={600}
              offset={-80}
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-semibold tracking-wider text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer uppercase font-mono-jb"
            >
              Our Automation
            </ScrollLink>
          </motion.div>
        </div>

        {/* Right: Premium Profile JSON Terminal Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full bg-[#070712]/70 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-white/3 px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="font-mono-jb text-[10px] text-gray-500 ml-auto">pluto.profile.json</span>
            </div>
            <div className="p-6 font-mono-jb text-xs leading-loose text-left text-gray-400">
              <span className="text-gray-600">{`{`}</span><br />
              &nbsp;&nbsp;<span className="text-purple-400">"name"</span>: <span className="text-emerald-400">"Pluto.ai"</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-400">"specialization"</span>: <span className="text-gray-600">[</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"GenAI & RAG Systems"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Agentic AI"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Workflow Automation"</span><br />
              &nbsp;&nbsp;<span className="text-gray-600">]</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-400">"github"</span>: <span className="text-emerald-400">"pluto-system"</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-400">"available"</span>: <span className="text-blue-400">true</span>,<br />
              &nbsp;&nbsp;<span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"active_operations"</span><br />
              <span className="text-gray-600">{`}`}</span>
              <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse" />
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
