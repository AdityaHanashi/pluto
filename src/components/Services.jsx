import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Bot, MessageSquare, Phone, Globe, Layers, Database, 
  X, ChevronRight, CheckCircle2, LayoutTemplate, 
  Zap, Shield, FileText, Send
} from 'lucide-react'
import { basicTemplate, intermediateTemplate, advancedTemplate } from '../data/designTemplates'

const coreServices = [
  { 
    id: 'website-builder',
    icon: LayoutTemplate, 
    title: 'Website Builder', 
    desc: 'Automated website generation pipelines. Get a fully functional site in minutes.', 
    color: 'from-blue-500 to-indigo-600', 
    glow: 'rgba(59,130,246,0.3)' 
  },
  { 
    id: 'web-design',
    icon: Globe, 
    title: 'Web Design', 
    desc: 'High-converting landing pages, SaaS platforms, and premium corporate portfolios.', 
    color: 'from-orange-600 to-red-600', 
    glow: 'rgba(249,115,22,0.3)' 
  },
  { 
    id: 'ai-automation',
    icon: Bot, 
    title: 'AI Automation', 
    desc: 'End-to-end intelligent automation pipelines that eliminate repetitive tasks.', 
    color: 'from-[#C9A84C] to-indigo-600', 
    glow: 'rgba(139,92,246,0.3)' 
  },
  { 
    id: 'rag-systems',
    icon: Database, 
    title: 'RAG Knowledge Systems', 
    desc: 'Advanced systems that give AI secure access to your private knowledge base.', 
    color: 'from-teal-600 to-[#C9A84C]', 
    glow: 'rgba(20,184,166,0.3)' 
  },
  { 
    id: 'ai-chatbots',
    icon: MessageSquare, 
    title: 'AI Chatbots', 
    desc: 'Intelligent conversational AI built on your business data for precise responses.', 
    color: 'from-[#C9A84C] to-[#C9A84C]', 
    glow: 'rgba(59,130,246,0.3)' 
  },
  { 
    id: 'ai-calling',
    icon: Phone, 
    title: 'AI Voice Calling', 
    desc: 'AI-powered calling systems that handle inbound and outbound calls at scale.', 
    color: 'from-[#C9A84C] to-teal-600', 
    glow: 'rgba(6,182,212,0.3)' 
  },
]

// --- Modal Contents ---

const WebsiteBuilderContent = () => (
  <div className="flex flex-col gap-10 p-4 md:p-8 w-full max-w-5xl mx-auto">
    <div className="text-center space-y-4 max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.02em] text-white">Intelligent Website Builder</h3>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mt-8">
      {[
        { title: 'Lightning Fast', desc: 'Sites load in under 1 second, optimized for maximum SEO ranking.' },
        { title: 'Fully Responsive', desc: 'Perfectly adapted for mobile, tablet, and ultra-wide desktop monitors.' },
        { title: 'CMS Integrated', desc: 'Easily edit your content without touching a single line of code.' }
      ].map((item, i) => (
        <div key={i} className="glass rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
            <Zap className="text-blue-400" size={28} />
          </div>
          <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
          <p className="text-gray-400 leading-relaxed text-base">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

const WebDesignContent = () => {
  const [activeTab, setActiveTab] = useState('basic')
  
  const templates = {
    basic: { name: 'Basic Landing Page', html: basicTemplate },
    intermediate: { name: 'Intermediate Landing Page', html: intermediateTemplate },
    premium: { name: 'Premium SaaS Design', html: advancedTemplate }
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="p-6 md:p-10 pb-4 shrink-0 text-center space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold font-heading tracking-[-0.02em] text-white">Web Design & Landing Pages</h3>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center gap-4 px-6 pb-6 shrink-0 flex-wrap">
        {Object.entries(templates).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
              activeTab === key 
                ? 'bg-[#C9A84C] text-[#141110] shadow-[0_0_20px_rgba(204,190,177,0.3)]' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {data.name}
          </button>
        ))}
      </div>

      {/* Iframe Viewer */}
      <div className="flex-grow p-6 pt-0 overflow-hidden min-h-[500px]">
        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 relative bg-black shadow-2xl">
          <iframe 
            srcDoc={templates[activeTab].html}
            className="w-full h-full border-none"
            title={templates[activeTab].name}
          />
        </div>
      </div>
    </div>
  )
}

const AIAutomationContent = () => (
  <div className="flex flex-col gap-10 p-4 md:p-8 w-full max-w-5xl mx-auto text-center">
    <div className="w-24 h-24 mx-auto bg-[#C9A84C]/10 rounded-3xl flex items-center justify-center border border-[#C9A84C]/20 mb-4">
      <Bot size={40} className="text-[#C9A84C]" />
    </div>
    <div className="text-center space-y-4 max-w-3xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.02em] text-white">AI Automation & Lead Generation</h3>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
      {[
        { icon: Zap, title: 'Instant Qualification', desc: 'AI analyzes inputs instantly to determine fit.' },
        { icon: Database, title: 'CRM Syncing', desc: 'Data perfectly formatted and pushed directly to HubSpot, Salesforce, or GoHighLevel.' },
        { icon: MessageSquare, title: 'Auto Follow-ups', desc: 'Personalized email and SMS generated for qualified leads immediately.' }
      ].map((item, i) => (
        <div key={i} className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center gap-4">
          <div className="w-16 h-16 shrink-0 rounded-full bg-[#C9A84C]/10 flex items-center justify-center border border-[#C9A84C]/20 mb-2">
            <item.icon size={28} className="text-[#C9A84C]" />
          </div>
          <h4 className="text-xl font-bold text-white">{item.title}</h4>
          <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

const RAGContent = () => (
  <div className="flex flex-col gap-10 p-4 md:p-10 w-full max-w-5xl mx-auto text-center">
    <div className="w-24 h-24 mx-auto bg-teal-500/10 rounded-3xl flex items-center justify-center border border-teal-500/20 mb-4">
      <Database size={40} className="text-teal-400" />
    </div>
    <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.02em] text-white">RAG Knowledge Systems</h3>
    <div className="grid md:grid-cols-2 gap-8 mt-8 text-center">
      <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-white mb-4">Secure Data Vectorization</h4>
        <p className="text-gray-400 text-lg leading-relaxed">We process your PDFs, docs, and databases into secure vector embeddings, ensuring your private data never trains public AI models.</p>
      </div>
      <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-white mb-4">Hallucination-Free Answers</h4>
        <p className="text-gray-400 text-lg leading-relaxed">By forcing the AI to only cite from your specific documents, we guarantee 100% accurate answers for your employees or customers.</p>
      </div>
    </div>
  </div>
)

const ChatbotContent = () => (
  <div className="flex flex-col gap-10 p-4 md:p-10 w-full max-w-6xl mx-auto text-center">
    <div className="w-24 h-24 mx-auto bg-[#C9A84C]/10 rounded-3xl flex items-center justify-center border border-[#C9A84C]/20 mb-4">
      <MessageSquare size={40} className="text-[#C9A84C]" />
    </div>
    <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.02em] text-white">AI Chatbots</h3>
    <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
      {[
        'Trained on your past support tickets and brand voice.',
        'Seamlessly escalates complex issues to human agents.',
        'Multi-lingual support across 50+ languages natively.'
      ].map((text, i) => (
        <div key={i} className="glass p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center border border-[#C9A84C]/20">
            <CheckCircle2 size={28} className="text-[#C9A84C]" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </div>
)

const CallingContent = () => (
  <div className="flex flex-col gap-10 p-4 md:p-10 w-full max-w-5xl mx-auto text-center">
    <div className="w-24 h-24 mx-auto bg-cyan-500/10 rounded-3xl flex items-center justify-center border border-cyan-500/20 mb-4">
      <Phone size={40} className="text-cyan-400" />
    </div>
    <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-[-0.02em] text-white">AI Voice Calling</h3>
    <div className="flex flex-col md:flex-row gap-8 mt-8 text-center">
      <div className="glass p-8 rounded-2xl border border-white/10 flex-1 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-white mb-4">Inbound Customer Service</h4>
        <p className="text-gray-400 text-lg leading-relaxed">Never miss a call again. Agents answer instantly, book appointments directly onto your calendar, and answer FAQ with human emotion.</p>
      </div>
      <div className="glass p-8 rounded-2xl border border-white/10 flex-1 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-white mb-4">Outbound Sales & Reactivation</h4>
        <p className="text-gray-400 text-lg leading-relaxed">Automatically call cold leads or dead lists to reactivate them, qualify their interest, and patch them through to your live closers.</p>
      </div>
    </div>
  </div>
)

// --- Components ---

const ServiceCard = ({ service, index, inView, onClick }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(service)}
      className="glass rounded-3xl p-8 lg:p-10 border border-white/10 group cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between items-center text-center min-h-[320px]"
      style={{
        boxShadow: hovered ? `0 0 30px ${service.glow}, 0 20px 40px rgba(0,0,0,0.6)` : 'none',
        borderColor: hovered ? service.glow.replace('0.3', '0.5') : 'rgba(255,255,255,0.05)',
      }}
    >
      <div 
        className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" 
        style={{ background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]`}>
          <Icon size={32} className="text-white" />
        </div>

        <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-white transition-colors duration-300 tracking-wide font-sans">
          {service.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-sans">
          {service.desc}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-[#C9A84C] font-medium text-sm tracking-widest uppercase font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
        View Details <ChevronRight size={16} />
      </div>

      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
    </motion.div>
  )
}

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedService, setSelectedService] = useState(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedService])

  const renderModalContent = () => {
    if (!selectedService) return null
    switch (selectedService.id) {
      case 'website-builder': return <WebsiteBuilderContent />
      case 'web-design': return <WebDesignContent />
      case 'ai-automation': return <AIAutomationContent />
      case 'rag-systems': return <RAGContent />
      case 'ai-chatbots': return <ChatbotContent />
      case 'ai-calling': return <CallingContent />
      default: return null
    }
  }

  return (
    <section className="section-padding relative" id="services" ref={ref}>
      <div className="orb w-96 h-96 bg-[#C9A84C]/5 bottom-0 left-0 pointer-events-none" />
      <div className="orb w-[500px] h-[500px] bg-[#C9A84C]/5 top-20 right-0 pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="w-full px-4 md:px-12 lg:px-24 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10 backdrop-blur-md mb-6">
             <span className="text-xs font-medium text-[#C9A84C] font-mono tracking-widest uppercase">Expertise</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-[-0.02em] text-white mb-6">
            Our <span className="text-[#C9A84C]">Services</span>
          </h2>
          <div className="title-underline mb-8" />
        </motion.div>

        {/* Grid is explicitly 3 columns on lg, and perfectly distributed */}
        <div className="grid grid-cols-1 min-[481px]:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-full">
          {coreServices.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={idx} 
              inView={inView} 
              onClick={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[95vw] lg:max-w-[85vw] max-h-[90vh] glass-card border border-white/10 rounded-3xl overflow-y-auto flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={24} />
              </button>

              {/* Dynamic Content Container */}
              <div className={`w-full ${selectedService.id === 'web-design' ? 'h-[90vh]' : 'py-16 md:py-24'}`}>
                {renderModalContent()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services
