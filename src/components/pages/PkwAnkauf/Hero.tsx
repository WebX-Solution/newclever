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
    heading: "PKW Ankauf Berlin",
    description: "Ihr vertrauenswürdiger Partner für PKW Ankauf in Berlin. Schnelle Abwicklung und Bestpreise in der Hauptstadt.",
    benefits: ["Express Bargeld in Berlin", "Kostenlose Abholung", "Berliner Bestpreis"]
  },
  Hamburg: {
    heading: "PKW Ankauf Hamburg",
    description: "Professioneller PKW Ankauf mit hanseatischer Tradition. Faire Bewertung und Top-Service in Hamburg.",
    benefits: ["Hamburger Sofortauszahlung", "Gratis Abholung", "Hanseatischer Bestpreis"]
  },
  München: {
    heading: "PKW Ankauf München",
    description: "Premium PKW Ankauf in der bayerischen Landeshauptstadt. Maximale Preise und erstklassiger Service in München.",
    benefits: ["Sofortige Auszahlung", "Kostenlose Abholung", "Münchner Premium"]
  },
  Köln: {
    heading: "PKW Ankauf Köln",
    description: "Schneller und fairer PKW Ankauf im Rheinland. Kölsche Zuverlässigkeit und beste Preise garantiert.",
    benefits: ["Express-Auszahlung", "Gratis Abholung", "Kölner Bestpreis"]
  },
  Frankfurt: {
    heading: "PKW Ankauf Frankfurt",
    description: "Ihr Experte für PKW Ankauf in der Mainmetropole. Höchstpreise und schnelle Abwicklung in Frankfurt.",
    benefits: ["Sofort-Bargeld", "Kostenlose Abholung", "Frankfurter Fair-Preis"]
  },
  Stuttgart: {
    heading: "PKW Ankauf Stuttgart",
    description: "Professioneller PKW Ankauf in der Automobilstadt. Schwäbische Gründlichkeit und faire Preise in Stuttgart.",
    benefits: ["Direkte Auszahlung", "Gratis Abholung", "Stuttgarter Bestpreis"]
  },
  Düsseldorf: {
    heading: "PKW Ankauf Düsseldorf",
    description: "Kompetenter PKW Ankauf an der Königsallee. Schnelle und faire Abwicklung in der Landeshauptstadt.",
    benefits: ["Express-Service", "Kostenlose Abholung", "Düsseldorfer Premium"]
  },
  Leipzig: {
    heading: "PKW Ankauf Leipzig",
    description: "Zuverlässiger PKW Ankauf in Leipzig. Faire Bewertung und schnelle Abwicklung in ganz Sachsen.",
    benefits: ["Sofortauszahlung", "Gratis Abholung", "Leipziger Bestpreis"]
  },
  Dortmund: {
    heading: "PKW Ankauf Dortmund",
    description: "Ihr Partner für PKW Ankauf im Ruhrgebiet. Faire Preise und Express-Service in Dortmund.",
    benefits: ["Express-Bargeld", "Kostenlose Abholung", "Dortmunder Fair-Deal"]
  },
  Bremen: {
    heading: "PKW Ankauf Bremen",
    description: "Professioneller PKW Ankauf in der Hansestadt Bremen. Norddeutsche Kompetenz und faire Konditionen.",
    benefits: ["Sofortzahlung", "Gratis Abholung", "Bremer Bestpreis"]
  },
  Bochum: {
    heading: "PKW Ankauf Bochum",
    description: "Schneller PKW Ankauf im Herzen des Ruhrgebiets. Faire Preise und persönliche Beratung in Bochum.",
    benefits: ["Express-Auszahlung", "Kostenlose Abholung", "Bochumer Fair-Preis"]
  },
  Essen: {
    heading: "PKW Ankauf Essen",
    description: "Ihr Fachmann für PKW Ankauf in der Ruhrmetropole Essen. Schnelle Abwicklung und Top-Preise garantiert.",
    benefits: ["Sofort-Bargeld", "Gratis Abholung", "Essener Bestpreis"]
  }
};

const defaultContent = {
  heading: "PKW Ankauf Deutschland",
  description: "Ihr bundesweiter Partner für professionellen PKW Ankauf. Express-Service, faire Preise und kostenlose Abholung in ganz Deutschland.",
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80)',
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
                  PKW Ankauf {city ? city : "Deutschland"}
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
                    icon: Car,
                    title: 'Alle PKW Typen',
                    description: 'Ankauf aller Marken und Modelle',
                    delay: 0
                  },
                  {
                    icon: BadgeEuro,
                    title: 'Bestpreise',
                    description: 'Garantiert höchste Preise für Ihren PKW',
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