import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Car, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Locations() {
  const cities = [
    {
      name: 'Berlin',
      description: 'Autoankauf Berlin',
      link: '/autoankauf-berlin',
      highlights: ['Gebrauchtwagen Ankauf Berlin', 'Unfallwagen Ankauf Berlin', 'Firmenwagen Ankauf Berlin', 'Motorschaden Ankauf Berlin']
    },
    {
      name: 'Hamburg',
      description: 'Autoankauf Hamburg',
      link: '/autoankauf-hamburg',
      highlights: ['Gebrauchtwagen Ankauf Hamburg', 'Unfallwagen Ankauf Hamburg', 'Firmenwagen Ankauf Hamburg', 'Motorschaden Ankauf Hamburg']
    },
    {
      name: 'München',
      description: 'Autoankauf München',
      link: '/autoankauf-muenchen',
      highlights: ['Gebrauchtwagen Ankauf München', 'Unfallwagen Ankauf München', 'Firmenwagen Ankauf München', 'Motorschaden Ankauf München']
    },
    {
      name: 'Köln',
      description: 'Autoankauf Köln',
      link: '/autoankauf-koeln',
      highlights: ['Gebrauchtwagen Ankauf Köln', 'Unfallwagen Ankauf Köln', 'Firmenwagen Ankauf Köln', 'Motorschaden Ankauf Köln']
    },
    {
      name: 'Frankfurt',
      description: 'Autoankauf Frankfurt',
      link: '/autoankauf-frankfurt',
      highlights: ['Gebrauchtwagen Ankauf Frankfurt', 'Unfallwagen Ankauf Frankfurt', 'Firmenwagen Ankauf Frankfurt', 'Motorschaden Ankauf Frankfurt']
    },
    {
      name: 'Stuttgart',
      description: 'Autoankauf Stuttgart',
      link: '/autoankauf-stuttgart',
      highlights: ['Gebrauchtwagen Ankauf Stuttgart', 'Unfallwagen Ankauf Stuttgart', 'Firmenwagen Ankauf Stuttgart', 'Motorschaden Ankauf Stuttgart']
    },
    {
      name: 'Düsseldorf',
      description: 'Autoankauf Düsseldorf',
      link: '/autoankauf-duesseldorf',
      highlights: ['Gebrauchtwagen Ankauf Düsseldorf', 'Unfallwagen Ankauf Düsseldorf', 'Firmenwagen Ankauf Düsseldorf', 'Motorschaden Ankauf Düsseldorf']
    },
    {
      name: 'Leipzig',
      description: 'Autoankauf Leipzig',
      link: '/autoankauf-leipzig',
      highlights: ['Gebrauchtwagen Ankauf Leipzig', 'Unfallwagen Ankauf Leipzig', 'Firmenwagen Ankauf Leipzig', 'Motorschaden Ankauf Leipzig']
    },
    {
      name: 'Dortmund',
      description: 'Autoankauf Dortmund',
      link: '/autoankauf-dortmund',
      highlights: ['Gebrauchtwagen Ankauf Dortmund', 'Unfallwagen Ankauf Dortmund', 'Firmenwagen Ankauf Dortmund', 'Motorschaden Ankauf Dortmund']
    },
    {
      name: 'Bochum',
      description: 'Autoankauf Bochum',
      link: '/autoankauf-bochum',
      highlights: ['Gebrauchtwagen Ankauf Bochum', 'Unfallwagen Ankauf Bochum', 'Firmenwagen Ankauf Bochum', 'Motorschaden Ankauf Bochum']
    },
    {
      name: 'Essen',
      description: 'Autoankauf Essen',
      link: '/autoankauf-essen',
      highlights: ['Gebrauchtwagen Ankauf Essen', 'Unfallwagen Ankauf Essen', 'Firmenwagen Ankauf Essen', 'Motorschaden Ankauf Essen']
    },
    {
      name: 'Bremen',
      description: 'Autoankauf Bremen',
      link: '/autoankauf-bremen',
      highlights: ['Gebrauchtwagen Ankauf Bremen', 'Unfallwagen Ankauf Bremen', 'Firmenwagen Ankauf Bremen', 'Motorschaden Ankauf Bremen']
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
    pauseOnHover: true,
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
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Bundesweiter Service</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Autoankauf in
            <span className="text-primary"> Ihrer Stadt</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Wir sind in allen großen Städten Deutschlands für Sie da
          </motion.p>
        </div>

        {/* Cities List - Using regular HTML instead of Slider for SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cities.map((city, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <header className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{city.name}</h2>
                <MapPin className="w-8 h-8 text-primary" />
              </header>

              <p className="text-gray-600 mb-6">{city.description}</p>

              <ul className="space-y-3 mb-6">
                {city.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={city.link}
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
              >
                <span className="font-medium">Mehr erfahren über Autoankauf in {city.name}</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* Keep the slider for visual presentation */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full">
                  {/* Icon and Title */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{city.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {city.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link
                    to={city.link}
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
                  >
                    <span className="font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { text: 'Kostenlose Bewertung', icon: Star },
            { text: 'Express Service', icon: Car },
            { text: 'Faire Preise', icon: CheckCircle2 }
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
}