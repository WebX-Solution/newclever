import { motion } from 'framer-motion';
import { Car, BadgeEuro, Clock, Shield, Star, CheckCircle2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  city: string;
}

const cityTexts: {
  [key: string]: {
    heading: string;
    description: string;
    benefits: string[];
  }
} = {
  Berlin: {
    heading: "Gebrauchtwagen Ankauf Berlin",
    description: "Schneller und fairer Gebrauchtwagen Ankauf in Berlin. Profitieren Sie von unserer langjährigen Erfahrung und den besten Preisen der Hauptstadt.",
    benefits: ["Sofort-Bargeld in Berlin", "Kostenlose Abholung", "Berliner Bestpreis"]
  },
  Hamburg: {
    heading: "Gebrauchtwagen Ankauf Hamburg",
    description: "Ihr kompetenter Partner für den Gebrauchtwagen Ankauf in Hamburg. Schnelle Abwicklung und hanseatisch faire Preise garantiert.",
    benefits: ["Hamburger Express-Auszahlung", "Kostenfreie Abholung", "Hanseaten-Bestpreis"]
  },
  München: {
    heading: "Gebrauchtwagen Ankauf München",
    description: "Premium Gebrauchtwagen Ankauf in der Bayerischen Metropole. Maximale Preise für Ihr Fahrzeug – schnell, seriös und unkompliziert.",
    benefits: ["Sofortiges Bargeld", "Gratis Abholung", "Münchner Premium-Preis"]
  },
  Köln: {
    heading: "Gebrauchtwagen Ankauf Köln",
    description: "Der faire Gebrauchtwagen Ankauf in Köln. Rheinische Zuverlässigkeit trifft auf beste Preise und schnellen Service.",
    benefits: ["Direktauszahlung vor Ort", "Gratis Abholung", "Kölsche Bestpreise"]
  },
  Frankfurt: {
    heading: "Gebrauchtwagen Ankauf Frankfurt",
    description: "Professioneller Gebrauchtwagen Ankauf im Herzen von Frankfurt. Schnelle Abwicklung und Höchstpreise in der Mainmetropole.",
    benefits: ["Sofort-Bargeld", "Kostenlose Abholung", "Frankfurter Bestpreis"]
  },
  Stuttgart: {
    heading: "Gebrauchtwagen Ankauf Stuttgart",
    description: "Ihr Experte für den Gebrauchtwagen Ankauf in der Automobilstadt Stuttgart. Professionelle Bewertung und Bestpreise garantiert.",
    benefits: ["Express-Auszahlung", "Kostenlose Abholung", "Schwäbische Bestpreise"]
  },
  Düsseldorf: {
    heading: "Gebrauchtwagen Ankauf Düsseldorf",
    description: "Top-Service beim Gebrauchtwagen Ankauf in Düsseldorf. Faire Preise und schnelle Abwicklung an der Königsallee.",
    benefits: ["Sofortige Auszahlung", "Gratis Abholung", "Düsseldorfer Fair-Preis"]
  },
  Leipzig: {
    heading: "Gebrauchtwagen Ankauf Leipzig",
    description: "Unkomplizierter Gebrauchtwagen Ankauf in Leipzig. Schnelle Abwicklung und faire Preise in ganz Sachsen.",
    benefits: ["Express-Bargeld", "Kostenlose Abholung", "Leipziger Bestpreis"]
  },
  Dortmund: {
    heading: "Gebrauchtwagen Ankauf Dortmund",
    description: "Der zuverlässige Partner für Gebrauchtwagen Ankauf im Ruhrgebiet. Faire Preise und schneller Service in Dortmund.",
    benefits: ["Sofort-Auszahlung", "Gratis Abholung", "Ruhrpott-Bestpreis"]
  },
  Bremen: {
    heading: "Gebrauchtwagen Ankauf Bremen",
    description: "Professioneller Gebrauchtwagen Ankauf in der Hansestadt Bremen. Maritime Kompetenz und faire Preise.",
    benefits: ["Direktes Bargeld", "Kostenlose Abholung", "Bremer Bestpreis"]
  },
Bochum: {
  heading: "Gebrauchtwagen Ankauf Bochum",
  description: "Ihr Spezialist für Gebrauchtwagen Ankauf im Ruhrgebiet. Faire Preise und schnelle Abwicklung in Bochum.",
  benefits: ["Sofortzahlung in Bochum", "Kostenlose Abholung", "Ruhrpott Bestpreis"]
},
  Essen: {
    heading: "Gebrauchtwagen Ankauf Essen",
    description: "Ihr vertrauenswürdiger Partner für Gebrauchtwagen Ankauf in Essen. Schnelle Abwicklung und Top-Preise in der Ruhrmetropole.",
    benefits: ["Express-Auszahlung in Essen", "Kostenlose Abholung", "Essener Bestpreis"]
  },
};

const defaultContent = {
  heading: "Gebrauchtwagen Ankauf Deutschland",
  description: "Professioneller Gebrauchtwagen Ankauf in ganz Deutschland. Faire Preise, schnelle Abwicklung und kostenlose Abholung bundesweit.",
  benefits: ["Sofortige Auszahlung", "Kostenlose Abholung", "Bestpreis Garantie"]
};

export default function Hero({ city }: HeroProps) {
  // Wenn keine Stadt angegeben ist, nutze den Default-Content
  const cityData = city ? cityTexts[city] || cityTexts['Berlin'] : defaultContent;

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <Star className="w-4 h-4 text-primary mr-2" />
                <span className="text-white text-sm">
                  Gebrauchtwagen Ankauf {city ? city : "Deutschland"}
                </span>
              </div>

              {/* Main Heading with Typing Animation */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  <span className="block">{cityData.heading}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                    <TypeAnimation
                      sequence={[
                        'zum Bestpreis',
                        2000,
                        city ? `in ${city}` : 'bundesweit',
                        2000,
                        'fair bewerten',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl">
                  {cityData.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <a
                  href="/kontakt"
                  className="group inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-5 h-5 mr-2" />
                  <span>Kostenlose Bewertung</span>
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Express Ankauf 24/7</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {cityData.benefits.map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Animated Features */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: BadgeEuro,
                    title: 'Bestpreis',
                    description: 'Garantiert höchste Preise für Ihren Gebrauchtwagen',
                    delay: 0
                  },
                  {
                    icon: Clock,
                    title: 'Express',
                    description: 'Schnelle Abwicklung innerhalb von 24 Stunden',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Seriös',
                    description: 'Über 20 Jahre Erfahrung im Autoankauf',
                    delay: 0.4
                  },
                  {
                    icon: Car,
                    title: 'Bundesweit',
                    description: 'Kostenlose Abholung in ganz Deutschland',
                    delay: 0.6
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: feature.delay }}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}