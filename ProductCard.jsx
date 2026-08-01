import { Star, Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const wished = isInWishlist(product.id)

  return (
    <div className="glass-card hover-lift group overflow-hidden">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gold-500 text-coffee-950 shadow-gold">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <Heart className={`w-5 h-5 transition-colors ${wished ? 'fill-red-500 text-red-500' : 'text-coffee-700 dark:text-cream-200'}`} />
        </button>
      </div>

      <div className="p-5">
        <span className="text-xs font-medium text-gold-600 dark:text-gold-300 uppercase tracking-wider">{product.category}</span>
        <h3 className="font-display text-lg font-semibold mt-1 mb-1 text-coffee-800 dark:text-cream-100">{product.name}</h3>
        <p className="text-sm text-coffee-600 dark:text-cream-200/70 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
          <span className="text-sm font-medium text-coffee-700 dark:text-cream-200">{product.rating}</span>
          <span className="text-sm text-coffee-500 dark:text-cream-200/50">({product.rating} reviews)</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-coffee-800 dark:text-cream-100">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="px-4 py-2 rounded-xl bg-coffee-700 dark:bg-coffee-600 text-cream-50 font-medium text-sm hover:bg-coffee-800 dark:hover:bg-coffee-500 transition-all duration-300 hover:shadow-glass flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
