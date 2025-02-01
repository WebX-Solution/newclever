import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, Car } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Wie können wir
              <span className="text-primary"> Ihnen helfen?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Wir sind auf verschiedenen Wegen für Sie erreichbar und 
              stehen Ihnen bei allen Fragen zur Verfügung
            </motion.p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Telefonisch</h3>
              <p className="text-gray-600 mb-6">
                Rufen Sie uns an - wir sind rund um die Uhr für Sie erreichbar
              </p>
              <a
                href="tel:+4915256501567"
                className="text-xl font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                +49 (0) 152 56 501 567
              </a>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Per E-Mail</h3>
              <p className="text-gray-600 mb-6">
                Schreiben Sie uns eine E-Mail - wir antworten innerhalb von 24 Stunden
              </p>
              <a
                href="mailto:info@clever-autoankauf.de"
                className="text-xl font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                info@clever-autoankauf.de
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vor Ort Service</h3>
              <p className="text-gray-600 mb-6">
                Wir kommen kostenlos zu Ihnen - bundesweit in ganz Deutschland
              </p>
              <span className="text-xl font-semibold text-primary">
                Kostenlose Abholung
              </span>
            </motion.div>
          </div>

          {/* Additional Information */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Öffnungszeiten</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-600">
                  <span>Montag - Freitag:</span>
                  <span>08:00 - 20:00</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Samstag:</span>
                  <span>09:00 - 18:00</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Sonntag:</span>
                  <span>Nach Absprache</span>
                </li>
              </ul>
            </motion.div>

            {/* Express Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Express Service</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span>• Terminvereinbarung innerhalb von 1h</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>• Vor-Ort Bewertung am selben Tag</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>• Sofortige Auszahlung möglich</span>
                </li>
              </ul>
            </motion.div>

             {/* Vehicle Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Car className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Fahrzeugankauf</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span>• Alle PKW & Gebrauchtwagen</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>• Unfallwagen & Motorschäden</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>• Firmenwagen & Flotten</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}