import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Hourglass, RefreshCw, Cpu, Smartphone, Video, FileText, BarChart3, Building, ShieldCheck } from 'lucide-react'

const upcomingServices = [
  { icon: Cpu, name: 'AI SaaS Products', progress: 85, status: 'Launching Soon', color: 'from-purple-500 to-indigo-500' },
  { icon: Smartphone, name: 'Mobile Applications', progress: 60, status: 'In Development', color: 'from-blue-500 to-cyan-500' },
  { icon: ShieldCheck, name: 'Advanced AI Systems', progress: 40, status: 'In Development', color: 'from-pink-500 to-purple-500' },
  { icon: Video, name: 'AI Video Automation', progress: 75, status: 'In Development', color: 'from-orange-500 to-red-500' },
  { icon: FileText, name: 'AI Content Systems', progress: 90, status: 'Launching Soon', color: 'from-emerald-500 to-teal-500' },
  { icon: BarChart3, name: 'AI Analytics Platforms', progress: 50, status: 'In Development', color: 'from-cyan-500 to-blue-500' },
  { icon: Building, name: 'Enterprise AI Solutions', progress: 30, status: 'Coming Soon', color: 'from-indigo-500 to-purple-500' },
  { icon: Cpu, name: 'Custom AI Platforms', progress: 65, status: 'In Development', color: 'from-pink-500 to-rose-500' },
]

const ComingSoon = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section-padding relative overflow-hidden" id="coming-soon" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-purple mb-4 inline-flex items-center gap-1.5 font-mono">
            <Hourglass size={12} className="animate-spin" style={{ animationDuration: '4s' }} /> Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            More Services <span className="gradient-text">Coming Soon</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Our labs are active 24/7. Here is a sneak peek at the automated systems currently being developed and fine-tuned for release.
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingServices.map((service, idx) => {
            const Icon = service.icon
            
            // Set tag styling based on status
            let tagStyle = 'tag-blue'
            if (service.status === 'Launching Soon') tagStyle = 'tag-purple'
            if (service.status === 'Coming Soon') tagStyle = 'tag-orange'

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
                className="glass rounded-2xl p-6 border border-white/5 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Micro-shimmer on card background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
                
                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-all border border-white/5">
                      <Icon size={18} />
                    </div>
                    <span className={`tag ${tagStyle} text-[9px] uppercase tracking-wider font-bold`}>
                      {service.status}
                    </span>
                  </div>

                  <h3 className="text-white font-bold font-orbitron text-sm sm:text-base mb-4 tracking-wider group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                </div>

                {/* Progress bar and spinner */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <RefreshCw size={10} className="animate-spin text-purple-400" style={{ animationDuration: '3s' }} /> 
                      Compiling build...
                    </span>
                    <span className="text-purple-400 font-bold">{service.progress}%</span>
                  </div>
                  
                  {/* Bar */}
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${service.progress}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + idx * 0.05, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${service.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
