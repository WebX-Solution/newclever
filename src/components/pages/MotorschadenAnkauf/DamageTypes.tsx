import { motion } from 'framer-motion';
import { Wrench, AlertTriangle, Gauge, Car, Zap, Settings, Cpu, Cog } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function DamageTypes() {
  const damageTypes = [
    {
      icon: Car,
      title: 'Motorblock',
      types: ['Risse', 'Verschleiß', 'Korrosion'],
      description: 'Ankauf von Fahrzeugen mit Motorblockschäden aller Art.'
    },
    {
      icon: Gauge,
      title: 'Kolbenschaden',
      types: ['Kolbenfresser', 'Kolbenringe', 'Laufbuchsen'],
      description: 'Faire Preise für Fahrzeuge mit Kolbenschäden.'
    },
    {
      icon: Zap,
      title: 'Turboschaden',
      types: ['Turbolader', 'Ladeluftkühler', 'Wastegate'],
      description: 'Ankauf von Fahrzeugen mit Turboladerschäden.'
    },
    {
      icon: Settings,
      title: 'Motorsteuerung',
      types: ['Steuergerät', 'Sensoren', 'Elektronik'],
      description: 'Professionelle Bewertung von Steuerungsdefekten.'
    },
    {
      icon: Cog,
      title: 'Kurbelwelle',
      types: ['Lagerschaden', 'Unwucht', 'Verschleiß'],
      description: 'Ankauf von Fahrzeugen mit Kurbelwellenschäden.'
    },
    {
      icon: Wrench,
      title: 'Ventilschaden',
      types: ['Ventile', 'Ventilführungen', 'Ventilsitze'],
      description: 'Bewertung und Ankauf bei Ventilschäden.'
    },
    {
      icon: Cpu,
      title: 'Nockenwelle',
      types: ['Nockenwellenschaden', 'Steuerkette', 'Zahnriemen'],
      description: 'Faire Preise für Nockenwellenschäden.'
    },
    {
      icon: AlertTriangle,
      title: 'Totalschaden',
      types: ['Schwere Motorschäden', 'Wasserschlag', 'Überhitzung'],
      description: 'Ankauf auch bei wirtschaftlichem Totalschaden.'
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
              <span className="text-primary"> Motorschäden</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Wir kaufen Fahrzeuge mit allen Arten von Motorschäden zu fairen Preisen
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
                        <Wrench className="w-4 h-4 text-primary" />
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
              Motorschaden jetzt bewerten
            </a>
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}