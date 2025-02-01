import React from 'react';
import { motion } from 'framer-motion';
import { Car, BadgeEuro, Clock, Shield, Star, CheckCircle2, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1578307595391-165eb8134a21?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90" />
      </div>

      <div className="relative container mx-auto px-4 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary mr-1.5 sm:mr-2" />
                <span className="text-white text-xs sm:text-sm">Premium Autoankauf an der Kö</span>
              </div>

              {/* Main Heading with Typing Animation */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">Autoankauf Düsseldorf</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                    <TypeAnimation
                      sequence={[
                        'Fashion-City Service',
                        2000,
                        'Medienhafen Express',
                        2000,
                        'Luxus-Expertise',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
                  Von der Königsallee bis zum Medienhafen – 
                  <span className="text-primary font-medium"> Premium-Service in 30 Minuten</span>. 
                  Der schnellste Autoankauf der Landeshauptstadt.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <a
                  href="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>Kostenlose Bewertung</span>
                </a>
                <a
                  href="tel:+4915256501567"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/10 text-white text-sm sm:text-base font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>Express Ankauf 24/7</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap gap-3 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {[
                  'Kö-Express Service',
                  'Rheinufer-Abholung',
                  'Luxus-Expertise',
                ].map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-1.5 sm:space-x-2 text-white/80"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-xs sm:text-sm">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Animated Features */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 sm:mt-0"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Car,
                    title: 'Fashion-City',
                    description: 'Ankauf aller Premium-Modelle',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Kö-Premium',
                    description: 'Top-Preise garantiert',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Media Harbour',
                    description: 'Service rund um die Uhr',
                    delay: 0.4
                  },
                  {
                    icon: MapPin,
                    title: 'City-Express',
                    description: 'Altstadt bis Airport',
                    delay: 0.6
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: feature.delay }}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg sm:rounded-2xl" />
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4" />
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}