// Centralized data for the coffee shop

export const products = [
  { id: 1, name: 'Ethiopian Yirgacheffe', price: 18.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600', description: 'Bright and floral with notes of bergamot and jasmine.', rating: 4.9, badge: 'Best Seller' },
  { id: 2, name: 'Colombian Supremo', price: 16.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1587049352846-4a222e77460c?w=600', description: 'Smooth, well-balanced with caramel and nutty undertones.', rating: 4.7, badge: 'Featured' },
  { id: 3, name: 'Sumatra Mandheling', price: 19.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600', description: 'Full-bodied with earthy, chocolatey depth.', rating: 4.8 },
  { id: 4, name: 'Espresso Blend', price: 22.99, category: 'Blends', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', description: 'Rich, bold, and creamy — perfect for espresso lovers.', rating: 5.0, badge: 'Best Seller' },
  { id: 5, name: 'Cold Brew Reserve', price: 24.99, category: 'Cold Brew', image: 'https://images.unsplash.com/photo-1461023058943-d2e2d4b7e1e0?w=600', description: 'Smooth, low-acid cold brew with chocolate notes.', rating: 4.8, badge: 'Featured' },
  { id: 6, name: 'Decaf House Blend', price: 15.99, category: 'Blends', image: 'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=600', description: 'All the flavor, none of the caffeine. Smooth and mellow.', rating: 4.6 },
  { id: 7, name: 'Caramel Macchiato', price: 6.99, category: 'Drinks', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600', description: 'Espresso with steamed milk and caramel drizzle.', rating: 4.9, badge: 'Best Seller' },
  { id: 8, name: 'Cappuccino Classico', price: 5.49, category: 'Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', description: 'Equal parts espresso, steamed milk, and foam.', rating: 4.8 }
]

export const menuItems = [
  { id: 1, name: 'Flat White', price: 5.49, category: 'Coffee', description: 'Velvety microfoam over double ristretto' },
  { id: 2, name: 'Caffè Latte', price: 5.99, category: 'Coffee', description: 'Espresso with silky steamed milk' },
  { id: 3, name: 'Americano', price: 4.49, category: 'Coffee', description: 'Espresso shots with hot water' },
  { id: 4, name: 'Mocha', price: 6.49, category: 'Coffee', description: 'Espresso, chocolate, and steamed milk' },
  { id: 5, name: 'Pour Over', price: 5.99, category: 'Brewed', description: 'Hand-poured single origin, brewed to order' },
  { id: 6, name: 'French Press', price: 6.49, category: 'Brewed', description: 'Full immersion brewing for rich flavor' },
  { id: 7, name: 'Cold Brew', price: 5.49, category: 'Cold', description: '18-hour steeped, smooth and low-acid' },
  { id: 8, name: 'Iced Latte', price: 6.49, category: 'Cold', description: 'Espresso with cold milk over ice' },
  { id: 9, name: 'Affogato', price: 7.49, category: 'Dessert', description: 'Vanilla gelato drowned in espresso' },
  { id: 10, name: 'Tiramisu', price: 8.99, category: 'Dessert', description: 'Classic Italian dessert with coffee-soaked ladyfingers' },
  { id: 11, name: 'Croissant', price: 4.99, category: 'Pastries', description: 'Buttery, flaky, and freshly baked' },
  { id: 12, name: 'Cinnamon Roll', price: 5.49, category: 'Pastries', description: 'Warm, gooey, and topped with cream cheese glaze' }
]

export const reviews = [
  { id: 1, name: 'Sarah Mitchell', avatar: 'https://i.pravatar.cc/100?img=1', rating: 5, text: 'The Ethiopian Yirgacheffe completely changed how I think about coffee. The floral notes are incredible — like drinking a bouquet of jasmine.', date: '2 weeks ago' },
  { id: 2, name: 'James Chen', avatar: 'https://i.pravatar.cc/100?img=3', rating: 5, text: 'Best coffee shop in the city, hands down. The atmosphere is warm and inviting, and the baristas are true artisans. The cold brew is unmatched.', date: '1 month ago' },
  { id: 3, name: 'Emily Rodriguez', avatar: 'https://i.pravatar.cc/100?img=5', rating: 5, text: 'I came for the coffee and stayed for the experience. The pour-over bar is a must-try. Knowledgeable staff who clearly love what they do.', date: '3 weeks ago' },
  { id: 4, name: 'Michael Okafor', avatar: 'https://i.pravatar.cc/100?img=8', rating: 4, text: 'Great coffee and lovely ambiance. The espresso blend is top-tier. Only wish they had more seating during peak hours.', date: '1 week ago' },
  { id: 5, name: 'Aisha Patel', avatar: 'https://i.pravatar.cc/100?img=9', rating: 5, text: 'The caramel macchiato here is the best I have ever had. Perfectly balanced, not too sweet. The atmosphere makes you want to stay all day.', date: '5 days ago' },
  { id: 6, name: 'David Thompson', avatar: 'https://i.pravatar.cc/100?img=12', rating: 5, text: 'A true gem. From the moment you walk in, the aroma envelops you. The Sumatra Mandheling is my go-to — rich, bold, unforgettable.', date: '2 months ago' }
]

export const blogPosts = [
  { id: 1, title: 'The Art of Pour-Over: A Complete Guide', excerpt: 'Master the pour-over brewing method with our step-by-step guide to achieving the perfect cup.', image: 'https://images.unsplash.com/photo-1495474834386-c2a67c1ac396?w=800', date: 'Aug 1, 2026', author: 'Barista Team', readTime: '8 min' },
  { id: 2, title: 'Exploring Ethiopian Coffee Regions', excerpt: 'From Yirgacheffe to Sidamo, discover the unique flavor profiles of Ethiopia\'s coffee growing regions.', image: 'https://images.unsplash.com/photo-1447932604641-86e4de6f4b0b?w=800', date: 'Jul 25, 2026', author: 'Coffee Sourcing', readTime: '12 min' },
  { id: 3, title: 'Cold Brew vs Iced Coffee: What\'s the Difference?', excerpt: 'Understanding the key differences between cold brew and iced coffee, and which one is right for you.', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba52dba?w=800', date: 'Jul 18, 2026', author: 'Editorial Team', readTime: '6 min' },
  { id: 4, title: 'Sustainable Coffee: From Farm to Cup', excerpt: 'How we partner with farmers to bring you ethically sourced, sustainable coffee.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', date: 'Jul 10, 2026', author: 'Sustainability', readTime: '10 min' }
]

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600', alt: 'Coffee shop interior', category: 'Interior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1453614512568-c4034d13c576?w=600', alt: 'Latte art', category: 'Art' },
  { id: 3, src: 'https://images.unsplash.com/photo-1447932604641-86e4de6f4b0b?w=600', alt: 'Coffee beans', category: 'Beans' },
  { id: 4, src: 'https://images.unsplash.com/photo-1495474834386-c2a67c1ac396?w=600', alt: 'Pour over coffee', category: 'Brewing' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517701550927-30cf4ba52dba?w=600', alt: 'Iced coffee', category: 'Drinks' },
  { id: 6, src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600', alt: 'Espresso shot', category: 'Brewing' },
  { id: 7, src: 'https://images.unsplash.com/photo-1461023058943-d2e2d4b7e1e0?w=600', alt: 'Cold brew', category: 'Drinks' },
  { id: 8, src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600', alt: 'Caramel macchiato', category: 'Art' },
  { id: 9, src: 'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=600', alt: 'Coffee cup', category: 'Drinks' }
]

export const faqs = [
  { q: 'What are your operating hours?', a: 'We are open Monday through Friday 6:30 AM – 8:00 PM, and weekends 7:00 AM – 9:00 PM.' },
  { q: 'Do you offer coffee subscriptions?', a: 'Yes! We offer weekly, bi-weekly, and monthly subscription boxes. Choose your beans, roast level, and grind size. Subscribers save 15% on every order.' },
  { q: 'Can I reserve a table in advance?', a: 'Absolutely. Use our online reservation form on the Contact page, or call us directly. We recommend booking for groups of 4 or more during peak hours.' },
  { q: 'Do you have vegan and dairy-free options?', a: 'Yes, we offer oat milk, almond milk, and soy milk as substitutes. Most of our pastries also have vegan options available daily.' },
  { q: 'Is WiFi available?', a: 'Yes, we offer complimentary high-speed WiFi for all customers. Ask any barista for the password.' },
  { q: 'Do you sell whole bean coffee?', a: 'Yes! All our single origins and blends are available as whole beans or freshly ground to your preference. You can purchase in-store or online.' },
  { q: 'Can I host an event at your coffee shop?', a: 'We love hosting community events! Contact us through the Contact page with details about your event, and we will get back to you within 48 hours.' },
  { q: 'Do you offer gift cards?', a: 'Yes, digital and physical gift cards are available in any amount from $10 to $200. Purchase them in-store or through our website.' }
]

export const services = [
  { id: 1, icon: 'Coffee', title: 'Specialty Coffee', description: 'Hand-crafted coffee using single-origin beans roasted in-house daily.' },
  { id: 2, icon: 'Users', title: 'Private Events', description: 'Host your next gathering in our beautiful, intimate space with custom catering.' },
  { id: 3, icon: 'GraduationCap', title: 'Barista Classes', description: 'Learn the art of coffee from our master baristas in hands-on workshops.' },
  { id: 4, icon: 'Truck', title: 'Catering Services', description: 'Premium coffee catering for corporate events, weddings, and special occasions.' },
  { id: 5, icon: 'Package', title: 'Coffee Subscription', description: 'Freshly roasted beans delivered to your door on your schedule.' },
  { id: 6, icon: 'Gift', title: 'Gift Cards', description: 'Share the love of coffee with digital and physical gift cards.' }
]

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Our Coffee', path: '/our-coffee' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' }
]
