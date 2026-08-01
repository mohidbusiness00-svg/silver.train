import { X, Heart, ShoppingBag } from 'lucide-react'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'

export default function WishlistDrawer() {
  const { items, isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isWishlistOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-coffee-950/60 backdrop-blur-sm transition-opacity duration-300 ${isWishlistOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsWishlistOpen(false)} />
      <div className={`absolute right-0 top-0 bottom-0 w-96 max-w-[90vw] glass-nav shadow-glass-lg transition-transform duration-300 ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-coffee-200/50 dark:border-cream-50/10">
          <h2 className="font-display text-lg font-bold flex items-center gap-2 text-coffee-800 dark:text-cream-100">
            <Heart className="w-5 h-5" /> Wishlist
          </h2>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
            <Heart className="w-16 h-16 text-coffee-300 dark:text-cream-200/30 mb-4" />
            <p className="font-display text-lg text-coffee-700 dark:text-cream-200">Your wishlist is empty</p>
            <p className="text-sm text-coffee-500 dark:text-cream-200/50 mt-2">Save your favorites for later!</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            {items.map(item => (
              <div key={item.id} className="glass-card p-3 flex gap-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-coffee-800 dark:text-cream-100 truncate">{item.name}</h4>
                  <p className="text-sm text-gold-600 dark:text-gold-300 font-semibold">${item.price}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => { addToCart(item); removeFromWishlist(item.id) }} className="text-xs px-3 py-1.5 rounded-lg bg-coffee-700 dark:bg-coffee-600 text-cream-50 flex items-center gap-1 hover:bg-coffee-800 transition-colors">
                      <ShoppingBag className="w-3 h-3" /> Add to Cart
                    </button>
                    <button onClick={() => removeFromWishlist(item.id)} aria-label="Remove from wishlist" className="text-xs px-2 py-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
