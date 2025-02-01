import { PhoneCall, Car, BadgeEuro, Banknote, Shield, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Kontakt aufnehmen',
    description: 'Kostenlose und unverbindliche Anfrage - telefonisch oder per Formular.',
    benefits: ['24/7 Erreichbarkeit', 'Sofortige Beratung', 'Kostenlos & Unverbindlich']
  },
  {
    icon: Car,
    title: 'Fahrzeug bewerten',
    description: 'Professionelle Bewertung Ihres Fahrzeugs nach aktuellen Marktpreisen.',
    benefits: ['Faire Bewertung', 'Transparente Preise', 'Alle Fahrzeugtypen']
  },
  {
    icon: BadgeEuro,
    title: 'Angebot erhalten',
    description: 'Garantiert bestes Preisangebot ohne versteckte Kosten oder Gebühren.',
    benefits: ['Bestpreis-Garantie', 'Keine versteckten Kosten', 'Sofortiges Angebot']
  },
  {
    icon: Banknote,
    title: 'Sofortige Auszahlung',
    description: 'Express-Abwicklung mit Sofortauszahlung und kostenloser Abholung.',
    benefits: ['Bargeld oder Überweisung', 'Kostenlose Abholung', 'Express-Service']
  }
];

export default function Process() {
  return (
    <section 
      className="relative py-16 overflow-hidden"
      itemScope 
      itemType="https://schema.org/HowTo"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* SEO Meta Information */}
      <div className="sr-only">
        <span itemProp="name">Autoankauf Prozess</span>
        <span itemProp="description">
          Einfacher und schneller Prozess für den Verkauf Ihres Autos. Von der ersten Kontaktaufnahme 
          bis zur sofortigen Auszahlung - professionell, transparent und unkompliziert.
        </span>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary mb-6 font-medium">
            Professioneller Ankaufsprozess
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white"
            itemProp="name"
          >
            Autoankauf - Einfach. Schnell. Marktgerecht.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Jahrelange Expertise und fundierte Marktkenntnis - für die präziseste Fahrzeugbewertung
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary)_0%,transparent_70%)] opacity-40 blur-xl animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-primary/20 z-10">
                  {index + 1}
                </div>

                {/* Card Container */}
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/30)_0%,transparent_70%)] rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Card Content */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 transform group-hover:-translate-y-2 transition-all duration-500">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/40)_0%,transparent_70%)] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                        <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 text-white"
                      itemProp="name"
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm sm:text-base text-gray-300 text-center mb-4 sm:mb-6"
                      itemProp="text"
                    >
                      {step.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {step.benefits.map((benefit, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="w-5 h-5 text-primary" />
              <span>Seriöser Autoankauf</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Clock className="w-5 h-5 text-primary" />
              <span>Express Sofortbewertung</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <BadgeEuro className="w-5 h-5 text-primary" />
              <span>Bestpreis-Garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}