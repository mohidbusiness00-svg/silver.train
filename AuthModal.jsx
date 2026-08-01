import { useState, useEffect } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function AuthModal() {
  const { isAuthOpen, authMode, closeAuth, login, signup } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isAuthOpen) {
      document.body.style.overflow = 'hidden'
      setForm({ name: '', email: '', password: '' })
      setErrors({})
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isAuthOpen])

  const validate = () => {
    const errs = {}
    if (authMode === 'signup' && !form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.password) errs.password = 'Password is required'
    else if (form.password.length < 6) errs.password = 'Minimum 6 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const userData = { name: form.name || form.email.split('@')[0], email: form.email }
    if (authMode === 'login') login(userData)
    else signup(userData)
  }

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isAuthOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-coffee-950/70 backdrop-blur-sm transition-opacity duration-300 ${isAuthOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeAuth} />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className={`glass-card p-8 w-full max-w-md transition-all duration-300 ${isAuthOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-coffee-800 dark:text-cream-100">
              {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button onClick={closeAuth} aria-label="Close" className="p-2 rounded-lg text-coffee-500 dark:text-cream-200/50">
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-coffee-600 dark:text-cream-200/70 mb-6">
            {authMode === 'login' ? 'Sign in to your account to continue' : 'Join us for the best coffee experience'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {authMode === 'signup' && (
              <div>
                <label htmlFor="auth-name" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <input
                    id="auth-name" type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400"
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label htmlFor="auth-email" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                <input
                  id="auth-email" type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="auth-pass" className="block text-sm font-medium text-coffee-700 dark:text-cream-200 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                <input
                  id="auth-pass" type={showPassword ? 'text' : 'password'} value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-11 pr-12 py-3 rounded-xl glass border-0 text-coffee-800 dark:text-cream-100 placeholder-coffee-400 outline-none focus:ring-2 focus:ring-gold-400"
                  placeholder="******"
                  aria-invalid={!!errors.password}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 text-coffee-400">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-gold-500 text-coffee-950 font-semibold hover:bg-gold-400 transition-colors">
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-coffee-500 dark:text-cream-200/50 mt-4">
            {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => useAuth().openAuth(authMode === 'login' ? 'signup' : 'login')} className="text-gold-600 dark:text-gold-300 font-medium hover:underline">
              {authMode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
