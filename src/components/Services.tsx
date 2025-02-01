import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Wrench, Building2, Gauge, Star, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Car,
      title: 'Gebrauchtwagen Ankauf',
      description: 'Professioneller Ankauf von Gebrauchtwagen aller Marken und Modelle zu Bestpreisen.',
      link: '/gebrauchtwagen-ankauf',
      features: ['Alle Marken', 'Faire Bewertung', 'Sofortige Auszahlung']
    },
    {
      icon: Wrench,
      title: 'Unfallwagen Ankauf',
      description: 'Ankauf von Unfallfahrzeugen aller Art - von leichten Schäden bis zum Totalschaden.',
      link: '/unfallwagen-ankauf',
      features: ['Alle Unfallarten', 'Kostenlose Begutachtung', 'Express Service']
    },
    {
      icon: Building2,
      title: 'Firmenwagen Ankauf',
      description: 'Spezialisiert auf den Ankauf von Firmenwagen und kompletten Fuhrparks.',
      link: '/firmenwagen-ankauf',
      features: ['Fuhrpark Auflösung', 'Leasingrückläufer', 'Steuerrelevante Dokumente']
    },
    {
      icon: Gauge,
      title: 'Motorschaden Ankauf',
      description: 'Faire Preise für Fahrzeuge mit Motorschaden und technischen Defekten.',
      link: '/motorschaden-ankauf',
      features: ['Alle Motorschäden', 'Faire Bewertung', 'Kostenlose Abholung']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            <Star className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Unsere Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Professioneller
            <span className="text-primary"> Autoankauf</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Spezialisiert auf den Ankauf verschiedener Fahrzeugarten zu Bestpreisen
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700">
                    <Star className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <Link
                to={service.link}
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
              >
                <span className="font-medium">Mehr erfahren</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}