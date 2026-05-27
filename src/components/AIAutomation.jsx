import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Laptop, Lock, Zap, ArrowUpRight, X, CheckCircle2 } from 'lucide-react'

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

const serviceDetails = {
  'AI Automations': {
    title: 'AI Automations',
    tagline: 'Autonomous AI workflows & relational voice systems.',
    description: 'We orchestrate end-to-end automations connecting corporate databases directly to custom language model interfaces.',
    whatWeBuild: [
      'Inbound & outbound call appointment voice bots (Vapi/Retell).',
      'Cognitive chatbot agents trained on corporate databases.',
      'Custom n8n and API relays between ERPs and CRM pipelines.',
      'Advanced RAG systems for intelligent document queries.',
      'Autonomous lead qualification & email routing flows.'
    ],
    toolsUsed: ['n8n', 'Python', 'OpenCV', 'PyTorch', 'AI Automation', 'AI Agents', 'RAG Systems', 'MongoDB']
  },
  'Website Builder': {
    title: 'Website Builder',
    tagline: 'Premium frontend interfaces & functional web applications.',
    description: 'We engineer high-fidelity frontends and full-stack web products designed to scale.',
    whatWeBuild: [
      'Highly interactive and animated Landing Pages.',
      'Premium custom SaaS Platform interfaces.',
      'Sleek personal, creative, and company Portfolios.',
      'Modern web application layouts and dashboards.',
      'Robust e-commerce storefront architectures.'
    ],
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MERN Stack']
  }
}

const techColors = {
  'HTML': { color: '#e34f26', shadow: 'rgba(227, 79, 38, 0.2)' },
  'CSS': { color: '#1572b6', shadow: 'rgba(21, 114, 182, 0.2)' },
  'JavaScript': { color: '#f7df1e', shadow: 'rgba(247, 223, 30, 0.15)' },
  'React': { color: '#61dafb', shadow: 'rgba(97, 218, 251, 0.25)' },
  'Tailwind CSS': { color: '#06b6d4', shadow: 'rgba(6, 182, 212, 0.25)' },
  'Node.js': { color: '#339933', shadow: 'rgba(51, 153, 51, 0.2)' },
  'Express.js': { color: '#ffffff', shadow: 'rgba(255, 255, 255, 0.1)' },
  'MongoDB': { color: '#47a248', shadow: 'rgba(71, 162, 72, 0.2)' },
  'MERN Stack': { color: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.25)' },
  'Python': { color: '#3776ab', shadow: 'rgba(55, 118, 171, 0.2)' },
  'n8n': { color: '#ff6d5a', shadow: 'rgba(255, 109, 90, 0.25)' },
  'OpenCV': { color: '#5c3ee8', shadow: 'rgba(92, 62, 232, 0.25)' },
  'PyTorch': { color: '#ee4c2c', shadow: 'rgba(238, 76, 44, 0.25)' },
  'AI Automation': { color: '#a855f7', shadow: 'rgba(168, 85, 247, 0.25)' },
  'AI Agents': { color: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.25)' },
  'RAG Systems': { color: '#06b6d4', shadow: 'rgba(6, 182, 212, 0.25)' }
}

const AIAutomation = () => {
  const [selectedService, setSelectedService] = useState(null)

  const handleCardClick = (title) => {
    // If the card clicked is Cybersecurity, do not launch any modal (LAUNCHING SOON)
    if (title === 'Cybersecurity') return
    setSelectedService(serviceDetails[title] || null)
  }

  const handleClose = () => {
    setSelectedService(null)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black/40" id="ai-automation">
      {/* Cinematic Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      {/* Main Glassmorphic Wrapper Panel for Section */}
      <div className="max-w-[94%] xl:max-w-[1360px] mx-auto px-6 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-black/10">
        
        {/* Header */}
        <div className="text-center mb-16">
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
          <p className="text-gray-400 mt-6 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Click on AI Automations or Website Builder below to view detailed deliverables and technical tools.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {automationCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => handleCardClick(card.title)}
                className={`glass bg-gradient-to-b ${card.glow} border rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between relative group overflow-hidden ${
                  card.isLocked 
                    ? 'border-red-500/15 cursor-default opacity-80' 
                    : 'border-white/5 cursor-pointer hover:border-purple-500/20 hover:shadow-[0_0_35px_rgba(124,58,237,0.12)]'
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
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-350 ${
                    card.isLocked 
                      ? 'bg-red-500/5 border-red-500/25 text-red-400' 
                      : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                  }`}>
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold font-syne tracking-wide mb-3 transition-colors ${
                    card.isLocked ? 'text-gray-300' : 'text-white group-hover:text-purple-300'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-white/5 pt-5 mt-auto">
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

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Box with generous padding and overflow-visible */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              className="relative w-full max-w-2xl bg-[#07070f]/98 border border-white/10 rounded-3xl p-8 md:p-10 overflow-visible glass shadow-2xl z-10"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
              
              {/* Close Button offset from padding */}
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <X size={16} />
              </button>

              {/* Title Section with safe top-padding offset */}
              <div className="mb-6 pt-4">
                <span className="text-[10px] font-bold font-mono-jb uppercase tracking-widest text-purple-400 block mb-1">
                  Detailed Service Breakdown
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-syne text-white">
                  {selectedService.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 italic font-medium">
                  {selectedService.tagline}
                </p>
                <p className="text-gray-300 text-xs md:text-sm mt-3.5 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Two Column details split with spacing */}
              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                {/* Left Column: What We Build */}
                <div>
                  <h4 className="text-xs font-bold font-mono-jb uppercase tracking-widest text-purple-300 mb-4">
                    What We Build / Do
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedService.whatWeBuild.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed py-0.5">
                        <CheckCircle2 size={15} className="text-purple-400 mt-0.5 shrink-0" />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Technologies Used */}
                <div>
                  <h4 className="text-xs font-bold font-mono-jb uppercase tracking-widest text-blue-300 mb-4">
                    Technologies We Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.toolsUsed.map((tool) => {
                      const style = techColors[tool] || { color: '#ffffff', shadow: 'rgba(255,255,255,0.05)' }
                      return (
                        <div 
                          key={tool} 
                          className="glass rounded-xl px-3 py-1.5 text-[10px] font-semibold font-mono-jb text-gray-300 flex items-center gap-1.5 border border-white/5 hover:text-white transition-all cursor-default select-none whitespace-nowrap"
                          style={{
                            borderColor: `rgba(${parseInt(style.color.slice(1,3),16) || 124}, ${parseInt(style.color.slice(3,5),16) || 58}, ${parseInt(style.color.slice(5,7),16) || 237}, 0.2)`,
                            boxShadow: `0 0 10px ${style.shadow}`
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: style.color }} />
                          {tool}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AIAutomation
