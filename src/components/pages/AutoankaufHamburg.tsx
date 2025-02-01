import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufHamburg/Hero';
import TrustIndicators from './AutoankaufHamburg/TrustIndicators';
import MainContent from './AutoankaufHamburg/MainContent';
import Districts from './AutoankaufHamburg/Districts';
import ProcessSteps from './AutoankaufHamburg/ProcessSteps';
import FAQ from './AutoankaufHamburg/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Hamburg',
  'Auto verkaufen Hamburg',
  'Gebrauchtwagen Ankauf Hamburg',
  'KFZ Ankauf Hamburg',
  'PKW Ankauf Hamburg',
  'Unfallwagen Ankauf Hamburg',
  'Autoexport Hamburg',
  'Gebrauchtwagenankauf Hamburg',
  'Auto Händler Hamburg',
  'Autoankauf Altona',
  'Autoankauf Wandsbek',
  'Autoankauf Eimsbüttel',
  'Autoankauf Hamburg-Nord',
  'Autoankauf Hamburg-Mitte',
  'Autoankauf Bergedorf',
  'Autoankauf Harburg',
  'Autoankauf St. Pauli',
  'Autoankauf Winterhude',
  'Autoankauf Eppendorf',
  'Autoankauf HafenCity'
].join(', ');

export default function AutoankaufHamburg() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Hamburg | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Hamburg ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Hamburger Bezirke" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-hamburg" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Hamburg | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Hamburg zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-hamburg" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Hamburg",
              "description": "Professioneller Autoankauf in Hamburg mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-hamburg",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hamburg",
                "addressRegion": "Hamburg",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "53.5511",
                "longitude": "9.9937"
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
                "name": "Hamburg"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Hamburg"
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