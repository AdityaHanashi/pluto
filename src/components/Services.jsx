import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Bot, Workflow, Mic, Phone, Link2, Database, Brain, Layers,
  Globe, Code2, LayoutDashboard, Briefcase, Monitor, Cpu, Zap, Server
} from 'lucide-react'

const aiServices = [
  { icon: Bot, title: 'AI Automation', desc: 'End-to-end intelligent automation pipelines that eliminate repetitive tasks and supercharge productivity.', color: 'from-purple-600 to-indigo-600', glow: 'rgba(139,92,246,0.3)' },
  { icon: Brain, title: 'AI Agents', desc: 'Autonomous AI agents that think, plan, and execute complex multi-step tasks with minimal human input.', color: 'from-violet-600 to-purple-600', glow: 'rgba(124,58,237,0.3)' },
  { icon: Cpu, title: 'AI Chatbots', desc: 'Intelligent conversational AI built on LLMs — trained on your business data for precise responses.', color: 'from-blue-600 to-cyan-600', glow: 'rgba(59,130,246,0.3)' },
  { icon: Phone, title: 'AI Voice Calling', desc: 'AI-powered calling systems that handle inbound/outbound calls, qualify leads, book appointments.', color: 'from-cyan-600 to-teal-600', glow: 'rgba(6,182,212,0.3)' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'Connect your entire tech stack with intelligent workflows using n8n, Make, and custom AI pipelines.', color: 'from-indigo-600 to-blue-600', glow: 'rgba(99,102,241,0.3)' },
  { icon: Layers, title: 'AI Business Systems', desc: 'Custom AI-powered CRMs, ERPs, and business management systems built for scale.', color: 'from-purple-600 to-pink-600', glow: 'rgba(168,85,247,0.3)' },
  { icon: Link2, title: 'AI Integrations', desc: 'Seamless integration of AI capabilities into your existing tools, APIs, and business workflows.', color: 'from-sky-600 to-blue-600', glow: 'rgba(14,165,233,0.3)' },
  { icon: Database, title: 'RAG Systems', desc: 'Retrieval-Augmented Generation systems that give AI access to your private knowledge base.', color: 'from-teal-600 to-cyan-600', glow: 'rgba(20,184,166,0.3)' },
]

const webServices = [
  { icon: Zap, title: 'Landing Page Development', desc: 'High-converting, stunning landing pages designed to capture leads and drive business growth.', color: 'from-orange-600 to-red-600', glow: 'rgba(249,115,22,0.3)' },
  { icon: Globe, title: 'Full Stack Website Development', desc: 'Complete web solutions from design to deployment — scalable, fast, and production-ready.', color: 'from-green-600 to-emerald-600', glow: 'rgba(34,197,94,0.3)' },
  { icon: Server, title: 'SaaS Platform Development', desc: 'Full-featured SaaS platforms with auth, billing, dashboards, and AI integrations built to scale.', color: 'from-blue-600 to-indigo-600', glow: 'rgba(59,130,246,0.3)' },
  { icon: Briefcase, title: 'Portfolio Websites', desc: 'Premium portfolio sites that showcase your work and brand with futuristic design aesthetics.', color: 'from-purple-600 to-violet-600', glow: 'rgba(139,92,246,0.3)' },
  { icon: Monitor, title: 'Business Websites', desc: 'Corporate and business websites that establish credibility and drive customer acquisition.', color: 'from-cyan-600 to-blue-600', glow: 'rgba(6,182,212,0.3)' },
  { icon: LayoutDashboard, title: 'Dashboard UI Development', desc: 'Data-rich, interactive dashboards with real-time analytics, charts, and AI-powered insights.', color: 'from-indigo-600 to-purple-600', glow: 'rgba(99,102,241,0.3)' },
  { icon: Bot, title: 'AI-Powered Websites', desc: 'Websites infused with AI features — smart search, personalization, chatbots, and automation.', color: 'from-pink-600 to-purple-600', glow: 'rgba(236,72,153,0.3)' },
  { icon: Code2, title: 'Modern Frontend Development', desc: 'Pixel-perfect React frontends with animations, micro-interactions, and premium UI/UX design.', color: 'from-violet-600 to-blue-600', glow: 'rgba(124,58,237,0.3)' },
]

const ServiceCard = ({ service, index, inView }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl p-6 border border-white/5 group cursor-default transition-all duration-300 relative overflow-hidden"
      style={{
        boxShadow: hovered ? `0 0 30px ${service.glow}, 0 20px 40px rgba(0,0,0,0.6)` : 'none',
        borderColor: hovered ? service.glow.replace('0.3', '0.5') : 'rgba(255,255,255,0.05)',
      }}
    >
      {/* Background card lighting flare */}
      <div 
        className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors" 
        style={{ background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)` }}
      />

      {/* Icon frame */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]`}>
        <Icon size={20} className="text-white" />
      </div>

      <h3 className="text-white font-bold font-orbitron text-base mb-3 group-hover:text-purple-300 transition-colors duration-300 tracking-wider">
        {service.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {service.desc}
      </p>

      {/* Bottom accent glow rule */}
      <div className={`h-0.5 bg-gradient-to-r ${service.color} mt-5 w-0 group-hover:w-full transition-all duration-300 rounded-full`} />
    </motion.div>
  )
}

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [tab, setTab] = useState('ai')

  return (
    <section className="section-padding relative" id="services" ref={ref}>
      {/* Floating flares */}
      <div className="orb w-96 h-96 bg-purple-700/5 bottom-0 left-0 pointer-events-none" />
      <div className="orb w-[500px] h-[500px] bg-blue-700/5 top-20 right-0 pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-blue mb-4 inline-flex">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            We build state-of-the-art automation tools and elite digital platforms designed to drive business metrics.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex glass rounded-2xl p-1.5 border border-white/10">
            {[
              { key: 'ai', label: '🤖 AI & Automation' },
              { key: 'web', label: '🌐 Web Studio' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  tab === key ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(tab === 'ai' ? aiServices : webServices).map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
