import { motion } from 'framer-motion';
import { Car, BadgeEuro, Clock, Shield, Star, CheckCircle2, Wrench } from 'lucide-react';
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
    heading: "Unfallwagen Ankauf Berlin",
    description: "Professioneller Unfallwagen Ankauf in Berlin. Faire Bewertung und Express-Abwicklung in der Hauptstadt, egal wie schwer der Unfallschaden.",
    benefits: ["Berliner Express-Service", "Kostenlose Abholung", "Hauptstadt-Bestpreis"]
  },
  Hamburg: {
    heading: "Unfallwagen Ankauf Hamburg",
    description: "Hanseatischer Ankauf von Unfallfahrzeugen in Hamburg. Kompetente Schadensbewertung und faire Preise in der Hansestadt.",
    benefits: ["Hamburger Sofortankauf", "Gratis Abholung", "Hanseatischer Bestpreis"]
  },
  München: {
    heading: "Unfallwagen Ankauf München",
    description: "Ihr Experte für Unfallwagen Ankauf in der bayerischen Metropole. Premium-Service und Bestpreise für Unfallfahrzeuge aller Art.",
    benefits: ["Münchner Express-Gutachten", "Kostenlose Abholung", "Bayerischer Premium-Preis"]
  },
  Köln: {
    heading: "Unfallwagen Ankauf Köln",
    description: "Schneller und fairer Unfallwagen Ankauf im Rheinland. Professionelle Begutachtung und Top-Preise in Köln.",
    benefits: ["Express-Bewertung", "Gratis Abholung", "Kölner Bestpreis"]
  },
  Frankfurt: {
    heading: "Unfallwagen Ankauf Frankfurt",
    description: "Kompetenter Ankauf von Unfallfahrzeugen in der Mainmetropole. Schnelle Abwicklung und faire Preise in Frankfurt.",
    benefits: ["Sofort-Bargeld", "Kostenlose Abholung", "Frankfurter Fair-Price"]
  },
  Stuttgart: {
    heading: "Unfallwagen Ankauf Stuttgart",
    description: "Professioneller Unfallwagen Ankauf in der Automobilstadt. Schwäbische Gründlichkeit bei der Schadensbewertung.",
    benefits: ["Stuttgart Express-Service", "Gratis Abholung", "Baden-Württemberg Bestpreis"]
  },
  Düsseldorf: {
    heading: "Unfallwagen Ankauf Düsseldorf",
    description: "Zuverlässiger Ankauf von Unfallfahrzeugen in Düsseldorf. Faire Preise und schnelle Abwicklung an der Königsallee.",
    benefits: ["Sofortige Auszahlung", "Kostenlose Abholung", "Düsseldorfer Premium"]
  },
  Leipzig: {
    heading: "Unfallwagen Ankauf Leipzig",
    description: "Ihr Partner für Unfallwagen Ankauf in Leipzig. Transparente Bewertung und faire Preise in ganz Sachsen.",
    benefits: ["Express-Gutachten", "Gratis Abholung", "Leipziger Bestpreis"]
  },
  Dortmund: {
    heading: "Unfallwagen Ankauf Dortmund",
    description: "Professioneller Unfallwagen Ankauf im Ruhrgebiet. Schnelle Abwicklung und faire Preise in Dortmund.",
    benefits: ["Ruhrgebiets-Express", "Kostenlose Abholung", "Dortmunder Fair-Deal"]
  },
  Bremen: {
    heading: "Unfallwagen Ankauf Bremen",
    description: "Kompetenter Ankauf von Unfallfahrzeugen in Bremen. Norddeutsche Zuverlässigkeit und faire Konditionen.",
    benefits: ["Bremer Sofortankauf", "Gratis Abholung", "Hanseaten-Bestpreis"]
  },
  Bochum: {
    heading: "Unfallwagen Ankauf Bochum",
    description: "Erfahrener Unfallwagen Ankauf im Herzen des Ruhrgebiets. Faire Preise und schnelle Abwicklung in Bochum.",
    benefits: ["Express-Bewertung", "Kostenlose Abholung", "Bochumer Bestpreis"]
  },
  Essen: {
    heading: "Unfallwagen Ankauf Essen",
    description: "Ihr Spezialist für Unfallwagen Ankauf in der Ruhrmetropole Essen. Professionelle Schadensbegutachtung und Bestpreise.",
    benefits: ["Essener Express-Service", "Gratis Abholung", "Ruhrpott Bestpreis"]
  }
};

const defaultContent = {
  heading: "Unfallwagen Ankauf Deutschland",
  description: "Professioneller Unfallwagen Ankauf bundesweit. Faire Bewertung und Express-Abwicklung für alle Arten von Unfallschäden. Kostenlose Begutachtung vor Ort.",
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1597328290883-50c5787b7c7e)',
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
                  Unfallwagen Ankauf {city ? city : "Deutschland"}
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
                  <Wrench className="w-5 h-5 mr-2" />
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
                    icon: Wrench,
                    title: 'Alle Unfallarten',
                    description: 'Ankauf von leichten bis schweren Unfallschäden',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Faire Preise',
                    description: 'Bestpreise für Ihr Unfallfahrzeug garantiert',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Experten',
                    description: 'Professionelle Schadensbegutachtung vor Ort',
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