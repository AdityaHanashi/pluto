import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, CornerDownLeft, Sparkles, LayoutDashboard, Briefcase, Zap } from 'lucide-react'
import { animateScroll as scroll, scroller } from 'react-scroll'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [showOptions, setShowOptions] = useState(true)
  const [optionsType, setOptionsType] = useState('main') // 'main', 'sections', 'services'
  const chatEndRef = useRef(null)

  // Initialize chat history from localStorage or default message
  useEffect(() => {
    const savedChat = localStorage.getItem('pluto_chat_history')
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat))
      } catch (e) {
        loadDefaultGreetings()
      }
    } else {
      loadDefaultGreetings()
    }
  }, [])

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    // Save to localStorage whenever messages change
    if (messages.length > 0) {
      localStorage.setItem('pluto_chat_history', JSON.stringify(messages))
    }
  }, [messages])

  const loadDefaultGreetings = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: 'Hello! Welcome to Pluto.ai. How can I help you today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ])
    setOptionsType('main')
    setShowOptions(true)
  }

  const handleOptionClick = (option) => {
    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: option.label,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMsg])
    setShowOptions(false)

    setTimeout(() => {
      processAction(option.action, option.value)
    }, 600)
  }

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80
      })
      return true
    }
    return false
  }

  const processAction = (action, value) => {
    let botResponse = ''
    let nextOptionsType = ''

    if (action === 'navigate_main') {
      botResponse = 'Which section of Pluto.ai would you like to visit?'
      nextOptionsType = 'sections'
    } else if (action === 'services_main') {
      botResponse = 'What services are you looking for?'
      nextOptionsType = 'services'
    } else if (action === 'contact_main') {
      botResponse = "Redirecting you to our contact details. Let's build something great!"
      scrollToSection('contact')
      nextOptionsType = 'main'
    } else if (action === 'scroll_to') {
      const success = scrollToSection(value)
      if (success) {
        botResponse = `Scrolling to the ${value.toUpperCase()} section... What services are you looking for?`
        nextOptionsType = 'services'
      } else {
        botResponse = `I tried to navigate to ${value}, but could not locate the section. What else can I assist you with?`
        nextOptionsType = 'main'
      }
    } else if (action === 'select_service') {
      if (value === 'cybersecurity') {
        botResponse = 'Cybersecurity systems are launching soon! We are building vulnerability audit pipelines. Meanwhile, feel free to fill out the contact form below to join our early waitlist.'
      } else if (value === 'services') {
        botResponse = 'We specialize in low-latency AI calling agents, n8n relays, and custom database integrations. Please fill out the contact form below to get started!'
      } else if (value === 'website-builder') {
        botResponse = 'We build high-performance React frontends, landing pages, corporate portfolios, and SaaS designs. Please fill out the contact form below with your requirements!'
      } else {
        botResponse = 'Excellent choice! Please fill out the contact form below with your timeline and requirements.'
      }
      scrollToSection('contact')
      nextOptionsType = 'main'
    }

    const botMsg = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponse,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, botMsg])
    setOptionsType(nextOptionsType)
    setShowOptions(true)
  }

  const handleSendText = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMsg])
    const typedText = inputText.toLowerCase().trim()
    setInputText('')
    setShowOptions(false)

    setTimeout(() => {
      // Direct keyword checks
      let botResponse = ''
      let nextOptionsType = 'main'
      let matched = false

      // Section check
      const sections = [
        { key: 'about', target: 'about' },
        { key: 'projects', target: 'projects' },
        { key: 'tools', target: 'technologies' },
        { key: 'skills', target: 'technologies' },
        { key: 'services', target: 'services' },
        { key: 'contact', target: 'contact' }
      ]
      for (const item of sections) {
        if (typedText.includes(item.key)) {
          const success = scrollToSection(item.target)
          if (success) {
            botResponse = `Scrolling you directly to the ${item.key.toUpperCase()} section. Do you need any of our services there?`
            nextOptionsType = 'services'
            matched = true
            break
          }
        }
      }

      // Special check for services scroll
      if (!matched && (typedText.includes('service') || typedText.includes('offer'))) {
        const success = scrollToSection('services')
        if (success) {
          botResponse = `Scrolling to the SERVICES section. Here are our main offerings. What can we build for you?`
          nextOptionsType = 'services'
          matched = true
        }
      }

      // Check specific service descriptions
      if (!matched) {
        if (typedText.includes('automation') || typedText.includes('chatbot') || typedText.includes('voice') || typedText.includes('n8n')) {
          botResponse = 'Pluto.ai delivers high-end AI Voice Agents, customized Chatbots, and automated n8n databases relays. Please fill out the contact form below so we can scope your automation requirements.'
          scrollToSection('contact')
          matched = true
        } else if (typedText.includes('web') || typedText.includes('design') || typedText.includes('builder') || typedText.includes('frontend') || typedText.includes('saas') || typedText.includes('portfolio')) {
          botResponse = 'We create gorgeous, fast React websites, high-conversion landing pages, SaaS platforms, and personal portfolios. Fill out the contact form below to get a design mockup!'
          scrollToSection('contact')
          matched = true
        } else if (typedText.includes('cyber') || typedText.includes('security') || typedText.includes('hack')) {
          botResponse = 'Cybersecurity services are coming soon! We are establishing vulnerability scans and database audits. You can join the waiting list by filling out the contact form below.'
          scrollToSection('contact')
          matched = true
        }
      }

      // Out-of-context response if no keyword matched
      if (!matched) {
        botResponse = "I don't know about this. I can only assist you with Pluto.ai sections, services, and contacting us."
        nextOptionsType = 'main'
      }

      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, botMsg])
      setOptionsType(nextOptionsType)
      setShowOptions(true)
    }, 700)
  }

  const clearChat = () => {
    localStorage.removeItem('pluto_chat_history')
    loadDefaultGreetings()
  }

  // Define buttons arrays
  const mainOptions = [
    { label: '🧭 Navigate Sections', action: 'navigate_main', value: null },
    { label: '⚙️ Explore Services', action: 'services_main', value: null },
    { label: '📬 Contact Info', action: 'contact_main', value: null }
  ]

  const sectionOptions = [
    { label: 'About', action: 'scroll_to', value: 'about' },
    { label: 'Skills', action: 'scroll_to', value: 'technologies' },
    { label: 'Projects', action: 'scroll_to', value: 'projects' },
    { label: 'Services', action: 'scroll_to', value: 'services' },
    { label: 'Contact', action: 'scroll_to', value: 'contact' }
  ]

  const serviceOptions = [
    { label: 'AI Automations', action: 'select_service', value: 'services' },
    { label: 'Website Builder', action: 'select_service', value: 'website-builder' },
    { label: 'Cybersecurity', action: 'select_service', value: 'cybersecurity' },
    { label: 'Back', action: 'navigate_main', value: null }
  ]

  const currentOptions = 
    optionsType === 'sections' ? sectionOptions : 
    optionsType === 'services' ? serviceOptions : mainOptions

  return (
    <div className="fixed bottom-6 z-50 font-sans" style={{ right: '24px' }}>
      
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#C9A84C] flex items-center justify-center text-white cursor-pointer shadow-[0_4px_25px_rgba(124,58,237,0.45)] border border-[#C9A84C]/20 relative group"
        aria-label="Chat assistant"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        
        {/* Glow indicator ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#C9A84C] opacity-0 group-hover:opacity-30 blur animate-pulse transition-opacity" />
      </motion.button>

      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            className="absolute bottom-20 right-0 sm:right-6 w-[calc(100vw-48px)] sm:w-[380px] md:w-[400px] h-[550px] max-h-[calc(100vh-120px)] flex flex-col bg-[#1f1a18] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[100]"
          >
            {/* Header */}
            <div className="bg-[#1f1a18] border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-white tracking-wide font-heading tracking-[-0.02em]">
                    Pluto Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono-jb">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={clearChat}
                className="text-[9px] font-bold font-mono-jb text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-wider px-2 py-1.5 rounded bg-white/5 border border-white/5 cursor-pointer"
              >
                Clear
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#C9A84C]/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-md bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] mr-2 shrink-0 mt-1">
                      <Bot size={12} />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] px-4 py-2.5 text-[13px] font-medium leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#C9A84C] text-[#0E0E0E] rounded-2xl rounded-tr-sm'
                        : 'bg-white/[0.02] border border-white/[0.08] text-gray-200 rounded-2xl rounded-tl-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`block text-[9px] text-right mt-1 ${msg.sender === 'user' ? 'text-black/50' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Empty State Prompt Cards */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mt-4">
                  {[
                    { text: 'What services do you offer?', icon: Zap, target: 'services' },
                    { text: 'Show me your projects', icon: LayoutDashboard, target: 'projects' },
                    { text: 'How do I get started?', icon: Briefcase, target: 'contact' }
                  ].map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick({ label: prompt.text, action: 'scroll_to', value: prompt.target })}
                      className="flex items-center gap-3 w-full text-left p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all cursor-pointer group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#C9A84C] group-hover:scale-110 transition-transform">
                        <prompt.icon size={14} />
                      </div>
                      <span className="text-[13px] text-gray-300 group-hover:text-white transition-colors">{prompt.text}</span>
                    </button>
                  ))}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Inline option buttons (Quick Action Chips) */}
            {showOptions && currentOptions.length > 0 && (
              <div className="px-4 py-3 bg-[#1f1a18] border-t border-white/[0.05] flex flex-nowrap overflow-x-auto gap-2 no-scrollbar">
                {currentOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="flex items-center gap-1.5 shrink-0 text-[12px] font-medium bg-[#1f1a18] border border-white/[0.1] hover:border-[#C9A84C]/50 text-gray-300 hover:text-[#C9A84C] px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
                  >
                    <Sparkles size={12} className="text-[#C9A84C]/70" />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Chatbot
