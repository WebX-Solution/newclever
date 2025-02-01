import { motion } from 'framer-motion';
import { Car, BadgeEuro, Shield, MapPin, Banknote, CheckCircle2, Star } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

interface MainContentProps {
  city?: string;
}


// Stadtspezifische Texte
interface CityContent {
  [key: string]: {
    intro: string;
    market: string;
    service: string;
    districts: string[];
  };
}

const cityContent: CityContent = {
  'Hamburg': {
    intro: 'Unfallwagen in Hamburg verkaufen? Wir sind Ihr Experte, wenn es darum geht, Ihr beschädigtes Fahrzeug schnell und unkompliziert zu veräußern. Ob Totalschaden oder kleinere Unfälle – wir bieten Ihnen eine faire und marktgerechte Bewertung Ihres Unfallwagens und nehmen jedes Fahrzeug unabhängig vom Zustand an. Verlassen Sie sich auf uns, um den Verkaufsprozess effizient und ohne versteckte Kosten zu gestalten.',
    market: 'Der Unfallwagenmarkt in Hamburg ist vielseitig und wird von einem stetigen Bedarf nach Fahrzeugen in allen Schadensgraden geprägt. Viele Käufer suchen gezielt nach Unfallfahrzeugen, die noch reparierbar sind, oder nach Fahrzeugen für den Export. Unsere jahrelange Erfahrung auf diesem Markt ermöglicht es uns, Ihnen den besten Preis zu bieten, unabhängig davon, ob Ihr Fahrzeug fahrbereit ist oder nicht.',
    service: 'Wir bieten Ihnen einen unkomplizierten Service, der direkt zu Ihnen kommt. Keine langen Wartezeiten, keine bürokratischen Hürden – wir holen Ihr Fahrzeug innerhalb kürzester Zeit direkt bei Ihnen in Hamburg ab. Der Verkauf erfolgt zügig und transparent, mit einer sofortigen Auszahlung des vereinbarten Preises. Ihr Unfallwagen ist bei uns in besten Händen, und Sie erhalten den besten Wert für Ihr Fahrzeug, ohne sich mit unnötigen Formalitäten beschäftigen zu müssen.',
    districts: ['HafenCity', 'Altona', 'Eimsbüttel', 'Eppendorf', 'Winterhude', 'Wandsbek', 'Bergedorf', 'Harburg']
  },
  'München': {
    intro: 'Haben Sie einen Unfallwagen in München, den Sie verkaufen möchten? Wir bieten Ihnen eine schnelle und faire Lösung für den Ankauf von Unfallfahrzeugen – unabhängig vom Schaden. Ob es sich um ein Fahrzeug handelt, das noch repariert werden kann, oder um ein Auto, das für den Export geeignet ist, wir machen Ihnen ein transparentes Angebot und kümmern uns um alle Formalitäten.',
    market: 'Der Unfallwagenmarkt in München ist vielfältig und umfasst eine breite Palette an Fahrzeugen, von älteren Fahrzeugen mit Blechschäden bis hin zu neueren Modellen mit technischer Defektursache. Als wichtige Wirtschafts- und Technologiestadt ist München ein attraktiver Markt für Käufer, die Unfallfahrzeuge entweder für Reparaturen oder als Ersatzteilspender suchen. Dank unserer jahrelangen Marktkenntnis können wir Ihnen stets den besten Preis für Ihr beschädigtes Fahrzeug bieten.',
    service: 'Wir bieten Ihnen einen unkomplizierten und schnellen Service, der direkt zu Ihnen kommt. Ohne unnötige Verzögerungen holen wir Ihr Fahrzeug ab und bezahlen Sie sofort. Durch unsere schnelle Reaktionszeit und transparente Abwicklung sparen Sie wertvolle Zeit und erhalten für Ihren Unfallwagen den höchsten Wert, den der Markt zu bieten hat. Unsere Experten stehen Ihnen jederzeit zur Seite, um den Verkauf so einfach wie möglich zu gestalten.',
    districts: ['Schwabing', 'Maxvorstadt', 'Bogenhausen', 'Sendling', 'Neuhausen', 'Pasing', 'Riem', 'Moosach']
  },
  'Berlin': {
    intro: 'Haben Sie einen Unfallwagen in Berlin und möchten diesen verkaufen? Wir bieten Ihnen eine einfache und schnelle Lösung für den Ankauf von Unfallfahrzeugen. Ganz gleich, ob Ihr Fahrzeug nur einen leichten Kratzer hat oder bei einem schwereren Unfall beschädigt wurde – wir machen Ihnen ein faires Angebot und kümmern uns um den gesamten Verkaufsprozess.',
    market: 'Der Berliner Markt für Unfallwagen ist so facettenreich wie die Stadt selbst. Ob in den urbanen Kiezen von Kreuzberg und Neukölln oder den ruhigen Vierteln von Charlottenburg und Steglitz – in Berlin finden sich zahlreiche Käufer für Unfallfahrzeuge, die entweder repariert oder als Ersatzteilspender genutzt werden können. Mit unserer langjährigen Erfahrung auf dem Berliner Automarkt garantieren wir Ihnen einen schnellen und transparenten Verkaufsprozess.',
    service: 'Unser Vor-Ort-Service kommt direkt zu Ihnen – egal, in welchem Berliner Bezirk Sie sich befinden. Durch unsere gute Erreichbarkeit und flexiblen Abholzeiten stellen wir sicher, dass der Verkauf Ihres Unfallwagens so schnell und einfach wie möglich verläuft. Wir bezahlen direkt vor Ort und übernehmen alle Formalitäten für Sie.',
    districts: ['Mitte', 'Charlottenburg', 'Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Spandau', 'Steglitz', 'Pankow']
  },
  'Dortmund': {
    intro: 'Haben Sie einen Unfallwagen in Dortmund, den Sie verkaufen möchten? Wir bieten Ihnen eine unkomplizierte Möglichkeit, Ihren Unfallwagen zu fairen Preisen zu verkaufen. Ob Ihr Fahrzeug stark beschädigt oder nur teilweise betroffen ist – wir machen Ihnen ein transparentes Angebot und erledigen alle Formalitäten für Sie.',
    market: 'Der Dortmunder Markt für Unfallfahrzeuge ist so vielfältig wie die Stadt selbst. Ob in der Innenstadt oder in den Außenbezirken wie Hörde, Hombruch und Mengede – wir haben langjährige Erfahrung und wissen genau, wie wir den Wert Ihres Unfallwagens bestmöglich einschätzen können. Viele Käufer suchen nach Unfallfahrzeugen, um sie entweder zu reparieren oder als Ersatzteilspender zu nutzen.',
    service: 'Unser Service in Dortmund ist schnell und unkompliziert. Wir kommen zu Ihnen in jeden Stadtteil – sei es in die Innenstadt, nach Brackel oder Eving – und holen den Unfallwagen direkt vor Ort ab. Sie erhalten sofort Bargeld für Ihr Fahrzeug und wir kümmern uns um alle notwendigen Formalitäten.',
    districts: ['Innenstadt', 'Hörde', 'Hombruch', 'Brackel', 'Eving', 'Scharnhorst', 'Aplerbeck', 'Mengede']
  },
  'Bochum': {
    intro: 'Haben Sie einen Unfallwagen in Bochum, den Sie verkaufen möchten? Wir bieten Ihnen eine schnelle und einfache Lösung, um Ihr beschädigtes Fahrzeug zu einem fairen Preis zu verkaufen. Egal, ob der Unfallwagen schwer beschädigt oder nur leicht betroffen ist, wir machen Ihnen ein transparentes Angebot und kümmern uns um alle weiteren Schritte.',
    market: 'Der Markt für Unfallfahrzeuge in Bochum zeichnet sich durch eine breite Palette an Fahrzeugen aus. Von der Innenstadt über Wattenscheid bis nach Langendreer – die Anforderungen an den Ankauf von Unfallwagen variieren, doch wir wissen, wie wir den Wert Ihres Fahrzeugs bestmöglich einschätzen. Viele Käufer suchen nach Unfallautos zur Reparatur oder für Ersatzteile.',
    service: 'Mit unserem Standort in Bochum und der guten Verkehrsanbindung durch die A40, A43 und A44 sind wir schnell bei Ihnen vor Ort. Wir bieten einen kostenlosen Vor-Ort-Service in allen Bochumer Stadtteilen und holen Ihren Unfallwagen direkt ab. Sie erhalten sofort Bargeld und wir übernehmen die Formalitäten.',
    districts: ['Innenstadt', 'Wattenscheid', 'Langendreer', 'Weitmar', 'Wiemelhausen', 'Querenburg', 'Harpen', 'Grünau']
  },
  'Essen': {
    intro: 'Besitzen Sie einen Unfallwagen in Essen und möchten diesen verkaufen? Wir bieten Ihnen eine unkomplizierte und schnelle Möglichkeit, Ihr beschädigtes Fahrzeug zu einem fairen Preis zu verkaufen. Egal, ob Ihr Fahrzeug stark oder nur leicht beschädigt ist, wir sorgen für eine schnelle und transparente Abwicklung.',
    market: 'Der Markt für Unfallwagen in Essen spiegelt die Vielfalt der Stadt wider. Von Rüttenscheid bis Werden, von Altenessen bis Bredeney – die Nachfrage nach Unfallfahrzeugen variiert je nach Zustand des Fahrzeugs und den individuellen Bedürfnissen der Käufer. Viele Kunden suchen nach Fahrzeugen, die sich für Reparaturen oder Ersatzteile eignen.',
    service: 'Mit unserem Standort in Essen und der optimalen Verkehrsanbindung durch die A40, A42 und A52 sind wir schnell bei Ihnen vor Ort. Wir bieten einen kostenlosen Vor-Ort-Service in allen Essener Stadtteilen und kümmern uns um die Abholung Ihres Unfallwagens. Sie erhalten sofort Bargeld und wir erledigen alle notwendigen Formalitäten für Sie.',
    districts: ['Rüttenscheid', 'Werden', 'Altenessen', 'Bredeney', 'Steele', 'Borbeck', 'Kettwig', 'Frohnhausen']
  },
  'Köln': {
    intro: 'Besitzen Sie einen Unfallwagen in Köln und möchten diesen verkaufen? Wir bieten Ihnen eine schnelle, unkomplizierte und faire Möglichkeit, Ihr beschädigtes Fahrzeug zu verkaufen. Mit unserem Service können Sie sicher sein, dass Sie für Ihr Fahrzeug den besten Preis erhalten – unabhängig von seinem Zustand.',
    market: 'Der Unfallwagenmarkt in Köln ist genauso vielfältig wie die Stadt selbst. Vom Zentrum bis nach Lindenthal, von Ehrenfeld bis Nippes – die Anforderungen an Unfallwagen variieren je nach Fahrzeugzustand. Viele Käufer suchen nach Unfallfahrzeugen für Reparaturen oder Ersatzteile, was die Nachfrage besonders hoch macht.',
    service: 'Mit unserem Standort in Köln und der optimalen Anbindung über die A1, A4 und A3 sind wir schnell bei Ihnen. Wir bieten einen kostenlosen Vor-Ort-Service in allen Kölner Stadtteilen. Der Verkauf Ihres Unfallwagens wird bei uns schnell, fair und ohne unnötige Formalitäten abgewickelt.',
    districts: ['Altstadt', 'Ehrenfeld', 'Lindenthal', 'Nippes', 'Kalk', 'Porz', 'Rodenkirchen', 'Deutz']
  },
  'Frankfurt': {
    intro: 'Besitzen Sie einen Unfallwagen in Frankfurt und möchten diesen verkaufen? Wir bieten Ihnen eine schnelle und unkomplizierte Möglichkeit, Ihr beschädigtes Fahrzeug zu einem fairen Preis zu verkaufen. Als erfahrene Experten im Unfallwagen Ankauf in Frankfurt können wir Ihnen stets ein attraktives Angebot unterbreiten.',
    market: 'Der Markt für Unfallwagen in Frankfurt ist vielfältig. Vom Westend bis nach Sachsenhausen, von Bockenheim bis zum Umland – wir bieten Ihnen maßgeschneiderte Lösungen für den Verkauf Ihres Unfallwagens, ganz gleich, ob er für die Reparatur oder den Verkauf von Ersatzteilen benötigt wird.',
    service: 'Mit unserem Standort in Frankfurt und der optimalen Anbindung an die Autobahnen A3, A5 und A66 sind wir schnell bei Ihnen. Wir bieten einen zuverlässigen und kostenlosen Vor-Ort-Service in allen Frankfurter Stadtteilen für den Ankauf von Unfallfahrzeugen.',
    districts: ['Innenstadt', 'Westend', 'Bockenheim', 'Sachsenhausen', 'Nordend', 'Bornheim', 'Rödelheim', 'Fechenheim']
  },
  'Stuttgart': {
    intro: 'Verkaufen Sie einen Unfallwagen in Stuttgart? Unser Service für den Ankauf von Unfallfahrzeugen bietet Ihnen schnelle, unkomplizierte Lösungen. Als Spezialisten für den Unfallwagen Ankauf in Stuttgart können wir Ihnen faire Preise und eine problemlose Abwicklung bieten.',
    market: 'In Stuttgart gibt es eine hohe Nachfrage nach Unfallfahrzeugen, sowohl für Reparaturen als auch für den Verkauf von Ersatzteilen. Vom Stadtzentrum bis nach Vaihingen und Bad Cannstatt bieten wir Ihnen attraktive Angebote für Ihr beschädigtes Fahrzeug.',
    service: 'Dank unserer zentralen Lage in Stuttgart und der perfekten Verkehrsanbindung über die Autobahnen A8 und A81 sind wir schnell bei Ihnen vor Ort. Unser kostenloser Vor-Ort-Service für den Unfallwagen Ankauf ist in allen Stadtteilen Stuttgarts verfügbar.',
    districts: ['Innenstadt', 'Bad Cannstatt', 'Vaihingen', 'Stuttgart-West', 'Degerloch', 'Zuffenhausen', 'Möhringen', 'Botnang']
  },
  'Düsseldorf': {
    intro: 'Haben Sie einen Unfallwagen in Düsseldorf? Wir bieten Ihnen eine einfache und schnelle Möglichkeit, Ihr beschädigtes Fahrzeug zu verkaufen. Mit unserer langjährigen Erfahrung im Unfallwagen Ankauf in Düsseldorf garantieren wir Ihnen faire Preise und eine unkomplizierte Abwicklung.',
    market: 'Der Markt für Unfallwagen in Düsseldorf ist vielfältig und dynamisch. Von der Altstadt bis nach Oberkassel, von Derendorf bis Unterbilk – wir bieten maßgeschneiderte Lösungen für den Verkauf Ihres Unfallwagens und berücksichtigen dabei die unterschiedlichen Bedürfnisse der Düsseldorfer Stadtteile.',
    service: 'Mit unserem Standort in Düsseldorf und der idealen Verkehrsanbindung über die Autobahnen A3, A46 und A52 sind wir schnell bei Ihnen. Unser kostenloser Vor-Ort-Service für den Unfallwagen Ankauf ist in allen Düsseldorfer Stadtteilen verfügbar.',
    districts: ['Altstadt', 'Oberkassel', 'Derendorf', 'Unterbilk', 'Flingern', 'Benrath', 'Garath', 'Mörsenbroich']
  },
  'Leipzig': {
    intro: 'Möchten Sie einen Unfallwagen in Leipzig verkaufen? Wir bieten Ihnen einen schnellen und unkomplizierten Service, um Ihr beschädigtes Fahrzeug zu einem fairen Preis zu verkaufen. Als Experten für den Unfallwagen Ankauf in Leipzig garantieren wir Ihnen eine faire Bewertung und schnelle Abwicklung.',
    market: 'Der Leipziger Markt für Unfallwagen ist in den letzten Jahren stark gewachsen. Vom Zentrum bis nach Plagwitz, von Connewitz bis zur Südvorstadt bieten wir Ihnen attraktive Angebote für Ihren Unfallwagen, egal ob er repariert oder als Ersatzteilspender verwendet werden soll.',
    service: 'Dank unserer zentralen Lage in Leipzig und der hervorragenden Anbindung durch die Autobahnen A9, A14 und A38 sind wir schnell bei Ihnen vor Ort. Unser kostenloser Vor-Ort-Service für den Unfallwagen Ankauf ist in allen Leipziger Stadtteilen verfügbar.',
    districts: ['Innenstadt', 'Plagwitz', 'Connewitz', 'Südvorstadt', 'Reudnitz', 'Mockau', 'Lindenau', 'Leutzsch']
  },
  'Bremen': {
    intro: 'Haben Sie einen Unfallwagen in Bremen? Wir kaufen Ihr Fahrzeug schnell und unkompliziert an. Mit unserer Erfahrung im Unfallwagen Ankauf in Bremen bieten wir Ihnen faire Preise und eine schnelle Abwicklung, egal in welchem Zustand sich Ihr Fahrzeug befindet.',
    market: 'Der Markt für Unfallwagen in Bremen ist vielfältig. Vom Zentrum bis nach Blumenthal, von Schwachhausen bis Bremen-Nord – wir bieten maßgeschneiderte Lösungen für den Ankauf von Unfallfahrzeugen, sowohl für Reparaturen als auch für Ersatzteile.',
    service: 'Mit unserem Standort in Bremen und der optimalen Anbindung über die Autobahnen A1 und A27 sind wir schnell bei Ihnen vor Ort. Unser kostenloser Vor-Ort-Service für den Unfallwagen Ankauf ist in allen Bremer Stadtteilen verfügbar.',
    districts: ['Innenstadt', 'Schwachhausen', 'Walle', 'Bremen-Nord', 'Blumenthal', 'Neustadt', 'Burglesum', 'Huchting']
  },
  'Dresden': {
    intro: 'Besitzen Sie einen Unfallwagen in Dresden und möchten diesen verkaufen? Wir bieten Ihnen eine einfache und schnelle Möglichkeit, Ihr beschädigtes Fahrzeug zu verkaufen. Als Spezialisten für den Unfallwagen Ankauf in Dresden garantieren wir Ihnen faire Preise und eine schnelle Abwicklung.',
    market: 'Der Dresdner Markt für Unfallwagen zeichnet sich durch eine breite Vielfalt aus. Vom Zentrum bis nach Neustadt, von Pieschen bis nach Blasewitz – wir bieten attraktive Angebote für Ihren Unfallwagen, egal ob er repariert oder als Ersatzteilspender verwendet werden soll.',
    service: 'Mit unserer optimalen Verkehrsanbindung über die Autobahnen A4 und A17 sind wir schnell bei Ihnen vor Ort. Wir bieten einen kostenlosen Vor-Ort-Service für den Unfallwagen Ankauf in allen Dresdner Stadtteilen.',
    districts: ['Innenstadt', 'Neustadt', 'Pieschen', 'Blasewitz', 'Cotta', 'Striesen', 'Prohlis', 'Klotzsche']
  }
};
export default function MainContent({ city = 'Deutschland' }: MainContentProps) {
  const features = [
    {
      icon: Car,
      title: `${city === 'Deutschland' ? 'Unfallwagen Ankauf' : `${city}er Unfallwagen Ankauf`}`,
      description: `${city === 'Deutschland'
        ? 'Verkaufen Sie Ihr Unfallfahrzeug schnell und unkompliziert zu einem fairen Preis – bundesweit.'
        : `Verkaufen Sie Ihr Unfallfahrzeug in ${city} zu besten Konditionen. Unabhängig vom Zustand – wir bieten Ihnen ein faires Angebot.`}`,
      benefits: [
        'Alle Fahrzeugtypen willkommen',
        'Faire und schnelle Bewertung',
        'Sofortige Auszahlung bei Abholung',
        'Kostenlose Abholung möglich'
      ]
    },
    {
      icon: BadgeEuro,
      title: `Bestpreise für Unfallwagen ${city === 'Deutschland' ? 'garantiert' : `in ${city}`}`,
      description: `${city === 'Deutschland'
        ? 'Durch unsere Marktkenntnis erhalten Sie garantiert den besten Preis für Ihr Unfallfahrzeug.'
        : `In ${city} bieten wir Ihnen den besten Preis für Ihr Unfallfahrzeug, basierend auf den aktuellen Marktbedingungen.`}`,
      benefits: [
        'Aktuelle Marktpreise',
        'Transparente Preisgestaltung',
        'Keine versteckten Kosten',
        'Faire und schnelle Abwicklung'
      ]
    },
    {
      icon: Shield,
      title: `${city === 'Deutschland' ? 'Sicherer Unfallwagen Ankauf' : `${city}er sicherer Unfallwagen Ankauf`}`,
      description: `${city === 'Deutschland'
        ? 'Verkaufen Sie Ihr Unfallfahrzeug sicher und einfach. Wir garantieren eine schnelle, rechtssichere Abwicklung.'
        : `Verkaufen Sie Ihr Unfallfahrzeug in ${city} schnell, sicher und unkompliziert. Wir bieten eine rechtssichere und faire Abwicklung.`}`,
      benefits: [
        'Sichere Vertragsabwicklung',
        'Faire und transparente Prozesse',
        'Schnelle Zahlung direkt bei Abholung',
        'Über 20.000 zufriedene Kunden'
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
                {city === 'Deutschland' ? 'Unfallwagen Ankauf Experten' : `Unfallwagen Ankauf ${city}`}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-5xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 leading-tight tracking-tight px-4 sm:px-0"
            >
              Unfallwagen Ankauf
              <span className="text-primary"> zum Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {city === 'Deutschland'
                ? 'Profitieren Sie von unserem professionellen Unfallwagen Ankauf Service. Faire Preise und schnelle Abwicklung bundesweit.'
                : `Profitieren Sie von unserem professionellen Unfallwagen Ankauf Service in ${city}. Faire Preise und schnelle Abwicklung in allen Stadtteilen.`}
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
                  <h3 className="text-xl sm:text-1xl lg:text-1xl font-bold mb-4 tracking-tight">{feature.title}</h3>
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
                {city === 'Deutschland'
                  ? 'Unfallwagen Ankauf - Ihr professioneller Partner bundesweit'
                  : `Unfallwagen Ankauf in ${city} - Ihr lokaler Partner für den Fahrzeugverkauf`}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {city === 'Deutschland'
                  ? 'Als erfahrener Unfallwagen-Ankäufer bieten wir Ihnen einen professionellen und unkomplizierten Service beim Verkauf Ihres Unfallwagens. Mit unserer langjährigen Expertise im Automobilhandel und unserem bundesweiten Service können wir Ihnen stets attraktive Ankaufspreise bieten.'
                  : cityContent[city]?.intro || `Als erfahrener Unfallwagen-Ankäufer in ${city} bieten wir Ihnen einen professionellen und unkomplizierten Service beim Verkauf Ihres Unfallwagens. Durch unsere langjährige Präsenz im ${city}er Automarkt kennen wir die lokalen Besonderheiten und können Ihnen stets attraktive Ankaufspreise bieten.`}
              </p>

              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {city === 'Deutschland'
                  ? 'Der deutsche Unfallwagenmarkt ist ein stark wachsender Markt. Wir verstehen, dass der Verkauf eines Unfallwagens oft eine Herausforderung darstellen kann. Deshalb bieten wir einen stressfreien, schnellen und sicheren Ablauf für alle Fahrzeugarten.'
                  : cityContent[city]?.market || `Der ${city}er Unfallwagenmarkt ist von steigender Bedeutung. Unsere Expertise erstreckt sich über alle Fahrzeugklassen, vom PKW bis zum SUV. Die spezifischen Anforderungen der Region und die lokalen Marktbedingungen fließen in unsere Bewertung ein.`}
              </p>

              {/* Weitere spezifische Abschnitte wie bei Gebrauchtwagen */}
            </motion.div>

            {/* Enhanced Service Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-3xl p-4 sm:p-8 md:p-12"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
                {city === 'Deutschland'
                  ? 'Unfallwagen Ankauf in Ihrer Region'
                  : `Unfallwagen Ankauf in allen ${city}er Stadtteilen`}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-8">
                {city === 'Deutschland'
                  ? 'Unser Unfallwagen Ankauf Service ist in ganz Deutschland verfügbar. Wir kommen kostenlos zu Ihnen und bewerten Ihr Fahrzeug vor Ort. Profitieren Sie von unserem bundesweiten Netzwerk und verkaufen Sie Ihren Unfallwagen schnell und unkompliziert.'
                  : `Unser Unfallwagen Ankauf Service ist in ganz ${city} verfügbar. Wir kommen kostenlos zu Ihnen und bewerten Ihr Fahrzeug vor Ort. Profitieren Sie von unserem lokalen Service und verkaufen Sie Ihren Unfallwagen schnell und unkompliziert.`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {[{ icon: MapPin, text: city === 'Deutschland' ? 'Bundesweiter Service' : `Alle ${city}er Stadtteile` }, { icon: Car, text: 'Kostenlose Vor-Ort Bewertung' }, { icon: Shield, text: 'Sichere Abwicklung' }, { icon: Banknote, text: 'Sofortige Bezahlung' }].map((item, index) => (
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
                {city === 'Deutschland'
                  ? 'Jetzt Unfallwagen verkaufen'
                  : `Jetzt Unfallwagen in ${city} verkaufen`}
              </h3>
              <p className="text-sm sm:text-base text-white mb-6 relative z-10">
                {city === 'Deutschland'
                  ? 'Nehmen Sie jetzt Kontakt mit uns auf und lassen Sie sich ein unverbindliches Angebot für Ihren Unfallwagen erstellen. Unser Team ist für Sie da!'
                  : `Nehmen Sie jetzt Kontakt mit uns auf und erhalten Sie ein unverbindliches Angebot für Ihren Unfallwagen in ${city}. Unser Team ist direkt vor Ort!`}
              </p>
              <a href="/kontakt" className="inline-block bg-primary text-white py-2 px-6 rounded-lg text-sm sm:text-base hover:bg-primary/80 transition-all duration-300 relative z-10">
                Zum Kontaktformular
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}