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
    heading: "Fahrzeug mit Motorschaden Ankauf Berlin",
    description: "Professioneller Ankauf von Fahrzeugen mit Motorschaden in Berlin. Faire Bewertung und schnelle Abwicklung in der Hauptstadt.",
    benefits: ["Express Bewertung in Berlin", "Kostenlose Abholung", "Berliner Bestpreis"]
  },
  Hamburg: {
    heading: "Auto mit Motorschaden Ankauf Hamburg",
    description: "Spezialist für den Ankauf von Fahrzeugen mit Motorschaden in Hamburg. Hanseatische Kompetenz und faire Preise.",
    benefits: ["Hamburger Sofortankauf", "Gratis Abholung", "Hanseatischer Bestpreis"]
  },
  München: {
    heading: "Kfz mit Motorschaden Ankauf München",
    description: "Ihr Experte für Motorschaden-Ankauf in der bayerischen Metropole. Premium-Service und Bestpreise für defekte Fahrzeuge.",
    benefits: ["Münchner Express-Service", "Kostenfreie Abholung", "Bayerischer Höchstpreis"]
  },
  Köln: {
    heading: "Fahrzeug mit Motorschaden Ankauf Köln",
    description: "Kompetenter Ankauf von Fahrzeugen mit Motorschaden im Rheinland. Schnelle und faire Abwicklung in Köln.",
    benefits: ["Kölner Sofortbewertung", "Gratis Abholung", "Rheinischer Bestpreis"]
  },
  Frankfurt: {
    heading: "Pkw mit Motorschaden Ankauf Frankfurt",
    description: "Motorschaden Ankauf in der Mainmetropole. Professionelle Bewertung und Höchstpreise für defekte Motoren.",
    benefits: ["Frankfurter Express-Ankauf", "Kostenlose Abholung", "Main-Bestpreis"]
  },
  Stuttgart: {
    heading: "Fahrzeug mit Motorschaden Ankauf Stuttgart",
    description: "Professioneller Motorschaden-Ankauf in der Automobilstadt. Schwäbische Gründlichkeit bei der Fahrzeugbewertung.",
    benefits: ["Stuttgarter Sofortbewertung", "Gratis Abholung", "Baden-Württemberg Bestpreis"]
  },
  Düsseldorf: {
    heading: "Fahrzeug mit Motorschaden Ankauf Düsseldorf",
    description: "Ankauf von Fahrzeugen mit Motorschaden in Düsseldorf. Faire Preise und schnelle Abwicklung an der Königsallee.",
    benefits: ["Express-Service", "Kostenlose Abholung", "Düsseldorfer Premium"]
  },
  Leipzig: {
    heading: "Fahrzeug mit Motorschaden Ankauf Leipzig",
    description: "Ihr Partner für den Ankauf von Fahrzeugen mit Motorschaden in Leipzig. Faire Preise und kompetente Bewertung in Sachsen.",
    benefits: ["Leipziger Sofortankauf", "Gratis Abholung", "Sächsischer Bestpreis"]
  },
  Dortmund: {
    heading: "Auto mit Motorschaden Ankauf Dortmund",
    description: "Auto mit Motorschaden verkaufen im Ruhrgebiet. Schnelle Abwicklung und faire Preise in Dortmund und Umgebung.",
    benefits: ["Ruhrgebiets-Express", "Kostenlose Abholung", "Dortmunder Bestpreis"]
  },
  Bremen: {
    heading: "Motorschaden Ankauf Bremen",
    description: "Professioneller Ankauf von Fahrzeugen mit Motorschaden in Bremen. Norddeutsche Kompetenz und faire Konditionen.",
    benefits: ["Bremer Express-Service", "Gratis Abholung", "Hanseaten-Bestpreis"]
  },
  Bochum: {
    heading: "Motorschaden Ankauf Bochum",
    description: "Spezialist für den Ankauf von Fahrzeugen mit Motorschaden in Bochum. Kompetente Bewertung im Ruhrgebiet.",
    benefits: ["Sofortige Bargeldauszahlung", "Kostenlose Abholung", "Ruhrgebiets-Bestpreis"]
  },
  Essen: {
    heading: "Fahrzeug mit Motorschaden Ankauf Essen",
    description: "Professioneller Ankauf von Fahrzeugen mit Motorschaden in der Ruhrmetropole Essen. Faire Bewertung und Express-Service für alle Motorschäden.",
    benefits: ["Essener Express-Service", "Kostenlose Abholung", "Ruhrgebiets-Bestpreis"]
  }
};

const defaultContent = {
  heading: "Motorschaden Ankauf Deutschland",
  description: "Professioneller Ankauf von Fahrzeugen mit Motorschaden bundesweit. Faire Bewertung und schnelle Abwicklung für alle Arten von Motordefekten - egal wo in Deutschland.",
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80)',
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
                  Motorschaden Ankauf {city ? city : "Deutschland"}
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
                    title: 'Alle Motorschäden',
                    description: 'Ankauf aller Arten von Motordefekten',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Bestpreise',
                    description: 'Garantiert höchste Preise für Motorschäden',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Seriös',
                    description: 'Professionelle Schadensbegutachtung',
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