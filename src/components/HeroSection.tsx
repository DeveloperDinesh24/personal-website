import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronRight,
  ArrowDown,
  Twitter,
} from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  setIsAboutOpen: (isOpen: boolean) => void
}

export default function HeroSection({ setIsAboutOpen }: HeroSectionProps) {
  return (
    <section
      id='home'
      className='min-h-dvh max-w-7xl mx-auto flex items-center md:gap-14 lg:gap-28 xl:gap-42 relative px-6'
    >
      <div className='max-[438px]:hidden flex flex-col gap-6 text-slate-500'>
        <a target='_blank'
          href='https://www.instagram.com/devloperdinesh'
          className='hover:text-indigo-500 transition-transform hover:-translate-y-1'
        >
          <Instagram size={25} />
        </a>
        <a target='_blank'
          href='https://www.linkedin.com/in/dinesh-singh-chauhan-a2b39933b/'
          className='hover:text-indigo-500 transition-transform hover:-translate-y-1'
        >
          <Linkedin size={25} />
        </a>
        <a target='_blank'
          href='https://x.com/Dinesh_676'
          className='hover:text-indigo-500 transition-transform hover:-translate-y-1'
        >
          <Twitter size={25} />
        </a>
        <a target='_blank'
          href='https://github.com/DeveloperDinesh24/'
          className='hover:text-indigo-500 transition-transform hover:-translate-y-1'
        >
          <Github size={25} />
        </a>
        <a target='_blank'
          href='mailto:1442dinesh6singh5@gmail.com'
          className='hover:text-indigo-500 transition-transform hover:-translate-y-1'
        >
          <Mail size={25} />
        </a>
      </div>

      <div className='text-center md:text-left pl-4 min-[438px]:pl-8 md:pl-20'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wide leading-tight font-['Nunito_Sans'] mb-8 italic">
            Stop Searching, <br /> Work With Me
          </h1>
          <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
            <button
              onClick={() => setIsAboutOpen(true)}
              className='bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-4 sm:px-10 sm:py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-indigo-600/20 cursor-pointer'
            >
              About Me{' '}
              <ChevronRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </button>
            <a
              href='#projects'
              className='px-5 py-4 sm:px-10 sm:py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-all text-white'
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
      <a
        href='#projects'
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 bg-white/5 rounded-full border border-white/10 hover:bg-[#ffffff20] transition-colors duration-300'
      >
        <ArrowDown size={20} className='text-white' />
      </a>
    </section>
  )
}
