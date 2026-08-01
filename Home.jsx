import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Coffee, Leaf, Award, Truck, Heart, Quote, Send, Instagram } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'
import { products, reviews, galleryImages } from '../data/coffeeData'

// Scroll reveal hook
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

function Section({ children, className = '' }) {
  const { ref, visible } = useReveal()
  return <section ref={ref} className={`reveal ${visible ? 'active' : ''} ${className}`}>{children}</section>
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const bestSellers = products.filter(p => p.badge === 'Best Seller')
  const featured = products.filter(p => p.badge === 'Featured' || p.category === 'Single Origin').slice(0, 4)
  const instaImages = galleryImages.slice(0, 6)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920"
            alt="Coffee shop ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/50 to-cream-50 dark:to-coffee-950" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-cream-100 mb-6 animate-fade-in">
            ☕ Hand-crafted since 2015
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight animate-fade-up">
            The Art of
            <span className="block text-gradient-gold">Perfect Coffee</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-cream-100/80 max-w-2xl mx-auto animate-fade-up">
            Experience the finest artisanal coffee, hand-crafted with passion. Every cup tells a story of dedication, from bean to brew.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/menu" className="px-8 py-3.5 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-all duration-300 hover:shadow-gold flex items-center justify-center gap-2">
              Explore Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-xl glass text-cream-50 font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-cream-50/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-cream-50/60" />
          </div>
        </div>
      </section>

      {/* ===== Featured Products ===== */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold-600 dark:text-gold-300 uppercase tracking-widest">Our Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-coffee-900 dark:text-cream-100">Featured Coffee</h2>
          <p className="text-coffee-600 dark:text-cream-200/70 mt-4 max-w-xl mx-auto">Discover our hand-picked selection of the finest single-origin coffees from around the world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* ===== Best Sellers ===== */}
      <Section className="py-20 bg-coffee-50 dark:bg-coffee-900/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gold-600 dark:text-gold-300 uppercase tracking-widest">Customer Favorites</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-coffee-900 dark:text-cream-100">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </Section>

      {/* ===== Why Choose Us ===== */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gold-600 dark:text-gold-300 uppercase tracking-widest">Why Premium Coffee</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-coffee-900 dark:text-cream-100">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Coffee, title: 'Artisanal Roasting', desc: 'Every bean roasted in-house to perfection, ensuring maximum freshness and flavor.' },
            { icon: Leaf, title: 'Ethically Sourced', desc: 'Direct trade partnerships with farmers who share our commitment to quality and sustainability.' },
            { icon: Award, title: 'Award Winning', desc: 'Recognized by the Specialty Coffee Association for excellence in brewing and service.' },
            { icon: Truck, title: 'Fast Delivery', desc: 'Freshly roasted beans delivered to your door within 48 hours of roasting.' }
          ].map((f, i) => (
            <div key={i} className="glass-card p-6 hover-lift text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-8 h-8 text-gold-600 dark:text-gold-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-coffee-800 dark:text-cream-100">{f.title}</h3>
              <p className="text-sm text-coffee-600 dark:text-cream-200/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Customer Reviews ===== */}
      <Section className="py-20 bg-coffee-50 dark:bg-coffee-900/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gold-600 dark:text-gold-300 uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-coffee-900 dark:text-cream-100">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map(r => (
              <div key={r.id} className="glass-card p-6 hover-lift">
                <Quote className="w-8 h-8 text-gold-400 mb-3" />
                <p className="text-sm text-coffee-700 dark:text-cream-200/80 mb-4 italic">"{r.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                </div>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-sm text-coffee-800 dark:text-cream-100">{r.name}</p>
                    <p className="text-xs text-coffee-500 dark:text-cream-200/50">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== Special Offers ===== */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 sm:p-12">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500 text-coffee-950 text-xs font-bold uppercase tracking-wider mb-4">Limited Time</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-coffee-900 dark:text-cream-100">Get 20% Off Your First Order</h2>
              <p className="text-coffee-600 dark:text-cream-200/70 mb-6">Sign up for our newsletter and receive an exclusive discount on your first purchase. Plus, get early access to new arrivals and special promotions.</p>
              <Link to="/menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-coffee-700 dark:bg-coffee-600 text-cream-50 font-semibold hover:bg-coffee-800 transition-colors">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="h-64 md:h-full min-h-[300px] relative">
              <img src="https://images.unsplash.com/photo-1447932604641-86e4de6f4b0b?w=800" alt="Coffee beans" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-cream-50/50 dark:from-coffee-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Instagram Gallery ===== */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-gold-600 dark:text-gold-300 uppercase tracking-widest">@premiumcoffee</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-coffee-900 dark:text-cream-100">Follow Us on Instagram</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instaImages.map(img => (
              <a key={img.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative aspect-square rounded-2xl overflow-hidden">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-coffee-950/0 group-hover:bg-coffee-950/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== Newsletter ===== */}
      <Section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-gold-600 dark:text-gold-300" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-coffee-900 dark:text-cream-100">Join Our Coffee Community</h2>
          <p className="text-coffee-600 dark:text-cream-200/70 mb-8">Subscribe for exclusive offers, new arrivals, and coffee tips from our master baristas.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 px-5 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
            <button type="submit" className="px-6 py-3 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </form>
          {subscribed && <p className="text-gold-600 dark:text-gold-300 mt-4 animate-fade-in">✓ Thanks for subscribing! Check your inbox for a special offer.</p>}
        </div>
      </Section>
    </div>
  )
}
