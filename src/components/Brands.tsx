import { motion } from 'framer-motion';
import { Star, Car } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Brands() {
  const brands = [
    {
      name: 'Mercedes-Benz',
      models: ['A-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'GLC'],
      description: 'Ankauf aller Mercedes-Benz Modelle zu Bestpreisen'
    },
    {
      name: 'BMW',
      models: ['1er', '3er', '5er', '7er', 'X3', 'X5'],
      description: 'Faire Preise für alle BMW Fahrzeuge'
    },
    {
      name: 'Audi',
      models: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
      description: 'Professioneller Ankauf aller Audi Modelle'
    },
    {
      name: 'Volkswagen',
      models: ['Golf', 'Passat', 'Tiguan', 'T-Roc', 'ID.4', 'Touareg'],
      description: 'Bestpreise für VW Fahrzeuge aller Art'
    },
    {
      name: 'Porsche',
      models: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
      description: 'Spezialist für Porsche Ankauf'
    },
    {
      name: 'Toyota',
      models: ['Yaris', 'Corolla', 'RAV4', 'Camry', 'Land Cruiser'],
      description: 'Faire Bewertung für Toyota Modelle'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
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
            <span className="text-primary font-medium">Alle Marken</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Wir kaufen
            <span className="text-primary"> alle Fahrzeuge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Von Kleinwagen bis Luxusklasse - professioneller Ankauf aller Marken und Modelle
          </motion.p>
        </div>

        {/* Brands Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 -mx-4"
        >
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <h3 className="text-2xl font-bold mb-4">{brand.name}</h3>
                  <p className="text-gray-600 mb-6">{brand.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="font-semibold text-gray-900 mb-3">Beliebte Modelle:</div>
                    {brand.models.map((model, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-600">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
