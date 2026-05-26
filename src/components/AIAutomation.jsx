import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, PhoneCall, Cpu, Zap, ArrowUpRight } from 'lucide-react'

const automationCards = [
  {
    icon: MessageSquare,
    title: 'Cognitive Chatbot Systems',
    tag: 'LLM Agents',
    desc: 'Self-learning conversational systems trained on corporate wikis. Features direct semantic search, intent mapping, and instant CRM lead sync.',
    features: ['Custom Context injection (RAG)', 'Context-aware user intent matching', 'Multilingual semantic parsing'],
    glow: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    icon: PhoneCall,
    title: 'Autonomous Voice Systems',
    tag: 'Interactive Audio',
    desc: 'Ultra-low latency inbound and outbound voice pipelines that handle appointment bookings, customer qualifications, and live database syncs.',
    features: ['< 600ms latency responses', 'Natural voice inflection mapping', 'Automated calendar booking integration'],
    glow: 'from-blue-500/20 to-cyan-500/10'
  },
  {
    icon: Cpu,
    title: 'End-to-End n8n & API Relays',
    tag: 'Workflow Automation',
    desc: 'Bespoke integration pipelines linking legacy ERPs and CRMs to modern AI modules, completely eliminating administrative labor hours.',
    features: ['Node.js & Python agent bridges', 'Automated document processing pipelines', 'Fail-safe queue event logging'],
    glow: 'from-cyan-500/20 to-purple-500/10'
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
              Operational Automation
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-orbitron text-white tracking-tight"
          >
            AI <span className="gradient-text font-extrabold">Automation</span> Systems
          </motion.h2>
          <div className="title-underline mt-4" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-base md:text-lg">
            We build responsive AI voice bots and custom chatbot pipelines designed to drive business efficiency.
          </p>
        </div>

        {/* Spacious 3-Column Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {automationCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`glass bg-gradient-to-b ${card.glow} border border-white/5 rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] group`}
              >
                <div>
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="tag tag-purple font-mono uppercase tracking-widest">{card.tag}</span>
                    <ArrowUpRight size={16} className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-orbitron text-white tracking-wide mb-4 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">Key Parameters</h4>
                  <ul className="space-y-2 text-xs text-gray-400 font-medium">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
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
