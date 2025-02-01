import { motion } from 'framer-motion';
import { Star, Trophy, ThumbsUp, MapPin } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';

export default function TrustIndicators() {
  const stats = [
    { number: '8000+', label: 'Autos in Dresden angekauft' },
    { number: '20000', label: 'Zufriedene Kunden' },
    { number: '24/7', label: 'Express Service' },
    { number: '100%', label: 'Faire Bewertung' }
  ];

  const districts = [
    'Altstadt', 'Neustadt', 'Pieschen', 'Blasewitz',
    'Loschwitz', 'Plauen', 'Cotta', 'Klotzsche',
    'Prohlis', 'Leuben', 'Striesen', 'Johannstadt'
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
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CountUp
                      end={parseInt(stat.number) || 0}
                      suffix={isNaN(parseInt(stat.number)) ? stat.number : '+'}
                      duration={2.5}
                      separator="."
                    />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
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
            { icon: MapPin, text: 'Alle Dresdner Stadtteile' },
            { icon: ThumbsUp, text: 'Empfohlen von Dresdnern' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Districts Marquee */}
      <div className="relative py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-primary/5" />
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex space-x-12 px-4">
            {districts.map((district, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-400 text-lg font-medium whitespace-nowrap"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span>Autoankauf {district}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}