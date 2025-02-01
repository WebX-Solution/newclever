import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, BadgeCheck, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface District {
  name: string;
  areas: string[];
  description: string;
  highlights: string[];
  image: string;
}

interface DistrictsProps {
  districts: District[];
}

const Districts: React.FC<DistrictsProps> = ({ districts }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            <span className="text-primary font-medium">Alle Stadtteile</span>
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
            Wir sind in allen Stadtteilen für Sie da
          </motion.p>
        </div>

        {/* Districts Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {districts.map((district: District, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
            >
              {/* Image with Lazy Loading */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  loading="lazy"
                  src={district.image}
                  alt={`Autoankauf ${district.name}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{district.name}</h3>
              <p className="text-gray-600 mb-6">{district.description}</p>

              {/* Areas List */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 mb-3">Stadtteile:</div>
                {district.areas.map((area: string, idx: number) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>

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
};

export default Districts;