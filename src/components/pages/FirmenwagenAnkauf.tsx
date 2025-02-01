import { Helmet } from 'react-helmet-async';
import Hero from './FirmenwagenAnkauf/Hero';
import TrustIndicators from './FirmenwagenAnkauf/TrustIndicators';
import MainContent from './FirmenwagenAnkauf/MainContent';
import ProcessSteps from './FirmenwagenAnkauf/ProcessSteps';
import FAQ from './FirmenwagenAnkauf/FAQ';

// SEO Keywords
const seoKeywords = [
  'Firmenwagen Ankauf',
  'Geschäftswagen verkaufen',
  'Firmenauto verkaufen',
  'Leasingrückläufer Ankauf',
  'Flottenfahrzeuge verkaufen',
  'Dienstwagen Ankauf',
  'Firmenflotte verkaufen',
  'Geschäftsfahrzeuge Ankauf',
  'Fuhrpark auflösen',
  'Firmenwagen Bestpreis',
  'Firmenfahrzeuge Bewertung',
  'Leasingfahrzeuge verkaufen',
  'Geschäftswagen Export',
  'Firmenwagen Händler',
  'Firmenfahrzeug Abholung',
  'Firmenwagen Sofortankauf',
  'Geschäftswagen Begutachtung',
  'Flottenauflösung',
  'Dienstfahrzeuge verkaufen',
  'Firmenflotte Bewertung'
].join(', ');

export default function FirmenwagenAnkauf() {
  return (
    <main>
      <Helmet>
        <title>Firmenwagen Ankauf | Bestpreise für Geschäftsfahrzeuge ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Firmenwagen Ankauf ✓ Faire Preise für Geschäftsfahrzeuge ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Leasingrückläufer" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/firmenwagen-ankauf" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Firmenwagen Ankauf | Faire Preise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihre Firmenfahrzeuge zum Bestpreis. Professionelle Bewertung von Geschäftswagen mit kostenloser Begutachtung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/firmenwagen-ankauf" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf - Firmenwagen Ankauf",
              "description": "Professioneller Firmenwagen Ankauf mit fairer Bewertung und bundesweitem Service",
              "url": "https://clever-autoankauf.de/firmenwagen-ankauf",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.1657",
                "longitude": "10.4515"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Germany"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Firmenwagen Ankauf Service"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero city={''} />
      <TrustIndicators />
      <MainContent city={''} />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}