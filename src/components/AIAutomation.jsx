import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Laptop, Lock, Zap, ArrowUpRight } from 'lucide-react'

const automationCards = [
  {
    icon: MessageSquare,
    title: 'AI Automations',
    tag: 'Autonomous Systems',
    desc: 'Bespoke conversational chatbots, autonomous voice calling pipelines, and custom n8n integration systems engineered to eliminate administrative overhead.',
    features: ['Low-latency voice calling bots', 'Context-aware RAG pipelines', 'Automated CRM & Lead synchronization'],
    glow: 'from-purple-500/20 to-indigo-500/10',
    isLocked: false
  },
  {
    icon: Laptop,
    title: 'Website Builder',
    tag: 'Premium Frontend',
    desc: 'High-performance landing pages, custom dashboard UI components, and state-of-the-art React applications designed with stunning glassmorphism and layouts.',
    features: ['Modern React & Vite setups', 'Fluid responsive design layouts', 'SEO optimized clean structures'],
    glow: 'from-blue-500/20 to-cyan-500/10',
    isLocked: false
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    tag: 'Secure Layer',
    desc: 'Vulnerability assessment frameworks, penetration modeling dashboards, and secure relational database queries built to safeguard corporate infrastructure.',
    features: ['Penetration testing audits', 'Compliant encryption schemas', 'Real-time threat monitoring'],
    glow: 'from-red-500/10 to-purple-900/10',
    isLocked: true,
    badgeText: 'LAUNCHING SOON'
  }
]

const AIAutomation = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="ai-automation">
      {/* Cinematic Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-4"
          >
            <Zap size={12} className="text-purple-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-purple-300 font-orbitron tracking-widest uppercase">
              What we offer
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-syne text-white tracking-tight"
          >
            Core <span className="gradient-text font-extrabold">Services</span>
          </motion.h2>
          <div className="title-underline mt-4" />
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {automationCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass bg-gradient-to-b ${card.glow} border ${card.isLocked ? 'border-red-500/15' : 'border-white/5'} rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between relative group overflow-hidden ${
                  card.isLocked 
                    ? 'opacity-85 hover:opacity-100 hover:border-red-500/35 hover:shadow-[0_0_35px_rgba(239,68,68,0.08)]' 
                    : 'hover:border-purple-500/20 hover:shadow-[0_0_35px_rgba(124,58,237,0.15)]'
                }`}
              >
                {/* Background locked grid pattern for cybersecurity */}
                {card.isLocked && (
                  <div className="absolute inset-0 bg-red-950/[0.03] pointer-events-none" />
                )}

                <div>
                  {/* Tag and Badge / Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`tag uppercase tracking-widest font-mono text-[9px] ${card.isLocked ? 'tag-orange' : 'tag-purple'}`}>
                      {card.tag}
                    </span>
                    {card.isLocked ? (
                      <span className="text-[9px] font-bold font-mono-jb bg-red-500/15 border border-red-500/30 text-red-400 px-2 py-0.5 rounded-md animate-pulse">
                        {card.badgeText}
                      </span>
                    ) : (
                      <ArrowUpRight size={16} className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    card.isLocked 
                      ? 'bg-red-500/5 border-red-500/25 text-red-400' 
                      : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                  }`}>
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold font-syne tracking-wide mb-4 transition-colors ${
                    card.isLocked ? 'text-gray-300 group-hover:text-red-300' : 'text-white group-hover:text-purple-300'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">Capabilities</h4>
                  <ul className="space-y-2 text-xs text-gray-400 font-medium">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${card.isLocked ? 'bg-red-500/60' : 'bg-purple-500'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AIAutomation
