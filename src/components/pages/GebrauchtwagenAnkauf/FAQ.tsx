import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Wie läuft der Gebrauchtwagen Ankauf ab?',
      answer: 'Der Ankaufsprozess ist einfach und unkompliziert: Sie kontaktieren uns telefonisch oder über das Formular, wir bewerten Ihr Fahrzeug kostenlos und erstellen ein verbindliches Angebot. Bei Einigung erfolgt die sofortige Bezahlung und kostenlose Abholung.'
    },
    {
      question: 'Welche Unterlagen werden beim Autoankauf benötigt?',
      answer: 'Für den Verkauf Ihres Gebrauchtwagens benötigen wir: Fahrzeugschein, Fahrzeugbrief, Service-Heft (falls vorhanden), gültige HU/AU, alle Fahrzeugschlüssel und Ihren Personalausweis.'
    },
    {
      question: 'Kaufen Sie auch Unfallwagen und defekte Fahrzeuge?',
      answer: 'Ja, wir kaufen auch Unfallfahrzeuge, Fahrzeuge mit Motorschaden oder anderen technischen Defekten. Eine faire Bewertung erfolgt nach Begutachtung des Schadens.'
    },
    {
      question: 'Wie wird der Preis für meinen Gebrauchtwagen ermittelt?',
      answer: 'Die Preisermittlung basiert auf verschiedenen Faktoren wie Marke, Modell, Alter, Kilometerstand, Ausstattung und Zustand. Wir nutzen aktuelle Marktdaten für eine faire Bewertung.'
    },
    {
      question: 'Ist eine Abholung des Fahrzeugs möglich?',
      answer: 'Ja, wir bieten einen kostenlosen Abholservice in ganz Deutschland an. Nach Kaufvertragsabschluss holen wir Ihr Fahrzeug zum vereinbarten Termin ab.'
    },
    {
      question: 'Wie erfolgt die Bezahlung beim Autoankauf?',
      answer: 'Die Bezahlung erfolgt direkt bei Fahrzeugübergabe - entweder in bar oder per sofortiger Überweisung, ganz nach Ihren Wünschen.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
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
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Gebrauchtwagen Ankauf
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

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-6">
            Haben Sie weitere Fragen? Kontaktieren Sie uns!
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
          >
            Jetzt anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}