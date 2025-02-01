import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Car, BadgeEuro, Banknote, ArrowRight, Shield, Clock, Star, CheckCircle2, MapPin } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const steps = [
  {
    icon: Phone,
    title: 'Münchner Direktkontakt',
    description: 'Von der Maxvorstadt bis Pasing - wir sind in 30 Minuten bei Ihnen.',
    benefits: ['Allianz-Arena schnell', 'Oktoberfest-Service', 'WhatsApp oder Anruf']
  },
  {
    icon: Car,
    title: 'Premium Check',
    description: 'Hightech-Bewertung auf Münchner Top-Niveau - BMW-Standard inklusive.',
    benefits: ['Werksnahe Prüfung', 'Digital-Diagnose', 'Maximilianstraßen-Service']
  },
  {
    icon: BadgeEuro,
    title: 'Isar-Preisgarantie',
    description: 'Faire Münchner Preise - transparent wie das Olympiadach.',
    benefits: ['Schwabing-Standard', 'Sofort-Angebot', 'Bestpreis der Stadt']
  },
  {
    icon: Banknote,
    title: 'Blitz-Abwicklung',
    description: 'Schneller als die S-Bahn zum Marienplatz - in 45 Minuten erledigt.',
    benefits: ['Express wie der Airport', 'MVG-schnell', 'Sofort-Überweisung']
  }
];

export default function ProcessSteps() {
  return (
    <ParallaxProvider>
      <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595867818082-083862f3d630')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-3 sm:mb-6"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span className="text-sm sm:text-base">Express Ankauf Prozess</span>
              </div>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-white"
            >
              In nur 4 Schritten zum
              <span className="text-primary"> Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400"
            >
              Schnell, transparent und unkompliziert - so verkaufen Sie Ihr Auto in München bei uns
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, index) => (
              <Parallax key={index} translateY={[10, -10]}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Card Content */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{step.description}</p>

                    {/* Benefits */}
                    <ul className="space-y-2 sm:space-y-3">
                      {step.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Connection Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          >
            {[
              { icon: Shield, text: 'Seriöser Partner' },
              { icon: Star, text: 'Bestpreis Garantie' },
              { icon: MapPin, text: 'Alle Münchner Stadtteile' }
            ].map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/90">
                <indicator.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-sm sm:text-base">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}