import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isCartOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-coffee-950/60 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <div className={`absolute right-0 top-0 bottom-0 w-96 max-w-[90vw] glass-nav shadow-glass-lg transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-coffee-200/50 dark:border-cream-50/10">
          <h2 className="font-display text-lg font-bold flex items-center gap-2 text-coffee-800 dark:text-cream-100">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart" className="p-2 rounded-lg text-coffee-700 dark:text-cream-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
            <ShoppingBag className="w-16 h-16 text-coffee-300 dark:text-cream-200/30 mb-4" />
            <p className="font-display text-lg text-coffee-700 dark:text-cream-200">Your cart is empty</p>
            <p className="text-sm text-coffee-500 dark:text-cream-200/50 mt-2">Add some coffee to get started!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {items.map(item => (
                <div key={item.id} className="glass-card p-3 flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-coffee-800 dark:text-cream-100 truncate">{item.name}</h4>
                    <p className="text-sm text-coffee-600 dark:text-cream-200/70">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="w-7 h-7 rounded-lg glass flex items-center justify-center">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" className="w-7 h-7 rounded-lg glass flex items-center justify-center">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} aria-label="Remove item" className="ml-auto w-7 h-7 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-coffee-200/50 dark:border-cream-50/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-lg font-semibold text-coffee-800 dark:text-cream-100">Total</span>
                <span className="font-display text-xl font-bold text-gold-600 dark:text-gold-300">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-3 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors">
                Checkout
              </button>
              <button onClick={clearCart} className="w-full mt-2 py-2 text-sm text-coffee-500 dark:text-cream-200/50 hover:text-red-500 transition-colors">
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
