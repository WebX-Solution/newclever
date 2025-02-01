import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star, Shield, BadgeCheck, Car, ArrowRight, ThumbsUp } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {
  const brands = [
    {
      name: 'Mercedes-Benz',
      models: ['A-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'GLC', 'GLE'],
      benefits: ['Premium Ankauf', 'AMG Spezialist', 'Bestpreis Garantie']
    },
    {
      name: 'BMW',
      models: ['1er', '3er', '5er', '7er', 'X3', 'X5'],
      benefits: ['M-Modelle Ankauf', 'Faire Bewertung', 'Express Service']
    },
    {
      name: 'Audi',
      models: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'],
      benefits: ['RS-Modelle Ankauf', 'Top Konditionen', 'Schnelle Abwicklung']
    },
    {
      name: 'Volkswagen',
      models: ['Golf', 'Passat', 'Tiguan', 'T-Roc', 'ID.4', 'Touareg'],
      benefits: ['R-Line Spezialist', 'Faire Preise', 'Sofort Bargeld']
    },
    {
      name: 'Porsche',
      models: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
      benefits: ['Sport Experte', 'Höchstpreise', 'VIP Service']
    },
    {
      name: 'Toyota',
      models: ['Yaris', 'Corolla', 'RAV4', 'Camry', 'Land Cruiser'],
      benefits: ['Hybrid Spezialist', 'Faire Angebote', 'Schneller Ankauf']
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    lazyLoad: 'ondemand' as const,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

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
            <span className="text-primary font-medium">Ankauf aller Marken</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Wir kaufen
            <span className="text-primary"> alle Fahrzeuge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Von Kleinwagen bis Luxusklasse - professioneller Ankauf aller Marken und Modelle.
            Faire Preise und Express-Service garantiert.
          </motion.p>
        </div>

        {/* Enhanced Brand Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 -mx-4"
        >
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">
                  {/* Brand Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{brand.name}</h3>
                    <Car className="w-8 h-8 text-primary" />
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    {brand.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <ThumbsUp className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Models */}
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900 mb-3">Beliebte Modelle:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {brand.models.map((model, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-600">
                          <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{model}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href="/kontakt"
                      className="group flex items-center justify-between w-full px-6 py-3 bg-gray-50 hover:bg-primary text-gray-700 hover:text-white rounded-xl transition-all duration-300"
                    >
                      <span className="font-medium">Jetzt anfragen</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Alle Marken',
              description: 'Ankauf sämtlicher Fahrzeugmarken zu Top-Konditionen',
              icon: Star
            },
            {
              title: 'Faire Bewertung',
              description: 'Professionelle Marktwertanalyse mit Bestpreis-Garantie',
              icon: Shield
            },
            {
              title: 'Express Service',
              description: 'Schnelle Abwicklung und sofortige Auszahlung',
              icon: BadgeCheck
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}