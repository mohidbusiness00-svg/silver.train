import { useState } from 'react'
import { galleryImages } from '../data/coffeeData'
import { X } from 'lucide-react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const categories = ['All', 'Interior', 'Art', 'Beans', 'Brewing', 'Drinks']
  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(g => g.category === activeCategory)

  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920" alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Gallery</h1>
          <p className="text-cream-100/80">A visual journey through our coffee world</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium text-sm transition-all ${activeCategory === cat ? 'bg-gold-500 text-coffee-950 shadow-gold' : 'glass text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(img => (
            <button key={img.id} onClick={() => setLightbox(img)} className="group relative aspect-square rounded-2xl overflow-hidden hover-lift">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-coffee-950/0 group-hover:bg-coffee-950/30 transition-all duration-300" />
              <span className="absolute bottom-3 left-3 text-xs text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity bg-coffee-950/60 px-2 py-1 rounded-lg">{img.category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-coffee-950/90 backdrop-blur-sm p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute top-4 right-4 p-2 rounded-lg glass text-cream-50"><X className="w-6 h-6" /></button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-full rounded-2xl object-contain" />
        </div>
      )}
    </div>
  )
}
