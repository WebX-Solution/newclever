import { motion } from 'framer-motion';
import { Phone, Car, BadgeEuro, Banknote, ArrowRight, Shield, Clock, Star, CheckCircle2 } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const steps = [
  {
    icon: Phone,
    title: 'Kontakt aufnehmen',
    description: 'Kostenlose und unverbindliche Anfrage - telefonisch oder per Formular.',
    benefits: ['24/7 Erreichbarkeit', 'Sofortige Beratung', 'Kostenlos & Unverbindlich']
  },
  {
    icon: Car,
    title: 'KFZ bewerten',
    description: 'Professionelle Bewertung Ihres Fahrzeugs durch unsere Experten.',
    benefits: ['Faire Bewertung', 'Transparente Preise', 'Alle KFZ Typen']
  },
  {
    icon: BadgeEuro,
    title: 'Angebot erhalten',
    description: 'Garantiert bestes Preisangebot ohne versteckte Kosten oder Gebühren.',
    benefits: ['Bestpreis-Garantie', 'Keine versteckten Kosten', 'Sofortiges Angebot']
  },
  {
    icon: Banknote,
    title: 'Sofortige Auszahlung',
    description: 'Express-Abwicklung mit Sofortauszahlung und kostenloser Abholung.',
    benefits: ['Bargeld oder Überweisung', 'Kostenlose Abholung', 'Express-Service']
  }
];

export default function ProcessSteps() {
  return (
    <ParallaxProvider>
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Express Ankauf Prozess</span>
              </div>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              In nur 4 Schritten zum
              <span className="text-primary"> Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400"
            >
              Schnell, transparent und unkompliziert - so verkaufen Sie Ihr KFZ bei uns
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Card Content */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 mb-6">{step.description}</p>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {step.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Connection Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-primary" />
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
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Shield, text: 'Seriöser Partner' },
              { icon: Star, text: 'Bestpreis Garantie' },
              { icon: Clock, text: 'Express Service' }
            ].map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/90">
                <indicator.icon className="w-5 h-5 text-primary" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}