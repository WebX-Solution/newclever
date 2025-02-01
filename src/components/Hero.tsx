import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowRight,
  Phone,
  BadgeEuro,
  Clock,
  Shield,
  Car,
  Star,
  CheckCircle
} from 'lucide-react';

const benefits = [
  { icon: BadgeEuro, text: 'Bestpreis-Garantie', highlight: '100% Bestpreis', description: 'Garantiert höchste Preise für Ihren Gebrauchtwagen' },
  { icon: Clock, text: 'Express-Service', highlight: '24h Abwicklung', description: 'Schnelle und unkomplizierte Abwicklung innerhalb von 24 Stunden' },
  { icon: Shield, text: 'Seriöser Partner', highlight: 'Seit 20 Jahren', description: 'Vertrauenswürdiger Autoankauf mit langjähriger Erfahrung' },
  { icon: Car, text: 'Kostenlose Abholung', highlight: 'Bundesweit', description: 'Kostenfreie Fahrzeugabholung in ganz Deutschland' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="Autoankauf Hero Sektion"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* SEO Meta Information */}
      <div className="sr-only">
        <span itemProp="name">Clever-Autoankauf - Professioneller Autoankauf Service</span>
        <span itemProp="description">
          Verkaufen Sie Ihr Auto zum Bestpreis. Bundesweiter Autoankauf mit kostenloser Bewertung,
          sofortiger Auszahlung und Express-Service innerhalb von 24 Stunden.
        </span>
        <div itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness">
          <span itemProp="name">Clever-Autoankauf</span>
          <span itemProp="telephone">+49 (0) 152 56 501 567</span>
          <span itemProp="email">info@clever-autoankauf.de</span>
          <span itemProp="areaServed">Deutschland</span>
          <span itemProp="address">Deutschlandweit verfügbar</span>
        </div>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="description">Kostenlose Fahrzeugbewertung und Bestpreisgarantie</span>
          <span itemProp="availability">https://schema.org/InStock</span>
        </div>
      </div>

      {/* Background Image with Semantic Alt Text */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80)',
          zIndex: -1,
        }}
        role="img"
        aria-label="Professioneller Autoankauf Hintergrundbild - Moderne Fahrzeuge"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90" />
      </div>

      {/* Main Content with Rich Snippets */}
      <div className="relative container mx-auto px-4 pt-32 sm:pt-36 lg:pt-48 pb-8 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Service Badge */}
              <div
                className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                itemProp="award"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mt-4 sm:mt-0">
                  <Star className="w-4 h-4 text-primary mr-2" aria-hidden="true" />
                  <span className="text-white text-sm">Autoankauf Service</span>
                </div>
              </div>

              {/* Main Heading with SEO Optimization */}
              <div
                className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    <span className="block">Auto verkaufen</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                      <TypeAnimation
                        sequence={['Bestpreis', 2000, 'Schnell', 2000, 'Sicher', 2000]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </span>
                  </h1>
                  <p
                    className="text-base sm:text-lg text-gray-300 max-w-xl"
                    itemProp="description"
                  >
                    Professioneller Autoankauf in ganz Deutschland mit
                    <span className="text-primary font-medium"> sofortiger Auszahlung</span>.
                    Schnell, sicher und unkompliziert.
                  </p>
                </div>
              </div>

              {/* Call-to-Action Buttons with Semantic Markup */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
              >
                <a
                  href="/kontakt"
                  className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
                  role="button"
                  aria-label="Kostenlose Fahrzeugbewertung anfordern"
                  itemProp="potentialAction"
                >
                  <span>Kostenlose Bewertung</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                <a
                  href="tel:+4915256501567"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
                  role="button"
                  aria-label="Jetzt anrufen: +49 (0) 152 56 501 567"
                  itemProp="telephone"
                >
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>+49 (0) 152 56 501 567</span>
                </a>
              </div>

              {/* Trust Indicators with Rich Snippets */}
              <div
                className={`flex flex-wrap justify-center sm:justify-start gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                itemProp="hasOfferCatalog"
              >
                {['Sofortige Auszahlung', 'Kostenlose Abholung', 'Faire Preise'].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-xs sm:text-sm text-white/80"
                    itemProp="itemOffered"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Benefits Cards with Rich Snippets */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              itemProp="additionalProperty"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/PropertyValue"
                >
                  <div className="relative">
                    <benefit.icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-white font-medium mb-1"
                    itemProp="name"
                  >
                    {benefit.text}
                  </h3>
                  <p
                    className="text-primary text-sm"
                    itemProp="value"
                  >
                    {benefit.highlight}
                  </p>
                  <meta itemProp="description" content={benefit.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" aria-hidden="true" />
    </section>
  );
}