import {
  Car, Phone, Mail, MapPin, Shield, Star,
  ArrowRight, CheckCircle2, Facebook, Instagram
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Gebrauchtwagen Ankauf', href: '/gebrauchtwagen-ankauf' },
    { name: 'Unfallwagen Ankauf', href: '/unfallwagen-ankauf' },
    { name: 'Firmenwagen Ankauf', href: '/firmenwagen-ankauf' },
    { name: 'PKW Ankauf', href: '/pkw-ankauf' },
    { name: 'KFZ Ankauf', href: '/kfz-ankauf' },
    { name: 'Motorschaden Ankauf', href: '/motorschaden-ankauf' },
  ];

  const regions = [
    { name: 'Berlin', href: '/autoankauf-berlin' },
    { name: 'Hamburg', href: '/autoankauf-hamburg' },
    { name: 'München', href: '/autoankauf-muenchen' },
    { name: 'Köln', href: '/autoankauf-koeln' },
    { name: 'Frankfurt', href: '/autoankauf-frankfurt' },
    { name: 'Stuttgart', href: '/autoankauf-stuttgart' },
    { name: 'Düsseldorf', href: '/autoankauf-duesseldorf' },
    { name: 'Leipzig', href: '/autoankauf-leipzig' },
    { name: 'Dortmund', href: '/autoankauf-dortmund' },
    { name: 'Essen', href: '/autoankauf-essen' },
    { name: 'Bremen', href: '/autoankauf-bremen' },
    { name: 'Dresden', href: '/autoankauf-dresden' },
    { name: 'Bochum', href: '/autoankauf-bochum' },
  ];

  return (
    <footer
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300"
      itemScope
      itemType="https://schema.org/AutoDealer"
    >
      <div className="sr-only">
        <span itemProp="name">Clever-Autoankauf - Ihr Experte für Autoankauf</span>
        <span itemProp="description">
          Professioneller Autoankauf Service in ganz Deutschland. Ankauf von Gebrauchtwagen,
          Unfallwagen und Firmenwagen zu Bestpreisen. Kostenlose Bewertung und sofortige Auszahlung.
        </span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="addressCountry" content="DE" />
          <meta itemProp="addressRegion" content="Deutschland" />
        </div>
        <meta itemProp="telephone" content="+49 (0) 152 56 501 567" />
        <meta itemProp="email" content="info@clever-autoankauf.de" />
      </div>

      <div className="container mx-auto px-4">
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-primary to-primary-dark p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Clever-Autoankauf</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-primary">Autoankauf Service</span>
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-400 max-w-lg">
                Ihr vertrauenswürdiger Partner für den Autoankauf in ganz Deutschland.
                Profitieren Sie von unserer Expertise und verkaufen Sie Ihr Auto zum Bestpreis.
              </p>
              <div className="flex items-center space-x-6">
                <a href="https://facebook.com/clever-autoankauf" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/clever-autoankauf" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="lg:pl-12">
              <h3 className="text-xl font-semibold text-white mb-8">Kontakt & Service</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <a
                    href="tel:+4915256501567"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-primary group-hover:animate-bounce" />
                    <span>+49 (0) 152 56 501 567</span>
                  </a>
                  <a
                    href="mailto:info@clever-autoankauf.de"
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    <span>info@clever-autoankauf.de</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Bundesweiter Service</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Öffnungszeiten</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span>Mo. - Fr.:</span>
                      <span>08:00 - 20:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sa.:</span>
                      <span>09:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>So.:</span>
                      <span>Nach Absprache</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Unsere Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Regionen</h4>
              <ul className="space-y-3">
                {regions.map((region, index) => (
                  <li key={index}>
                    <a
                      href={region.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      <span>Autoankauf {region.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Impressum', href: '/impressum' },
                  { label: 'Datenschutz', href: '/datenschutz' },
                  { label: 'Sitemap', href: '/sitemap.xml' },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Unsere Vorteile</h4>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle2, text: 'Kostenlose Bewertung' },
                  { icon: Shield, text: 'Sichere Abwicklung' },
                  { icon: Star, text: 'Kundenzufriedenheit garantiert' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-900 py-4 text-center text-sm text-gray-400 border-t border-gray-800">
          &copy; {currentYear} Clever-Autoankauf. Alle Rechte vorbehalten. <br />
          Made with <span className="text-red-500">&hearts;</span> by
          <a
            href="https://webx-solution.de"
            className="text-blue-400 hover:text-blue-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebX-Solution
          </a>
        </div>
      </div>
    </footer>
  );
}
