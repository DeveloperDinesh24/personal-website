import './App.css'
import { useState } from 'react'

import Header from './components/Header'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  return (
    <div className='bg-slate-950 text-slate-200 min-h-screen selection:bg-indigo-500/40 overflow-x-hidden'>
      <Header setIsAboutOpen={setIsAboutOpen} />
    </div>
  )
}

export default App