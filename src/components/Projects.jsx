import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as ScrollLink } from 'react-scroll'
import { Laptop, Server, Code2, Cpu, Sparkles, Terminal, ArrowUpRight } from 'lucide-react'

const projectsData = [
  // FRONTEND PROJECTS (2)
  {
    id: 'buildtrack',
    name: 'BuildTrack',
    category: 'frontend',
    isFeatured: true,
    description: 'A premium, high-converting project management dashboard with real-time kanban boards, custom velocity charts, and autonomous issue assigning.',
    tags: ['React', 'Tailwind', 'Recharts'],
    mockupType: 'dashboard',
    url: 'https://buildtrack.pluto.ai'
  },
  {
    id: 'coffeeic',
    name: 'Coffeeic',
    category: 'frontend',
    isFeatured: true,
    description: 'Stunning storefront UI for a premium coffee brand, powered by a client-side AI barista chatbot suggesting custom blends based on user taste profiles.',
    tags: ['Vite', 'Framer Motion', 'Vanilla CSS'],
    mockupType: 'storefront',
    url: 'https://coffeeic.pluto.ai'
  },
  // BACKEND PROJECTS (3)
  {
    id: 'moody',
    name: 'Moody',
    category: 'backend',
    isFeatured: true,
    description: 'Fast, secure sentiment analysis engine using computer vision webcam streams to process emotional cues and output data via low-latency REST endpoints.',
    tags: ['Python', 'FastAPI', 'OpenCV'],
    mockupType: 'vision',
    url: 'https://api.moody.pluto.ai'
  },
  {
    id: 'nexusapi',
    name: 'NexusAPI',
    category: 'backend',
    isFeatured: false,
    description: 'An AI-agent routing orchestrator that balances inbound requests across different LLM clusters based on cost, context limits, and token speeds.',
    tags: ['Node.js', 'Redis', 'Express'],
    mockupType: 'terminal',
    url: 'https://nexus.pluto.ai'
  },
  {
    id: 'synapserag',
    name: 'SynapseRAG',
    category: 'backend',
    isFeatured: false,
    description: 'Document indexing pipeline featuring real-time PDF splitting, vector embedding indexing, and a semantic retrieval cache operating under 40ms.',
    tags: ['PyTorch', 'MongoDB', 'Docker'],
    mockupType: 'rag',
    url: 'https://rag.synapse.pluto.ai'
  }
]

const Mockup = ({ type }) => {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-3 flex flex-col gap-2 font-mono text-[9px] relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
        <div className="flex items-center justify-between border-b border-white/5 pb-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[7px] text-gray-600">buildtrack.io/dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-grow">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded p-1.5 flex flex-col justify-between">
            <span className="text-gray-500 text-[6px] uppercase">Sprint status</span>
            <span className="text-purple-400 font-bold text-[10px]">94%</span>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded p-1.5 flex flex-col justify-between">
            <span className="text-gray-500 text-[6px] uppercase">AI agents</span>
            <span className="text-blue-400 font-bold text-[10px]">5 Active</span>
          </div>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded p-1.5 flex flex-col justify-between">
            <span className="text-gray-500 text-[6px] uppercase">Velocity</span>
            <span className="text-cyan-400 font-bold text-[10px]">+18.4%</span>
          </div>
        </div>
        <div className="h-4 bg-white/5 rounded overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[78%] rounded" />
        </div>
      </div>
    )
  }

  if (type === 'storefront') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
        <div className="flex items-center justify-between border-b border-white/5 pb-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[7px] text-gray-600 font-mono">coffeeic.com</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white text-xs font-bold font-orbitron shadow-lg">
            ☕
          </div>
          <div className="flex-grow space-y-1">
            <div className="h-2 bg-white/10 rounded w-[80%]" />
            <div className="h-1.5 bg-white/5 rounded w-[50%]" />
            <div className="flex gap-1.5 mt-1.5">
              <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[6px] text-amber-400 font-mono font-bold">SMART REC</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[6px] text-blue-400 font-mono font-bold">READY</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'vision') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-2.5 flex gap-2 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
        <div className="w-[45%] bg-zinc-950 border border-white/5 rounded flex flex-col items-center justify-center relative">
          <div className="w-7 h-7 rounded-full border border-dashed border-cyan-500/40 flex items-center justify-center animate-spin-slow">
            <div className="w-4 h-4 rounded-full bg-cyan-500/20" />
          </div>
          <div className="absolute inset-0 border border-cyan-500/20 rounded pointer-events-none" />
          <div className="absolute top-1 left-1 text-[5px] text-cyan-400 font-mono tracking-widest uppercase">CAM01</div>
          <div className="absolute bottom-1 right-1 text-[5px] text-green-400 font-mono animate-pulse uppercase">REC</div>
        </div>
        <div className="flex-grow flex flex-col gap-1.5 font-mono text-[6.5px]">
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">ATTENTION</span>
            <span className="text-cyan-400 font-bold">98.2%</span>
          </div>
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">ENGAGED</span>
            <span className="text-green-400 font-bold">TRUE</span>
          </div>
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">MOOD</span>
            <span className="text-purple-400 font-bold">CREATIVE</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'terminal') {
    return (
      <div className="w-full h-36 bg-zinc-950 border border-white/10 rounded-lg p-3 flex flex-col gap-1.5 font-mono text-[7px] text-emerald-400 relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
        <div className="flex items-center gap-1 border-b border-white/5 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span className="text-[6px] text-gray-600">nexus-router ~ bash</span>
        </div>
        <p className="text-gray-500">$ npm run router::listen</p>
        <p className="text-green-400">&gt; Starting Nexus routing matrix...</p>
        <p className="text-cyan-400">&gt; LLM Clusters bound: 4 endpoints.</p>
        <p className="text-yellow-400">&gt; Average throughput: 10,420 rps [OK]</p>
        <div className="absolute bottom-1 right-2 w-1.5 h-3 bg-green-500 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="w-full h-36 bg-zinc-950 border border-white/10 rounded-lg p-3 flex flex-col gap-1 font-mono text-[7.5px] text-gray-400 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
      <div className="flex items-center gap-1 border-b border-white/5 pb-1 justify-between">
        <span className="text-purple-400 font-bold">RAG ENGINE</span>
        <span className="text-green-400 animate-pulse">SYNCED</span>
      </div>
      <div className="space-y-1 mt-1">
        <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">INDEXED DOCS:</span> <span className="text-white font-bold">14,242 PDFs</span></p>
        <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">CHUNK OVERLAP:</span> <span className="text-white">128 tokens</span></p>
        <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">RETRIEVAL EXP:</span> <span className="text-cyan-400 font-bold">34ms latency</span></p>
      </div>
    </div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [filter, setFilter] = useState('all')

  const filteredProjects = projectsData.filter(
    (p) => filter === 'all' || p.category === filter
  )

  return (
    <section className="section-padding relative" id="projects" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
      <div className="orb w-80 h-80 bg-purple-700/5 top-1/3 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="tag tag-purple mb-4 inline-flex">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            SaaS &amp; AI <span className="gradient-text">Projects</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Explore our curated portfolio of premium digital storefronts and robust back-end AI orchestrators.
          </p>
        </motion.div>

        {/* Categories Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex glass rounded-2xl p-1.5 border border-white/10">
            {[
              { key: 'all', label: 'All Products' },
              { key: 'frontend', label: '🖥️ Frontend' },
              { key: 'backend', label: '⚙️ Backend' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === key ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {filter === key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid of Projects */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                className="glass rounded-2xl p-6 border border-white/5 flex flex-col h-full hover:border-purple-500/20 group relative transition-all duration-300"
              >
                {/* Featured Badge */}
                {project.isFeatured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-purple-500/15 border border-purple-500/30 rounded-full px-2.5 py-1 text-[9px] font-bold font-orbitron tracking-widest text-purple-300 uppercase shadow-[0_0_8px_rgba(139,92,246,0.2)]">
                    <Sparkles size={10} className="animate-pulse" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Simulated Mockup visual */}
                <div className="mb-5 relative group-hover:scale-[1.02] transition-transform duration-300">
                  <Mockup type={project.mockupType} />
                </div>

                {/* Card Title */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-purple-300 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <span className={`text-[9px] font-bold uppercase tracking-wider font-mono rounded px-2 py-0.5 border ${
                    project.category === 'frontend' 
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                      : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    {project.category}
                  </span>
                </div>

                {/* Card Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="tag tag-blue text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="w-full btn-outline flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-pointer mt-auto group-hover:bg-purple-600/10 group-hover:border-purple-500/40"
                >
                  <span>Request Custom Build</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </ScrollLink>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
