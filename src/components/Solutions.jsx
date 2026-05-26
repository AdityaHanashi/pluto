import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MessageSquare, Mic, PhoneCall, Bot, SearchCode,
  MessageCircle, Send, HeartHandshake, TrendingUp, Target,
  LayoutDashboard, Cloud, Rocket, Globe, Layers, Cpu
} from 'lucide-react'

const solutionsList = [
  { icon: MessageSquare, title: 'AI Chatbots', desc: 'Custom trained chatbots using state-of-the-art LLMs, integrated with your company knowledge base.' },
  { icon: Mic, title: 'AI Voice Assistants', desc: 'Interactive voice models providing intelligent vocal interactions with custom brand tones.' },
  { icon: PhoneCall, title: 'AI Calling Systems', desc: 'Automated inbound and outbound calling agents managing schedules and qualifying leads.' },
  { icon: Bot, title: 'AI Agents', desc: 'Autonomous multi-agent workflows executing intricate tasks, operations, and file handlings.' },
  { icon: SearchCode, title: 'RAG Systems', desc: 'Retrieval-Augmented Generation linking real-time document search results directly to LLMs.' },
  { icon: MessageCircle, title: 'WhatsApp Automation', desc: 'Full conversational chatbot support and automated alert triggers built on official APIs.' },
  { icon: Send, title: 'Telegram Bots', desc: 'Flexible utility bots triggering actions, database queries, and notifications inside Telegram.' },
  { icon: HeartHandshake, title: 'AI Customer Support', desc: 'Instant 24/7 client resolution, automated ticket routing, and intelligent case summaries.' },
  { icon: TrendingUp, title: 'AI Sales Systems', desc: 'Algorithmic sales assistants generating proposals, responding to rfps, and drafting replies.' },
  { icon: Target, title: 'AI Lead Systems', desc: 'Scraping and lead verification pipelines using AI models to filter target personas.' },
  { icon: LayoutDashboard, title: 'AI Dashboards', desc: 'Analytical visual portals integrating chart widgets, predictions, and operational reports.' },
  { icon: Cloud, title: 'SaaS Platforms', desc: 'High-availability subscription web platforms featuring billing, databases, and api systems.' },
  { icon: Rocket, title: 'Startup MVPs', desc: 'Rapid prototyping and deployment of functional web models to validate ideas in days.' },
  { icon: Globe, title: 'Business Websites', desc: 'Cinematic corporate websites with lightning-fast load times and custom design assets.' },
  { icon: Layers, title: 'Landing Pages', desc: 'Hyper-focused single page interfaces designed specifically for click-through conversions.' },
  { icon: Cpu, title: 'Full Stack Apps', desc: 'High-performance engineering combining modern frontends with secure database APIs.' },
]

const Solutions = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative bg-black/60" id="solutions" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-700/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-blue mb-4 inline-flex font-mono">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            AI Tools &amp; <span className="gradient-text">Solutions We Build</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            We architect custom pipelines that align perfectly with your operations and scale with your volume.
          </p>
        </motion.div>

        {/* 16 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {solutionsList.map((sol, idx) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -3,
                  borderColor: 'rgba(139, 92, 246, 0.4)',
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.15)'
                }}
                className="glass rounded-2xl p-5 border border-white/5 flex flex-col group cursor-default transition-all duration-300 relative overflow-hidden"
              >
                {/* Micro particle blur effect inside card */}
                <div className="absolute -right-8 -top-8 w-20 h-20 rounded-full bg-purple-500/5 blur-xl group-hover:bg-purple-500/10 transition-colors" />

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold font-orbitron text-white group-hover:text-purple-300 transition-colors tracking-wide">
                    {sol.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {sol.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions
