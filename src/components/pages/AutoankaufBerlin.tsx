import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufBerlin/Hero';
import TrustIndicators from './AutoankaufBerlin/TrustIndicators';
import MainContent from './AutoankaufBerlin/MainContent';
import Districts from './AutoankaufBerlin/Districts';
import ProcessSteps from './AutoankaufBerlin/ProcessSteps';
import FAQ from './AutoankaufBerlin/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Berlin',
  'Auto verkaufen Berlin',
  'Gebrauchtwagen Ankauf Berlin',
  'KFZ Ankauf Berlin',
  'PKW Ankauf Berlin',
  'Unfallwagen Ankauf Berlin',
  'Autoexport Berlin',
  'Gebrauchtwagenankauf Berlin',
  'Auto Händler Berlin',
  'Autoankauf Charlottenburg',
  'Autoankauf Neukölln',
  'Autoankauf Mitte',
  'Autoankauf Spandau',
  'Autoankauf Kreuzberg',
  'Autoankauf Pankow',
  'Autoankauf Steglitz',
  'Autoankauf Tempelhof',
  'Autoankauf Schöneberg',
  'Autoankauf Friedrichshain',
  'Autoankauf Marzahn'
].join(', ');

export default function AutoankaufBerlin() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Berlin | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Berlin ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Berliner Bezirke" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-berlin" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Berlin | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Berlin zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-berlin" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Berlin",
              "description": "Professioneller Autoankauf in Berlin mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-berlin",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Berlin",
                "addressRegion": "Berlin",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.5200",
                "longitude": "13.4050"
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
                "name": "Berlin"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Berlin"
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