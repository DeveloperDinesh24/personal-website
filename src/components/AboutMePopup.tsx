import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface AboutMePopupProps {
  isAboutOpen: boolean
  setIsAboutOpen: (open: boolean) => void
}

export default function AboutMePopup({
  isAboutOpen,
  setIsAboutOpen,
}: AboutMePopupProps) {
  const TECH_STACK = [
    { name: 'HTML5', slug: 'html5', link: 'https://en.wikipedia.org/wiki/HTML5' },
    { name: 'CSS3', slug: 'css', link: 'https://en.wikipedia.org/wiki/CSS' },
    { name: 'JavaScript', slug: 'javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
    { name: 'TypeScript', slug: 'typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
    { name: 'React.js', slug: 'react', link: 'https://react.dev/' },
    { name: 'TailwindCSS', slug: 'tailwindcss', link: 'https://tailwindcss.com/' },
    { name: 'Git', slug: 'git', link: 'https://en.wikipedia.org/wiki/Git' },
    { name: 'GitHub', slug: 'github', link: 'https://github.com/' },
    { name: 'Netlify', slug: 'netlify', link: 'https://www.netlify.com/' },
    { name: 'Vercel', slug: 'vercel', link: 'https://vercel.com' },
    { name: 'Context API', slug: 'react', link: 'https://legacy.reactjs.org/docs/context.html' },
  ]

  return (
    <AnimatePresence>
      {isAboutOpen && (
        <div className='fixed inset-0 z-100 flex items-center justify-center p-4'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAboutOpen(false)}
            className='absolute inset-0 bg-slate-950/90 backdrop-blur-xl'
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className='relative w-full max-w-3xl bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar'
          >
            <button
              onClick={() => setIsAboutOpen(false)}
              className='absolute top-8 right-8 text-white cursor-pointer hover:rotate-90 transition-transform'
            >
              <X />
            </button>

            <h2 className="text-4xl font-black text-white mb-8 font-['Nunito_Sans'] uppercase tracking-wide">
              About
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-['Kite_One']">
              Hello there! I'm a frontend developer. I create modern clean
              websites using the latest tech stack, fully responsive, and I
              write clean reusable code. I'm continuously learning and growing
              to deliver the best user experiences.
            </p>

            <h3 className='text-sm font-black text-indigo-500 uppercase tracking-[0.3em] mb-8'>
              Tech Mastery
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {TECH_STACK.map((tech) => (
                <motion.a
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  key={tech.name}
                  href={tech.link}
                  target='_blank'
                  className='p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center gap-3 text-center'
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/6366f1`}
                    className='w-8 h-8'
                    alt={tech.name}
                  />
                  <span className='text-[10px] font-bold uppercase text-white tracking-widest'>
                    {tech.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
