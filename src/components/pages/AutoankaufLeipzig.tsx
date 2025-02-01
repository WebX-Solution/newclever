import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufLeipzig/Hero';
import TrustIndicators from './AutoankaufLeipzig/TrustIndicators';
import MainContent from './AutoankaufLeipzig/MainContent';
import Districts from './AutoankaufLeipzig/Districts';
import ProcessSteps from './AutoankaufLeipzig/ProcessSteps';
import FAQ from './AutoankaufLeipzig/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Leipzig',
  'Auto verkaufen Leipzig',
  'Gebrauchtwagen Ankauf Leipzig',
  'KFZ Ankauf Leipzig',
  'PKW Ankauf Leipzig',
  'Unfallwagen Ankauf Leipzig',
  'Autoexport Leipzig',
  'Gebrauchtwagenankauf Leipzig',
  'Auto Händler Leipzig',
  'Autoankauf Zentrum-Nord',
  'Autoankauf Zentrum-Süd',
  'Autoankauf Plagwitz',
  'Autoankauf Connewitz',
  'Autoankauf Gohlis',
  'Autoankauf Stötteritz',
  'Autoankauf Reudnitz',
  'Autoankauf Lindenau',
  'Autoankauf Schleußig',
  'Autoankauf Mockau',
  'Autoankauf Grünau'
].join(', ');

export default function AutoankaufLeipzig() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Leipzig | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Leipzig ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Leipziger Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-leipzig" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Leipzig | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Leipzig zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-leipzig" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Leipzig",
              "description": "Professioneller Autoankauf in Leipzig mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-leipzig",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Leipzig",
                "addressRegion": "Sachsen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.3397",
                "longitude": "12.3731"
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
                "name": "Leipzig"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Leipzig"
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