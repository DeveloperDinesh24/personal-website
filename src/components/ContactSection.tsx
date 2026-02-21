export default function ContactSection() {
  return (
    <section id='contact' className='py-32 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-['Nunito_Sans'] leading-tight">
            Found what you're looking for? <br />
            <span className='text-indigo-500 italic'>Let's talk.</span>
          </h2>
        </div>
        <form className='space-y-6'>
          <input
            type='text'
            placeholder='Name'
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One']"
          />
          <input
            type='email'
            placeholder='Email'
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One']"
          />
          <textarea
            placeholder='Message'
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One'] resize-none"
          ></textarea>
          <button className='w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl font-black text-lg tracking-widest transition-all shadow-2xl shadow-indigo-600/30 cursor-pointer'>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
