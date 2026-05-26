import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link as ScrollLink } from 'react-scroll'
import { Laptop, Server, Code2, Cpu, Sparkles, Terminal, ArrowUpRight } from 'lucide-react'

const projectsData = [
  // FRONTEND PROJECTS (2)
  {
    id: 'coffeeic',
    name: 'Coffeeic',
    category: 'frontend',
    isFeatured: true,
    description: 'A premium, high-fidelity storefront and booking application for a futuristic coffee shop, featuring a client-side AI recommendation engine for custom blends.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    mockupType: 'storefront',
    url: 'https://coffeeic.pluto.ai'
  },
  {
    id: 'apple-clone',
    name: 'Apple Website Clone',
    category: 'frontend',
    isFeatured: true,
    description: 'A cinematic clone of the Apple flagship landing pages featuring custom hardware modeling previews, viewport scroll-linked animations, and responsive assets.',
    tags: ['React', 'Vite', 'CSS Gradients'],
    mockupType: 'apple',
    url: 'https://apple.pluto.ai'
  },
  // BACKEND PROJECTS (3)
  {
    id: 'moody',
    name: 'Moody',
    category: 'backend',
    isFeatured: true,
    description: 'Low-latency emotion telemetry API backend processing real-time video feeds to classify facial expressions and output telemetry for business audits.',
    tags: ['Node.js', 'Express', 'OpenCV Bindings'],
    mockupType: 'vision',
    url: 'https://moody.pluto.ai'
  },
  {
    id: 'odonx',
    name: 'OdonX',
    category: 'backend',
    isFeatured: false,
    description: 'A distributed LLM-powered backend pipeline handling parallel context chunking, prompt safety auditing, and autonomous routing to optimal cloud models.',
    tags: ['Python', 'FastAPI', 'Redis Cache'],
    mockupType: 'odonx',
    url: 'https://odonx.pluto.ai'
  },
  {
    id: 'labour-management',
    name: 'Labour Management System',
    category: 'backend',
    isFeatured: false,
    description: 'Automated shift roster scheduling engine that uses intelligent allocation pipelines to assign factory workers based on availability, certs, and union rules.',
    tags: ['MongoDB', 'Express', 'JWT Auth'],
    mockupType: 'labour',
    url: 'https://roster.pluto.ai'
  },
  // PYTHON LLM PROJECTS (1)
  {
    id: 'age-gesture-scanner',
    name: 'Age & Gesture Scanner',
    category: 'python-ai',
    isFeatured: true,
    description: 'A Python system powered by convolutional networks and local LLMs that estimates age groups and maps hand gestures to execute local OS navigation controls.',
    tags: ['Python', 'PyTorch', 'MediaPipe', 'LLM'],
    mockupType: 'gesture',
    url: 'https://scanner.pluto.ai'
  }
]

const Mockup = ({ type }) => {
  if (type === 'storefront') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
        <div className="flex items-center justify-between border-b border-white/5 pb-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span className="text-[7px] text-gray-600 font-mono">coffeeic.pluto.ai</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-900 flex items-center justify-center text-white text-base font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]">
            ☕
          </div>
          <div className="flex-grow space-y-1">
            <div className="h-2 bg-white/10 rounded w-[85%]" />
            <div className="h-1.5 bg-white/5 rounded w-[55%]" />
            <div className="flex gap-1 mt-1">
              <span className="px-1 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[5px] text-amber-400 font-mono font-bold uppercase">AI Barista</span>
              <span className="px-1 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[5px] text-green-400 font-mono font-bold uppercase">Online</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'apple') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
        <div className="flex items-center justify-between border-b border-white/5 pb-1">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[7px] text-gray-600 font-mono">apple.pluto.ai/iphone</span>
        </div>
        <div className="flex-grow flex items-center justify-center gap-4 relative">
          <div className="w-8 h-10 rounded bg-zinc-900 border border-white/20 flex flex-col items-center justify-center text-[10px] relative">
            {/* Apple Logo Placeholder */}
            <span className="text-gray-400 font-bold scale-110"></span>
            <div className="absolute top-0.5 w-4 h-0.5 bg-black rounded" />
          </div>
          <div className="space-y-1 font-mono text-[7px]">
            <p className="text-white font-bold">iPhone 16 Pro Clone</p>
            <p className="text-gray-500">60 FPS WebGL rendering</p>
            <div className="h-1 bg-blue-500 w-[90%] rounded-full mt-1" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'vision') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-2.5 flex gap-2 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
        <div className="w-[45%] bg-zinc-950 border border-white/5 rounded flex flex-col items-center justify-center relative">
          <div className="w-8 h-8 rounded-full border border-dashed border-cyan-500/40 flex items-center justify-center animate-spin-slow">
            <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-[8px]">😊</div>
          </div>
          <div className="absolute inset-0 border border-cyan-500/20 rounded pointer-events-none" />
          <div className="absolute top-1 left-1 text-[5px] text-cyan-400 font-mono tracking-widest uppercase">NODE_01</div>
          <div className="absolute bottom-1 right-1 text-[5px] text-green-400 font-mono animate-pulse uppercase">FEED_OK</div>
        </div>
        <div className="flex-grow flex flex-col gap-1 font-mono text-[6.5px]">
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">EMOTION</span>
            <span className="text-cyan-400 font-bold">HAPPY</span>
          </div>
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">CONFIDENCE</span>
            <span className="text-green-400 font-bold">98.4%</span>
          </div>
          <div className="p-1 bg-zinc-900 border border-white/5 rounded flex items-center justify-between">
            <span className="text-gray-500">LATENCY</span>
            <span className="text-purple-400 font-bold">12ms</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'odonx') {
    return (
      <div className="w-full h-36 bg-zinc-950 border border-white/10 rounded-lg p-3 flex flex-col gap-1.5 font-mono text-[7px] text-purple-400 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
        <div className="flex items-center gap-1 border-b border-white/5 pb-1 justify-between">
          <span className="text-purple-400 font-bold">ODONX CORE API</span>
          <span className="text-green-400 font-bold">ONLINE</span>
        </div>
        <p className="text-gray-500">$ python -m odonx.main</p>
        <p className="text-cyan-300">&gt; Prompt context: 8,192 tokens</p>
        <p className="text-green-300">&gt; Distributed LLM route: GPT-4o [100% OK]</p>
        <p className="text-yellow-400">&gt; Tokens/sec: 142.4 tps</p>
        <div className="absolute bottom-1 right-2 w-1.5 h-3 bg-purple-500 animate-pulse" />
      </div>
    )
  }

  if (type === 'labour') {
    return (
      <div className="w-full h-36 bg-black/40 border border-white/10 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
        <div className="flex items-center justify-between border-b border-white/5 pb-1 font-mono text-[7px] text-gray-500">
          <span>ROSTER MANAGER</span>
          <span className="text-green-400 font-bold">ACTIVE</span>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-grow">
          <div className="bg-zinc-900 border border-white/5 rounded p-1 flex flex-col justify-between">
            <span className="text-[6px] text-gray-500 uppercase font-mono">Shift A allocation</span>
            <span className="text-white font-bold text-[8px] font-mono">14 Workers</span>
          </div>
          <div className="bg-zinc-900 border border-white/5 rounded p-1 flex flex-col justify-between">
            <span className="text-[6px] text-gray-500 uppercase font-mono">Compliance check</span>
            <span className="text-green-400 font-bold text-[8px] font-mono">PASSED</span>
          </div>
        </div>
        <div className="h-3 bg-zinc-900 rounded overflow-hidden relative border border-white/5">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[85%] rounded" />
        </div>
      </div>
    )
  }

  // age-gesture-scanner
  return (
    <div className="w-full h-36 bg-zinc-950 border border-white/10 rounded-lg p-2.5 flex gap-2 relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
      <div className="w-[50%] bg-black border border-white/5 rounded flex flex-col items-center justify-center relative overflow-hidden">
        {/* Wireframe hand gesture mockup */}
        <div className="w-14 h-14 rounded-full border border-dashed border-emerald-500/30 flex items-center justify-center relative">
          <span className="text-[14px] text-emerald-400 animate-pulse">✋</span>
          {/* Coordinates vector lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/10 pointer-events-none" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/10 pointer-events-none" />
        </div>
        <div className="absolute top-1 left-1 text-[5px] text-emerald-400 font-mono tracking-widest uppercase">GESTURE_V1</div>
        <div className="absolute bottom-1 left-1 text-[5px] text-cyan-400 font-mono uppercase font-bold">AGE: 24-28</div>
      </div>
      <div className="flex-grow flex flex-col justify-between font-mono text-[6.5px]">
        <div className="space-y-1">
          <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">INPUT:</span> <span className="text-white">WEBCAM</span></p>
          <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">GESTURE:</span> <span className="text-emerald-400 font-bold">SWIPE_LEFT</span></p>
          <p className="flex justify-between border-b border-white/5 pb-0.5"><span className="text-gray-600">ACTION:</span> <span className="text-cyan-400">NEXT_SLIDE</span></p>
        </div>
        <span className="text-[5.5px] text-gray-600">LOCAL LLM ACCURACY: 94%</span>
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
          <span className="tag tag-purple mb-4 inline-flex font-mono">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Our Custom <span className="gradient-text font-extrabold">Builds</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Explore our curated portfolio of premium interfaces, robust back-end clusters, and Python AI algorithms.
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
              { key: 'all', label: 'All Projects' },
              { key: 'frontend', label: '🖥️ Frontend' },
              { key: 'backend', label: '⚙️ Backend' },
              { key: 'python-ai', label: '🐍 Python & AI' },
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
                  <span className={`text-[8px] font-bold uppercase tracking-wider font-mono rounded px-2 py-0.5 border ${
                    project.category === 'frontend' 
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                      : project.category === 'backend'
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    {project.category.replace('-', ' ')}
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
