import React, { useState, useEffect, useRef } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Solutions from './components/Solutions'
import ComingSoon from './components/ComingSoon'
import WhyPluto from './components/WhyPluto'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
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
        <section id="services"><Services /></section>
        <section id="technologies"><Technologies /></section>
        <section id="projects"><Projects /></section>
        <section id="solutions"><Solutions /></section>
        <section id="coming-soon"><ComingSoon /></section>
        <section id="why-pluto"><WhyPluto /></section>
        <section id="workflow"><Workflow /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
