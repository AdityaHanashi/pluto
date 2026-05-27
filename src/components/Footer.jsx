import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react'
import GithubIcon from './GithubIcon'

// Self-contained premium inline SVG for LinkedIn
const LinkedinIcon = ({ className = '', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    {...props} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// Self-contained premium inline SVG for Twitter / X
const TwitterIcon = ({ className = '', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    {...props} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black/95 text-gray-400 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Decorative Gradient Line Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 via-amber-500/30 via-cyan-500/40 via-purple-500/40 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
      
      {/* Background flare */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="flex items-center gap-2 font-syne font-bold text-white text-xl tracking-wide cursor-pointer inline-flex group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-transform duration-200">
                P
              </div>
              <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
                PLUTO.AI
              </span>
            </ScrollLink>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              We design and engineer premium AI automation pipelines, custom neural agents, and modern frontend interfaces to accelerate business growth.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: GithubIcon, href: 'https://github.com/pluto-system', color: 'hover:text-purple-400', isGithub: true },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 transition-all ${item.color} hover:bg-white/10 hover:border-white/10`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 lg:pl-4 space-y-4">
            <h4 className="text-[10px] font-bold font-mono-jb uppercase text-white tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold font-mono-jb uppercase tracking-wider">
              {[
                { label: 'Home', to: 'home' },
                { label: 'About', to: 'about' },
                { label: 'AI Automation', to: 'ai-automation' },
                { label: 'Projects', to: 'projects' },
                { label: 'Contact', to: 'contact' },
              ].map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="hover:text-white text-gray-500 transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold font-mono-jb uppercase text-white tracking-widest">
              Founder Details
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="text-gray-300 font-semibold font-syne">
                Aditya Hanashi
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail size={14} className="text-purple-400 shrink-0" />
                <a href="mailto:buildwithpluto@gmail.com" className="hover:text-white transition-colors break-all font-mono-jb text-xs">
                  buildwithpluto@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href="tel:7022951232" className="hover:text-white transition-colors font-mono-jb text-xs">
                  7022951232
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a 
                  href="https://github.com/pluto-system" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1 font-mono-jb text-xs"
                >
                  github: pluto-system
                  <ExternalLink size={10} className="text-gray-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Systems Operations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold font-mono-jb uppercase text-white tracking-widest">
              Live Monitor
            </h4>
            <div className="glass border border-white/5 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest font-mono-jb">
                  Systems Nominal
                </span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal font-mono-jb">
                Pluto network cluster is fully active. Response queues clear automatically under 12 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom Bar Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-mono-jb uppercase tracking-wider">
          <p>© {currentYear} Pluto.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
