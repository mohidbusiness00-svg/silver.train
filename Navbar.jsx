import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Moon, Sun, ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'
import { navLinks } from '../../data/coffeeData'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { cartCount, setIsCartOpen } = useCart()
  const { wishlistCount, setIsWishlistOpen } = useWishlist()
  const { user, openAuth } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const event = new CustomEvent('search-toggle', { detail: searchOpen })
    window.dispatchEvent(event)
  }, [searchOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-glass py-2' : 'bg-transparent py-4'}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2" aria-label="Home">
              <span className="text-3xl" role="img" aria-hidden="true">☕</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-coffee-800 dark:text-cream-100">
                Premium <span className="text-gradient-gold">Coffee</span>
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-gold-600 dark:text-gold-300 bg-gold-50 dark:bg-gold-900/20'
                        : 'text-coffee-700 dark:text-cream-200 hover:text-gold-600 dark:hover:text-gold-300 hover:bg-coffee-50 dark:hover:bg-coffee-800/30'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button onClick={() => setSearchOpen(true)} aria-label="Search" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button onClick={() => setIsWishlistOpen(true)} aria-label="Wishlist" className="relative p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-coffee-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>
                )}
              </button>

              <button onClick={() => setIsCartOpen(true)} aria-label="Cart" className="relative p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-coffee-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>

              <button onClick={() => user ? navigate('/contact') : openAuth('login')} aria-label="Account" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                <User className="w-5 h-5" />
              </button>

              <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="lg:hidden p-2 rounded-lg text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-coffee-950/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] glass-nav shadow-glass-lg transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-coffee-200/50 dark:border-cream-50/10">
            <span className="font-display text-lg font-bold text-coffee-800 dark:text-cream-100">Menu</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-gold-600 dark:text-gold-300 bg-gold-50 dark:bg-gold-900/20'
                      : 'text-coffee-700 dark:text-cream-200 hover:bg-coffee-50 dark:hover:bg-coffee-800/30'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
