import React from 'react';
import { motion } from 'framer-motion';
import { Car, BadgeEuro, Shield, MapPin, CheckCircle2, BadgeCheck, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function MainContent() {
  const serviceLinks = [
    { path: "/stuttgart/gebrauchtwagen-ankauf", text: "Gebrauchtwagen Ankauf Stuttgart" },
    { path: "/stuttgart/unfallwagen-ankauf", text: "Unfallwagen Ankauf Stuttgart" },
    { path: "/stuttgart/firmenwagen-ankauf", text: "Firmenwagen Ankauf Stuttgart" },
    { path: "/stuttgart/motorschaden-ankauf", text: "Motorschaden Ankauf Stuttgart" },
    { path: "/stuttgart/kfz-ankauf", text: "KFZ Ankauf Stuttgart" },
    { path: "/stuttgart/pkw-ankauf", text: "PKW Ankauf Stuttgart" },
  ];

  const features = [
    {
      icon: Car,
      title: 'Stuttgart Express',
      description: 'Schnell & Verlässlich',
      benefits: [
        'Anfahrt in 25 Minuten',
        'Sofortige Abwicklung',
        'Abholung vom Kessel bis Umland',
        'Flexible Termine bis 21 Uhr'
      ]
    },
    {
      icon: BadgeEuro,
      title: 'Schwaben-Fair',
      description: 'Ehrliche Preise sofort',
      benefits: [
        'Vor-Ort Bewertung',
        'Garantierte Zahlung',
        'Keine Extrakosten',
        'Bestpreis schriftlich'
      ]
    },
    {
      icon: Shield,
      title: 'Stuttgarter Qualität',
      description: 'Ihr Partner vor Ort',
      benefits: [
        'TÜV-Station inklusive',
        'Direkte Abmeldung',
        'Komplettservice',
        'Seriöse Abwicklung'
      ]
    }
  ];

  const mainContentText = {
    title: "Autoankauf Stuttgart - schnell, direkt, schwäbisch sparsam",
    paragraphs: [
      "Keine Zeit verlieren im Stuttgarter Verkehr: Von Bad Cannstatt bis Vaihingen, vom Kessel bis zu den Fildern - wir sind in 25 Minuten bei Ihnen. Mit Direktankauf und Sofortzahlung sparen Sie sich unnötige Wege durch die Stadt.",
      
      "Die Stuttgarter Kehrwoche gilt auch beim Autoverkauf: Sauber, ordentlich, korrekt. Unser Preis steht nach 15 Minuten - garantiert ohne Nachverhandeln und versteckte Kosten. Was wir zusagen, wird gezahlt - typisch schwäbisch eben.",
      
      "Passt perfekt zum Feierabendverkehr: Wir kommen auch nach 18 Uhr oder am Samstag. Mit oder ohne TÜV, Unfall oder Motorschaden - wir kaufen jeden Wagen. Inklusive Abmeldung beim Stuttgarter Amt. Einfacher geht's nicht."
    ]
  };

  const specializedServicesContent = {
    title: "Ihr Autoankauf in Stuttgart",
    description: "Vom Bopser bis zum Killesberg: Wir kommen zu Ihnen - mit fairem Angebot und Sofortbezahlung. Ohne Wenn und Aber, schwäbisch direkt. Mit kostenloser Abmeldung beim Kreisverwaltungsreferat."
  };

  const regionalExpertiseContent = {
    title: "Stuttgart und Region",
    description: "Ob im Talkessel oder auf den Fildern - wir sind schnell vor Ort. Mit direkter Bezahlung und kompletter Abwicklung sparen Sie sich jeden unnötigen Weg durch den Stadtverkehr."
  };

  const relatedServicesContent = {
    title: "Premium Autoankauf Services",
    description: "Entdecken Sie unsere spezialisierten Dienstleistungen für den Premiumfahrzeug-Ankauf in Stuttgart und der Region."
  };

  const cities = [
    { to: "/autoankauf-berlin", text: "Berlin" },
    { to: "/autoankauf-hamburg", text: "Hamburg" },
    { to: "/autoankauf-dresden", text: "Dresden" },
    { to: "/autoankauf-frankfurt", text: "Frankfurt" }
  ];

  return (
    <ParallaxProvider>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary text-sm sm:text-base font-medium">Premium Autoankauf Stuttgart</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6"
            >
              Autoankauf Stuttgart
              <span className="text-primary"> zum Premiumpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600"
            >
              Professioneller Autoankauf in der Automotive City.
              Premium Service und faire Preise in allen Stadtteilen.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-20">
            {features.map((feature, index) => (
              <Parallax
                key={index}
                translateY={[10, -10]}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-500 h-full"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{feature.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-20">
            {/* Main Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">
                {mainContentText.title}
              </h3>
              {mainContentText.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-600">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-4 sm:mt-8">
                {[
                  'Kostenlose Fahrzeugbewertung',
                  'Sofortige Auszahlung',
                  'Service in allen Stadtteilen',
                  'Bestpreis Garantie',
                  'Express Abwicklung',
                  'Alle Marken & Modelle'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <BadgeCheck className="w-4 h-4 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Main Content Sections with Enhanced Internal Linking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >

              {/* Specialized Services Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  {specializedServicesContent.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {specializedServicesContent.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { to: "/stuttgart/motorschaden-ankauf", text: "Motorschaden Ankauf", icon: Car },
                    { to: "/stuttgart/kfz-ankauf", text: "KFZ Ankauf", icon: BadgeCheck },
                    { to: "/stuttgart/pkw-ankauf", text: "PKW Ankauf", icon: Shield }
                  ].map((service, index) => (
                    <Link
                      key={index}
                      to={service.to}
                      className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <service.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{service.text}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Regional Expertise Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">
                    {regionalExpertiseContent.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-6">
                    {regionalExpertiseContent.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cities.map((city, index) => (
                      <Link
                        key={index}
                        to={city.to}
                        className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm group"
                      >
                        <MapPin className="w-4 h-4 text-primary mr-2 group-hover:scale-110 transition-transform" />
                        <span className="text-white group-hover:text-primary transition-colors">{city.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Services Box */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Car className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold text-gray-900">{relatedServicesContent.title}</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {relatedServicesContent.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">{link.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-6 relative z-10">
                Jetzt Auto in Stuttgart verkaufen
              </h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto relative z-10">
                Kontaktieren Sie uns für eine kostenlose Bewertung Ihres Fahrzeugs.
                Wir sind in ganz Stuttgart für Sie da.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-10">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Auto bewerten
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}