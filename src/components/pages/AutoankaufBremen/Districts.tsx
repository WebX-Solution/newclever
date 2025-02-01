import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, BadgeCheck, Star, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Districts() {
  const districts = [
    {
      name: 'Neustadt',
      areas: ['Alte Neustadt', 'Hohentor', 'Buntentor', 'Südervorstadt'],
      description: 'Zwischen Weser & Neustadt',
      highlights: ['Schiffsschäden? Kein Problem', 'Hafen-Express Service', 'Werftarbeiter-Bonus']
    },
    {
      name: 'Schwachhausen',
      areas: ['Schwachhausen', 'Radio Bremen', 'Riensberg', 'Gete'],
      description: 'Villen-Viertel Spezialist',
      highlights: ['Premium-Fahrzeuge willkommen', 'Diskrete Abwicklung', 'Auch Sammlerstücke']
    },
    {
      name: 'Findorff',
      areas: ['Findorff-Bürgerweide', 'Weidedamm', 'Regensburger Straße', 'Findorff'],
      description: 'Direkt an der Bürgerweide',
      highlights: ['Messenähe-Service', 'Sofort-Termin möglich', 'Werder-Heimspiel? Kein Problem']
    },
    {
      name: 'Walle',
      areas: ['Walle', 'Westend', 'Utbremen', 'Überseestadt'],
      description: 'Hafenkante & Überseestadt',
      highlights: ['Industriefahrzeuge ok', 'Containerhafen-Service', 'Spontan-Ankauf']
    },
    {
      name: 'Vahr',
      areas: ['Neue Vahr Nord', 'Neue Vahr Südwest', 'Gartenstadt Vahr', 'Neue Vahr Südost'],
      description: 'Mitten in der Vahr',
      highlights: ['Familienautos gesucht', 'Garantiert ohne Stress', 'Blitz-Abmeldung']
    },
    {
      name: 'Hemelingen',
      areas: ['Hemelingen', 'Sebaldsbrück', 'Hastedt', 'Arbergen'],
      description: 'Mercedes-Werk? Wir kommen!',
      highlights: ['Werks-Fahrzeuge ok', 'Schichtarbeiter-Service', 'Nachts möglich']
    },
    {
      name: 'Gröpelingen',
      areas: ['Gröpelingen', 'Oslebshausen', 'Lindenhof', 'Ohlenhof'],
      description: 'Von Waterfront bis AG Weser',
      highlights: ['Ankauf trotz Mängel', 'Hafenarbeiter-Service', '24/7 vor Ort']
    },
    {
      name: 'Obervieland',
      areas: ['Kattenturm', 'Arsten', 'Habenhausen', 'Kattenesch'],
      description: 'Weserpark? Sind gleich da!',
      highlights: ['Shopping-Express', 'Direkt-Deal', 'Sofort-Zahlung']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e13025_0.5px,transparent_0.5px)] opacity-[0.015] [background-size:12px_12px]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-3 mb-8"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Alle Bremer Stadtteile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Autoankauf in
            <span className="text-primary"> Ihrer Nähe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Wir sind in allen Bremer Stadtteilen für Sie da
          </motion.p>
        </div>

        {/* Districts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map((district, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

              {/* Icon and Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{district.name}</h3>
                  <p className="text-gray-600">{district.description}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 space-y-2">
                {district.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Areas List */}
              <div className="space-y-3">
                <div className="font-semibold text-gray-900">Stadtteile:</div>
                <div className="grid grid-cols-2 gap-2">
                  {district.areas.map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-600">
                      <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="/kontakt"
                  className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 hover:bg-primary text-gray-700 hover:text-white rounded-xl transition-all duration-300 group"
                >
                  <span className="font-medium">Jetzt Auto verkaufen</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-8"
        >
          {[
            { text: 'Kostenlose Bewertung', icon: Star },
            { text: 'Express Service', icon: Car },
            { text: 'Faire Preise', icon: BadgeCheck }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}