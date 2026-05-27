import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Zap, Terminal, ArrowDown, Activity, PhoneCall, Layers, Network } from 'lucide-react'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('relays')
  const [waveHeights, setWaveHeights] = useState([15, 30, 45, 20, 60, 35, 10, 40, 25, 55, 30, 15])

  // Simple wave animation simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setWaveHeights(prev => prev.map(() => Math.floor(Math.random() * 55) + 12))
    }, 180)
    return () => clearInterval(timer)
  }, [])

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
              Our Services
            </ScrollLink>
          </motion.div>
        </div>

        {/* Right: Premium Interactive Glassmorphic Console Dashboard */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full bg-[#070712]/50 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Console Header Bar */}
            <div className="bg-white/[0.03] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              {/* Colored Dots */}
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              
              {/* Tab Selector Buttons */}
              <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
                {[
                  { id: 'relays', label: 'Relays', icon: Network },
                  { id: 'voice', label: 'Voice Bot', icon: PhoneCall },
                  { id: 'telemetry', label: 'Telemetry', icon: Activity }
                ].map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9px] font-bold font-mono-jb uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeTab === tab.id 
                          ? 'bg-purple-600/80 text-white shadow-md' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <Icon size={10} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Contents */}
            <div className="p-5 font-mono-jb text-[11px] leading-relaxed text-left text-gray-400 h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'relays' && (
                  <motion.div
                    key="relays"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    <div className="flex items-center justify-between text-[10px] text-purple-400 border-b border-white/5 pb-2">
                      <span>ACTIVE PIPELINES</span>
                      <span className="animate-pulse flex items-center gap-1 text-green-400 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        RUNNING
                      </span>
                    </div>
                    <div className="space-y-1.5 text-gray-300 text-xs">
                      <div><span className="text-purple-400">&gt;_ </span><span className="text-gray-500">RELAY_SYNC: </span><span className="text-emerald-400">POST /relays/crm-lead-sync ... OK</span></div>
                      <div><span className="text-purple-400">&gt;_ </span><span className="text-gray-500">DB_RELATION: </span><span className="text-emerald-400">MYSQL_QUERY SELECT roster ... SUCCESS</span></div>
                      <div><span className="text-purple-400">&gt;_ </span><span className="text-gray-500">EVENT_LOOP:  </span><span className="text-emerald-400">N8N_TRIGGER webhook-trigger ... DONE</span></div>
                    </div>
                    <div className="text-[10px] text-gray-500 border-t border-white/5 pt-2 flex items-center gap-1.5 mt-2">
                      <Layers size={11} className="text-purple-500" />
                      Orchestrator relay loops synced with VAPI callers.
                    </div>
                  </motion.div>
                )}

                {activeTab === 'voice' && (
                  <motion.div
                    key="voice"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-[10px] text-blue-400 border-b border-white/5 pb-2">
                      <span>VOICE PIPELINE LATENCY</span>
                      <span className="flex items-center gap-1 text-blue-400 font-bold animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        CONNECTED
                      </span>
                    </div>

                    {/* Audio Wave Visualizer */}
                    <div className="flex items-end justify-center gap-1 h-12 py-1 bg-white/[0.02] border border-white/5 rounded-xl">
                      {waveHeights.map((h, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full transition-all duration-150"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[10px] text-gray-400 mt-2">
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="text-gray-500 block uppercase">Stream State</span>
                        <span className="text-xs text-white font-bold font-mono">ACTIVE_INBOUND</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="text-gray-500 block uppercase">Vapi Latency</span>
                        <span className="text-xs text-emerald-400 font-bold font-mono">~ 480ms response</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'telemetry' && (
                  <motion.div
                    key="telemetry"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-[10px] text-cyan-400 border-b border-white/5 pb-2">
                      <span>SYSTEM TELEMETRY STATUS</span>
                      <span className="text-emerald-400 font-bold">100% HEALTH</span>
                    </div>
                    
                    {/* Telemetry Progress Bars */}
                    <div className="space-y-2.5">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                          <span>AGENT COMPUTATIONAL LOAD</span>
                          <span className="text-white">12% CPU</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '12%' }} />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                          <span>MEMORY BUFFER LOAD</span>
                          <span className="text-white">340MB / 1024MB</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '33.2%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] text-gray-500 mt-2 font-mono flex items-center gap-1">
                      <Terminal size={11} className="text-cyan-500" />
                      All nodes reporting nominal states.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
