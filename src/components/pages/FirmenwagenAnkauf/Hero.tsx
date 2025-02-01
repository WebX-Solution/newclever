import React from 'react';
import { motion } from 'framer-motion';
import { Car, BadgeEuro, Clock, Shield, Star, CheckCircle2, Building2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  city: string;
}

const cityTexts: {
  [key: string]: {
    heading: string;
    description: string;
    benefits: string[];
    callToAction: string;
  }
} = {
  Berlin: {
    heading: "Firmenwagen Ankauf Berlin",
    description: "Ihr Experte für den Ankauf von Firmenwagen in Berlin und Brandenburg. Faire Bewertung nach aktuellen Marktpreisen der Hauptstadt.",
    benefits: ["Sofortige Auszahlung in Berlin", "Kostenlose Abholung", "Berliner Bestpreis Garantie"],
    callToAction: "Jetzt in Berlin bewerten lassen"
  },
  Hamburg: {
    heading: "Firmenwagen Ankauf Hamburg",
    description: "Professioneller Ankauf von Firmenfahrzeugen in der Hansestadt Hamburg. Maritime Kompetenz im Flottenankauf.",
    benefits: ["Hamburger Express-Auszahlung", "Kostenlose Abholung", "Hanseatische Bestpreis Garantie"],
    callToAction: "Hamburger Bewertung anfordern"
  },
  München: {
    heading: "Firmenwagen Ankauf München",
    description: "Bayerns erste Adresse für den Ankauf von Firmenwagen und Fuhrparks. Premium-Service in der Automobil-Metropole.",
    benefits: ["Sofortige Auszahlung in München", "Kostenlose Abholung", "Münchner Bestpreis"],
    callToAction: "Münchner Bewertung starten"
  },
  Köln: {
    heading: "Firmenwagen Ankauf Köln",
    description: "Rheinischer Firmenwagen-Ankauf mit Tradition. Faire Bewertung und schnelle Abwicklung im Rheinland.",
    benefits: ["Express-Auszahlung in Köln", "Kostenlose Abholung", "Kölner Bestpreis"],
    callToAction: "Kölner Bewertung anfordern"
  },
  Frankfurt: {
    heading: "Firmenwagen Ankauf Frankfurt",
    description: "Professioneller Ankauf von Firmenwagen im Herzen der Finanzmetropole. Schnelle und diskrete Abwicklung.",
    benefits: ["Frankfurter Sofortauszahlung", "Kostenlose Abholung", "Maintaler Bestpreis"],
    callToAction: "Frankfurter Bewertung einholen"
  },
  Stuttgart: {
    heading: "Firmenwagen Ankauf Stuttgart",
    description: "Ihr Partner für den Ankauf von Firmenwagen in der Automobilstadt Stuttgart. Zuverlässig und transparent.",
    benefits: ["Sofortige Auszahlung in Stuttgart", "Kostenlose Abholung", "Stuttgarter Bestpreis Garantie"],
    callToAction: "Stuttgarter Bewertung anfordern"
  },
  Düsseldorf: {
    heading: "Firmenwagen Ankauf Düsseldorf",
    description: "Experten für den Ankauf von Firmenfahrzeugen in Düsseldorf. Schnelle und faire Abwicklung.",
    benefits: ["Express-Auszahlung in Düsseldorf", "Kostenlose Abholung", "Düsseldorfer Bestpreis"],
    callToAction: "Düsseldorfer Bewertung starten"
  },
  Leipzig: {
    heading: "Firmenwagen Ankauf Leipzig",
    description: "Professioneller Ankauf von Firmenwagen in Leipzig. Faire Preise und schnelle Abwicklung.",
    benefits: ["Sofortige Auszahlung in Leipzig", "Kostenlose Abholung", "Leipziger Bestpreis"],
    callToAction: "Leipziger Bewertung anfordern"
  },
  Dortmund: {
    heading: "Firmenwagen Ankauf Dortmund",
    description: "Ihr Spezialist für den Ankauf von Firmenfahrzeugen in Dortmund. Transparent und zuverlässig.",
    benefits: ["Sofortige Auszahlung in Dortmund", "Kostenlose Abholung", "Dortmunder Bestpreis"],
    callToAction: "Dortmunder Bewertung starten"
  },
  Bremen: {
    heading: "Firmenwagen Ankauf Bremen",
    description: "Kompetenter Ankauf von Firmenwagen in Bremen. Faire Preise und schnelle Abwicklung.",
    benefits: ["Sofortige Auszahlung in Bremen", "Kostenlose Abholung", "Bremer Bestpreis"],
    callToAction: "Bremer Bewertung anfordern"
  },
  Bochum: {
    heading: "Firmenwagen Ankauf Bochum",
    description: "Professioneller Ankauf von Firmenfahrzeugen im Herzen des Ruhrgebiets. Schnelle Abwicklung und faire Preise für Ihren Fuhrpark in Bochum.",
    benefits: ["Express-Auszahlung in Bochum", "Kostenlose Abholung", "Ruhrgebiets-Bestpreis"],
    callToAction: "Bochumer Bewertung anfordern"
  },
  Essen: {
    heading: "Firmenwagen Ankauf Essen",
    description: "Kompetenter Firmenwagen-Ankauf in der Ruhrmetropole Essen. Spezialisiert auf Flottenankauf und Geschäftsfahrzeuge.",
    benefits: ["Sofortige Auszahlung in Essen", "Gratis Abholung", "Essener Premium-Preis"],
    callToAction: "Essener Bewertung starten"
  }
};

const defaultContent = {
  heading: "Firmenwagen Ankauf Deutschland",
  description: "Professioneller Ankauf von Firmenfahrzeugen und Fuhrparks bundesweit. Express-Service und Bestpreise für Ihre Flottenfahrzeuge in ganz Deutschland.",
  benefits: ["Express Bewertung", "Kostenlose Abholung", "Bestpreis Garantie"],
  callToAction: "Jetzt bundesweit bewerten lassen"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1647281194826-11459827b123)',
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
                  Firmenwagen Ankauf {city ? city : "Deutschland"}
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
                  href="#bewertung"
                  className="group inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Building2 className="w-5 h-5 mr-2" />
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
                  <div key={index} className="flex items-center space-x-2 text-white/80">
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
                    icon: Building2,
                    title: 'Fuhrpark & Flotten',
                    description: 'Ankauf kompletter Fuhrparks und Einzelfahrzeuge',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Bestpreise',
                    description: 'Garantiert höchste Preise für Firmenfahrzeuge',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Seriös',
                    description: 'Professionelle Abwicklung & Dokumentation',
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