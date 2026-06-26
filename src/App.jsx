import React, { useState, useEffect, Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Technologies = lazy(() => import('./components/Technologies'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ParticleField = lazy(() => import('./components/ParticleField'))
const Chatbot = lazy(() => import('./components/Chatbot'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative min-h-screen bg-[#161311] overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <Suspense fallback={<div className="min-h-screen bg-[#161311]" />}>
          <ParticleField />
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="technologies"><Technologies /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <Chatbot />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App

