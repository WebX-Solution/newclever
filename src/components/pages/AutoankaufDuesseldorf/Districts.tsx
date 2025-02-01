import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, BadgeCheck, Star, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Districts() {
  const districts = [
    {
      name: 'Stadtmitte',
      areas: ['Altstadt', 'Carlstadt', 'Stadtmitte', 'Pempelfort'],
      description: 'Luxus-Autoankauf an der Kö',
      highlights: ['Königsallee Service', 'Rheinufer Express', 'Altstadt-Ankauf']
    },
    {
      name: 'Oberkassel',
      areas: ['Oberkassel', 'Niederkassel', 'Heerdt', 'Lörick'],
      description: 'Premium-Ankauf am Belsenplatz',
      highlights: ['Rheinterrassen-Service', 'Luegallee Express', 'Japan-Center Nähe']
    },
    {
      name: 'Derendorf',
      areas: ['Derendorf', 'Golzheim', 'Pempelfort', 'Mörsenbroich'],
      description: 'Media Harbour Autoexperte',
      highlights: ['Schneller Hafen-Service', 'Rather Straße', 'Businesspark-Ankauf']
    },
    {
      name: 'Gerresheim',
      areas: ['Gerresheim', 'Grafenberg', 'Ludenberg', 'Hubbelrath'],
      description: 'Glasmacher-Viertel Ankauf',
      highlights: ['Heyestraße Express', 'Villenviertel-Service', 'Waldrand-Abholung']
    },
    {
      name: 'Bilk',
      areas: ['Bilk', 'Unterbilk', 'Hafen', 'Hamm'],
      description: 'Uni-Stadt Autoankauf',
      highlights: ['Campus-Express', 'Medienhafen-Service', 'Loretto-Viertel']
    },
    {
      name: 'Flingern',
      areas: ['Flingern Nord', 'Flingern Süd', 'Düsseltal'],
      description: 'Szene-Viertel Spezial',
      highlights: ['Kunst-Quartier Service', 'Rethelstraße', 'Little Tokyo Nähe']
    },
    {
      name: 'Eller',
      areas: ['Eller', 'Lierenfeld', 'Vennhausen', 'Unterbach'],
      description: 'Süd-Ost Express Ankauf',
      highlights: ['Gumbertstraße Direkt', 'Gewerbepark-Service', 'See-Nähe']
    },
    {
      name: 'Airport City',
      areas: ['Lohausen', 'Stockum', 'Kaiserswerth', 'Wittlaer'],
      description: 'Flughafen-Express Ankauf',
      highlights: ['Terminal-Service', 'Messe-Express', 'ESPRIT arena nah']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e13025_0.5px,transparent_0.5px)] opacity-[0.015] [background-size:12px_12px]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-3 mb-8"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Von der Kö bis zum Medienhafen</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Autoankauf in der
            <span className="text-primary"> Fashion-Metropole</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Vom Luxus-Showroom bis zur Altbier-Kneipe - in allen Stadtteilen präsent
          </motion.p>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {districts.map((district, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg sm:rounded-xl md:rounded-2xl" />

              {/* Icon and Title */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{district.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{district.description}</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4 sm:mb-6 space-y-2">
                {district.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm sm:text-base text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Areas List */}
              <div className="space-y-2 sm:space-y-3">
                <div className="font-semibold text-sm sm:text-base text-gray-900">Stadtteile:</div>
                <div className="grid grid-cols-2 gap-2">
                  {district.areas.map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 sm:space-x-2 text-gray-600">
                      <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                <a
                  href="/kontakt"
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-primary text-gray-700 hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base group"
                >
                  <span className="font-medium">Jetzt Auto verkaufen</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
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
          className="mt-8 sm:mt-12 md:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
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
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-sm sm:text-base font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}