import { ExternalLink } from 'lucide-react'

import devtrackThumbnail from '../assets/devtrack-thumbnail.png'
import authSystemThumbnail from '../assets/auth-system-thumbnail.png'
import theShoeCompanyThumbnail from '../assets/the-shoe-company-thumbnail.png'
import yogaStudioThumbnail from '../assets/yoga-studio-thumbnail.png'
import cafeThumbnail from '../assets/xyz-cafe-thumbnail.png'

export default function ProjectsSection() {
  const PROJECTS = [
    {
      id: 1,
      name: 'DevTrack.io',
      img: devtrackThumbnail,
      liveLink: 'https://dinesh-devtrack.vercel.app/',
      codeLink: 'https://github.com/DeveloperDinesh24/job-application-tracker',
    },
    {
      id: 2,
      name: 'Auth System',
      img: authSystemThumbnail,
      liveLink: 'https://dinesh-auth-sys.vercel.app/',
      codeLink: 'https://github.com/developerDinesh24/auth-sys',
    },
    {
      id: 3,
      name: 'XYZ Cafe',
      img: cafeThumbnail,
      liveLink: 'https://dinesh-xyz-cafe.vercel.app/',
      codeLink: 'https://github.com/developerDinesh24/xyz-cafe',
    },
    {
      id: 4,
      name: 'The Shoe Company',
      img: theShoeCompanyThumbnail,
      liveLink: 'https://dinesh-the-shoe-company.vercel.app/',
      codeLink: 'https://github.com/DeveloperDinesh24/the-shoe-company',
    },
    {
      id: 5,
      name: 'Yoga Studio',
      img: yogaStudioThumbnail,
      liveLink: 'https://yoga-studio-website-kappa.vercel.app/',
      codeLink: 'https://github.com/DeveloperDinesh24/yoga-studio-website',
    },
  ]

  return (
    <section id='projects' className='py-32 bg-slate-900/30 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-center text-4xl md:text-5xl font-black text-white mb-20 font-['Nunito_Sans'] uppercase">
          Latest Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className='bg-slate-950 border border-white/5 rounded-3xl overflow-hidden group hover:border-indigo-500/50 hover:scale-102 transition-transform duration-300'
            >
              <div className='h-56 overflow-hidden'>
                <a href={project.liveLink} target='_blank'>
                  <img
                    src={project.img}
                    alt={project.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                </a>
              </div>
              <div className='p-8'>
                <h3 className="text-xl font-bold text-white mb-6 font-['Kite_One']">
                  {project.name}
                </h3>
                <div className='flex gap-4'>
                  <a
                    target='_blank'
                    href={project.liveLink}
                    className='flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10'
                  >
                    Show Live <ExternalLink size={14} />
                  </a>
                  <a
                    target='_blank'
                    href={project.codeLink}
                    className='flex-1 border border-white/10 text-white py-3 rounded-xl text-center font-bold text-sm hover:bg-white/5 transition-all'
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
