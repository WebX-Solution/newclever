import { motion } from 'framer-motion';
import { Car, Shield, MapPin, Clock, Banknote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TextContent() {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* SEO-optimierter Text-Content als reguläres HTML */}
        <article className="prose max-w-none mb-8">
          <h1>Professioneller Autoankauf in Deutschland</h1>
          <div className="text-content">
            <p>
              Clever-Autoankauf ist Ihr zuverlässiger Partner für den professionellen Autoankauf in ganz Deutschland. 
              Mit jahrelanger Erfahrung und Expertise im Automobilhandel bieten wir Ihnen einen schnellen, 
              unkomplizierten und fairen Service beim Verkauf Ihres Fahrzeugs.
            </p>

            <h2>Bundesweiter Service für alle Fahrzeugarten</h2>
            <p>
              Egal ob Gebrauchtwagen, Unfallwagen oder Firmenwagen - wir kaufen Fahrzeuge aller Art zu Bestpreisen an. 
              Unser Service ist in ganz Deutschland verfügbar, von Hamburg bis München, von Berlin bis Köln. 
              Profitieren Sie von unserer kostenlosen Fahrzeugbewertung und dem Express-Service vor Ort.
            </p>

            <h2>Unsere Ankauf-Leistungen im Überblick</h2>
            <ul>
              <li>Ankauf von Gebrauchtwagen aller Marken und Modelle</li>
              <li>Unfallwagen und Fahrzeuge mit Motorschaden</li>
              <li>Firmenwagen und Leasingrückläufer</li>
              <li>Export-Fahrzeuge</li>
              <li>Sofortige Bargeldauszahlung möglich</li>
              <li>Kostenlose Fahrzeugbewertung</li>
            </ul>

            <h2>Ihre Vorteile bei Clever-Autoankauf</h2>
            <p>
              Als führender Autoankäufer in Deutschland bieten wir Ihnen zahlreiche Vorteile. Dazu gehören die 
              kostenlose Fahrzeugbewertung, Bestpreise durch unser bundesweites Händlernetzwerk, eine schnelle 
              und professionelle Abwicklung sowie die sofortige Auszahlung des vereinbarten Kaufpreises.
            </p>
          </div>
        </article>

        {/* Dynamische UI-Komponenten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 md:mb-12 text-content"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 !leading-tight">
            Bundesweiter Service für maximale Flexibilität
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
            Unser flächendeckender Service erstreckt sich über ganz Deutschland. Dies ermöglicht uns kurze Reaktionszeiten und flexible Terminvereinbarungen - perfekt abgestimmt auf Ihre individuellen Bedürfnisse. Von der Nordseeküste bis zu den Alpen, vom Rheinland bis nach Brandenburg: Unser Team ist immer in Ihrer Nähe.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: MapPin, text: 'Deutschlandweite Präsenz' },
              { icon: Clock, text: 'Flexible Terminvereinbarung' },
              { icon: Shield, text: 'Rechtssichere Abwicklung' },
              { icon: Banknote, text: 'Sofortige Auszahlung' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 !leading-tight">
              Jetzt unverbindlich anfragen
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              Nutzen Sie unseren kostenlosen Service und lassen Sie Ihr Fahrzeug von unseren Experten bewerten. Wir sind deutschlandweit für Sie da.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-base sm:text-lg font-medium hover:bg-primary-dark transition-all duration-300 group"
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Fahrzeug bewerten
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+4915256501567"
                className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-gray-900 text-base sm:text-lg font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}