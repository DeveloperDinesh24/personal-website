import './App.css'
import { useState } from 'react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AboutMePopup from './components/AboutMePopup'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  return (
    <div className='bg-slate-950 text-slate-200 min-h-screen selection:bg-indigo-500/40 overflow-x-hidden'>
      <Header setIsAboutOpen={setIsAboutOpen} />
      <HeroSection setIsAboutOpen={setIsAboutOpen} />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      <AboutMePopup isAboutOpen={isAboutOpen} setIsAboutOpen={setIsAboutOpen} />
    </div>
  )
}

export default App