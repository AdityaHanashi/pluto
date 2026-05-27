import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, Palette, Braces, Atom, Wind, 
  Terminal, Network, Database, Layers, 
  Binary, GitFork, Eye, Cpu, FileSpreadsheet, 
  Grid, Zap, Bot, SearchCode 
} from 'lucide-react'

const tools = [
  { name: 'HTML', icon: Code2, color: '#e34f26', shadow: 'rgba(227, 79, 38, 0.25)' },
  { name: 'CSS', icon: Palette, color: '#1572b6', shadow: 'rgba(21, 114, 182, 0.25)' },
  { name: 'JavaScript', icon: Braces, color: '#f7df1e', shadow: 'rgba(247, 223, 30, 0.2)' },
  { name: 'React', icon: Atom, color: '#61dafb', shadow: 'rgba(97, 218, 251, 0.3)' },
  { name: 'Tailwind CSS', icon: Wind, color: '#06b6d4', shadow: 'rgba(6, 182, 212, 0.3)' },
  { name: 'Node.js', icon: Terminal, color: '#339933', shadow: 'rgba(51, 153, 51, 0.25)' },
  { name: 'Express.js', icon: Network, color: '#ffffff', shadow: 'rgba(255, 255, 255, 0.15)' },
  { name: 'MongoDB', icon: Database, color: '#47a248', shadow: 'rgba(71, 162, 72, 0.25)' },
  { name: 'MERN Stack', icon: Layers, color: '#8b5cf6', shadow: 'rgba(139, 92, 246, 0.3)' },
  { name: 'Python', icon: Binary, color: '#3776ab', shadow: 'rgba(55, 118, 171, 0.25)' },
  { name: 'n8n', icon: GitFork, color: '#ff6d5a', shadow: 'rgba(255, 109, 90, 0.3)' },
  { name: 'OpenCV', icon: Eye, color: '#5c3ee8', shadow: 'rgba(92, 62, 232, 0.3)' },
  { name: 'PyTorch', icon: Cpu, color: '#ee4c2c', shadow: 'rgba(238, 76, 44, 0.3)' },
  { name: 'Pandas', icon: FileSpreadsheet, color: '#150458', shadow: 'rgba(21, 4, 88, 0.25)' },
  { name: 'NumPy', icon: Grid, color: '#013243', shadow: 'rgba(1, 50, 67, 0.25)' },
  { name: 'AI Automation', icon: Zap, color: '#a855f7', shadow: 'rgba(168, 85, 247, 0.3)' },
  { name: 'AI Agents', icon: Bot, color: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.3)' },
  { name: 'RAG Systems', icon: SearchCode, color: '#06b6d4', shadow: 'rgba(6, 182, 212, 0.3)' },
]

const Technologies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="py-24 relative overflow-hidden bg-black/40" id="technologies" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/5 blur-[130px] pointer-events-none" />

      {/* Main Glassmorphic Wrapper Panel for Section */}
      <div className="max-w-[94%] xl:max-w-[1360px] mx-auto px-6 relative z-10 glass rounded-3xl py-12 md:py-16 border border-white/5 shadow-2xl bg-black/10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-mono-jb text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-3">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight">
            Tools
          </h2>
          <div className="title-underline mt-4 mx-auto" />
        </motion.div>

        {/* Clean responsive grid where all 18 tools are fully visible */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-8">
          {tools.map((tech, idx) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="glass rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-white/5 relative group cursor-pointer transition-all duration-300 bg-black/40 h-28"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: tech.color,
                  boxShadow: `0 0 20px ${tech.shadow}`,
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                {/* Icon Container */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${tech.color}15`, 
                    color: tech.color,
                    border: `1px solid ${tech.color}25`
                  }}
                >
                  <Icon size={20} className="stroke-[1.75]" />
                </div>
                {/* Text Label */}
                <span className="text-[10px] font-bold font-mono-jb text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-200">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Technologies
