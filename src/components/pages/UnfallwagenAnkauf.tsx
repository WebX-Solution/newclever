import { Helmet } from 'react-helmet-async';
import Hero from './UnfallwagenAnkauf/Hero';
import TrustIndicators from './UnfallwagenAnkauf/TrustIndicators';
import MainContent from './UnfallwagenAnkauf/MainContent';
import DamageTypes from './UnfallwagenAnkauf/DamageTypes';
import ProcessSteps from './UnfallwagenAnkauf/ProcessSteps';
import FAQ from './UnfallwagenAnkauf/FAQ';


// SEO Keywords
const seoKeywords = [
  'Unfallwagen Ankauf',
  'Unfallfahrzeug verkaufen',
  'Unfallwagen verkaufen',
  'Unfallfahrzeug Ankauf',
  'Unfallauto Ankauf',
  'Unfallwagen Export',
  'Unfallwagen Bestpreis',
  'Unfallfahrzeug Bewertung',
  'Unfallwagen Händler',
  'Unfallwagen Abholung',
  'Unfallwagen Sofortankauf',
  'Unfallwagen Begutachtung',
  'Unfallwagen Schaden',
  'Totalschaden Ankauf',
  'Motorschaden Ankauf',
  'Getriebeschaden Ankauf',
  'Hagelschaden Ankauf',
  'Wasserschaden Ankauf',
  'Brandschaden Ankauf',
  'Unfallwagen Gutachten'
].join(', ');

export default function UnfallwagenAnkauf() {
  return (
    <main>
      <Helmet>
        <title>Unfallwagen Ankauf | Bestpreise für Unfallfahrzeuge ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Unfallwagen Ankauf ✓ Faire Preise für Unfallfahrzeuge ✓ Kostenlose Begutachtung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Alle Unfallarten" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/unfallwagen-ankauf" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Unfallwagen Ankauf | Faire Preise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Unfallfahrzeug zum Bestpreis. Professionelle Bewertung aller Unfallarten mit kostenloser Begutachtung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/unfallwagen-ankauf" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf - Unfallwagen Ankauf",
              "description": "Professioneller Unfallwagen Ankauf mit fairer Bewertung und bundesweitem Service",
              "url": "https://clever-autoankauf.de/unfallwagen-ankauf",
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
                  "name": "Unfallwagen Ankauf Service"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero city={''} />
      <TrustIndicators />
      <MainContent />
      <DamageTypes />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}