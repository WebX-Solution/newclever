import { motion } from 'framer-motion';
import { Car, BadgeCheck, Clock, Star, Shield, MapPin, Banknote, ThumbsUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Car,
      title: 'Alle Fahrzeugtypen',
      description: 'Wir kaufen alle Arten von Fahrzeugen an - von Gebrauchtwagen bis Unfallfahrzeuge.'
    },
    {
      icon: BadgeCheck,
      title: 'Bestpreis Garantie',
      description: 'Garantiert beste Preise durch professionelle Marktanalyse und faire Bewertung.'
    },
    {
      icon: Clock,
      title: 'Express Service',
      description: 'Schnelle Abwicklung innerhalb von 24 Stunden mit sofortiger Auszahlung.'
    },
    {
      icon: Shield,
      title: 'Seriöser Partner',
      description: 'Über 20 Jahre Erfahrung im Autoankauf mit tausenden zufriedenen Kunden.'
    },
    {
      icon: MapPin,
      title: 'Bundesweiter Service',
      description: 'Kostenlose Fahrzeugbewertung und Abholung in ganz Deutschland.'
    },
    {
      icon: Banknote,
      title: 'Sofortige Auszahlung',
      description: 'Direkte Bezahlung bei Fahrzeugübergabe - bar oder per Sofortüberweisung.'
    },
    {
      icon: ThumbsUp,
      title: 'Kundenzufriedenheit',
      description: 'Über 20.000 zufriedene Kunden sprechen für unseren Service.'
    },
    {
      icon: Star,
      title: 'Top Bewertungen',
      description: 'Ausgezeichneter Service mit durchgehend positiven Kundenbewertungen.'
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
            <ThumbsUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Ihre Vorteile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Warum Sie Ihr Auto bei uns
            <span className="text-primary"> verkaufen sollten</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Profitieren Sie von unserer langjährigen Erfahrung und unserem professionellen Service
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
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
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}