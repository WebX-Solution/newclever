import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Car } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e13025_0.5px,transparent_0.5px)] opacity-[0.015] [background-size:12px_12px]" />

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
              Bundesweiter
              <span className="text-primary"> Service</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Wir sind in ganz Deutschland für Sie da und kommen kostenlos zu Ihnen
            </motion.p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Berlin', 'Hamburg', 'München', 'Köln',
              'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig',
              'Dortmund', 'Essen', 'Bremen', 'Dresden'
            ].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Autoankauf {city}</h3>
                    <p className="text-gray-600">Express Service vor Ort</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="tel:+4915256501567"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Telefon</div>
                <div className="font-semibold">+49 (0) 152 56 501 567</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@clever-autoankauf.de"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">E-Mail</div>
                <div className="font-semibold">info@clever-autoankauf.de</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Service</div>
                <div className="font-semibold">Kostenlose Abholung</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}