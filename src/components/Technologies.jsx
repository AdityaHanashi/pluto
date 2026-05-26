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
    <section className="section-padding relative overflow-hidden bg-black/40" id="technologies" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono-jb text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-3">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight">
            Tools
          </h2>
          <div className="title-underline mt-4" />
        </motion.div>

        {/* Floating Bubble Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 max-w-5xl mx-auto py-8">
          {tools.map((tech, idx) => {
            const Icon = tech.icon
            
            // Generate non-synchronized float parameters based on index
            const xAnim = idx % 2 === 0 ? [0, 8, -6, 5, 0] : [0, -7, 6, -4, 0]
            const yAnim = idx % 3 === 0 ? [0, -12, 7, -9, 0] : (idx % 3 === 1 ? [0, -8, 5, -6, 0] : [0, -10, 6, -8, 0])
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  x: xAnim,
                  y: yAnim
                } : {}}
                transition={inView ? {
                  opacity: { duration: 0.6, delay: idx * 0.03 },
                  scale: { duration: 0.6, delay: idx * 0.03 },
                  x: { duration: 6 + (idx % 5) * 1.5, repeat: Infinity, ease: 'easeInOut', delay: (idx % 4) * 0.4 },
                  y: { duration: 6.5 + (idx % 4) * 1.5, repeat: Infinity, ease: 'easeInOut', delay: (idx % 4) * 0.4 }
                } : {}}
                whileHover={{ 
                  scale: 1.18, 
                  borderColor: tech.color,
                  boxShadow: `0 0 25px ${tech.shadow}`,
                  zIndex: 20,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className="glass w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all duration-300 border border-white/5 relative group select-none shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Icon Container */}
                <div 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-1.5 transition-colors group-hover:bg-white/10"
                  style={{ color: tech.color }}
                >
                  <Icon size={20} className="stroke-[1.75]" />
                </div>
                {/* Text Label */}
                <span className="text-[9px] md:text-[10px] font-bold font-mono-jb text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
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
