import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufStuttgart/Hero';
import TrustIndicators from './AutoankaufStuttgart/TrustIndicators';
import MainContent from './AutoankaufStuttgart/MainContent';
import Districts from './AutoankaufStuttgart/Districts';
import ProcessSteps from './AutoankaufStuttgart/ProcessSteps';
import FAQ from './AutoankaufStuttgart/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Stuttgart',
  'Auto verkaufen Stuttgart',
  'Gebrauchtwagen Ankauf Stuttgart',
  'KFZ Ankauf Stuttgart',
  'PKW Ankauf Stuttgart',
  'Unfallwagen Ankauf Stuttgart',
  'Autoexport Stuttgart',
  'Gebrauchtwagenankauf Stuttgart',
  'Auto Händler Stuttgart',
  'Autoankauf Bad Cannstatt',
  'Autoankauf Feuerbach',
  'Autoankauf Vaihingen',
  'Autoankauf Zuffenhausen',
  'Autoankauf Degerloch',
  'Autoankauf Möhringen',
  'Autoankauf Stammheim',
  'Autoankauf Weilimdorf',
  'Autoankauf Untertürkheim',
  'Autoankauf Sillenbuch',
  'Autoankauf Plieningen'
].join(', ');

export default function AutoankaufStuttgart() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Stuttgart | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Stuttgart ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Stuttgarter Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-stuttgart" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Stuttgart | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Stuttgart zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-stuttgart" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Stuttgart",
              "description": "Professioneller Autoankauf in Stuttgart mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-stuttgart",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stuttgart",
                "addressRegion": "Baden-Württemberg",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.7758",
                "longitude": "9.1829"
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
                "name": "Stuttgart"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Stuttgart"
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