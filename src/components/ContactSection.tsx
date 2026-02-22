import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e: React.SubmitEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsSending(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon.", {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          })
          form.current?.reset()
        },
        (error) => {
          console.error('FAILED...', error.text)
          toast.error('Something went wrong. Try again!')
        },
      )
      .finally(() => setIsSending(false))
  }

  return (
    <section id='contact' className='py-32 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20'>
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-['Nunito_Sans'] leading-tight">
            Found what you're looking for? <br />
            <span className='text-indigo-500 italic'>Let's talk.</span>
          </h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
          <input
            required
            name='from_name'
            type='text'
            placeholder='Name'
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One']"
          />
          <input
            required
            name='reply_to'
            type='email'
            placeholder='Email'
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One']"
          />
          <textarea
            required
            name='message'
            placeholder='Message'
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white font-['Kite_One'] resize-none"
          ></textarea>
          <button
            type='submit'
            disabled={isSending}
            className='w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-black text-lg tracking-widest transition-all shadow-2xl shadow-indigo-600/30 cursor-pointer'
          >
            {isSending ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </section>
  )
}
