import { motion } from 'framer-motion';
import { Car, Wrench, AlertTriangle, Gauge, CloudRain, Droplets, Flame, Wind, CheckCircle2 } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function DamageTypes() {
  const damageTypes = [
    {
      icon: Car,
      title: 'Unfallschäden',
      types: ['Frontschaden', 'Heckschaden', 'Seitenschaden'],
      description: 'Ankauf von Unfallfahrzeugen mit verschiedenen Schadensarten und -intensitäten.'
    },
    {
      icon: AlertTriangle,
      title: 'Totalschaden',
      types: ['Wirtschaftlicher Totalschaden', 'Technischer Totalschaden'],
      description: 'Faire Preise auch für Fahrzeuge mit Total- oder Komplettschaden.'
    },
    {
      icon: Gauge,
      title: 'Motorschaden',
      types: ['Motordefekt', 'Turboschaden', 'Motorsteuerung'],
      description: 'Ankauf von Fahrzeugen mit Motorschäden aller Art.'
    },
    {
      icon: Wrench,
      title: 'Getriebeschaden',
      types: ['Schaltgetriebe', 'Automatikgetriebe', 'DSG'],
      description: 'Professionelle Bewertung von Getriebeschäden und faire Ankaufspreise.'
    },
    {
      icon: CloudRain,
      title: 'Hagelschaden',
      types: ['Dachschaden', 'Karosserieschaden', 'Lackschaden'],
      description: 'Ankauf von Fahrzeugen mit Hagelschäden jeglichen Ausmaßes.'
    },
    {
      icon: Droplets,
      title: 'Wasserschaden',
      types: ['Hochwasserschaden', 'Überflutungsschaden'],
      description: 'Faire Bewertung auch bei schweren Wasserschäden.'
    },
    {
      icon: Flame,
      title: 'Brandschaden',
      types: ['Teilbrand', 'Kabelbrand', 'Motorbrand'],
      description: 'Ankauf von Fahrzeugen mit Brand- und Hitzeschäden.'
    },
    {
      icon: Wind,
      title: 'Sturmschaden',
      types: ['Fallschaden', 'Astschaden', 'Dachschaden'],
      description: 'Bewertung und Ankauf von sturmbeschädigten Fahrzeugen.'
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
              <Wrench className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Professionelle Schadensbewertung</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ankauf aller
              <span className="text-primary"> Schadensarten</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Wir kaufen Unfallfahrzeuge mit allen Arten von Schäden zu fairen Preisen
            </motion.p>
          </div>

          {/* Damage Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {damageTypes.map((damage, index) => (
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
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <damage.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{damage.title}</h3>
                  <p className="text-gray-600 mb-6">{damage.description}</p>

                  {/* Types List */}
                  <ul className="space-y-2">
                    {damage.types.map((type, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
            >
              Unfallwagen jetzt bewerten
            </a>
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}