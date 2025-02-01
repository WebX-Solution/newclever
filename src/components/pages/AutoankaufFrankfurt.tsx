import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufFrankfurt/Hero';
import TrustIndicators from './AutoankaufFrankfurt/TrustIndicators';
import MainContent from './AutoankaufFrankfurt/MainContent';
import Districts from './AutoankaufFrankfurt/Districts';
import ProcessSteps from './AutoankaufFrankfurt/ProcessSteps';
import FAQ from './AutoankaufFrankfurt/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Frankfurt',
  'Auto verkaufen Frankfurt',
  'Gebrauchtwagen Ankauf Frankfurt',
  'KFZ Ankauf Frankfurt',
  'PKW Ankauf Frankfurt',
  'Unfallwagen Ankauf Frankfurt',
  'Autoexport Frankfurt',
  'Gebrauchtwagenankauf Frankfurt',
  'Auto Händler Frankfurt',
  'Autoankauf Innenstadt Frankfurt',
  'Autoankauf Bockenheim',
  'Autoankauf Sachsenhausen',
  'Autoankauf Nordend',
  'Autoankauf Westend',
  'Autoankauf Bornheim',
  'Autoankauf Rödelheim',
  'Autoankauf Gallus',
  'Autoankauf Höchst',
  'Autoankauf Niederrad',
  'Autoankauf Bergen-Enkheim'
].join(', ');

export default function AutoankaufFrankfurt() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Frankfurt | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Frankfurt ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Frankfurter Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-frankfurt" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Frankfurt | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Frankfurt zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-frankfurt" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Frankfurt",
              "description": "Professioneller Autoankauf in Frankfurt mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-frankfurt",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Frankfurt",
                "addressRegion": "Hessen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.1109",
                "longitude": "8.6821"
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
                "name": "Frankfurt"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Frankfurt"
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