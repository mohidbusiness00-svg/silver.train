import { Link } from 'react-router-dom'
import { Coffee, Users, GraduationCap, Truck, Package, Gift, ArrowRight } from 'lucide-react'
import { services } from '../data/coffeeData'

const iconMap = { Coffee, Users, GraduationCap, Truck, Package, Gift }

export default function Services() {
  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1495474834386-c2a67c1ac396?w=1920" alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Our Services</h1>
          <p className="text-cream-100/80">More than just coffee — an experience</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => {
            const Icon = iconMap[s.icon] || Coffee
            return (
              <div key={s.id} className="glass-card p-8 hover-lift text-center">
                <div className="w-20 h-20 rounded-2xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-gold-600 dark:text-gold-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-coffee-800 dark:text-cream-100">{s.title}</h3>
                <p className="text-sm text-coffee-600 dark:text-cream-200/70 mb-4">{s.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-gold-600 dark:text-gold-300 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center glass-card p-10">
          <h2 className="font-display text-3xl font-bold mb-4 text-coffee-900 dark:text-cream-100">Ready to Experience Premium Coffee?</h2>
          <p className="text-coffee-600 dark:text-cream-200/70 mb-6">Whether it is a casual visit, a private event, or a coffee subscription, we have you covered.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
