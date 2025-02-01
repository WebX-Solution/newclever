import { motion } from 'framer-motion';
import {  Star, Trophy, ThumbsUp, MapPin } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';

export default function TrustIndicators() {
  const stats = [
    { number: '2000+', label: 'Autos in Köln angekauft' },
    { number: '20000', label: 'Zufriedene Kunden' },
    { number: '24/7', label: 'Express Service' },
    { number: '100%', label: 'Faire Bewertung' }
  ];

  const districts = [
    'Innenstadt', 'Ehrenfeld', 'Nippes', 'Mülheim',
    'Lindenthal', 'Chorweiler', 'Porz', 'Kalk',
    'Rodenkirchen', 'Deutz', 'Sülz', 'Braunsfeld'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Stats Grid */}
      <div className="container mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                className="relative p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                    <CountUp
                      end={parseInt(stat.number) || 0}
                      suffix={isNaN(parseInt(stat.number)) ? stat.number : '+'}
                      duration={2.5}
                      separator="."
                    />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container mx-auto px-4 mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
          {[
            { icon: Star, text: 'Top Bewertungen' },
            { icon: Trophy, text: 'Ausgezeichneter Service' },
            { icon: MapPin, text: 'Alle Kölner Stadtteile' },
            { icon: ThumbsUp, text: 'Empfohlen von Kölnern' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-300 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm"
            >
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Districts Marquee */}
      <div className="relative py-6 sm:py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-primary/5" />
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex space-x-8 sm:space-x-12 px-4">
            {districts.map((district, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-400 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Autoankauf {district}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}