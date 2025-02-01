import React from 'react';
import { motion } from 'framer-motion';
import { Car, BadgeEuro, Shield, MapPin, CheckCircle2, BadgeCheck, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function MainContent() {
  // Angepasste Service-Links für Berlin
  const serviceLinks = [
    { path: "/berlin/gebrauchtwagen-ankauf", text: "Gebrauchtwagen Ankauf Berlin" },
    { path: "/berlin/unfallwagen-ankauf", text: "Unfallwagen Ankauf Berlin" },
    { path: "/berlin/firmenwagen-ankauf", text: "Firmenwagen Ankauf Berlin" },
    { path: "/berlin/motorschaden-ankauf", text: "Motorschaden Ankauf Berlin" },
    { path: "/berlin/kfz-ankauf", text: "KFZ Ankauf Berlin" },
    { path: "/berlin/pkw-ankauf", text: "PKW Ankauf Berlin" },
  ];

  // Berlin-spezifische Features
  const features = [
    {
      icon: Car,
      title: 'Berliner Blitzankauf',
      description: 'Ankauf in 60 Minuten - von Marzahn bis Spandau',
      benefits: [
        '24/7 Sofortbewertung vor Ort',
        'Express-Deal in einer Stunde',
        'Direktauszahlung Bar/Bank',
        'Kostenfreie Abholung cityweit'
      ]
    },
    {
      icon: BadgeEuro,
      title: 'Metropolen-Maximalpreis',
      description: 'Großstadtpreise statt Standardtarife',
      benefits: [
        'Berliner Händlernetzwerk-Power',
        'Exportmarkt-Connection',
        'Transparente Preiskalkulation',
        'Preisgarantie schwarz auf weiß'
      ]
    },
    {
      icon: Shield,
      title: 'Hauptstadt-Expertise',
      description: 'Stark vernetzt, maximal effizient',
      benefits: [
        'Express-Dokumentenservice',
        'Rechtssichere Sofortabwicklung',
        'Über 5.000 Deals in Berlin'
      ]
    }
  ];

  return (
    <ParallaxProvider>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary text-sm sm:text-base font-medium">Autoankauf Experten Berlin</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6"
            >
              Autoankauf Berlin
              <span className="text-primary"> zum Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600"
            >
              Profitieren Sie von unserem professionellen Autoankauf Service in Berlin.
              Faire Preise und schnelle Abwicklung in allen Bezirken.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-20">
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
                  className="group bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-500 h-full"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{feature.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-20">
            {/* Main Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">
                Autoankauf Berlin: Schnell. Fair. Transparent.
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Schluss mit endlosen Preisverhandlungen und zeitraubenden Besichtigungsterminen. 
                Als Berlins dynamischster Autoankäufer revolutionieren wir den Gebrauchtwagenmarkt 
                mit Sofortankauf und Express-Abwicklung. Vom Youngtimer in Charlottenburg bis zum 
                Elektro-SUV in Prenzlauer Berg – wir kennen den Wert Ihres Fahrzeugs.
              </p>

              <p className="text-sm sm:text-base text-gray-600">
                Die Mobilitätswende ist in vollem Gange. E-Autos, Hybride oder Verbrenner – 
                der Berliner Markt ist einzigartig dynamisch. Unser Algorithmus kalkuliert 
                sekundenschnell den optimalen Ankaufspreis, basierend auf Live-Marktdaten und 
                unserem Händlernetzwerk von der Spree bis zur Havel.
              </p>

              <p className="text-sm sm:text-base text-gray-600">
                Mit Standorten in allen Berliner Bezirken garantieren wir maximale Flexibilität. 
                Unsere mobile Bewertungseinheit erreicht Sie innerhalb von 30 Minuten – egal ob 
                am Kudamm oder in Köpenick. Deal, Zahlung, Abmeldung – alles aus einer Hand, 
                alles an einem Tag.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-4 sm:mt-8">
                {[
                  'Kostenlose Fahrzeugbewertung',
                  'Sofortige Auszahlung',
                  'Service in allen Bezirken',
                  'Bestpreis Garantie',
                  'Express Abwicklung',
                  'Alle Marken & Modelle'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <BadgeCheck className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Main Content Sections with Enhanced Internal Linking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >

              {/* Specialized Services Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Spezialisierung ist unser Erfolgsrezept
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Vom Luxuswagen bis zum Unfallfahrzeug – jedes Auto hat seinen Wert. 
                  Unsere Spezialisten erkennen verborgene Potenziale und nutzen ein internationales 
                  Vertriebsnetz für Höchstpreise jenseits lokaler Marktwerte.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { to: "/berlin/motorschaden-ankauf", text: "Motorschaden Ankauf", icon: Car },
                    { to: "/berlin/kfz-ankauf", text: "KFZ Ankauf", icon: BadgeCheck },
                    { to: "/berlin/pkw-ankauf", text: "PKW Ankauf", icon: Shield }
                  ].map((service, index) => (
                    <Link
                      key={index}
                      to={service.to}
                      className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <service.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{service.text}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regional Expertise Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">
                    Bundesweite Ankauf-Expertise
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-6">
                    Neben unserem Hauptsitz in Berlin sind wir auch in anderen deutschen Großstädten 
                    für Sie da. Profitieren Sie von unserem bundesweiten Netzwerk und unserer 
                    jahrelangen Erfahrung im Autoankauf.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { to: "/autoankauf-hamburg", text: "Hamburg" },
                      { to: "/autoankauf-muenchen", text: "München" },
                      { to: "/autoankauf-koeln", text: "Köln" },
                      { to: "/autoankauf-frankfurt", text: "Frankfurt" }
                    ].map((city, index) => (
                      <Link
                        key={index}
                        to={city.to}
                        className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm group"
                      >
                        <MapPin className="w-4 h-4 text-primary mr-2 group-hover:scale-110 transition-transform" />
                        <span className="text-white group-hover:text-primary transition-colors">{city.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Services Box */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Car className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold text-gray-900">Ankauf-Services in Berlin</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Entdecken Sie unsere spezialisierten Ankauf-Services für Berlin. Von der City-West 
                  bis nach Köpenick - wir sind Ihr kompetenter Partner für den Autoankauf in der Hauptstadt.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{link.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-6 relative z-10">
                Jetzt Auto in Berlin verkaufen
              </h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto relative z-10">
                Kontaktieren Sie uns für eine kostenlose Bewertung Ihres Fahrzeugs.
                Wir sind in ganz Berlin für Sie da.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-10">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Auto bewerten
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-all duration-300"
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