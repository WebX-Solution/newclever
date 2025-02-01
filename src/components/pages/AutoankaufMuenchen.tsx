import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufMuenchen/Hero';
import TrustIndicators from './AutoankaufMuenchen/TrustIndicators';
import MainContent from './AutoankaufMuenchen/MainContent';
import Districts from './AutoankaufMuenchen/Districts';
import ProcessSteps from './AutoankaufMuenchen/ProcessSteps';
import FAQ from './AutoankaufMuenchen/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf München',
  'Auto verkaufen München',
  'Gebrauchtwagen Ankauf München',
  'KFZ Ankauf München',
  'PKW Ankauf München',
  'Unfallwagen Ankauf München',
  'Autoexport München',
  'Gebrauchtwagenankauf München',
  'Auto Händler München',
  'Autoankauf Schwabing',
  'Autoankauf Bogenhausen',
  'Autoankauf Maxvorstadt',
  'Autoankauf Sendling',
  'Autoankauf Neuhausen',
  'Autoankauf Pasing',
  'Autoankauf Riem',
  'Autoankauf Moosach',
  'Autoankauf Giesing',
  'Autoankauf Haidhausen',
  'Autoankauf Ludwigsvorstadt'
].join(', ');

export default function AutoankaufMuenchen() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf München | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in München ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Münchner Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-muenchen" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf München | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in München zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-muenchen" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf München",
              "description": "Professioneller Autoankauf in München mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-muenchen",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "München",
                "addressRegion": "Bayern",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.1351",
                "longitude": "11.5820"
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
                "name": "München"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service München"
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