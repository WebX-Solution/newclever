import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufEssen/Hero';
import TrustIndicators from './AutoankaufEssen/TrustIndicators';
import MainContent from './AutoankaufEssen/MainContent';
import Districts from './AutoankaufEssen/Districts';
import ProcessSteps from './AutoankaufEssen/ProcessSteps';
import FAQ from './AutoankaufEssen/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Essen',
  'Auto verkaufen Essen',
  'Gebrauchtwagen Ankauf Essen',
  'KFZ Ankauf Essen',
  'PKW Ankauf Essen',
  'Unfallwagen Ankauf Essen',
  'Autoexport Essen',
  'Gebrauchtwagenankauf Essen',
  'Auto Händler Essen',
  'Autoankauf Rüttenscheid',
  'Autoankauf Steele',
  'Autoankauf Borbeck',
  'Autoankauf Frohnhausen',
  'Autoankauf Altenessen',
  'Autoankauf Kettwig',
  'Autoankauf Werden',
  'Autoankauf Bredeney',
  'Autoankauf Holsterhausen',
  'Autoankauf Katernberg',
  'Autoankauf Stadtmitte'
].join(', ');

export default function AutoankaufEssen() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Essen | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Essen ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Essener Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-essen" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Essen | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Essen zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-essen" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Essen",
              "description": "Professioneller Autoankauf in Essen mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-essen",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Essen",
                "addressRegion": "Nordrhein-Westfalen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.4556",
                "longitude": "7.0116"
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
                "name": "Essen"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Essen"
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