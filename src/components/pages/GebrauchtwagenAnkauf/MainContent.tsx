import { motion } from 'framer-motion';
import { Car, BadgeEuro, Shield, MapPin, Banknote, CheckCircle2, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link, useParams } from 'react-router-dom';

interface MainContentProps {
  city?: string;
}

export type CityData = {
  intro: string;
  market: string;
  service: string;
  districts: string[];
};

export type CityContent = {
  [key: string]: CityData;
};

const cities = [
  'Berlin',
  'Hamburg',
  'München',
  'Köln',
  'Frankfurt',
  'Stuttgart',
  'Düsseldorf',
  'Leipzig',
  'Dortmund',
  'Essen',
  'Bremen',
  'Dresden',
  'Bochum'
];

// Stadtspezifische Texte
const cityContent: CityContent = {
  'Hamburg': {
    intro: 'Als Deutschlands zweitgrößte Stadt und wichtiger Handelsstandort bietet Hamburg einen vielfältigen Gebrauchtwagenmarkt. Die Hansestadt mit ihrem Hafen und der internationalen Ausrichtung stellt besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Hamburger Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Hamburger Gebrauchtwagenmarkt ist geprägt von einer hochwertigen Fahrzeugstruktur. Von der HafenCity bis Blankenese, von Eppendorf bis Bergedorf - die Anforderungen an Mobilität sind so vielfältig wie die Stadt selbst. Dabei berücksichtigen wir auch die besonderen klimatischen Bedingungen der Küstenregion.',
    service: 'Mit unserem Standort in Hamburg und der optimalen Verkehrsanbindung durch die Autobahnen A1, A7 und den Ring 2 sind wir schnell bei Ihnen vor Ort. Wir bieten einen kostenlosen Vor-Ort-Service in allen Hamburger Stadtteilen.',
    districts: ['HafenCity', 'Altona', 'Eimsbüttel', 'Eppendorf', 'Winterhude', 'Wandsbek', 'Bergedorf', 'Harburg']
  },
  'München': {
    intro: 'Als Bayerns Landeshauptstadt und Technologiestandort bietet München einen anspruchsvollen Gebrauchtwagenmarkt. Die Stadt, bekannt für ihre hohe Lebensqualität und wirtschaftliche Stärke, stellt besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Münchner Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Münchner Gebrauchtwagenmarkt zeichnet sich durch einen hohen Anteil an Premium- und Luxusfahrzeugen aus. Von Schwabing bis Sendling, von der Maxvorstadt bis Riem - die Anforderungen an Mobilität sind geprägt von urbanem Lifestyle und gehobenen Ansprüchen.',
    service: 'Mit unserem Standort in München und der optimalen Verkehrsanbindung durch den Mittleren Ring und die Autobahnen A8, A9 und A99 sind wir schnell bei Ihnen. Wir bieten einen kostenlosen Vor-Ort-Service in allen Münchner Stadtteilen.',
    districts: ['Schwabing', 'Maxvorstadt', 'Bogenhausen', 'Sendling', 'Neuhausen', 'Pasing', 'Riem', 'Moosach']
  },
  'Berlin': {
    intro: 'Als Deutschlands Hauptstadt und pulsierende Metropole bietet Berlin einen dynamischen Gebrauchtwagenmarkt. Die Stadt, bekannt für ihre Vielfalt und Internationalität, stellt besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Berliner Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Berliner Gebrauchtwagenmarkt ist so vielfältig wie die Stadt selbst. Von Mitte bis Spandau, von Charlottenburg bis Köpenick - die Anforderungen an Mobilität sind geprägt von urbaner Dynamik und den spezifischen Bedürfnissen der verschiedenen Bezirke.',
    service: 'Mit unserem Standort in Berlin und der optimalen Verkehrsanbindung durch den Berliner Ring A10 sind wir schnell bei Ihnen. Wir bieten einen kostenlosen Vor-Ort-Service in allen Berliner Bezirken.',
    districts: ['Mitte', 'Charlottenburg', 'Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Spandau', 'Steglitz', 'Pankow']
  },
  'Dortmund': {
    intro: 'Als Wirtschaftsmetropole im Ruhrgebiet bietet Dortmund einen dynamischen Gebrauchtwagenmarkt. Die Stadt, bekannt für ihre Verbindung von Tradition und Innovation, stellt besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Dortmunder Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Dortmunder Gebrauchtwagenmarkt ist geprägt von einer vielfältigen Fahrzeugstruktur, die die unterschiedlichen Bedürfnisse der Stadtteile widerspiegelt. Von der City bis nach Hörde, von Hombruch bis Brackel - die Anforderungen an Mobilität sind so vielfältig wie die Stadt selbst.',
    service: 'Mit unserem Standort in Dortmund und der optimalen Verkehrsanbindung durch die Autobahnen A1, A2, A40 und A44 sind wir schnell bei Ihnen vor Ort. Wir bieten einen kostenlosen Vor-Ort-Service in allen Dortmunder Stadtteilen.',
    districts: ['Innenstadt', 'Hörde', 'Hombruch', 'Brackel', 'Eving', 'Scharnhorst', 'Aplerbeck', 'Mengede']
  },
  'Bochum': {
    intro: 'Als wichtiger Standort im Ruhrgebiet vereint Bochum urbanes Flair mit industriellem Erbe. Die Stadt stellt mit ihrer einzigartigen Struktur besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Bochumer Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Bochumer Gebrauchtwagenmarkt ist geprägt von einer interessanten Mischung aus Stadt- und Pendlerfahrzeugen. Von Wattenscheid bis zur Innenstadt, von Langendreer bis Weitmar - die Anforderungen an Mobilität sind vielfältig und spezifisch.',
    service: 'Mit unserem Standort in Bochum und der optimalen Verkehrsanbindung durch die Autobahnen A40, A43 und A44 sind wir schnell bei Ihnen. Wir bieten einen kostenlosen Vor-Ort-Service in allen Bochumer Stadtteilen.',
    districts: ['Innenstadt', 'Wattenscheid', 'Langendreer', 'Weitmar', 'Wiemelhausen', 'Querenburg', 'Harpen', 'Grünau']
  },
  'Essen': {
    intro: 'Als Metropole im Herzen des Ruhrgebiets bietet Essen einen vielseitigen Gebrauchtwagenmarkt. Die Stadt, die den Wandel von der Industriemetropole zum modernen Dienstleistungszentrum erfolgreich gemeistert hat, stellt besondere Anforderungen an den Autoankauf. Durch unsere langjährige Präsenz im Essener Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.',
    market: 'Der Essener Gebrauchtwagenmarkt spiegelt die Vielfalt der Stadt wider. Von Rüttenscheid bis Werden, von Altenessen bis Bredeney - die Anforderungen an Mobilität sind geprägt von urbaner Dynamik und den unterschiedlichen Bedürfnissen der Stadtteile.',
    service: 'Mit unserem Standort in Essen und der optimalen Verkehrsanbindung durch die Autobahnen A40, A42 und A52 sind wir schnell bei Ihnen. Wir bieten einen kostenlosen Vor-Ort-Service in allen Essener Stadtteilen.',
    districts: ['Rüttenscheid', 'Werden', 'Altenessen', 'Bredeney', 'Steele', 'Borbeck', 'Kettwig', 'Frohnhausen']
  },
  'Köln': {
    intro: 'Als größte Stadt in Nordrhein-Westfalen und eine der bekanntesten Städte Deutschlands bietet Köln einen lebendigen und vielseitigen Automarkt. Die Stadt, bekannt für ihre kulturelle Vielfalt und den Kölner Dom, stellt besondere Anforderungen an den Fahrzeugmarkt. Durch unsere langjährige Präsenz im Kölner Automarkt kennen wir die lokalen Besonderheiten und bieten stets attraktive Preise.',
    market: 'Der Kölner Automarkt ist geprägt von einer breiten Fahrzeugstruktur, die sowohl urbanen als auch ländlichen Bedürfnissen gerecht wird. Vom Zentrum bis nach Lindenthal, von Ehrenfeld bis Nippes - die Anforderungen an Mobilität sind vielfältig und spiegeln die unterschiedlichen Facetten der Stadt wider.',
    service: 'Mit unserem Standort in Köln und der hervorragenden Verkehrsanbindung über die Autobahnen A1, A4 und A3 sind wir schnell bei Ihnen vor Ort. Wir bieten einen schnellen und zuverlässigen Service in allen Kölner Stadtteilen.',
    districts: ['Altstadt', 'Ehrenfeld', 'Lindenthal', 'Nippes', 'Kalk', 'Porz', 'Rodenkirchen', 'Deutz']
  },
  'Frankfurt': {
    intro: 'Als Finanzmetropole und größte Stadt in Hessen bietet Frankfurt einen anspruchsvollen und dynamischen Fahrzeugmarkt. Die Stadt, bekannt für ihre Skyline und den internationalen Flughafen, stellt besondere Anforderungen an die Mobilität. Durch unsere langjährige Präsenz im Frankfurter Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets faire Preise bieten.',
    market: 'Der Frankfurter Automarkt ist geprägt von einer Mischung aus Premiumfahrzeugen und praktischen Stadtfahrzeugen. Vom Westend bis nach Sachsenhausen, von Bockenheim bis zu den Stadtteilen im Umland - die Anforderungen an Fahrzeuge sind so vielfältig wie die Stadt selbst.',
    service: 'Mit unserem Standort in Frankfurt und der optimalen Anbindung an die Autobahnen A3, A5 und A66 sind wir schnell bei Ihnen vor Ort. Wir bieten einen zuverlässigen und flexiblen Service in allen Frankfurter Stadtteilen.',
    districts: ['Innenstadt', 'Westend', 'Bockenheim', 'Sachsenhausen', 'Nordend', 'Bornheim', 'Rödelheim', 'Fechenheim']
  },
  'Stuttgart': {
    intro: 'Als Zentrum für Automobilindustrie und Innovation bietet Stuttgart einen hochentwickelten Automarkt. Die Stadt, bekannt für ihre Automobilhersteller wie Mercedes-Benz und Porsche, stellt besondere Anforderungen an den Fahrzeugmarkt. Durch unsere langjährige Präsenz im Stuttgarter Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Preise bieten.',
    market: 'Der Stuttgarter Automarkt ist geprägt von einer starken Nachfrage nach sowohl hochwertigen Fahrzeugen als auch praktischen Pendlerfahrzeugen. Von der Innenstadt bis nach Vaihingen, von Bad Cannstatt bis zum Stuttgarter Umland - die Mobilitätsanforderungen sind ebenso vielfältig wie die Stadtlandschaft.',
    service: 'Mit unserem Standort in Stuttgart und der optimalen Verkehrsanbindung durch die Autobahnen A8 und A81 sind wir schnell bei Ihnen vor Ort. Wir bieten einen schnellen und unkomplizierten Service in allen Stuttgarter Stadtteilen.',
    districts: ['Innenstadt', 'Bad Cannstatt', 'Vaihingen', 'Stuttgart-West', 'Degerloch', 'Zuffenhausen', 'Möhringen', 'Botnang']
  },
  'Düsseldorf': {
    intro: 'Als Mode- und Wirtschaftsmetropole bietet Düsseldorf einen interessanten und vielfältigen Fahrzeugmarkt. Die Stadt, bekannt für ihre hohe Lebensqualität und die Altstadt, stellt besondere Anforderungen an den Automobilmarkt. Durch unsere langjährige Präsenz im Düsseldorfer Automarkt kennen wir die lokalen Besonderheiten und bieten stets faire Preise.',
    market: 'Der Düsseldorfer Automarkt zeichnet sich durch eine große Nachfrage nach Premiumfahrzeugen und Cityfahrzeugen aus. Von der Altstadt bis nach Oberkassel, von Derendorf bis Unterbilk - die Anforderungen an Mobilität spiegeln die urbanen Bedürfnisse der Stadt wider.',
    service: 'Mit unserem Standort in Düsseldorf und der optimalen Anbindung über die Autobahnen A3, A46 und A52 sind wir schnell bei Ihnen vor Ort. Wir bieten einen zuverlässigen Service in allen Düsseldorfer Stadtteilen.',
    districts: ['Altstadt', 'Oberkassel', 'Derendorf', 'Unterbilk', 'Flingern', 'Benrath', 'Garath', 'Mörsenbroich']
  },
  'Leipzig': {
    intro: 'Als größte Stadt Sachsens und kulturelles Zentrum bietet Leipzig einen dynamischen und wachsenden Fahrzeugmarkt. Die Stadt, bekannt für ihre Geschichte und die kreative Szene, stellt besondere Anforderungen an den Automobilmarkt. Durch unsere langjährige Präsenz im Leipziger Automarkt kennen wir die lokalen Besonderheiten und bieten stets faire Preise.',
    market: 'Der Leipziger Automarkt ist geprägt von einer Mischung aus Stadtautos und Fahrzeugen für Pendler. Vom Zentrum bis nach Plagwitz, von Connewitz bis zur Südvorstadt - die Anforderungen an Mobilität spiegeln die vielseitige Struktur der Stadt wider.',
    service: 'Mit unserem Standort in Leipzig und der hervorragenden Verkehrsanbindung durch die Autobahnen A9, A14 und A38 sind wir schnell bei Ihnen vor Ort. Wir bieten einen flexiblen Service in allen Leipziger Stadtteilen.',
    districts: ['Innenstadt', 'Plagwitz', 'Connewitz', 'Südvorstadt', 'Reudnitz', 'Mockau', 'Lindenau', 'Leutzsch']
  },
  'Bremen': {
    intro: 'Als Hansestadt und Tor zur Welt bietet Bremen einen einzigartigen Fahrzeugmarkt, der sowohl von traditionellem als auch von modernem Flair geprägt ist. Die Stadt stellt besondere Anforderungen an die Mobilität, da sie sowohl Stadtfahrzeuge als auch Fahrzeuge für das Umland benötigt. Durch unsere langjährige Präsenz im Bremer Automarkt kennen wir die lokalen Besonderheiten und bieten Ihnen faire Preise.',
    market: 'Der Bremer Automarkt ist durch eine breite Vielfalt an Fahrzeugen geprägt. Vom Zentrum bis nach Blumenthal, von Schwachhausen bis Bremen-Nord - die Mobilitätsanforderungen sind genauso vielfältig wie die Stadt selbst.',
    service: 'Mit unserem Standort in Bremen und der optimalen Verkehrsanbindung über die Autobahnen A1 und A27 sind wir schnell bei Ihnen vor Ort. Wir bieten einen unkomplizierten Service in allen Bremer Stadtteilen.',
    districts: ['Innenstadt', 'Schwachhausen', 'Walle', 'Bremen-Nord', 'Blumenthal', 'Neustadt', 'Burglesum', 'Huchting']
  },
  'Dresden': {
    intro: 'Als Kultur- und Bildungszentrum im Osten Deutschlands bietet Dresden einen interessanten und vielfältigen Fahrzeugmarkt. Die Stadt, bekannt für ihre Architektur und Geschichte, stellt besondere Anforderungen an den Automobilmarkt. Durch unsere langjährige Präsenz im Dresdner Automarkt kennen wir die lokalen Besonderheiten und bieten stets faire Preise.',
    market: 'Der Dresdner Automarkt ist geprägt von einer Mischung aus Fahrzeugen für Stadtbewohner und Pendler. Vom Zentrum bis nach Neustadt, von Pieschen bis nach Blasewitz - die Anforderungen an Mobilität sind vielfältig und spiegeln die Bedürfnisse der unterschiedlichen Stadtteile wider.',
    service: 'Mit unserem Standort in Dresden und der optimalen Verkehrsanbindung über die Autobahnen A4 und A17 sind wir schnell bei Ihnen vor Ort. Wir bieten einen flexiblen Service in allen Dresdner Stadtteilen.',
    districts: ['Innenstadt', 'Neustadt', 'Pieschen', 'Blasewitz', 'Cotta', 'Striesen', 'Prohlis', 'Klotzsche']
  }
};

export default function MainContent({ city }: MainContentProps) {
  const { city: cityParam } = useParams<{ city: string }>();
  const selectedCity = cityParam || city || 'Deutschland';
  const cityData = cityContent[selectedCity as keyof typeof cityContent] || {
    intro: 'Profitieren Sie von unserem professionellen Gebrauchtwagen Ankauf Service. Faire Preise und schnelle Abwicklung bundesweit.',
    market: 'Der deutsche Gebrauchtwagenmarkt ist einer der dynamischsten in Europa. Mit über 7 Millionen Gebrauchtwagen-Transaktionen jährlich erfordert es fundierte Marktkenntnisse und jahrelange Erfahrung, um faire und marktgerechte Preise zu ermitteln. Unsere Expertise erstreckt sich über alle Fahrzeugklassen - vom praktischen Kleinwagen bis zum luxuriösen SUV. Dabei berücksichtigen wir stets aktuelle Marktentwicklungen, saisonale Schwankungen und regionale Besonderheiten, um Ihnen den bestmöglichen Preis bieten zu können.',
    service: 'Unser mobiles Team ist deutschlandweit für Sie im Einsatz. Durch unsere langjährige Erfahrung und Expertise garantieren wir schnelle Reaktionszeiten in allen Regionen. Die optimale Verkehrsanbindung ermöglicht uns eine flexible Terminvereinbarung und prompte Vor-Ort-Bewertung - egal ob in der Großstadt oder im ländlichen Raum.',
    districts: []
  };

  const features = [
    {
      icon: Car,
      title: `${selectedCity === 'Deutschland' ? 'Autoankauf-Experten' : `${selectedCity}er Autoankauf-Experten`}`,
      description: `Professioneller Gebrauchtwagen Ankauf ${selectedCity === 'Deutschland' ? 'bundesweit' : `in ${selectedCity}`}`,
      benefits: [
        'Alle Fahrzeugtypen',
        'Faire Bewertung',
        'Sofortige Auszahlung',
        'Express Service'
      ]
    },
    {
      icon: BadgeEuro,
      title: `Bestpreise ${selectedCity === 'Deutschland' ? 'garantiert' : `in ${selectedCity}`}`,
      description: 'Marktgerechte Preise durch lokale Expertise',
      benefits: [
        'Aktuelle Marktanalyse',
        'Transparente Bewertung',
        'Keine versteckten Kosten',
        'Top Konditionen'
      ]
    },
    {
      icon: Shield,
      title: `${selectedCity === 'Deutschland' ? 'Qualitätsservice' : `${selectedCity}er Qualitätsservice`}`,
      description: `Ihr vertrauenswürdiger Partner ${selectedCity === 'Deutschland' ? 'bundesweit' : `in ${selectedCity}`}`,
      benefits: [
        'Persönliche Beratung',
        'Professionelle Abwicklung',
        'Rechtssichere Verträge',
        'Über 20.000 Kunden'
      ]
    }
  ];

  return (
    <ParallaxProvider>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Content Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 bg-primary/5 hover:bg-primary/10 rounded-full px-4 py-2 sm:px-8 sm:py-4 mb-6 sm:mb-8 transition-all duration-300 mx-auto"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-sm text-primary font-semibold whitespace-nowrap">
                {selectedCity === 'Deutschland' ? 'Gebrauchtwagen Ankauf Experten' : `Gebrauchtwagen Ankauf ${selectedCity}`}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 leading-tight tracking-tight px-4 sm:px-0"
            >
              Gebrauchtwagen Ankauf
              <span className="text-primary"> zum Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {selectedCity === 'Deutschland'
                ? 'Profitieren Sie von unserem professionellen Gebrauchtwagen Ankauf Service. Faire Preise und schnelle Abwicklung bundesweit.'
                : `Profitieren Sie von unserem professionellen Gebrauchtwagen Ankauf Service in ${selectedCity}. Faire Preise und schnelle Abwicklung in allen Stadtteilen.`}
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-24">
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
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

                  <div className="mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3 group/item">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-300">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-base text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Parallax>
            ))}
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Main Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6">
                {selectedCity === 'Deutschland'
                  ? 'Gebrauchtwagen Ankauf - Ihr professioneller Partner bundesweit'
                  : `Gebrauchtwagen Ankauf in ${selectedCity} - Ihr lokaler Partner für den Fahrzeugverkauf`}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {cityData.intro}
              </p>

              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {cityData.market}
              </p>

              {selectedCity === 'Deutschland' && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold mb-4">Bundesweiter Gebrauchtwagen Ankauf </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                    {cities.map((cityName) => (
                      <Link
                        key={cityName}
                        to={`/autoankauf-${cityName.toLowerCase()}`}
                        className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-all duration-300 text-sm sm:text-base p-2 sm:p-3 bg-white/50 rounded-lg hover:bg-white/80 hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{cityName}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {cityData.service}
              </p>

              {/* Stadtspezifische Stadtteile */}
              {selectedCity !== 'Deutschland' && cityData.districts.length > 0 && (
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Unsere Ankaufgebiete in {selectedCity}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cityData.districts.map((district: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{district}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedCity === 'Deutschland' && (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e13025_0%,transparent_60%)] opacity-20" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Ihre Vorteile auf einen Blick</h4>
                    </div>
                    <p className="text-gray-300 mb-8">
                      Profitieren Sie von unserem professionellen Service beim Gebrauchtwagen Verkauf.
                      Im Vergleich zum privaten Verkauf bieten wir Ihnen entscheidende Vorteile:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        {
                          title: 'Zeitsparend',
                          items: ['Keine Besichtigungstermine', 'Schnelle Abwicklung', 'Express Service']
                        },
                        {
                          title: 'Sicher & Fair',
                          items: ['Faire Preise', 'Sofortige Bezahlung', 'Keine Gewährleistung']
                        },
                        {
                          title: 'Full Service',
                          items: ['Kostenlose Abholung', 'Abmeldung inklusive', 'Komplettservice']
                        }
                      ].map((category, idx) => (
                        <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <h5 className="font-semibold text-white mb-4">{category.title}</h5>
                          <ul className="space-y-3 text-sm text-gray-300 list-disc pl-6">
                            {category.items.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2 text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Enhanced Service Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-8 md:p-12"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
                {selectedCity === 'Deutschland'
                  ? 'Gebrauchtwagen Ankauf in Ihrer Region'
                  : `Gebrauchtwagen Ankauf in allen ${selectedCity}er Stadtteilen`}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-8">
                {selectedCity === 'Deutschland'
                  ? 'Unser Gebrauchtwagen Ankauf Service ist in ganz Deutschland verfügbar. Wir kommen kostenlos zu Ihnen und bewerten Ihr Fahrzeug vor Ort. Profitieren Sie von unserem bundesweiten Netzwerk und verkaufen Sie Ihren Gebrauchtwagen schnell und unkompliziert.'
                  : `Unser Gebrauchtwagen Ankauf Service ist in ganz ${selectedCity} verfügbar. Wir kommen kostenlos zu Ihnen und bewerten Ihr Fahrzeug vor Ort. Profitieren Sie von unserem lokalen Service und verkaufen Sie Ihren Gebrauchtwagen schnell und unkompliziert.`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {[
                  { icon: MapPin, text: selectedCity === 'Deutschland' ? 'Bundesweiter Service' : `Alle ${selectedCity}er Stadtteile` },
                  { icon: Car, text: 'Kostenlose Vor-Ort Bewertung' },
                  { icon: Shield, text: 'Sichere Abwicklung' },
                  { icon: Banknote, text: 'Sofortige Bezahlung' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
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
                {selectedCity === 'Deutschland'
                  ? 'Jetzt Gebrauchtwagen verkaufen'
                  : `Jetzt Gebrauchtwagen in ${selectedCity} verkaufen`}
              </h3>
              <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto relative z-10">
                Kontaktieren Sie uns für eine kostenlose Bewertung Ihres Gebrauchtwagens.
                {selectedCity === 'Deutschland'
                  ? ' Wir sind deutschlandweit für Sie da.'
                  : ` Wir sind in ganz ${selectedCity} für Sie da.`}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-10">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-dark transition-all duration-300"
                >
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Gebrauchtwagen bewerten
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