import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneCall, FileSearch, Code, Cpu, ShieldAlert, Rocket } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Discovery Call',
    subtitle: 'Step 01',
    desc: 'We map your metrics, identify operational bottlenecks, and scope your custom AI automation and web development systems.',
    color: 'from-purple-500 to-indigo-500',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: FileSearch,
    title: 'Planning & Architecture',
    subtitle: 'Step 02',
    desc: 'We map data flow routing paths, choose model checkpoints, outline RAG databases, and structure Figma design mockups.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Code,
    title: 'Design & Frontend',
    subtitle: 'Step 03',
    desc: 'We draft bespoke layouts, styling systems, and React component codeblocks to ensure premium, high-speed UX.',
    color: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Cpu,
    title: 'AI & Backend Integration',
    subtitle: 'Step 04',
    desc: 'We bind autonomous agents, connect webhook APIs, configure vector databases, and establish RAG indexes.',
    color: 'from-indigo-500 to-purple-500',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  {
    icon: ShieldAlert,
    title: 'Stress Testing & QA',
    subtitle: 'Step 05',
    desc: 'We run high-concurrency request loads, audit safety filters on LLM prompts, and verify that frontend bundles build perfectly.',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
  {
    icon: Rocket,
    title: 'Launch & Live Support',
    subtitle: 'Step 06',
    desc: 'We deploy the client codebase directly to production, activate Netlify forms, and provide continuous uptime support.',
    color: 'from-emerald-500 to-green-500',
    glow: 'rgba(34, 197, 94, 0.3)',
  },
]

const Workflow = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative overflow-hidden" id="workflow" ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="tag tag-blue mb-4 inline-flex font-mono">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Our Development <span className="gradient-text font-extrabold">Workflow</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            We follow a rigorous, high-speed engineering pipeline to turn raw product specifications into live deployments.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div 
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 opacity-30 -translate-x-[1px]" 
            style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.15)' }}
          />

          {/* Animated pulsing connector dot moving down */}
          <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            className="absolute left-4 md:left-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 -translate-x-[5px] z-20 shadow-[0_0_12px_#22d3ee] pointer-events-none"
          />

          {/* Steps alternate */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Left block (alternating or blank spacer on desktop) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-12 md:text-right ${isEven ? 'order-1 md:order-1' : 'order-1 md:order-2 md:pl-12 md:pr-0 md:text-left'}`}>
                    {/* Only show card if matches alternating block */}
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        className="glass rounded-2xl p-6 border border-white/5 relative card-hover hover:border-purple-500/20"
                        style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.4)` }}
                      >
                        <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">
                          {step.subtitle}
                        </span>
                        <h3 className="text-lg font-bold font-orbitron text-white mb-2 tracking-wider">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    ) : (
                      // Spacer on desktop (hidden on mobile)
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border border-white/10 -translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)] group">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${step.color} shadow-[0_0_8px_rgba(139,92,246,0.5)]`} />
                  </div>

                  {/* Right block (alternating card or blank spacer) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${isEven ? 'order-2 md:order-2 md:pl-12' : 'order-2 md:order-1 md:pr-12 md:pl-0'}`}>
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        className="glass rounded-2xl p-6 border border-white/5 relative card-hover hover:border-blue-500/20"
                        style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.4)` }}
                      >
                        <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                          {step.subtitle}
                        </span>
                        <h3 className="text-lg font-bold font-orbitron text-white mb-2 tracking-wider">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    ) : (
                      // Spacer on desktop
                      <div className="hidden md:block" />
                    )}
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Workflow
