import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Car, FileText, Scale, Shield } from 'lucide-react';

export default function Impressum() {
  return (
    <main>
      <Helmet>
        <title>Impressum | Clever-Autoankauf</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://clever-autoankauf.de/impressum" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Rechtliche Informationen</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Impressum
              </h1>
              <p className="text-xl text-gray-400">
                Rechtliche Informationen und Kontaktdaten
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
            >
              {/* Company Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Clever Autoankauf wird betrieben von
                  </h2>
                  <p className="text-gray-300 text-lg">Ahmed Alawe</p>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Anschrift</h3>
                    <p className="text-gray-300">
                      Hustadtring 59<br />
                      44801 Bochum<br />
                      Nordrhein Westfalen
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">Telefon</div>
                      <a 
                        href="tel:+4915256501567"
                        className="text-white hover:text-primary transition-colors"
                      >
                        +49 (0) 152 56 501 567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">E-Mail</div>
                      <a 
                        href="mailto:info@clever-autoankauf.de"
                        className="text-white hover:text-primary transition-colors"
                      >
                        info@clever-autoankauf.de
                      </a>
                    </div>
                  </div>
                </div>


                {/* Legal Information */}
                <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex items-start space-x-4">
                    <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Rechtliche Hinweise</h3>
                      <p className="text-gray-300">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                        <a 
                          href="https://ec.europa.eu/consumers/odr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          https://ec.europa.eu/consumers/odr/
                        </a>{' '}
                        finden.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Haftungsausschluss</h3>
                      <p className="text-gray-300">
                        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <a
                href="/datenschutz"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
              >
                Datenschutzerklärung
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-300"
              >
                <Car className="w-5 h-5 mr-2" />
                Jetzt Auto verkaufen
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}