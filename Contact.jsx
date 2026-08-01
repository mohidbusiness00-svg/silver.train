import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Calendar, Users, Check } from 'lucide-react'

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [reservation, setReservation] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState({ contact: false, reservation: false })

  const validateContact = () => {
    const errs = {}
    if (!contactForm.name.trim()) errs.name = 'Required'
    if (!contactForm.email.trim()) errs.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) errs.email = 'Invalid email'
    if (!contactForm.message.trim()) errs.message = 'Required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleContact = (e) => {
    e.preventDefault()
    if (validateContact()) {
      setSubmitted({ ...submitted, contact: true })
      setContactForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted({ ...submitted, contact: false }), 3000)
    }
  }

  const handleReservation = (e) => {
    e.preventDefault()
    setSubmitted({ ...submitted, reservation: true })
    setReservation({ name: '', email: '', phone: '', date: '', time: '', guests: '2' })
    setTimeout(() => setSubmitted({ ...submitted, reservation: false }), 3000)
  }

  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Get in Touch</h1>
          <p className="text-cream-100/80">We would love to hear from you</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, title: 'Visit Us', lines: ['123 Coffee Lane', 'Portland, OR 97201'] },
            { icon: Phone, title: 'Call Us', lines: ['(503) 555-0199', 'Mon-Sun: 6:30 AM - 9 PM'] },
            { icon: Mail, title: 'Email Us', lines: ['hello@premiumcoffee.com', 'support@premiumcoffee.com'] }
          ].map((c, i) => (
            <div key={i} className="glass-card p-6 text-center hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-7 h-7 text-gold-600 dark:text-gold-300" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-coffee-800 dark:text-cream-100">{c.title}</h3>
              {c.lines.map((l, j) => <p key={j} className="text-sm text-coffee-600 dark:text-cream-200/70">{l}</p>)}
            </div>
          ))}
        </div>

        {/* Contact Form + Reservation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-coffee-900 dark:text-cream-100">Send a Message</h2>
            {submitted.contact && (
              <div className="mb-4 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex items-center gap-2">
                <Check className="w-5 h-5" /> Message sent! We will get back to you within 24 hours.
              </div>
            )}
            <form onSubmit={handleContact} className="space-y-4" noValidate>
              <div>
                <label htmlFor="c-name" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Name</label>
                <input id="c-name" type="text" value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="Your name" />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Email</label>
                <input id="c-email" type="email" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="you@example.com" />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-subject" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Subject</label>
                <input id="c-subject" type="text" value={contactForm.subject} onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="What is this about?" />
              </div>
              <div>
                <label htmlFor="c-message" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Message</label>
                <textarea id="c-message" rows="4" value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="Your message..." />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          {/* Reservation Form */}
          <div className="glass-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-coffee-900 dark:text-cream-100">Reserve a Table</h2>
            {submitted.reservation && (
              <div className="mb-4 p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex items-center gap-2">
                <Check className="w-5 h-5" /> Reservation request sent! We will confirm via phone.
              </div>
            )}
            <form onSubmit={handleReservation} className="space-y-4">
              <div>
                <label htmlFor="r-name" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Full Name</label>
                <input id="r-name" type="text" required value={reservation.name} onChange={e => setReservation({ ...reservation, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="Your name" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="r-email" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Email</label>
                  <input id="r-email" type="email" required value={reservation.email} onChange={e => setReservation({ ...reservation, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="r-phone" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Phone</label>
                  <input id="r-phone" type="tel" required value={reservation.phone} onChange={e => setReservation({ ...reservation, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400" placeholder="(503) 555-0199" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="r-date" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1"><Calendar className="w-4 h-4 inline" /> Date</label>
                  <input id="r-date" type="date" required value={reservation.date} onChange={e => setReservation({ ...reservation, date: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 outline-none focus:ring-2 focus:ring-gold-400 text-sm" />
                </div>
                <div>
                  <label htmlFor="r-time" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Time</label>
                  <input id="r-time" type="time" required value={reservation.time} onChange={e => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 outline-none focus:ring-2 focus:ring-gold-400 text-sm" />
                </div>
                <div>
                  <label htmlFor="r-guests" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1"><Users className="w-4 h-4 inline" /> Guests</label>
                  <select id="r-guests" value={reservation.guests} onChange={e => setReservation({ ...reservation, guests: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 outline-none focus:ring-2 focus:ring-gold-400 text-sm">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-coffee-700 dark:bg-coffee-600 text-cream-50 font-semibold hover:bg-coffee-800 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Reserve Table
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden rounded-2xl">
          <iframe
            title="Premium Coffee Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.342759994!2d-122.6841!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU1LjAiTiAxMjLCsDQwJzU2LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </section>
    </div>
  )
}
