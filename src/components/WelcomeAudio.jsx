import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play } from 'lucide-react'

const WelcomeAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false) // For manual play prompt if autoplay is blocked
  const [isFinished, setIsFinished] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    const attemptAutoplay = async () => {
      try {
        if (isMobile) {
          // Mobile browsers block autoplay entirely, so default to prompt
          setShowPrompt(true)
          return
        }

        // Attempt autoplay on desktop
        if (audioRef.current) {
          audioRef.current.volume = 0.8
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        // Autoplay was blocked
        console.warn('Autoplay prevented by browser:', error)
        setShowPrompt(true)
      }
    }

    // Small delay to ensure the component is fully mounted after loading screen disappears
    const timer = setTimeout(attemptAutoplay, 500)

    return () => clearTimeout(timer)
  }, [])

  const toggleMute = (e) => {
    e.stopPropagation()
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleManualPlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.play()
      setIsPlaying(true)
      setShowPrompt(false)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setIsFinished(true)
  }

  if (isFinished) return null

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/founder-voice.mp3" 
        onEnded={handleEnded} 
        onPlay={() => setIsPlaying(true)}
      />

      <AnimatePresence>
        {(isPlaying || showPrompt) && !isFinished && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-[100] cursor-pointer"
            onClick={showPrompt ? handleManualPlay : undefined}
          >
            <div className="glass bg-[#1f1a18]/90 backdrop-blur-md border border-[#C9A84C]/50 shadow-[0_4px_25px_rgba(201,168,76,0.15)] rounded-full pl-3 pr-4 py-2 flex items-center gap-3 transition-all duration-300 hover:bg-[#1f1a18] hover:border-[#C9A84C]">
              
              {showPrompt ? (
                <>
                  <div className="w-7 h-7 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
                    <Play size={14} className="ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-200 uppercase tracking-widest font-mono-jb">
                    Tap to hear a welcome
                  </span>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">
                    <Volume2 size={14} className="animate-pulse" />
                  </div>
                  <span className="text-xs font-semibold text-gray-200 uppercase tracking-widest font-mono-jb min-w-[140px]">
                    Aditya is speaking...
                  </span>
                  
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  
                  <button 
                    onClick={toggleMute}
                    className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WelcomeAudio
