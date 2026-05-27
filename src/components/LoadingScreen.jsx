import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = [
    'Initializing AI Systems...',
    'Loading Neural Networks...',
    'Connecting to Pluto.ai...',
    'Welcome to the Future.',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.2
      })
    }, 25)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress > 20) setPhase(1)
    if (progress > 55) setPhase(2)
    if (progress > 85) setPhase(3)
  }, [progress])

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb w-96 h-96 bg-emerald-500/25 -top-20 -left-20" style={{ animationDelay: '0s' }} />
          <div className="orb w-80 h-80 bg-amber-500/20 -bottom-20 -right-20" style={{ animationDelay: '2s' }} />
          <div className="orb w-96 h-96 bg-cyan-500/20 -top-10 right-20" style={{ animationDelay: '4s' }} />
          <div className="orb w-80 h-80 bg-purple-600/20 bottom-20 -left-10" style={{ animationDelay: '6s' }} />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 via-amber-500 via-cyan-500 to-purple-600 flex items-center justify-center text-3xl font-bold font-orbitron animate-glow-pulse">
              P
            </div>
            {/* Orbit rings */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-spin-slow scale-150" />
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow scale-[2.2]" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          </div>

          <motion.h1
            className="text-4xl font-bold font-orbitron gradient-text mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            PLUTO.AI
          </motion.h1>

          <motion.p
            className="text-gray-500 text-sm tracking-widest uppercase mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building The Future
          </motion.p>

          {/* Progress bar */}
          <div className="w-80 h-[2px] bg-gray-800 rounded-full overflow-hidden relative mb-4">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 via-cyan-500 to-purple-600"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
            <div
              className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 rounded-full"
              style={{ left: `${Math.max(0, progress - 4)}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              className="text-emerald-400/80 text-sm tracking-wider font-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {phases[phase]}
            </motion.p>
          </AnimatePresence>

          <p className="text-gray-600 text-xs mt-2 font-mono">{Math.min(100, Math.round(progress))}%</p>
        </motion.div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
