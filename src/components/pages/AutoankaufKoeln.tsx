import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufKoeln/Hero';
import TrustIndicators from './AutoankaufKoeln/TrustIndicators';
import MainContent from './AutoankaufKoeln/MainContent';
import Districts from './AutoankaufKoeln/Districts';
import ProcessSteps from './AutoankaufKoeln/ProcessSteps';
import FAQ from './AutoankaufKoeln/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Köln',
  'Auto verkaufen Köln',
  'Gebrauchtwagen Ankauf Köln',
  'KFZ Ankauf Köln',
  'PKW Ankauf Köln',
  'Unfallwagen Ankauf Köln',
  'Autoexport Köln',
  'Gebrauchtwagenankauf Köln',
  'Auto Händler Köln',
  'Autoankauf Innenstadt',
  'Autoankauf Ehrenfeld',
  'Autoankauf Nippes',
  'Autoankauf Mülheim',
  'Autoankauf Lindenthal',
  'Autoankauf Chorweiler',
  'Autoankauf Porz',
  'Autoankauf Kalk',
  'Autoankauf Rodenkirchen',
  'Autoankauf Deutz',
  'Autoankauf Sülz'
].join(', ');

export default function AutoankaufKoeln() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Köln | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Köln ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Kölner Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-koeln" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Köln | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Köln zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-koeln" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Köln",
              "description": "Professioneller Autoankauf in Köln mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-koeln",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Köln",
                "addressRegion": "Nordrhein-Westfalen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.9375",
                "longitude": "6.9603"
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
                "name": "Köln"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Köln"
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