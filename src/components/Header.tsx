export default function Header({ setIsAboutOpen }) {
  return (
    <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 font-['Kite_One']">
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        <div className="text-2xl font-['Nunito_Sans'] text-white font-bold tracking-wide">
          Dinesh
        </div>
        <div className='hidden md:flex gap-10 text-sm tracking-widest text-slate-400'>
          <a href='#home' className='hover:text-white transition-colors'>
            HOME
          </a>
          <a href='#projects' className='hover:text-white transition-colors'>
            PROJECTS
          </a>
          <button
            onClick={() => setIsAboutOpen(true)}
            className='hover:text-white transition-colors cursor-pointer'
          >
            ABOUT
          </button>
          <a href='#contact' className='hover:text-white transition-colors'>
            CONTACT
          </a>
        </div>
        <a
          href='#contact'
          className='bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-indigo-600/20'
        >
          Hire Me
        </a>
      </div>
    </nav>
  )
}
