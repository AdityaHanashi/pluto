import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Laptop, Server, Code2, Cpu, Sparkles, Terminal, 
  ArrowUpRight, Play, Database, RefreshCw, Eye, MessageSquare, Flame 
} from 'lucide-react'

// Pre-defined projects mapping to user specifications
const projectsData = [
  {
    id: 'coffeic',
    name: 'Coffeeic',
    category: 'frontend',
    desc: 'Premium storefront and online ordering system for a futuristic coffee shop, utilizing client-side context models for dynamic custom blends.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    liveURL: 'https://coffeic.pluto.ai',
    mockTitle: 'COFFEIC_ENGINE',
    mockDesc: 'Dynamic Barista Recommendation Engine'
  },
  {
    id: 'apple-clone',
    name: 'Apple Website Clone',
    category: 'frontend',
    desc: 'Cinematic flagship clone featuring custom responsive layout viewports, scroll-linked viewport transitions, and hardware wireframe modeling.',
    tags: ['React', 'Vite', 'CSS Gradients'],
    liveURL: 'https://apple.pluto.ai',
    mockTitle: 'APPLE_MODEL',
    mockDesc: 'Hardware Perspective Wireframe Mesh'
  },
  {
    id: 'moody',
    name: 'Moody',
    category: 'backend',
    desc: 'Low-latency face expression telemetry backend, reading real-time camera streams to output audit-ready commercial sentiment statistics.',
    tags: ['Node.js', 'Express', 'OpenCV'],
    liveURL: 'https://moody.pluto.ai',
    mockTitle: 'MOODY_ANALYTICS_V2',
    mockDesc: 'Real-Time Facial Expression Telemetry'
  },
  {
    id: 'odonx',
    name: 'OdonX',
    category: 'backend',
    desc: 'Distributed LLM pipeline backend conducting context chunking, prompt safety sanitizing, and autonomous API routing.',
    tags: ['Python', 'FastAPI', 'Redis'],
    liveURL: 'https://odonx.pluto.ai',
    mockTitle: 'ODONX_ROUTER_V1.1',
    mockDesc: 'Autonomous Context Safe Router'
  },
  {
    id: 'labour-management',
    name: 'Labour Management System',
    category: 'backend',
    desc: 'Automated shift scheduling platform linked directly to MySQL relational database tables. Custom query presets test scheduling and labor compliance variables.',
    tags: ['MySQL', 'Node.js', 'JWT Auth'],
    liveURL: 'https://roster.pluto.ai',
    mockTitle: 'MYSQL_ROSTER_DB',
    mockDesc: 'Local Relational Database Sync'
  },
  {
    id: 'age-gesture-scanner',
    name: 'Age & Gesture Scanner',
    category: 'python-ai',
    desc: 'Python deep learning application using convolutional networks to identify age brackets and translate hand gestures to execute local OS navigation controls.',
    tags: ['Python', 'PyTorch', 'MediaPipe'],
    liveURL: 'https://scanner.pluto.ai',
    mockTitle: 'LANDMARK_CLASSIFIER_V3',
    mockDesc: 'Webcam Face & Gesture Landmark Tracker'
  }
]

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [filter, setFilter] = useState('all')
  const [selectedSandbox, setSelectedSandbox] = useState(null)
  
  // MySQL Sandbox state variables
  const [activeSqlIdx, setActiveSqlIdx] = useState(0)
  const [isExecutingSql, setIsExecutingSql] = useState(false)
  const [sqlQueries, setSqlQueries] = useState([
    {
      title: 'Fetch Active Shift Roster',
      query: 'SELECT e.name, e.role, s.shift_name, s.hours_allotted, s.status FROM employees e INNER JOIN shifts s ON e.id = s.employee_id;',
      data: [
        { name: 'Aditya Hanashi', role: 'Founder/Admin', shift: 'Night Shift', hours: 45, status: 'Active' },
        { name: 'Rohan Sharma', role: 'AI Operator', shift: 'Morning Shift', hours: 40, status: 'Active' },
        { name: 'Sarah Jenkins', role: 'Support Agent', shift: 'Afternoon Shift', hours: 38, status: 'On Break' }
      ]
    },
    {
      title: 'Audit Weekly Compliance',
      query: 'SELECT name, role, weekly_hours FROM employees WHERE weekly_hours > 40; -- MySQL Compliance Audit',
      data: [
        { name: 'Aditya Hanashi', role: 'Founder/Admin', shift: 'System Sync', hours: 52, status: 'Overtime +12h' }
      ]
    }
  ])
  const [sqlConsoleResult, setSqlConsoleResult] = useState(sqlQueries[0].data)
  
  // Coffeic Sandbox state variables
  const [coffeicChoice, setCoffeicChoice] = useState('Espresso')
  const [coffeicRecommendation, setCoffeicRecommendation] = useState('AI recommendation: Bold Nitro Blend - calculated via user intent telemetry.')

  // Gesture Tracker state variables
  const [gestureTriggered, setGestureTriggered] = useState('NONE')
  const [faceAge, setFaceAge] = useState(24)

  const handleSqlSelect = (idx) => {
    setActiveSqlIdx(idx)
    setIsExecutingSql(true)
    setTimeout(() => {
      setSqlConsoleResult(sqlQueries[idx].data)
      setIsExecutingSql(false)
    }, 550)
  }

  const triggerGestureSimulation = (gesture) => {
    setGestureTriggered(gesture)
    setFaceAge(Math.floor(Math.random() * 8) + 21)
    setTimeout(() => {
      setGestureTriggered('NONE')
    }, 1500)
  }

  const handleCoffeicChoice = (drink) => {
    setCoffeicChoice(drink)
    const recs = {
      'Espresso': 'AI recommendation: Dark Roasted Cocoa Shot - optimized for analytical stamina.',
      'Cold Brew': 'AI recommendation: Mint Infused Ice Brew - optimized for creative flow.',
      'Macchiato': 'AI recommendation: Sweetened Almond Milk Blend - optimized for communication metrics.'
    }
    setCoffeicRecommendation(recs[drink])
  }

  const filteredProjects = projectsData.filter(
    (p) => filter === 'all' || p.category === filter
  )

  return (
    <section className="py-24 relative bg-black" id="projects" ref={ref}>
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[94%] xl:max-w-[1360px] mx-auto px-6 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-black/10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="font-mono-jb text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-3">03 / Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight">
            Selected <span className="gradient-text font-extrabold">Work</span>
          </h2>
          <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
            Click on any project to launch its interactive testing simulator (such as local MySQL queries, gesture algorithms, or system APIs).
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex glass rounded-2xl p-1.5 border border-white/10">
            {[
              { key: 'all', label: 'All Builds' },
              { key: 'frontend', label: '🖥️ Frontend' },
              { key: 'backend', label: '⚙️ Backend' },
              { key: 'python-ai', label: '🐍 Python & AI' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
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
        </div>

        {/* Projects List Layout */}
        <div className="flex flex-col gap-3">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                borderColor: "rgba(168, 85, 247, 0.35)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(124, 58, 237, 0.12)"
              }}
              onClick={() => setSelectedSandbox(project.id)}
              className="glass rounded-[20px] p-6 md:px-8 md:py-6 border border-white/5 flex flex-col md:grid md:grid-cols-[auto_1fr_auto_auto] items-center gap-6 md:gap-8 group cursor-pointer transition-colors duration-300"
            >
              {/* Project index */}
              <span className="font-mono-jb text-[11px] text-purple-400/50 group-hover:text-purple-400 transition-colors min-w-[32px]">
                0{idx + 1}
              </span>

              {/* Project details */}
              <div className="text-left w-full">
                <h3 className="text-lg font-bold font-syne text-white group-hover:text-purple-300 transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {project.desc}
                </p>
              </div>

              {/* Project stack */}
              <div className="flex flex-wrap gap-1.5 md:justify-end w-full md:w-auto">
                {project.tags.map(t => (
                  <span key={t} className="font-mono-jb text-[9px] text-purple-300 bg-purple-950/25 border border-purple-500/10 px-2 py-0.5 rounded-[5px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="font-mono-jb text-sm text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1.5 transition-all duration-300">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zero Gravity Sandbox Overlay Modal */}
      <AnimatePresence>
        {selectedSandbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass max-w-4xl w-full border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSandbox(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-gray-400 hover:text-red-400 transition-all cursor-pointer font-bold font-orbitron"
              >
                ✕
              </button>

              {/* Title Header */}
              <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <Terminal size={16} className="text-purple-400 animate-pulse" />
                <div>
                  <h3 className="font-orbitron font-bold text-sm tracking-wide text-white">
                    {projectsData.find(p => p.id === selectedSandbox)?.mockTitle}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-mono tracking-wider">
                    {projectsData.find(p => p.id === selectedSandbox)?.mockDesc}
                  </p>
                </div>
              </div>

              {/* SANDBOX INTERNAL GRAPHICS */}
              <div className="p-6 md:p-8">
                
                {/* 1. MYSQL LABOUR MANAGEMENT SANDBOX */}
                {selectedSandbox === 'labour-management' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      {sqlQueries.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSqlSelect(idx)}
                          className={`text-left p-3.5 rounded-xl border text-xs font-semibold font-mono transition-all duration-300 cursor-pointer ${
                            activeSqlIdx === idx
                              ? 'bg-blue-600/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                              : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {q.title}
                        </button>
                      ))}
                    </div>

                    {/* Console Code Editor */}
                    <div className="p-5 bg-black/60 font-mono text-[11px] text-emerald-400/90 rounded-2xl border border-white/5">
                      <textarea
                        readOnly
                        value={sqlQueries[activeSqlIdx].query}
                        className="w-full bg-transparent border-none text-emerald-400 font-mono h-14 focus:outline-none focus:ring-0 resize-none leading-relaxed"
                      />
                      <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-3">
                        <span className="text-[9px] text-gray-500">Query processed on local pluto_labor_db</span>
                        <span className="text-[9px] text-emerald-400/80 uppercase font-bold tracking-widest">● MySQL Connected</span>
                      </div>
                    </div>

                    {/* SQL Table Output */}
                    <div className="overflow-x-auto glass rounded-2xl border border-white/5 p-4">
                      <table className="w-full text-left text-xs font-medium text-gray-300">
                        <thead className="bg-white/5 text-[9px] text-gray-500 font-mono uppercase tracking-widest">
                          <tr>
                            <th className="px-4 py-2 border-b border-white/5">Employee</th>
                            <th className="px-4 py-2 border-b border-white/5">DB Role</th>
                            <th className="px-4 py-2 border-b border-white/5">Roster Shift</th>
                            <th className="px-4 py-2 border-b border-white/5 text-center">Tally</th>
                            <th className="px-4 py-2 border-b border-white/5 text-right">MySQL Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <AnimatePresence mode="wait">
                            {isExecutingSql ? (
                              <tr>
                                <td colSpan={5} className="py-8 text-center text-gray-500 font-mono">
                                  <RefreshCw size={12} className="animate-spin inline-block mr-1.5 text-blue-400" />
                                  Running local MySQL parser query...
                                </td>
                              </tr>
                            ) : (
                              sqlConsoleResult.map((row, i) => (
                                <motion.tr
                                  key={i}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2, delay: i * 0.05 }}
                                  className="border-b border-white/5 hover:bg-white/5"
                                >
                                  <td className="px-4 py-3 font-bold text-white font-orbitron">{row.name}</td>
                                  <td className="px-4 py-3 font-mono text-gray-400">{row.role}</td>
                                  <td className="px-4 py-3 font-mono text-gray-300">{row.shift}</td>
                                  <td className="px-4 py-3 font-mono text-center text-white">{row.hours} hrs</td>
                                  <td className="px-4 py-3 text-right">
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                      {row.status}
                                    </span>
                                  </td>
                                </motion.tr>
                              ))
                            )}
                          </AnimatePresence>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 2. COFFEIC SANDBOX */}
                {selectedSandbox === 'coffeic' && (
                  <div className="space-y-6">
                    <p className="text-gray-400 text-sm">
                      Simulate Coffeeic's client-side user intent custom blending algorithm. Select a base coffee to prompt the local context model:
                    </p>
                    <div className="flex gap-4">
                      {['Espresso', 'Cold Brew', 'Macchiato'].map(drink => (
                        <button
                          key={drink}
                          onClick={() => handleCoffeicChoice(drink)}
                          className={`px-5 py-3 rounded-xl border font-semibold font-orbitron text-xs transition-all duration-300 cursor-pointer ${
                            coffeicChoice === drink
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                              : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                          }`}
                        >
                          ☕ {drink}
                        </button>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-amber-950/10 border border-amber-500/20 rounded-2xl text-xs font-mono text-amber-300/90 leading-relaxed shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                      <p className="font-bold uppercase tracking-wider text-[10px] text-amber-500 mb-2">✦ Telemetry Prompt Output</p>
                      {coffeicRecommendation}
                    </div>
                  </div>
                )}

                {/* 3. AGE & GESTURE SCANNER */}
                {selectedSandbox === 'age-gesture-scanner' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Fake Camera Feed Box */}
                      <div className="relative aspect-video rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                        {/* Wireframe Hand landmarks */}
                        <div className="w-20 h-20 rounded-full border border-dashed border-emerald-500/30 flex items-center justify-center relative scale-110">
                          <span className="text-3xl text-emerald-400 animate-pulse">✋</span>
                          {/* Coordinates vector lines */}
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/20" />
                          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/20" />
                        </div>
                        
                        <div className="absolute top-3 left-3 text-[10px] text-emerald-400 font-mono tracking-widest uppercase">WEBCAM_STREAM_A</div>
                        <div className="absolute bottom-3 left-3 text-[10px] text-cyan-400 font-mono uppercase font-bold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                          Estimated Age: {faceAge}
                        </div>
                        {gestureTriggered !== 'NONE' && (
                          <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center border border-emerald-500/40 animate-ping" />
                        )}
                      </div>

                      {/* Gesture controls */}
                      <div className="flex flex-col justify-center space-y-4">
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Simulate local media pipelines mapping gestures. Tap a gesture below to trigger localized OS control hooks:
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => triggerGestureSimulation('SWIPE_LEFT')}
                            className="btn-outline py-3 rounded-xl font-mono text-[10px] uppercase font-bold text-gray-300 hover:text-white cursor-pointer"
                          >
                            👈 Swipe Left
                          </button>
                          <button
                            onClick={() => triggerGestureSimulation('SWIPE_RIGHT')}
                            className="btn-outline py-3 rounded-xl font-mono text-[10px] uppercase font-bold text-gray-300 hover:text-white cursor-pointer"
                          >
                            👉 Swipe Right
                          </button>
                        </div>
                        
                        <div className="p-4 bg-emerald-950/10 border border-emerald-500/20 rounded-xl font-mono text-[10px] text-emerald-300">
                          <p className="font-bold uppercase tracking-wider text-[9px] mb-1">Gesture Event Logs</p>
                          <p>STATE: <span className="text-white font-bold">{gestureTriggered}</span></p>
                          <p>ACTION: <span className="text-cyan-400">{gestureTriggered === 'NONE' ? 'AWAITING_INPUT' : 'OS_NAV_TRIGGERED'}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. APPLE WEBSITE CLONE */}
                {selectedSandbox === 'apple-clone' && (
                  <div className="space-y-6">
                    <p className="text-gray-400 text-sm">
                      Interact with Apple flagpole responsive hardware model wireframe previews:
                    </p>
                    <div className="relative h-48 rounded-2xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{ rotateY: 360, rotateX: [15, 30, 15] }}
                        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                        className="w-24 h-40 border-2 border-purple-500/40 rounded-2xl relative flex items-center justify-center"
                        style={{ transformStyle: 'preserve-3d', perspective: '500px' }}
                      >
                        <div className="absolute w-2 h-2 rounded-full bg-purple-400 top-2" />
                        <div className="w-[85%] h-[90%] border border-dashed border-blue-500/30 rounded-xl" />
                      </motion.div>
                      <div className="absolute bottom-3 left-3 text-[10px] text-gray-500 font-mono">DRAG MOUSE OVER PAGE TO ROTATE MESH</div>
                    </div>
                  </div>
                )}

                {/* 5. MOODY EMOTION CLASSIFIER */}
                {selectedSandbox === 'moody' && (
                  <div className="space-y-6">
                    <p className="text-gray-400 text-sm">
                      Read live output metrics from low-latency emotion telemetry classification models:
                    </p>
                    <div className="space-y-3 glass p-5 rounded-2xl border border-white/5">
                      {[
                        { label: 'CALM / COMPOSITIVE', val: 78, color: 'from-blue-500 to-indigo-500' },
                        { label: 'ENGAGED / ATTENTIVE', val: 18, color: 'from-purple-500 to-pink-500' },
                        { label: 'SURPRISE / ANOMALY', val: 4, color: 'from-amber-500 to-red-500' }
                      ].map(bar => (
                        <div key={bar.label} className="space-y-1">
                          <div className="flex justify-between font-mono text-[9px] text-gray-400">
                            <span>{bar.label}</span>
                            <span className="font-bold text-white">{bar.val}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} style={{ width: `${bar.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. ODONX LLM PIPELINE */}
                {selectedSandbox === 'odonx' && (
                  <div className="space-y-6">
                    <p className="text-gray-400 text-sm">
                      Inspect the routing checks executing on distributed LLM pipelines:
                    </p>
                    <div className="p-5 bg-black/60 border border-white/10 rounded-2xl font-mono text-[10px] space-y-2 text-gray-300">
                      <p className="text-purple-400">⚡ Initializing Prompt Sanitizer...</p>
                      <p className="text-green-400">✔ Input safety checks: PASSED (Prompt matches compliance policies)</p>
                      <p className="text-cyan-400">▶ Routing context tokens to Optimal Node Cluster [Llama-3-70B]...</p>
                      <p className="text-gray-500">Latency: 0.12s | Output tokens cached to Redis successfully.</p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
