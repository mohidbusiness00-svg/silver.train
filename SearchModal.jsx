import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { products, menuItems, blogPosts } from '../../data/coffeeData'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    const handler = (e) => setOpen(e.detail)
    window.addEventListener('search-toggle', handler)
    return () => window.removeEventListener('search-toggle', handler)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = query.length > 0
    ? [
        ...products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())).map(p => ({ type: 'Product', name: p.name, detail: `$${p.price}` })),
        ...menuItems.filter(m => m.name.toLowerCase().includes(query.toLowerCase())).map(m => ({ type: 'Menu', name: m.name, detail: `$${m.price}` })),
        ...blogPosts.filter(b => b.title.toLowerCase().includes(query.toLowerCase())).map(b => ({ type: 'Blog', name: b.title, detail: b.date }))
      ]
    : []

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-coffee-950/70 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
      <div className={`relative max-w-2xl mx-auto mt-20 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="glass-card p-4 mx-4">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-coffee-500 dark:text-cream-200/50" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search coffee, menu items, blog posts..."
              aria-label="Search"
              className="flex-1 bg-transparent text-coffee-800 dark:text-cream-100 placeholder-coffee-400 dark:placeholder-cream-200/40 outline-none text-lg"
            />
            <button onClick={() => setOpen(false)} aria-label="Close search" className="p-1 rounded-lg text-coffee-500 dark:text-cream-200/50">
              <X className="w-5 h-5" />
            </button>
          </div>

          {results.length > 0 && (
            <div className="max-h-96 overflow-y-auto space-y-2">
              {results.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors cursor-pointer">
                  <div>
                    <span className="text-xs font-medium text-gold-600 dark:text-gold-300 uppercase">{r.type}</span>
                    <p className="text-sm font-medium text-coffee-800 dark:text-cream-100">{r.name}</p>
                  </div>
                  <span className="text-sm text-coffee-500 dark:text-cream-200/50">{r.detail}</span>
                </div>
              ))}
            </div>
          )}

          {query.length > 0 && results.length === 0 && (
            <p className="text-center text-coffee-500 dark:text-cream-200/50 py-8">No results for "{query}"</p>
          )}

          {query.length === 0 && (
            <p className="text-center text-coffee-400 dark:text-cream-200/40 py-8 text-sm">Start typing to search across products, menu, and blog</p>
          )}
        </div>
      </div>
    </div>
  )
}
