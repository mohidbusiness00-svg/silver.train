import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/coffeeData'

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1495474834386-c2a67c1ac396?w=1920" alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Coffee Blog</h1>
          <p className="text-cream-100/80">Stories, guides, and coffee culture</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Featured Post */}
        <div className="glass-card overflow-hidden mb-12 hover-lift">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto relative">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-bold text-gold-600 dark:text-gold-300 uppercase tracking-wider mb-3">Featured</span>
              <h2 className="font-display text-2xl font-bold mb-3 text-coffee-900 dark:text-cream-100">{blogPosts[0].title}</h2>
              <p className="text-coffee-600 dark:text-cream-200/70 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-coffee-500 dark:text-cream-200/50 mb-6">
                <span>{blogPosts[0].date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blogPosts[0].readTime}</span>
                <span>{blogPosts[0].author}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-300 font-medium hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2 text-coffee-800 dark:text-cream-100">{post.title}</h3>
                <p className="text-sm text-coffee-600 dark:text-cream-200/70 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-coffee-500 dark:text-cream-200/50">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
