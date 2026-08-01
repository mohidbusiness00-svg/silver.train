import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import WhatsAppButton from './components/layout/WhatsAppButton'
import CartDrawer from './components/ui/CartDrawer'
import WishlistDrawer from './components/ui/WishlistDrawer'
import SearchModal from './components/ui/SearchModal'
import AuthModal from './components/ui/AuthModal'
import Loader from './components/ui/Loader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Menu = lazy(() => import('./pages/Menu'))
const OurCoffee = lazy(() => import('./pages/OurCoffee'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Services = lazy(() => import('./pages/Services'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="coffee-loader"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/our-coffee" element={<OurCoffee />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <AuthModal />
    </>
  )
}
