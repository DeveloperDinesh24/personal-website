import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
  Twitter,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className='py-6 border-t border-white/5 bg-slate-950 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <span className="text-2xl font-black text-white font-['Nunito_Sans'] uppercase ">
            Dinesh
          </span>
          <p className="text-[10px] text-slate-500 font-['Kite_One'] uppercase tracking-[0.3em]">
            Copyright © {new Date().getFullYear()} Dinesh. All rights reserved.
          </p>
        </div>

        <div className='flex items-center gap-6 text-slate-400'>
          <a target='_blank'
            href='https://www.instagram.com/devloperdinesh'
            className='hover:text-indigo-500 transition-all hover:scale-110'
          >
            <Instagram size={20} />
          </a>
          <a target='_blank'
            href='https://www.linkedin.com/in/dinesh-singh-chauhan-a2b39933b/'
            className='hover:text-indigo-500 transition-all hover:scale-110'
          >
            <Linkedin size={20} />
          </a>
          <a target='_blank'
            href='https://x.com/Dinesh_676'
            className='hover:text-indigo-500 transition-all hover:scale-110'
          >
            <Twitter size={20} />
          </a>
          <a target='_blank'
            href='https://github.com/DeveloperDinesh24/'
            className='hover:text-indigo-500 transition-all hover:scale-110'
          >
            <Github size={20} />
          </a>
          <a target='_blank'
            href='mailto:1442dinesh6singh5@gmail.com'
            className='hover:text-indigo-500 transition-all hover:scale-110'
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='group flex flex-col items-center gap-2 transition-all cursor-pointer'
        >
          <div className='p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300'>
            <ArrowUp
              size={20}
              className='text-white group-hover:animate-pulse'
            />
          </div>
        </button>
      </div>
    </footer>
  )
}
