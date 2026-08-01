import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' | 'signup'

  const openAuth = useCallback((mode = 'login') => {
    setAuthMode(mode)
    setIsAuthOpen(true)
  }, [])

  const closeAuth = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const login = useCallback((userData) => {
    setUser(userData)
    setIsAuthOpen(false)
    localStorage.setItem('user', JSON.stringify(userData))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('user')
  }, [])

  const signup = useCallback((userData) => {
    setUser(userData)
    setIsAuthOpen(false)
    localStorage.setItem('user', JSON.stringify(userData))
  }, [])

  // Restore session
  useState(() => {
    const saved = localStorage.getItem('user')
    if (saved) {
      try { setUser(JSON.parse(saved)) } catch {}
    }
  })

  return (
    <AuthContext.Provider value={{
      user, isAuthOpen, authMode,
      openAuth, closeAuth, login, logout, signup
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
