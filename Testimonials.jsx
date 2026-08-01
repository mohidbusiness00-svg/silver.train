import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/coffeeData'

export default function Testimonials() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=1920" alt="Testimonials" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Testimonials</h1>
          <p className="text-cream-100/80">What our amazing customers say about us</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto glass-card p-8 text-center">
          <p className="font-display text-5xl font-bold text-gold-600 dark:text-gold-300">{avgRating}</p>
          <div className="flex justify-center gap-1 my-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />)}
          </div>
          <p className="text-sm text-coffee-600 dark:text-cream-200/70">Based on {reviews.length} reviews</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.id} className="glass-card p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-gold-400" />
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                </div>
              </div>
              <p className="text-coffee-700 dark:text-cream-200/80 italic mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-coffee-200/50 dark:border-cream-50/10">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-coffee-800 dark:text-cream-100">{r.name}</p>
                  <p className="text-xs text-coffee-500 dark:text-cream-200/50">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
