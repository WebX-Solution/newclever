import { motion } from 'framer-motion';
import { Car, Star, BadgeCheck } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function VehicleTypes() {
  const vehicleTypes = [
    {
      title: 'Personenkraftwagen',
      description: 'Ankauf von PKWs aller Klassen',
      examples: ['Limousinen', 'SUVs', 'Kombis', 'Sportwagen'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80'
    },
    {
      title: 'Nutzfahrzeuge',
      description: 'Faire Preise für Nutzfahrzeuge',
      examples: ['Transporter', 'Lieferwagen', 'Pritschenwagen', 'Kastenwagen'],
      image: 'https://images.unsplash.com/photo-1665521032636-e8d2f6927053'
    },
    {
      title: 'Elektrofahrzeuge',
      description: 'Ankauf von E-Autos und Hybriden',
      examples: ['E-Autos', 'Plug-in-Hybride', 'Hybridfahrzeuge', 'E-Transporter'],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },
    {
      title: 'Oldtimer',
      description: 'Bestpreise für klassische Fahrzeuge',
      examples: ['Oldtimer', 'Youngtimer', 'Klassiker', 'Sammlerstücke'],
      image: 'https://images.unsplash.com/photo-1453856908826-6bbeda0f8490'
    },
    {
      title: 'Geländewagen',
      description: 'Ankauf von Offroad-Fahrzeugen',
      examples: ['SUVs', '4x4', 'Allrad', 'Geländewagen'],
      image: 'https://images.unsplash.com/photo-1638373106719-504c488cfc0e'
    },
    {
      title: 'Luxusfahrzeuge',
      description: 'Faire Bewertung für Premium-KFZ',
      examples: ['Premium-Limousinen', 'Luxus-SUVs', 'Sportwagen', 'Exklusivmodelle'],
      image: 'https://images.unsplash.com/photo-1708562587863-edb259c038ea'
    },
    {
      title: 'Sonderfahrzeuge',
      description: 'Ankauf von Spezialfahrzeugen',
      examples: ['Wohnmobile', 'Reisemobile', 'Spezialaufbauten', 'Sondermodelle'],
      image: 'https://plus.unsplash.com/premium_photo-1682678368772-56b92eaa3fe1'
    },
    {
      title: 'Unfallfahrzeuge',
      description: 'Ankauf von Unfallwagen',
      examples: ['Unfallschäden', 'Motorschäden', 'Getriebeschäden', 'Totalschäden'],
      image: 'https://images.unsplash.com/photo-1687867451910-28941a460f35'
    }
  ];

  return (
    <ParallaxProvider>
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
              <Car className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Alle KFZ Typen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ankauf aller
              <span className="text-primary"> Fahrzeugtypen</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Wir kaufen Kraftfahrzeuge aller Art zu fairen Preisen
            </motion.p>
          </div>

          {/* Vehicle Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTypes.map((type, index) => (
              <Parallax
                key={index}
                translateY={[10, -10]}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>

                  {/* Examples List */}
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900 mb-3">Fahrzeugarten:</div>
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-600">
                        <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </Parallax>
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
    </ParallaxProvider>
  );
}