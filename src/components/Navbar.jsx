import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'technologies' },
  { label: 'Projects', to: 'projects' },
  { label: 'Services', to: 'ai-automation' },
  { label: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(124,58,237,0.06)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="flex items-center gap-2 font-syne font-bold text-white text-xl tracking-wide cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300">
            <span className="relative z-10 text-sm">P</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent group-hover:to-blue-400 transition-all duration-300 uppercase">
            Pluto.ai
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={600}
                  offset={-80}
                  onSetActive={() => setActiveSection(item.to)}
                  className="relative px-3.5 py-2 text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer block text-gray-400 hover:text-white uppercase font-mono-jb"
                  activeClass="text-purple-400"
                >
                  {item.label}
                  {/* Glowing active indicator dot */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 transition-all duration-300 pointer-events-none scale-0"
                    style={{
                      opacity: activeSection === item.to ? 1 : 0,
                      transform: activeSection === item.to ? 'translate(-50%, 4px) scale(1)' : 'translate(-50%, 4px) scale(0)',
                      boxShadow: '0 0 8px #7c3aed'
                    }}
                  />
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Styled exact "Hire Me" button in gold/amber */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="border border-blue-500 text-blue-500 flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase font-mono-jb hover:bg-blue-500 hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 cursor-pointer"
          >
            <span>Hire Me</span>
          </ScrollLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} className="text-purple-400" /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          >
            <ul className="flex flex-col py-6 px-6 gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-200 cursor-pointer uppercase"
                    activeClass="bg-purple-900/20 text-purple-400 border-purple-500/20"
                  >
                    <span className="font-semibold text-xs tracking-wider font-mono-jb">{item.label}</span>
                    <ChevronRight size={16} className="text-gray-600 group-hover:text-gray-400" />
                  </ScrollLink>
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-white/10">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-black cursor-pointer uppercase tracking-wider font-mono-jb"
                >
                  <span>Hire Me</span>
                </ScrollLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
