import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <section 
      className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-[#141110]"
      id="home"
    >
      {/* Cinematic Founder Background Video Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#141110]">
        {/* Blurred Background Layer (Fills the whole width, zero blank space) */}
        <video 
          autoPlay loop muted playsInline preload="auto" poster="/founder-poster.webp"
          className="hidden md:block absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-50"
        >
          <source src="/founder.mp4" type="video/mp4" />
        </video>

        {/* Sharp Foreground Layer */}
        <video 
          autoPlay loop muted playsInline preload="auto" poster="/founder-poster.webp"
          className="absolute inset-0 w-full h-full object-cover md:object-contain object-top drop-shadow-[0_0_30px_rgba(20,17,16,0.8)]"
        >
          <source src="/founder.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Luxury Overlay for Text Legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#141110] via-[rgba(20,17,16,0.85)] to-transparent z-10" />

      <div className="w-full h-full max-w-[98%] xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-20 flex flex-col justify-center items-center text-center mt-[20vh] md:mt-[30vh]">
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-[-0.02em] text-white leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto drop-shadow-lg"
        >
          AI Automation Systems That <span className="text-[#C9A84C] font-extrabold">Save Time</span> & Scale Businesses
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-normal font-sans drop-shadow-md"
        >
          We build AI agents, voice automation, websites, and custom business systems that help companies grow faster.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
        >
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-bold tracking-wide text-[#0E0E0E] bg-[#C9A84C] hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] transition-all cursor-pointer font-sans shadow-lg"
          >
            Book a Call
          </ScrollLink>
          
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            offset={-80}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-bold tracking-wide text-[#C9A84C] hover:text-[#0a0a0a] border border-[#C9A84C] bg-transparent hover:bg-[#C9A84C] transition-all cursor-pointer font-sans shadow-lg"
          >
            View Services
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
