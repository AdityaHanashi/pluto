import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AIAutomation from './components/AIAutomation'
import LaborManagement from './components/LaborManagement'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <CustomCursor />
      <ParticleField />
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="ai-automation"><AIAutomation /></section>
        <section id="labor"><LaborManagement /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App

