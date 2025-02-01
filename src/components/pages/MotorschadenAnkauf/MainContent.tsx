import { motion } from 'framer-motion';
import { Wrench, Shield, MapPin, Banknote, CheckCircle2, Gauge, BadgeCheck, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

interface MainContentProps {
  city: string;
}

export default function MainContent({ city }: MainContentProps) {
  const features = [
    {
      icon: Wrench,
      title: 'Motorschaden Expertise',
      description: 'Professionelle Bewertung aller Arten von Motorschäden',
      benefits: [
        'Alle Motorschäden',
        'Turboschäden',
        'Motorsteuerung',
        'Kolbenschäden'
      ]
    },
    {
      icon: Gauge,
      title: 'Express Service',
      description: 'Schnelle und unkomplizierte Abwicklung garantiert',
      benefits: [
        'Sofortige Bewertung',
        '24/7 Erreichbarkeit',
        'Express Abholung',
        'Direkte Bezahlung'
      ]
    },
    {
      icon: Shield,
      title: 'Seriöser Ankauf',
      description: 'Professionelle und transparente Abwicklung',
      benefits: [
        'Faire Bewertung',
        'Persönliche Beratung',
        'Vertrauenswürdiger Partner'
      ]
    }
  ];

  return (
    <ParallaxProvider>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-3 mb-8"
            >
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Ankauf von Fahrzeuge mit Motorschaden - Ihr Experte</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Auto mit Motorschaden Ankauf in <span className="text-primary">{city}</span>
              <span className="text-primary"> zum Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Profitieren Sie von unserem Motorschaden Ankauf Service.
              Faire Preise und schnelle Abwicklung bundesweit, auch in <span className="text-primary">{city}</span>.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Parallax
                key={index}
                translateY={[10, -10]}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 h-full"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Main Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h3 className="text-3xl font-bold mb-6">
                Warum Sie Ihr Auto mit Motorschaden in <span className="text-primary">{city}</span> bei uns verkaufen sollten
              </h3>
              <p className="text-gray-600">
                Wir Kaufen Ihr Fahrzeug mit Motorschaden und bieten Ihnen einen
                professionellen und unkomplizierten Service. Wir kaufen Ihr Fahrzeug zu
                fairen Marktpreisen und garantieren eine schnelle Abwicklung - unabhängig von
                der Art und Schwere des Motorschadens.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  'Kostenlose Schadensbegutachtung',
                  'Sofortige Auszahlung',
                  'Bundesweiter Service',
                  'Bestpreis Garantie',
                  'Express Abwicklung',
                  'Alle Motorschäden'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <BadgeCheck className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Service Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-12"
            >
              <h3 className="text-3xl font-bold mb-8">
                Motorschaden Ankauf in <span className="text-primary">{city}</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Unser Motorschaden Ankauf ist in <span className="text-primary">{city}</span> und bundesweit verfügbar.
                Wir kommen kostenlos zu Ihnen und bewerten Ihr Fahrzeug vor Ort.
                Profitieren Sie von unserem Netzwerk und verkaufen Sie
                Ihr Auto mit Motorschaden schnell und unkompliziert.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, text: 'Bundesweiter Service' },
                  { icon: Wrench, text: 'Vor-Ort Begutachtung' },
                  { icon: Shield, text: 'Sichere Abwicklung' },
                  { icon: Banknote, text: 'Sofortige Bezahlung' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                Jetzt Auto mit Motorschaden in <span className="text-primary">{city}</span> verkaufen
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                Kontaktieren Sie uns für eine kostenlose Bewertung Ihres Fahrzeugs.
                Profitieren Sie von unserer Expertise und Top-Konditionen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Wrench className="w-5 h-5 mr-2" />
                  Motorschaden bewerten
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
