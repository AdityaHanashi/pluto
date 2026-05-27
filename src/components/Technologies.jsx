import React, { useState, useEffect, useRef } from 'react'
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
  const [angleY, setAngleY] = useState(0)
  const [angleX, setAngleX] = useState(0)
  const isHovered = useRef(false)

  useEffect(() => {
    let handle
    const update = () => {
      if (!isHovered.current) {
        setAngleY(prev => (prev + 0.0018) % (2 * Math.PI))
        setAngleX(prev => (prev + 0.0006) % (2 * Math.PI))
      }
      handle = requestAnimationFrame(update)
    }
    handle = requestAnimationFrame(update)
    return () => cancelAnimationFrame(handle)
  }, [])

  const radius = 230 // radius of 3D sphere

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
          className="text-center mb-16"
        >
          <span className="font-mono-jb text-[10px] text-purple-400 tracking-[0.2em] uppercase block mb-3">02 / Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white leading-tight">
            Tools
          </h2>
          <div className="title-underline mt-4" />
        </motion.div>

        {/* 3D Rotating Sphere Area */}
        <div 
          className="relative w-full max-w-2xl h-[520px] mx-auto flex items-center justify-center overflow-visible select-none"
          onMouseEnter={() => { isHovered.current = true }}
          onMouseLeave={() => { isHovered.current = false }}
        >
          {tools.map((tech, idx) => {
            const Icon = tech.icon
            const N = tools.length
            
            // Distribute items evenly using Fibonacci sphere / golden spiral distribution
            const phi = Math.acos(-1 + (2 * idx) / N)
            const theta = Math.sqrt(N * Math.PI) * phi + angleY
            const currentPhi = phi + angleX
            
            // Calculate 3D sphere coordinates
            const radX = Math.sin(currentPhi) * Math.cos(theta) * radius
            const radY = Math.cos(currentPhi) * radius
            const radZ = Math.sin(currentPhi) * Math.sin(theta) * radius
            
            // Tilt sphere slightly on X-axis for better perspective
            const tilt = 0.25
            const rotatedY = radY * Math.cos(tilt) - radZ * Math.sin(tilt)
            const rotatedZ = radZ * Math.cos(tilt) + radY * Math.sin(tilt)
            
            // Map rotated coordinates to 2D UI properties
            const scale = 0.65 + (rotatedZ + radius) / (2 * radius) * 0.55 // scale range [0.65, 1.20]
            const opacity = 0.35 + (rotatedZ + radius) / (2 * radius) * 0.65 // opacity range [0.35, 1.00]
            const blurAmount = Math.max(0, (radius - rotatedZ) * 0.018) // blur range based on depth
            const zIndex = Math.round(rotatedZ + radius)
            
            return (
              <div
                key={tech.name}
                className="absolute transition-all duration-75"
                style={{
                  transform: `translate3d(${radX}px, ${rotatedY}px, 0) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: `blur(${blurAmount}px)`,
                  left: 'calc(50% - 56px)', // Centered offset (half of w-28)
                  top: 'calc(50% - 56px)'   // Centered offset (half of h-28)
                }}
              >
                <motion.div
                  className="glass w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all duration-300 border border-white/5 relative group shadow-[0_4px_20px_rgba(0,0,0,0.3)] bg-black/60"
                  whileHover={{ 
                    scale: 1.15, 
                    borderColor: tech.color,
                    boxShadow: `0 0 25px ${tech.shadow}`,
                    zIndex: zIndex + 100,
                    transition: { duration: 0.18 }
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-1 transition-colors group-hover:bg-white/10"
                    style={{ color: tech.color }}
                  >
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  {/* Text Label */}
                  <span className="text-[9px] font-bold font-mono-jb text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-200">
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Technologies
