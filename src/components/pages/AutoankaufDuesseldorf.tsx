import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufDuesseldorf/Hero';
import TrustIndicators from './AutoankaufDuesseldorf/TrustIndicators';
import MainContent from './AutoankaufDuesseldorf/MainContent';
import Districts from './AutoankaufDuesseldorf/Districts';
import ProcessSteps from './AutoankaufDuesseldorf/ProcessSteps';
import FAQ from './AutoankaufDuesseldorf/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Düsseldorf',
  'Auto verkaufen Düsseldorf',
  'Gebrauchtwagen Ankauf Düsseldorf',
  'KFZ Ankauf Düsseldorf',
  'PKW Ankauf Düsseldorf',
  'Unfallwagen Ankauf Düsseldorf',
  'Autoexport Düsseldorf',
  'Gebrauchtwagenankauf Düsseldorf',
  'Auto Händler Düsseldorf',
  'Autoankauf Stadtmitte',
  'Autoankauf Flingern',
  'Autoankauf Bilk',
  'Autoankauf Pempelfort',
  'Autoankauf Derendorf',
  'Autoankauf Oberkassel',
  'Autoankauf Gerresheim',
  'Autoankauf Benrath',
  'Autoankauf Eller',
  'Autoankauf Unterbilk',
  'Autoankauf Golzheim'
].join(', ');

export default function AutoankaufDuesseldorf() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Düsseldorf | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Düsseldorf ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Düsseldorfer Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-duesseldorf" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Düsseldorf | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Düsseldorf zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-duesseldorf" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Düsseldorf",
              "description": "Professioneller Autoankauf in Düsseldorf mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-duesseldorf",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Düsseldorf",
                "addressRegion": "Nordrhein-Westfalen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.2277",
                "longitude": "6.7735"
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
                "name": "Düsseldorf"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Düsseldorf"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <TrustIndicators />
      <MainContent />
      <Districts />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}