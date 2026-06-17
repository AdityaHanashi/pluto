import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Atom, Layers, Braces, Terminal, 
  Sparkles, Network, Bot, Database, 
  Box, Cloud, GitBranch, Server 
} from 'lucide-react'

const toolCategories = [
  {
    title: 'Core Development',
    color: 'from-[#C9A84C] to-[#C9A84C]',
    borderColor: 'group-hover:border-[#C9A84C]/30',
    bgHover: 'group-hover:from-[#C9A84C]/10 group-hover:to-[#C9A84C]/10',
    iconColor: 'text-[#C9A84C] group-hover:bg-[#C9A84C]/20',
    items: [
      { name: 'React', icon: Atom, desc: 'Interactive user interfaces' },
      { name: 'Next.js', icon: Layers, desc: 'Full-stack React framework' },
      { name: 'TypeScript', icon: Braces, desc: 'Type-safe JavaScript' },
      { name: 'Node.js', icon: Terminal, desc: 'High-performance backend' },
    ]
  },
  {
    title: 'AI & Automation',
    color: 'from-[#C9A84C] to-[#C9A84C]',
    borderColor: 'group-hover:border-[#C9A84C]/30',
    bgHover: 'group-hover:from-[#C9A84C]/10 group-hover:to-[#C9A84C]/10',
    iconColor: 'text-[#C9A84C] group-hover:bg-[#C9A84C]/20',
    items: [
      { name: 'OpenAI', icon: Sparkles, desc: 'Advanced language models' },
      { name: 'LangChain', icon: Network, desc: 'LLM application framework' },
      { name: 'AI Agents', icon: Bot, desc: 'Autonomous execution pipelines' },
      { name: 'RAG Systems', icon: Database, desc: 'Contextual knowledge retrieval' },
    ]
  },
  {
    title: 'Infrastructure',
    color: 'from-[#C9A84C] to-orange-500',
    borderColor: 'group-hover:border-[#C9A84C]/30',
    bgHover: 'group-hover:from-[#C9A84C]/10 group-hover:to-orange-600/10',
    iconColor: 'text-[#C9A84C] group-hover:bg-[#C9A84C]/20',
    items: [
      { name: 'Docker', icon: Box, desc: 'Containerized deployment' },
      { name: 'AWS', icon: Cloud, desc: 'Scalable cloud services' },
      { name: 'CI/CD Pipelines', icon: GitBranch, desc: 'Automated delivery workflows' },
      { name: 'Cloud Infrastructure', icon: Server, desc: 'Distributed architectures' },
    ]
  }
]

const Technologies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative" id="technologies" ref={ref}>
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="w-full px-4 md:px-12 lg:px-24 mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10 backdrop-blur-md mb-6">
             <span className="text-xs font-medium text-[#C9A84C] font-mono tracking-widest uppercase">Expertise</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-[-0.02em] text-white mb-6">
            Capability <span className="text-[#C9A84C]">Showcase</span>
          </h2>
          <div className="title-underline mb-8" />
        </motion.div>

        {/* Categories Layout */}
        <div className="space-y-16 lg:space-y-24">
          {toolCategories.map((category, catIdx) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.2 }}
                className="flex flex-col mb-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-[-0.02em] text-white mb-2">
                  {category.title}
                </h3>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color}`} />
              </motion.div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((tech, idx) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: catIdx * 0.2 + idx * 0.1 }}
                      className={`glass rounded-3xl p-6 md:p-8 pb-10 border border-white/10 relative group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full`}
                    >
                      {/* Glow Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 ${category.bgHover} transition-colors duration-500 rounded-3xl overflow-hidden`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${category.iconColor}`}>
                          <Icon size={28} className="stroke-[1.5]" />
                        </div>
                        <h4 className="text-xl font-bold font-heading tracking-[-0.02em] text-white mb-2 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mt-auto pb-1">
                          {tech.desc}
                        </p>
                      </div>
                      
                      {/* Border Hover Effect */}
                      <div className={`absolute inset-0 border-2 border-transparent ${category.borderColor} rounded-3xl transition-colors duration-500 pointer-events-none`} />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Technologies
