import React from 'react';
import './App.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Calendar,
  Star,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChefHat
} from 'lucide-react';

// TikTok Icon (Custom SVG since not in lucide)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1.04 0z"/>
  </svg>
);

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const dishes = [
    {
      name: "Deconstructed Forest",
      description: "Wild mushroom essence, truffle foam, microgreens cultivation",
      image: "https://images.pexels.com/photos/7649105/pexels-photo-7649105.jpeg",
      price: "€85"
    },
    {
      name: "Ocean's Whisper",
      description: "Molecular seafood, algae reduction, crystallized sea foam",
      image: "https://images.unsplash.com/photo-1648146299289-d4d464c79413",
      price: "€95"
    },
    {
      name: "Elemental Fire",
      description: "Flame-kissed proteins, smoke bubbles, charcoal essence",
      image: "https://images.pexels.com/photos/7033794/pexels-photo-7033794.jpeg",
      price: "€78"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: TikTokIcon, href: "#", label: "TikTok" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">James Gordon</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              <a href="#dishes" className="hover:text-amber-400 transition-colors">Signature Dishes</a>
              <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
              <a href="#events" className="hover:text-amber-400 transition-colors">Private Events</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92"
            alt="Chef James Gordon"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-8 h-8 text-amber-400 fill-current mx-1" />
                </motion.div>
              ))}
            </div>
            <p className="text-amber-400 text-lg font-medium tracking-wide">3 MICHELIN STARS • LISBOA, PORTUGAL</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-amber-200 bg-clip-text text-transparent">
              JAMES GORDON
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Master of Modern Experimental Cuisine
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Where culinary artistry meets molecular innovation in an unforgettable gastronomic journey
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Reserve Your Experience
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                About Chef James
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 15 years of culinary excellence, Chef James Gordon has revolutionized the modern experimental cuisine scene. Currently leading the kitchen at a prestigious 3 Michelin-starred restaurant in Lisboa, Portugal.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                His innovative approach combines traditional techniques with molecular gastronomy, creating dishes that challenge perceptions and deliver extraordinary experiences. Each plate tells a story of passion, precision, and artistic vision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">3 Michelin Stars</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Lisboa, Portugal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChefHat className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Experimental Cuisine</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/7533332/pexels-photo-7533332.jpeg"
                alt="Chef James Gordon"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="dishes" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Signature Creations
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Experience the artistry of modern experimental cuisine through our most celebrated dishes
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-amber-500 text-black font-bold px-3 py-1 rounded-full">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{dish.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Culinary Gallery
            </h2>
            <p className="text-gray-400 text-xl">
              A visual journey through exceptional gastronomy
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              "https://images.unsplash.com/photo-1541508159146-2ab9c877e804",
              "https://images.pexels.com/photos/5550310/pexels-photo-5550310.jpeg",
              "https://images.unsplash.com/photo-1527832430339-c6d405358ac1"
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Private Events Section */}
      <section id="events" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Private Events
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Experience Chef James Gordon's extraordinary cuisine in an intimate setting. Perfect for special celebrations, corporate events, and exclusive dining experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Personalized menu creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChefHat className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Live cooking demonstrations</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                Book Consultation
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Schedule Your Event</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                />
                <input 
                  type="date" 
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                />
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors">
                  <option>Select Event Type</option>
                  <option>Private Dinner</option>
                  <option>Corporate Event</option>
                  <option>Special Celebration</option>
                  <option>Cooking Class</option>
                </select>
                <textarea 
                  placeholder="Special Requests"
                  rows="3"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 rounded-lg transition-all duration-300"
                >
                  Request Booking
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-xl">
              Ready to embark on a culinary adventure?
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">+351 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">chef@jamesgordon.pt</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">Lisboa, Portugal</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4">Follow the Journey</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700/50 hover:bg-amber-500/20 p-3 rounded-full transition-colors duration-300 border border-gray-600 hover:border-amber-500"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">James Gordon</span>
            </div>
            <p className="text-gray-400 mb-6">Master of Modern Experimental Cuisine</p>
            <div className="flex items-center justify-center mb-6">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current mx-1" />
              ))}
              <span className="ml-3 text-gray-400">3 Michelin Stars • Lisboa, Portugal</span>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 James Gordon. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;