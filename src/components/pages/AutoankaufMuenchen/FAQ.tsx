import { motion } from 'framer-motion';
import { Plus, Minus, Car, ArrowRight } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Wie läuft der Autoankauf in München ab?',
      answer: 'Der Ankaufsprozess ist einfach und unkompliziert: Sie kontaktieren uns telefonisch oder über das Formular. Wir erstellen eine erste Einschätzung und vereinbaren einen Vor-Ort Termin in München zur detaillierten Begutachtung. Nach der Bewertung erhalten Sie ein verbindliches Kaufangebot. Bei Einigung erfolgt die sofortige Bezahlung und kostenlose Abholung.'
    },
    {
      question: 'In welchen Münchner Stadtteilen sind Sie tätig?',
      answer: 'Wir sind in allen Münchner Stadtteilen aktiv: Schwabing, Maxvorstadt, Bogenhausen, Sendling, Neuhausen, Pasing, Riem, Moosach, Giesing, Haidhausen, Ludwigsvorstadt und vielen weiteren.'
    },
    {
      question: 'Wie wird der Preis für mein Auto ermittelt?',
      answer: 'Die Preisermittlung basiert auf verschiedenen Faktoren: Fahrzeugmodell, Alter, Kilometerstand, Ausstattung und Zustand. Unsere Münchner Experten führen eine professionelle Begutachtung durch und berücksichtigen aktuelle Marktpreise für eine faire Bewertung.'
    },
    {
      question: 'Kaufen Sie auch Unfallwagen und defekte Fahrzeuge?',
      answer: 'Ja, wir kaufen auch Unfallfahrzeuge, Fahrzeuge mit Motorschaden oder anderen technischen Defekten in München an. Eine faire Bewertung erfolgt nach Begutachtung des Schadens.'
    },
    {
      question: 'Wie schnell erfolgt die Abwicklung in München?',
      answer: 'Wir bieten einen Express-Service mit Abwicklung innerhalb von 24 Stunden. Nach der Begutachtung und Einigung erfolgt die sofortige Bezahlung per Bargeld oder Express-Überweisung. Die Abholung wird kostenlos und zeitnah in ganz München organisiert.'
    },
    {
      question: 'Welche Unterlagen werden beim Autoankauf benötigt?',
      answer: 'Für den Verkauf Ihres Autos benötigen wir: Fahrzeugschein, Fahrzeugbrief, Service-Heft (falls vorhanden), gültige HU/AU, alle Fahrzeugschlüssel und Ihren Personalausweis.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6"
          >
            Häufig gestellte
            <span className="text-primary"> Fragen</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600"
          >
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Autoankauf in München
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3 sm:gap-4 md:gap-6">
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
                    <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <Disclosure.Button className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center">
                        <span className="text-sm sm:text-base md:text-lg font-semibold pr-4">{faq.question}</span>
                        {open ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 sm:px-6 pb-3 sm:pb-4 text-xs sm:text-sm md:text-base text-gray-600">
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
          className="mt-8 sm:mt-12 md:mt-20"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
            
            {/* Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                Noch Fragen zum Autoankauf in München?
              </h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
                Unsere Münchner Experten stehen Ihnen jederzeit zur Verfügung.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300 group"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>Auto bewerten</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+4915256501567"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-all duration-300"
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