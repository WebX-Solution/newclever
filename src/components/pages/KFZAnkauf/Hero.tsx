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
    heading: "KFZ Ankauf Berlin",
    description: "Ihr Fachmann für KFZ Ankauf in Berlin. Schnell, zuverlässig und mit Bestpreisgarantie in der Hauptstadt. Kostenlose Bewertung vor Ort.",
    benefits: ["Sofortauszahlung in Berlin", "Gratis Fahrzeugabholung", "Berliner Bestpreis"]
  },
  Hamburg: {
    heading: "KFZ Ankauf Hamburg",
    description: "Professioneller KFZ Ankauf mit hanseatischer Tradition in Hamburg. Faire Preise und persönliche Beratung in der Hansestadt.",
    benefits: ["Express-Auszahlung", "Kostenlose Abholung", "Hamburger Höchstpreis"]
  },
  München: {
    heading: "KFZ Ankauf München",
    description: "Kompetenter KFZ Ankauf in der bayerischen Metropole. Premium-Service und Bestpreise für Ihr Fahrzeug in München.",
    benefits: ["Sofortige Barzahlung", "Gratis Abholung", "Münchner Spitzenpreise"]
  },
  Köln: {
    heading: "KFZ Ankauf Köln",
    description: "Ihr verlässlicher Partner für KFZ Ankauf im Rheinland. Unkomplizierte Abwicklung und faire Preise in Köln und Umgebung.",
    benefits: ["Express Bargeld", "Kostenlose Abholung", "Kölner Bestpreis"]
  },
  Frankfurt: {
    heading: "KFZ Ankauf Frankfurt",
    description: "Professioneller KFZ Ankauf in der Mainmetropole. Schnelle Abwicklung und Top-Preise im Herzen von Frankfurt.",
    benefits: ["Sofortige Auszahlung", "Gratis Abholung", "Frankfurter Premium"]
  },
  Stuttgart: {
    heading: "KFZ Ankauf Stuttgart",
    description: "KFZ Ankauf mit schwäbischer Gründlichkeit in Stuttgart. Faire Bewertung und beste Preise in der Automobilstadt.",
    benefits: ["Express-Bezahlung", "Kostenfreie Abholung", "Stuttgarter Bestpreis"]
  },
  Düsseldorf: {
    heading: "KFZ Ankauf Düsseldorf",
    description: "Professioneller KFZ Ankauf an der Königsallee. Schnelle und faire Abwicklung in der Landeshauptstadt.",
    benefits: ["Sofortiges Bargeld", "Gratis Abholung", "Düsseldorfer Fair-Preis"]
  },
  Leipzig: {
    heading: "KFZ Ankauf Leipzig",
    description: "Ihr kompetenter Ansprechpartner für KFZ Ankauf in Leipzig. Schnell, transparent und zu Top-Konditionen.",
    benefits: ["Sofort-Auszahlung", "Kostenlose Abholung", "Leipziger Bestpreis"]
  },
  Dortmund: {
    heading: "KFZ Ankauf Dortmund",
    description: "Zuverlässiger KFZ Ankauf im Ruhrgebiet. Faire Preise und schnelle Abwicklung in Dortmund.",
    benefits: ["Express-Cash", "Gratis Abholung", "Dortmunder Fair-Deal"]
  },
  Bremen: {
    heading: "KFZ Ankauf Bremen",
    description: "Hanseatischer KFZ Ankauf in Bremen. Seriöse Abwicklung und faire Preise in der Hansestadt.",
    benefits: ["Sofortzahlung", "Kostenlose Abholung", "Bremer Bestpreis"]
  },
  Bochum: {
    heading: "KFZ Ankauf Bochum",
    description: "Professioneller KFZ Ankauf im Herzen des Ruhrgebiets. Schnelle und faire Abwicklung in Bochum.",
    benefits: ["Express-Auszahlung", "Gratis Abholung", "Bochumer Fair-Preis"]
  },
  Essen: {
    heading: "KFZ Ankauf Essen",
    description: "Kompetenter KFZ Ankauf in der Ruhrmetropole Essen. Faire Preise und schneller Service im Herzen des Ruhrgebiets.",
    benefits: ["Express-Auszahlung", "Kostenlose Abholung", "Essener Bestpreis"]
  },
};

const defaultContent = {
  heading: "KFZ Ankauf Deutschland",
  description: "Professioneller KFZ Ankauf bundesweit. Express-Service, faire Bewertung und kostenlose Abholung in ganz Deutschland. Ankauf aller Marken und Modelle.",
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80)',
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
                  KFZ Ankauf {city ? city : "Deutschland"}
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
                    icon: Car,
                    title: 'Alle KFZ Typen',
                    description: 'Ankauf aller Marken und Modelle',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Bestpreise',
                    description: 'Garantiert höchste Preise für Ihr KFZ',
                    delay: 0.2
                  },
                  {
                    icon: Shield,
                    title: 'Seriös',
                    description: 'Über 20 Jahre Erfahrung im Autoankauf',
                    delay: 0.4
                  },
                  {
                    icon: Clock,
                    title: 'Express',
                    description: 'Schnelle Abwicklung & Auszahlung',
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