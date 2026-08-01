import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { menuItems } from '../data/coffeeData'
import { useCart } from '../context/CartContext'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addToCart } = useCart()
  const categories = ['All', 'Coffee', 'Brewed', 'Cold', 'Dessert', 'Pastries']
  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter(m => m.category === activeCategory)

  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1461023058943-d2e2d4b7e1e0?w=1920" alt="Coffee menu" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Our Menu</h1>
          <p className="text-cream-100/80">Hand-crafted with the finest ingredients</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-coffee-950 shadow-gold'
                  : 'glass text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="glass-card p-5 hover-lift flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">☕</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-coffee-800 dark:text-cream-100">{item.name}</h3>
                <p className="text-sm text-coffee-600 dark:text-cream-200/70 line-clamp-1">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-display text-lg font-bold text-gold-600 dark:text-gold-300">${item.price}</span>
                  <button
                    onClick={() => addToCart({ id: `menu-${item.id}`, name: item.name, price: item.price, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', category: item.category, description: item.description, rating: 4.8 })}
                    aria-label={`Add ${item.name} to cart`}
                    className="w-9 h-9 rounded-lg bg-coffee-700 dark:bg-coffee-600 text-cream-50 flex items-center justify-center hover:bg-coffee-800 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
