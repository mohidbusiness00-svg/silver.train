import { createContext, useContext, useState, useCallback } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([])
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const addToWishlist = useCallback((product) => {
    setItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev
      return [...prev, product]
    })
  }, [])

  const removeFromWishlist = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }, [])

  const toggleWishlist = useCallback((product) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.filter(item => item.id !== product.id)
      }
      return [...prev, product]
    })
  }, [])

  const isInWishlist = useCallback((id) => {
    return items.some(item => item.id === id)
  }, [items])

  return (
    <WishlistContext.Provider value={{
      items, wishlistCount: items.length,
      isWishlistOpen, setIsWishlistOpen,
      addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used within WishlistProvider')
  return context
}
