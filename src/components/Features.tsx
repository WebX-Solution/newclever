import { motion } from 'framer-motion';
import { Car, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TextContent() {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto prose prose-base sm:prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg sm:shadow-xl mb-6 sm:mb-8 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center !leading-tight">
              Autoankauf in Deutschland: Ihr kompetenter Partner für den Fahrzeugverkauf
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600">
                Clever-Autoankauf ist Ihr verlässlicher Partner für den professionellen Autoankauf in ganz Deutschland. Mit unserem bundesweiten Service und über 20-jähriger Erfahrung im Automobilhandel bieten wir Ihnen eine schnelle und unkomplizierte Möglichkeit, Ihr Fahrzeug zum Bestpreis zu verkaufen. Unser Expertenteam steht Ihnen in allen Regionen Deutschlands zur Verfügung - von Hamburg bis München, von Berlin bis Köln.
              </p>
              
              <p className="text-gray-600">
                Als Autoankäufer Deutschlands haben wir uns auf den Ankauf sämtlicher Fahrzeugtypen spezialisiert. Egal ob Gebrauchtwagen, Unfallfahrzeug, Firmenwagen oder Auto mit Motorschaden - wir garantieren Ihnen eine faire Bewertung und attraktive Ankaufspreise. Durch unsere jahrelange Markterfahrung können wir Ihnen stets die besten Konditionen anbieten.
              </p>
              
              <p className="text-gray-600">
                Unser Express-Service macht den Autoverkauf besonders einfach: Nach Ihrer Anfrage erstellen wir Ihnen umgehend ein unverbindliches Angebot. Überzeugt Sie unser Angebot, kommen wir kostenlos zu Ihrem Wunschort - egal wo in Deutschland Sie sich befinden. Die Begutachtung erfolgt professionell und transparent direkt vor Ort. Bei Einigung erfolgt die Bezahlung sofort per Bargeld oder Express-Überweisung.
              </p>
              
              <p className="text-gray-600">
                Profitieren Sie von unserem Rundum-Sorglos-Paket: Wir übernehmen für Sie die komplette Kaufabwicklung inklusive aller Formalitäten. Von der Fahrzeugabmeldung bis zum Abtransport - unser Service ist für Sie zu 100% kostenlos. Mit über 20.000 zufriedenen Kunden gehören wir zu den vertrauenswürdigsten Autoankäufern Deutschlands.
              </p>
              
              <p className="text-gray-600">
                Die Fahrzeugbewertung erfolgt nach aktuellen Marktpreisen und berücksichtigt alle relevanten Faktoren wie Alter, Kilometerstand, Ausstattung und Zustand Ihres Fahrzeugs. Durch unsere jahrelange Expertise im Automobilhandel und kontinuierliche Marktbeobachtung können wir Ihnen stets faire und marktgerechte Preise garantieren. Überzeugen Sie sich selbst von unserem professionellen Service!
              </p>
            </div>
          </motion.div>

          {/* Service Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12"
          >
            {[
              {
                icon: Car,
                title: 'Professioneller Autoankauf',
                description: 'Spezialisiert auf den Ankauf von Fahrzeugen aller Art. Von Gebrauchtwagen über Unfallfahrzeuge bis hin zu Firmenwagen - wir kaufen jedes Auto zu fairen Marktpreisen.'
              },
              {
                icon: Shield,
                title: 'Seriöse Abwicklung',
                description: 'Transparente und rechtssichere Kaufabwicklung mit sofortiger Bezahlung. Wir übernehmen alle Formalitäten und bieten einen kostenlosen Abmeldeservice.'
              },
              {
                icon: Clock,
                title: 'Express Service',
                description: 'Schnelle Abwicklung innerhalb von 24 Stunden. Kostenlose Fahrzeugbewertung und Vor-Ort Service in ganz Deutschland.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 !leading-tight">
                Profitieren Sie von unserer Expertise
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                Lassen Sie Ihr Fahrzeug jetzt von unseren erfahrenen Experten bewerten.
                Über 20.000 zufriedene Kunden vertrauen bereits auf unsere Kompetenz.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Auto bewerten
                </Link>
                <a
                  href="tel:+4915256501567"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}