import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
    <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-6 pointer-events-none">
      <div className="glass bg-[#07070e]/80 backdrop-blur-md border border-white/5 rounded-full px-8 py-3.5 shadow-2xl flex items-center justify-center pointer-events-auto max-w-2xl w-auto">
        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-14">
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
                className={`relative text-[10px] font-bold tracking-[0.25em] transition-all duration-300 cursor-pointer block uppercase font-mono-jb ${
                  activeSection === item.to ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile View Toggle */}
        <div className="flex md:hidden items-center justify-between w-full gap-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white font-mono-jb uppercase">PLUTO.AI</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-6 right-6 md:hidden bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 pointer-events-auto"
          >
            <ul className="flex flex-col gap-4 text-center">
              {navItems.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-white uppercase font-mono-jb cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
