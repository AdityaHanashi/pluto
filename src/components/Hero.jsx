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
      <div className="absolute top-[15%] left-[10%] w-[380px] h-[380px] rounded-full bg-amber-500/8 blur-[120px] animate-blob" />
      <div className="absolute top-[35%] right-[15%] w-[420px] h-[420px] rounded-full bg-emerald-500/8 blur-[130px] animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-cyan-500/8 blur-[140px] animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-[50%] left-[45%] w-[380px] h-[380px] rounded-full bg-purple-600/10 blur-[120px] animate-blob" style={{ animationDelay: '6s' }} />

      <div className="max-w-[98%] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center w-full">
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

        {/* Right: Premium Interactive Glassmorphic Central Control Dashboard */}
        <div className="lg:col-span-5 flex justify-center items-center relative w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full glass bg-black/30 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-3xl relative"
          >
            {/* Control Hub Header */}
            <div className="px-5 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="font-mono-jb text-[10px] font-bold text-white tracking-widest uppercase">PLUTO NEURAL ENGINE</span>
              </div>
              
              {/* Tab Selector Buttons */}
              <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5 self-start sm:self-auto">
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
                      className={`flex items-center gap-1 px-2 py-1 rounded-md text-[8px] sm:text-[9px] font-bold font-mono-jb uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeTab === tab.id 
                          ? 'bg-purple-600 text-white shadow-md' 
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
            <div className="p-6 font-mono-jb text-[11px] leading-relaxed text-left text-gray-400 h-[250px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'relays' && (
                  <motion.div
                    key="relays"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 flex flex-col justify-between h-full w-full"
                  >
                    <div className="flex justify-between items-center text-[10px] text-purple-400 uppercase tracking-widest">
                      <span>PIPELINE RELAYS</span>
                      <span className="text-gray-500 font-bold">MODE: SYNC</span>
                    </div>

                    {/* Nodes flow chart representation */}
                    <div className="flex items-center justify-between gap-1.5 py-2 px-1 relative w-full">
                      {/* Connection Line */}
                      <div className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-25" />
                      
                      {[
                        { title: 'TRIGGER', val: 'Webhook', border: 'border-purple-500/20 text-purple-400 bg-purple-950/15' },
                        { title: 'QUERY', val: 'MySQL DB', border: 'border-blue-500/20 text-blue-400 bg-blue-950/15' },
                        { title: 'ACTION', val: 'Vapi Call', border: 'border-cyan-500/20 text-cyan-400 bg-cyan-950/15' }
                      ].map((node, i) => (
                        <div key={i} className={`relative z-10 flex flex-col items-center gap-1 p-2.5 rounded-xl border ${node.border} backdrop-blur-md shadow-lg w-[85px] sm:w-[95px]`}>
                          <span className="text-[7.5px] font-bold font-mono tracking-widest opacity-60">{node.title}</span>
                          <span className="text-[9.5px] font-bold font-syne text-white text-center leading-tight">{node.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5 flex items-center justify-between text-[10px]">
                      <span className="text-gray-500">n8n Workflow Loop Status:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        RUNNING
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'voice' && (
                  <motion.div
                    key="voice"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 flex flex-col justify-between h-full w-full"
                  >
                    <div className="flex justify-between items-center text-[10px] text-blue-400 uppercase tracking-widest">
                      <span>VOICE PIPELINE METRICS</span>
                      <span className="text-emerald-400 font-bold">ACTIVE INBOUND</span>
                    </div>

                    {/* Audio Wave Visualizer inside a premium visualizer box */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-end justify-center gap-1.5 h-16 py-2 bg-white/[0.01] border border-white/5 rounded-2xl relative overflow-hidden">
                        {waveHeights.map((h, i) => (
                          <div 
                            key={i} 
                            className="w-1.5 bg-gradient-to-t from-purple-500 via-blue-500 to-cyan-500 rounded-full transition-all duration-150"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent pointer-events-none" />
                      </div>
                      
                      <div className="flex justify-between items-center px-1 text-[9px] text-gray-500">
                        <span>LATENCY: ~480ms</span>
                        <span>CHANNELS: 12 CONNECTED</span>
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/40 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer">
                      Test Audio Channel
                    </button>
                  </motion.div>
                )}

                {activeTab === 'telemetry' && (
                  <motion.div
                    key="telemetry"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 flex flex-col justify-between h-full w-full"
                  >
                    <div className="flex justify-between items-center text-[10px] text-cyan-400 uppercase tracking-widest">
                      <span>SYSTEM OPERATIONAL STATUS</span>
                      <span className="text-emerald-400 font-bold">100% HEALTH</span>
                    </div>
                    
                    {/* SVG Radial gauges */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass bg-white/[0.02] border border-white/5 p-3 rounded-2xl flex items-center gap-3">
                        <div className="relative w-10 h-10 shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" fill="transparent" />
                            <circle cx="20" cy="20" r="16" stroke="#7c3aed" strokeWidth="2.5" fill="transparent" 
                              strokeDasharray="100" strokeDashoffset="75" className="transition-all duration-1000" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-[9px] text-white font-bold font-mono">25%</div>
                        </div>
                        <div className="text-left">
                          <span className="text-[8px] text-gray-500 block uppercase">CPU LOAD</span>
                          <span className="text-[10px] text-gray-300 font-bold">12 TFLOPS</span>
                        </div>
                      </div>

                      <div className="glass bg-white/[0.02] border border-white/5 p-3 rounded-2xl flex items-center gap-3">
                        <div className="relative w-10 h-10 shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" fill="transparent" />
                            <circle cx="20" cy="20" r="16" stroke="#06b6d4" strokeWidth="2.5" fill="transparent" 
                              strokeDasharray="100" strokeDashoffset="66" className="transition-all duration-1000" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-[9px] text-white font-bold font-mono">34%</div>
                        </div>
                        <div className="text-left">
                          <span className="text-[8px] text-gray-500 block uppercase">RAM POOL</span>
                          <span className="text-[10px] text-gray-300 font-bold">340 MB</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5 flex items-center justify-between text-[9px] text-gray-500">
                      <span>Operational Telemetry:</span>
                      <span className="text-purple-300 font-bold">MySQL_Active</span>
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
