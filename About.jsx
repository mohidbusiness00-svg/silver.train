import { Coffee, Users, Award, Heart, Leaf, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Coffee, value: '50+', label: 'Coffee Varieties' },
    { icon: Users, value: '100K+', label: 'Happy Customers' },
    { icon: Award, value: '15', label: 'Awards Won' },
    { icon: Clock, value: '10 yrs', label: 'Of Excellence' }
  ]

  const values = [
    { icon: Heart, title: 'Passion', desc: 'Every cup is crafted with love and attention to detail that comes from genuine passion for coffee.' },
    { icon: Leaf, title: 'Sustainability', desc: 'We partner directly with farmers, ensuring fair trade and environmentally responsible practices.' },
    { icon: Award, title: 'Quality', desc: 'From bean selection to the final pour, we never compromise on quality. Ever.' },
    { icon: Users, title: 'Community', desc: 'More than a coffee shop — we are a gathering place for our community to connect and grow.' }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1453614512568-c4034d13c576?w=1920" alt="Coffee shop" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-4">Our Story</h1>
          <p className="text-cream-100/80 max-w-xl mx-auto">A decade of passion, dedication, and the pursuit of the perfect cup.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-6 text-coffee-900 dark:text-cream-100">From Humble Beginnings</h2>
        <div className="space-y-4 text-coffee-700 dark:text-cream-200/80 leading-relaxed">
          <p>It started in 2015 with a simple idea: that great coffee should be an experience, not just a drink. Our founder, after years of traveling through coffee regions in Ethiopia, Colombia, and Indonesia, returned home with a vision — to create a space where every cup tells a story.</p>
          <p>What began as a small corner cafe has grown into a beloved destination for coffee enthusiasts. We roast our beans in-house, train our baristas in the art and science of coffee, and source directly from farmers who share our commitment to quality and sustainability.</p>
          <p>Today, we are proud to serve over 100,000 customers annually, offering more than 50 varieties of coffee. But our mission remains the same: to craft the perfect cup, every single time.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-coffee-50 dark:bg-coffee-900/30 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-6 text-center hover-lift">
              <s.icon className="w-10 h-10 text-gold-500 mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-coffee-900 dark:text-cream-100">{s.value}</p>
              <p className="text-sm text-coffee-600 dark:text-cream-200/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12 text-coffee-900 dark:text-cream-100">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-6 hover-lift flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center flex-shrink-0">
                <v.icon className="w-7 h-7 text-gold-600 dark:text-gold-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1 text-coffee-800 dark:text-cream-100">{v.title}</h3>
                <p className="text-sm text-coffee-600 dark:text-cream-200/70">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
