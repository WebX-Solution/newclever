import { motion } from 'framer-motion';
import { Plus, Minus, Wrench, ArrowRight } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Wie läuft der Unfallwagen Ankauf ab?',
      answer: 'Der Ankaufsprozess ist einfach und unkompliziert: Sie kontaktieren uns telefonisch oder über das Formular und beschreiben den Unfallschaden. Wir erstellen eine erste Einschätzung und vereinbaren einen Vor-Ort Termin zur detaillierten Begutachtung. Nach der Bewertung erhalten Sie ein verbindliches Kaufangebot. Bei Einigung erfolgt die sofortige Bezahlung und kostenlose Abholung.'
    },
    {
      question: 'Welche Arten von Unfallfahrzeugen kaufen Sie an?',
      answer: 'Wir kaufen alle Arten von Unfallfahrzeugen: Fahrzeuge mit leichten bis schweren Unfallschäden, Totalschaden, Motorschaden, Getriebeschaden, Hagelschaden, Brandschaden und Wasserschaden. Auch Fahrzeuge mit wirtschaftlichem Totalschaden werden von uns angekauft.'
    },
    {
      question: 'Wie wird der Preis für meinen Unfallwagen ermittelt?',
      answer: 'Die Preisermittlung basiert auf verschiedenen Faktoren: Art und Schwere des Unfallschadens, Fahrzeugmodell, Alter, Kilometerstand, Ausstattung und allgemeiner Zustand. Unsere Experten führen eine professionelle Begutachtung durch und berücksichtigen aktuelle Marktpreise für eine faire Bewertung.'
    },
    {
      question: 'Benötige ich ein Gutachten für den Verkauf?',
      answer: 'Ein Gutachten ist nicht zwingend erforderlich, kann aber bei der Preisfindung hilfreich sein. Falls vorhanden, berücksichtigen wir vorhandene Gutachten bei der Bewertung. Unsere Experten führen ohnehin eine professionelle Begutachtung durch.'
    },
    {
      question: 'Kaufen Sie auch Unfallwagen ohne TÜV?',
      answer: 'Ja, wir kaufen auch Unfallfahrzeuge ohne gültige HU/AU (TÜV). Der fehlende TÜV wird bei der Preiskalkulation berücksichtigt, ist aber kein Ausschlusskriterium für den Ankauf.'
    },
    {
      question: 'Wie schnell erfolgt die Abwicklung?',
      answer: 'Wir bieten einen Express-Service mit Abwicklung innerhalb von 24 Stunden. Nach der Begutachtung und Einigung erfolgt die sofortige Bezahlung per Bargeld oder Express-Überweisung. Die Abholung wird kostenlos und zeitnah organisiert.'
    },
    {
      question: 'Welche Unterlagen werden benötigt?',
      answer: 'Für den Verkauf benötigen wir: Fahrzeugschein, Fahrzeugbrief, Service-Heft (falls vorhanden), alle Fahrzeugschlüssel, eventuell vorhandene Gutachten und Ihren Personalausweis. Wir unterstützen Sie bei der Abmeldung.'
    },
    {
      question: 'Ist eine Abholung des Unfallwagens möglich?',
      answer: 'Ja, wir bieten einen kostenlosen Abholservice in ganz Deutschland an. Auch nicht fahrbereite Unfallfahrzeuge werden von uns professionell abtransportiert - schnell und unkompliziert.'
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Häufig gestellte
            <span className="text-primary"> Fragen</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Unfallwagen Ankauf
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center">
                        <span className="text-lg font-semibold">{faq.question}</span>
                        {open ? (
                          <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
            
            {/* Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Noch Fragen zum Unfallwagen Ankauf?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
                Unsere Experten stehen Ihnen jederzeit zur Verfügung.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 group"
                >
                  <Wrench className="w-5 h-5 mr-2" />
                  <span>Unfallwagen bewerten</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}