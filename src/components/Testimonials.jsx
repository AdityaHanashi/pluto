import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Co-Founder & COO',
    company: 'NovaSpace SaaS',
    quote: "Pluto.ai built our core analytics interface and connected our n8n automation pipelines. Our operational turnaround went from days to minutes. A game-changing experience.",
    rating: 5,
    glow: 'rgba(139, 92, 246, 0.25)',
  },
  {
    name: 'Rohan Mehta',
    role: 'VP of Product',
    company: 'Orion CRM',
    quote: "The RAG search system engineered by Pluto.ai works flawlessly. It queries 20k pages of internal data and returns citations in under 50ms. Highly recommended.",
    rating: 5,
    glow: 'rgba(59, 130, 246, 0.25)',
  },
  {
    name: 'Elena Rostova',
    role: 'Founder',
    company: 'Synthetica AI',
    quote: "We needed a stunning digital storefront that felt premium, futuristic, and fast. Aditya and his team delivered a custom React setup that blew our investors away.",
    rating: 5,
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    name: 'Marcus Vance',
    role: 'CTO',
    company: 'Apex Ledger',
    quote: "Pluto automated our entire sales follow-up stack. AI voice agents qualify inbound leads, log data, and update our databases 24/7. Uptime and execution are bulletproof.",
    rating: 5,
    glow: 'rgba(236, 72, 153, 0.25)',
  },
]

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-sliding interval logic with hover pause
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered])

  return (
    <section className="section-padding relative overflow-hidden" id="testimonials" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag tag-purple mb-4 inline-flex font-mono">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Loved By <span className="text-[#C9A84C] font-extrabold">Innovators</span>
          </h2>
          <div className="title-underline" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            Hear from founders and product leads who have accelerated their businesses with Pluto.ai.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card */}
          <div className="min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 md:p-10 border border-white/5 w-full relative overflow-hidden"
                style={{ 
                  boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${testimonials[current].glow}`,
                  borderColor: testimonials[current].glow.replace('0.25', '0.4')
                }}
              >
                {/* Accent Flare */}
                <div 
                  className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: testimonials[current].glow }}
                />

                <div className="flex flex-col gap-6 relative z-10">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-yellow-500 text-yellow-500 shadow-sm" />
                      ))}
                    </div>
                    <Quote size={32} className="text-[#C9A84C]/20" />
                  </div>

                  {/* Quote text */}
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl font-medium leading-relaxed italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 mt-2">
                    {/* Dummy avatar representation */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#C9A84C] p-[2px] shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                      <div className="w-full h-full rounded-full bg-[#161311] flex items-center justify-center text-white font-orbitron font-bold text-sm">
                        {testimonials[current].name[0]}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base font-orbitron tracking-wider">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-gray-400 text-xs font-mono mt-0.5">
                        {testimonials[current].role} &bull; <span className="text-[#C9A84C] font-bold">{testimonials[current].company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#161311]/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C9A84C]/30 transition-all cursor-pointer z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#161311]/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C9A84C]/30 transition-all cursor-pointer z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  current === idx ? 'w-6 bg-[#C9A84C] shadow-[0_0_8px_#E8DFD8]' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials
