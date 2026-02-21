import { ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  const PROJECTS = [
    {
      id: 1,
      name: 'Weather Dashboard',
      img: 'https://images.unsplash.com/photo-1592210633468-15494191379c?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
    {
      id: 2,
      name: 'E-Commerce Frontend',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
    {
      id: 3,
      name: 'Premium Cafe Site',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
    {
      id: 4,
      name: 'SaaS Landing Page',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
    {
      id: 6,
      name: 'Personal Portfolio',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500',
      liveLink: '',
      codeLink: '',
    },
  ]

  return (
    <section id='projects' className='py-32 bg-slate-900/30 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-center text-4xl md:text-5xl font-black text-white mb-20 font-['Nunito_Sans'] uppercase">
          Latest Work
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className='bg-slate-950 border border-white/5 rounded-3xl overflow-hidden group hover:border-indigo-500/50 hover:scale-102 transition-transform duration-300'
            >
              <div className='h-56 overflow-hidden'>
                <a href={project.liveLink}>
                  <img
                    src={project.img}
                    alt={project.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                </a>
              </div>
              <div className='p-8'>
                <h3 className="text-xl font-bold text-white mb-6 font-['Nunito_Sans']">
                  {project.name}
                </h3>
                <div className='flex gap-4'>
                  <a
                    href={project.liveLink}
                    className='flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10'
                  >
                    Show Live <ExternalLink size={14} />
                  </a>
                  <a
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
