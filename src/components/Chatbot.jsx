import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, CornerDownLeft } from 'lucide-react'
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
      } else if (value === 'ai-automation') {
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
        { key: 'services', target: 'ai-automation' },
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
        const success = scrollToSection('ai-automation')
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
    { label: 'Services', action: 'scroll_to', value: 'ai-automation' },
    { label: 'Contact', action: 'scroll_to', value: 'contact' }
  ]

  const serviceOptions = [
    { label: 'AI Automations', action: 'select_service', value: 'ai-automation' },
    { label: 'Website Builder', action: 'select_service', value: 'website-builder' },
    { label: 'Cybersecurity', action: 'select_service', value: 'cybersecurity' },
    { label: 'Back', action: 'navigate_main', value: null }
  ]

  const currentOptions = 
    optionsType === 'sections' ? sectionOptions : 
    optionsType === 'services' ? serviceOptions : mainOptions

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white cursor-pointer shadow-[0_4px_25px_rgba(124,58,237,0.45)] border border-purple-500/20 relative group"
        aria-label="Chat assistant"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        
        {/* Glow indicator ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur animate-pulse transition-opacity" />
      </motion.button>

      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            className="absolute bottom-18 right-0 w-[350px] max-h-[500px] h-[500px] flex flex-col bg-[#07070e]/95 border border-white/10 rounded-2xl overflow-hidden glass shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Bot size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide uppercase font-syne">
                    Pluto Assistant
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-green-400 uppercase tracking-widest font-mono-jb">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={clearChat}
                className="text-[9px] font-bold font-mono-jb text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5"
              >
                Clear
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-purple-500/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-medium leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[8px] text-right mt-1 text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Inline option buttons */}
            {showOptions && currentOptions.length > 0 && (
              <div className="px-4 py-2.5 border-t border-white/5 bg-black/40 flex flex-wrap gap-1.5 justify-start">
                {currentOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[10px] font-semibold bg-purple-950/20 border border-purple-500/25 hover:border-purple-500/50 hover:bg-purple-900/30 text-purple-300 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form Footer */}
            <form 
              onSubmit={handleSendText}
              className="px-4 py-3 border-t border-white/10 bg-black/60 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask assistant or choose option..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-[#08080f]/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.3)] shrink-0"
                aria-label="Send message"
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Chatbot
