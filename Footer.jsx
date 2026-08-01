import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ]

  return (
    <footer className="bg-coffee-950 text-cream-100 pt-16 pb-8 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl" role="img" aria-hidden="true">☕</span>
              <span className="font-display text-xl font-bold">
                Premium <span className="text-gradient-gold">Coffee</span>
              </span>
            </div>
            <p className="text-sm text-cream-200/70 leading-relaxed mb-4">
              Crafting the finest artisanal coffee experience since 2015. Every cup tells a story of passion, dedication, and the perfect bean.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-coffee-800 hover:bg-gold-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' }, { name: 'About Us', path: '/about' },
                { name: 'Menu', path: '/menu' }, { name: 'Our Coffee', path: '/our-coffee' },
                { name: 'Gallery', path: '/gallery' }, { name: 'Blog', path: '/blog' }
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-cream-200/70 hover:text-gold-300 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold-300">Services</h3>
            <ul className="space-y-2 text-sm">
              {['Coffee Subscription', 'Table Reservation', 'Catering', 'Barista Classes', 'Private Events', 'Gift Cards'].map(item => (
                <li key={item}><Link to="/services" className="text-cream-200/70 hover:text-gold-300 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold-300">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-cream-200/70">123 Coffee Lane, Portland, OR 97201</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="tel:+15035550199" className="text-cream-200/70 hover:text-gold-300 transition-colors">(503) 555-0199</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="mailto:hello@premiumcoffee.com" className="text-cream-200/70 hover:text-gold-300 transition-colors">hello@premiumcoffee.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-50/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream-200/50">&copy; {new Date().getFullYear()} Premium Coffee Shop. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/faq" className="text-cream-200/50 hover:text-gold-300 transition-colors">FAQ</Link>
            <Link to="/contact" className="text-cream-200/50 hover:text-gold-300 transition-colors">Contact</Link>
            <a href="#" className="text-cream-200/50 hover:text-gold-300 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
