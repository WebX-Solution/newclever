import React from 'react';
import { motion } from 'framer-motion';
import { Car, BadgeEuro, Shield, MapPin, CheckCircle2, BadgeCheck, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function MainContent() {
  const serviceLinks = [
    { path: "/koeln/gebrauchtwagen-ankauf", text: "Gebrauchtwagen Ankauf Köln" },
    { path: "/koeln/unfallwagen-ankauf", text: "Unfallwagen Ankauf Köln" },
    { path: "/koeln/firmenwagen-ankauf", text: "Firmenwagen Ankauf Köln" },
    { path: "/koeln/motorschaden-ankauf", text: "Motorschaden Ankauf Köln" },
    { path: "/koeln/kfz-ankauf", text: "KFZ Ankauf Köln" },
    { path: "/koeln/pkw-ankauf", text: "PKW Ankauf Köln" },
  ];

  const features = [
    {
      icon: Car,
      title: 'Kölner Autoankauf-Experten',
      description: 'Professioneller Autoankauf in der Domstadt',
      benefits: [
        'Express-Service am Rhein',
        'Sofortige Barzahlung',
        'Rheinland-Expertise',
        'Kostenlose Vor-Ort Bewertung'
      ]
    },
    {
      icon: BadgeEuro,
      title: 'Rheinmetropolen-Bestpreise',
      description: 'Faire Preise durch regionale Expertise',
      benefits: [
        'Kölner Marktkenntnis',
        'Metropolen-Erfahrung',
        'Transparente Preise',
        'Bestpreis-Garantie'
      ]
    },
    {
      icon: Shield,
      title: 'Kölner Premium-Service',
      description: 'Ihr Partner im Herzen des Rheinlands',
      benefits: [
        'Zentrale Lage',
        'Rechtssichere Verträge',
        '18.000+ Kunden in Köln'
      ]
    }
  ];

  const mainContentText = {
    title: "Autoankauf Köln - Ihr Experte in der Rheinmetropole",
    paragraphs: [
      "Als führender Autoankäufer in Köln verbinden wir rheinische Lebensart mit professionellem Service. Unser Standort im Herzen der Domstadt und die hervorragende Infrastruktur ermöglichen uns, schnell und zuverlässig auf Ihre Anfragen zu reagieren. Durch unsere langjährige Präsenz im Kölner Automarkt kennen wir die lokalen Besonderheiten und bieten Ihnen Bestpreise.",
      
      "Die zentrale Lage Kölns als Wirtschafts- und Medienstandort prägt unseren Service. Von Privatfahrzeugen über Dienstwagen bis zu Flottenfahrzeugen - unser Ankaufsservice profitiert von der dynamischen Metropolregion und der ausgezeichneten Verkehrsanbindung. Dies ermöglicht uns besonders attraktive Ankaufskonditionen.",
      
      "Von der Innenstadt bis Chorweiler, von Ehrenfeld bis Porz - unser mobiles Team ist in allen Kölner Stadtteilen präsent. Die optimale Verkehrsanbindung durch die A1, A3 und A4 sowie die zentrale Lage im Rheinland garantieren schnelle Reaktionszeiten und flexible Terminvereinbarungen. Profitieren Sie von unserem kostenlosen Vor-Ort-Service mit Rheinland-Expertise."
    ]
  };

  const specializedServicesContent = {
    title: "Spezialisierter Fahrzeugankauf am Rhein",
    description: "Als Kölner Autoankauf-Spezialist bieten wir besondere Expertise im Ankauf von Stadt- und Flottenfahrzeugen. Unsere Position als Rheinmetropole ermöglicht uns, Bestpreise auch für anspruchsvolle Fahrzeuge zu realisieren."
  };

  const regionalExpertiseContent = {
    title: "Rheinland-Kompetenz",
    description: "Mit unserer Verwurzelung in Köln verbinden wir rheinische Tradition mit modernem Service. Vom Dom bis zur Messe - wir sind Ihr lokaler Partner für den Autoankauf."
  };

  const relatedServicesContent = {
    title: "Verwandte Dienstleistungen",
    description: "Entdecken Sie unsere spezialisierten Dienstleistungen für den Autoankauf in Köln und Umgebung."
  };

  const cities = [
    { to: "/autoankauf-duesseldorf", text: "Düsseldorf" },
    { to: "/autoankauf-dortmund", text: "Dortmund" },
    { to: "/autoankauf-bochum", text: "Bochum" },
    { to: "/autoankauf-essen", text: "Essen" }
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
              <span className="text-primary text-sm sm:text-base font-medium">Autoankauf Experten Köln</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6"
            >
              Autoankauf Köln
              <span className="text-primary"> zum Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600"
            >
              Profitieren Sie von unserem professionellen Autoankauf Service in Köln.
              Faire Preise und schnelle Abwicklung in allen Stadtteilen.
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
                    { to: "/koeln/motorschaden-ankauf", text: "Motorschaden Ankauf", icon: Car },
                    { to: "/koeln/kfz-ankauf", text: "KFZ Ankauf", icon: BadgeCheck },
                    { to: "/koeln/pkw-ankauf", text: "PKW Ankauf", icon: Shield }
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
                Jetzt Auto in Köln verkaufen
              </h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto relative z-10">
                Kontaktieren Sie uns für eine kostenlose Bewertung Ihres Fahrzeugs.
                Wir sind in ganz Köln für Sie da.
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