import { Coffee, Thermometer, Droplet, Mountain } from 'lucide-react'

export default function OurCoffee() {
  const origins = [
    { name: 'Ethiopia', region: 'Yirgacheffe', notes: 'Jasmine, Bergamot, Stone Fruit', altitude: '1,800-2,200m', img: 'https://images.unsplash.com/photo-1447932604641-86e4de6f4b0b?w=600' },
    { name: 'Colombia', region: 'Huila', notes: 'Caramel, Red Apple, Milk Chocolate', altitude: '1,500-1,900m', img: 'https://images.unsplash.com/photo-1587049352846-4a222e77460c?w=600' },
    { name: 'Indonesia', region: 'Sumatra', notes: 'Dark Chocolate, Cedar, Earth', altitude: '1,200-1,600m', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600' },
    { name: 'Brazil', region: 'Cerrado', notes: 'Nuts, Cocoa, Brown Sugar', altitude: '900-1,200m', img: 'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=600' }
  ]

  const process = [
    { icon: Mountain, title: 'Sourcing', desc: 'Direct trade partnerships with farmers in the world\'s best coffee regions.' },
    { icon: Droplet, title: 'Processing', desc: 'Carefully washed, natural, or honey processed to enhance unique flavors.' },
    { icon: Thermometer, title: 'Roasting', desc: 'Small-batch roasted in-house to bring out each bean\'s full potential.' },
    { icon: Coffee, title: 'Brewing', desc: 'Expertly brewed using the method best suited to each bean.' }
  ]

  return (
    <div className="pt-20">
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1447932604641-86e4de6f4b0b?w=1920" alt="Coffee beans" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coffee-950/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mb-2">Our Coffee</h1>
          <p className="text-cream-100/80">From bean to cup — the journey of perfection</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12 text-coffee-900 dark:text-cream-100">The Journey of Our Coffee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={i} className="glass-card p-6 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-8 h-8 text-gold-600 dark:text-gold-300" />
              </div>
              <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-coffee-800 dark:text-cream-100">{p.title}</h3>
              <p className="text-sm text-coffee-600 dark:text-cream-200/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origins */}
      <section className="py-20 bg-coffee-50 dark:bg-coffee-900/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-coffee-900 dark:text-cream-100">Coffee Origins</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {origins.map((o, i) => (
              <div key={i} className="glass-card overflow-hidden hover-lift">
                <div className="flex">
                  <img src={o.img} alt={`Coffee from ${o.name}`} loading="lazy" className="w-32 sm:w-40 h-full object-cover" />
                  <div className="p-5 flex-1">
                    <h3 className="font-display text-xl font-semibold text-coffee-800 dark:text-cream-100">{o.name}</h3>
                    <p className="text-sm text-gold-600 dark:text-gold-300">{o.region}</p>
                    <p className="text-sm text-coffee-600 dark:text-cream-200/70 mt-2">Flavor: {o.notes}</p>
                    <p className="text-xs text-coffee-500 dark:text-cream-200/50 mt-1">Altitude: {o.altitude}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
