import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Zap, Cpu, TrendingUp, Sparkles, Workflow, Layers, Rocket, Clock } from 'lucide-react'

const statsData = [
  {
    icon: Zap,
    title: 'Faster Automation',
    number: 10,
    suffix: 'x',
    label: 'Velocity Multiplier',
    desc: 'Automate manual processes to execute workflows ten times faster than humanly possible.',
    color: 'text-[#C9A84C]',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    icon: Cpu,
    title: 'Smart AI Systems',
    number: 99.4,
    decimals: 1,
    suffix: '%',
    label: 'Accuracy Rate',
    desc: 'Fine-tuned Large Language Models trained precisely on your data to minimize hallucination.',
    color: 'text-[#C9A84C]',
    glow: 'rgba(168, 85, 247, 0.25)',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Platforms',
    number: 99.99,
    decimals: 2,
    suffix: '%',
    label: 'Server Uptime',
    desc: 'Decentralized failover and auto-scaling logic protecting products from spikes and down-times.',
    color: 'text-[#C9A84C]',
    glow: 'rgba(59, 130, 246, 0.25)',
  },
  {
    icon: Sparkles,
    title: 'Premium UI/UX',
    number: 100,
    suffix: '%',
    label: 'Bespoke Design',
    desc: 'Elite typography, custom layouts, and smooth animations crafted for visual excellence.',
    color: 'text-pink-400',
    glow: 'rgba(236, 72, 153, 0.25)',
  },
  {
    icon: Workflow,
    title: 'AI-Powered Workflows',
    number: 250,
    suffix: 'K+',
    label: 'Daily Jobs Routed',
    desc: 'Intelligent orchestrations routing messages, API triggers, and database syncing in parallel.',
    color: 'text-indigo-400',
    glow: 'rgba(99, 102, 241, 0.25)',
  },
  {
    icon: Layers,
    title: 'Modern Tech Stack',
    number: 1,
    prefix: '#',
    label: 'Industry Ranking',
    desc: 'Zero legacy code. Engineered on Vite, React, and Tailwind CSS for optimized production bundles.',
    color: 'text-[#C9A84C]',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    icon: Rocket,
    title: 'SaaS Ready Solutions',
    number: 48,
    suffix: 'h',
    label: 'Average MVP Launch',
    desc: 'Fast prototyping structures engineered to package and launch features rapidly.',
    color: 'text-red-400',
    glow: 'rgba(239, 68, 68, 0.25)',
  },
  {
    icon: Clock,
    title: '24/7 AI Operations',
    number: 8760,
    suffix: 'h',
    label: 'Yearly Active Shifts',
    desc: 'Autonomous software cron jobs and monitoring agents operating uninterrupted all year.',
    color: 'text-[#C9A84C]',
    glow: 'rgba(34, 197, 94, 0.25)',
  },
]

const WhyPluto = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative overflow-hidden" id="why-pluto" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-purple mb-4 inline-flex font-mono">Metrics</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Why Partner With <span className="text-[#C9A84C] font-extrabold">Pluto.ai</span>?
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            We deliver measurable business acceleration by replacing manual friction with automated intelligence.
          </p>
        </motion.div>

        {/* 8 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -3,
                  borderColor: stat.color.replace('text-', 'rgba(') === stat.color ? 'rgba(139, 92, 246, 0.4)' : undefined,
                  boxShadow: `0 10px 30px ${stat.glow}` 
                }}
                className="glass rounded-2xl p-6 border border-white/5 flex flex-col group cursor-default transition-all duration-300 relative overflow-hidden"
                style={{
                  hover: {
                    borderColor: stat.color
                  }
                }}
              >
                {/* Visual Accent Glow */}
                <div 
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: stat.glow }}
                />

                {/* Card Title & Icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 ${stat.color} group-hover:scale-110 transition-all`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold font-orbitron text-white group-hover:text-[#C9A84C] transition-colors tracking-wide">
                    {stat.title}
                  </h3>
                </div>

                {/* Count Up Number */}
                <div className="mb-2 flex items-baseline font-orbitron font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
                  {stat.prefix && <span className="text-[#C9A84C] mr-1 text-2xl">{stat.prefix}</span>}
                  
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                    />
                  ) : (
                    <span>0</span>
                  )}

                  {stat.suffix && <span className="text-[#C9A84C] ml-0.5 text-2xl">{stat.suffix}</span>}
                </div>

                {/* Stat Label */}
                <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-3">
                  {stat.label}
                </p>

                {/* Stat Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyPluto
