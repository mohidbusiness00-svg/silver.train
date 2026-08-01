import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/coffeeData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1920" alt="FAQ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Frequently Asked Questions</h1>
          <p className="text-cream-100/80">Everything you need to know about Premium Coffee</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display text-lg font-semibold text-coffee-800 dark:text-cream-100">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold-600 dark:text-gold-300 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                <p className="px-5 pb-5 text-coffee-600 dark:text-cream-200/70">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center glass-card p-8">
          <h2 className="font-display text-2xl font-bold mb-3 text-coffee-900 dark:text-cream-100">Still Have Questions?</h2>
          <p className="text-coffee-600 dark:text-cream-200/70 mb-4">Our team is here to help. Reach out and we will be happy to assist.</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
