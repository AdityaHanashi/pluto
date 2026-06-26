import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, PlayCircle } from 'lucide-react'

const featuredProjects = [
  {
    id: 'cafe-website-1',
    title: 'Cafe Website (Frontend)',
    desc: 'Premium storefront and online ordering system for a futuristic coffee shop, highlighting brand identity and menu.',
    videoUrl: '/video1.mp4',
    posterUrl: '/photo1.webp',
    tags: ['Web Design', 'UI/UX'],
    stat: '3x lead response time',
  },
  {
    id: 'cafe-website-2',
    title: 'Cafe Website (Ordering)',
    desc: 'End-to-end automated ordering and inventory management system customized for high-volume hospitality environments.',
    videoUrl: '/video2_opt.mp4',
    posterUrl: '/photo2.webp',
    tags: ['Business Systems', 'Operations'],
    stat: '60% faster order processing',
  }
]

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!inView) {
      setIsPlaying(false)
    }
  }, [inView])

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass rounded-3xl overflow-hidden border border-white/10 group relative flex flex-col h-full"
      >
        {/* Video Container */}
        <div 
          className="relative w-full aspect-video bg-[#0a0a0f] overflow-hidden border-b border-white/5 cursor-pointer group/video"
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying && project.videoUrl ? (
            <video
              src={project.videoUrl}
              preload="none"
              loop
              playsInline
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <img loading="lazy" 
                src={project.posterUrl || '/photo-placeholder.webp'} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/video:bg-black/20 transition-all duration-300">
                <PlayCircle size={64} className="text-white/70 group-hover/video:text-white group-hover/video:scale-110 transition-all duration-300 drop-shadow-2xl" />
              </div>
            </>
          )}
          
          {/* Overlay gradient for premium feel */}
          {!isPlaying && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />}
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative z-10 bg-[#161311]/40">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-1 rounded-md border border-[#C9A84C]/20">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
              {project.title}
            </h3>
            {project.stat && (
              <div className="inline-block px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full text-[#C9A84C] text-[11px] font-medium tracking-wide mb-4">
                {project.stat}
              </div>
            )}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-normal">
              {project.desc}
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors w-fit z-20 relative cursor-pointer"
          >
            <span className="border-b border-[#C9A84C]/0 group-hover:border-[#C9A84C] transition-colors pb-0.5">
              View Project
            </span>
            <ExternalLink size={16} className="text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 border-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>

    {/* Project Pop-up Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-2xl bg-[#07070f] border border-white/10 rounded-3xl p-8 md:p-10 z-10 shadow-2xl"
        >
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
          <div className="flex items-center gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-2.5 py-1 rounded-md border border-[#C9A84C]/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 tracking-[-0.02em]">
            {project.title}
          </h3>
          <div className="w-full h-px bg-white/10 my-6" />
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-normal">
            {project.desc}
          </p>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0E0E0E] font-medium hover:bg-white transition-colors"
          >
            Close Details
          </button>
        </motion.div>
      </div>
    )}
    </>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative" id="projects" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="w-full px-4 md:px-12 lg:px-24 mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono-jb text-[10px] text-[#C9A84C] tracking-[0.2em] uppercase block mb-3">03 / Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-[-0.02em] leading-tight mb-6">
            Featured <span className="text-[#C9A84C] font-extrabold">Work</span>
          </h2>
          <div className="title-underline mb-12" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 min-[481px]:grid-cols-2 gap-10 w-full">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
