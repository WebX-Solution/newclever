import { motion } from 'framer-motion';
import { Star, Trophy, Users, ThumbsUp } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export default function TrustIndicators() {
  const stats = [
    { number: '20k+', label: 'Zufriedene Kunden' },
    { number: '4.9/5', label: 'Kundenbewertung' },
    { number: '24/7', label: 'Express Service' },
    { number: '100%', label: 'Bestpreis Garantie' }
  ];

  const brands = [
    'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Ford',
    'Opel', 'Toyota', 'Renault', 'Hyundai', 'Škoda', 'Seat'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Stats Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Star, text: 'Top Bewertungen' },
            { icon: Trophy, text: 'Ausgezeichneter Service' },
            { icon: Users, text: 'Über 20.000 Kunden' },
            { icon: ThumbsUp, text: 'Empfohlen von Experten' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-2 text-gray-300"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brands Marquee */}
      <Marquee
        gradient={false}
        speed={50}
        className="py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="flex space-x-12 px-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-gray-400 text-lg font-medium whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}