import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufDortmund/Hero';
import TrustIndicators from './AutoankaufDortmund/TrustIndicators';
import MainContent from './AutoankaufDortmund/MainContent';
import Districts from './AutoankaufDortmund/Districts';
import ProcessSteps from './AutoankaufDortmund/ProcessSteps';
import FAQ from './AutoankaufDortmund/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Dortmund',
  'Auto verkaufen Dortmund',
  'Gebrauchtwagen Ankauf Dortmund',
  'KFZ Ankauf Dortmund',
  'PKW Ankauf Dortmund',
  'Unfallwagen Ankauf Dortmund',
  'Autoexport Dortmund',
  'Gebrauchtwagenankauf Dortmund',
  'Auto Händler Dortmund',
  'Autoankauf Innenstadt',
  'Autoankauf Hörde',
  'Autoankauf Hombruch',
  'Autoankauf Brackel',
  'Autoankauf Eving',
  'Autoankauf Scharnhorst',
  'Autoankauf Aplerbeck',
  'Autoankauf Mengede',
  'Autoankauf Lütgendortmund',
  'Autoankauf Huckarde',
  'Autoankauf Dorstfeld'
].join(', ');

export default function AutoankaufDortmund() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Dortmund | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Dortmund ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Dortmunder Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-dortmund" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Dortmund | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Dortmund zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-dortmund" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Dortmund",
              "description": "Professioneller Autoankauf in Dortmund mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-dortmund",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dortmund",
                "addressRegion": "Nordrhein-Westfalen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5136",
                "longitude": "7.4653"
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
                "@type": "City",
                "name": "Dortmund"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Dortmund"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <TrustIndicators />
      <MainContent city="Dortmund" />
      <Districts />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}