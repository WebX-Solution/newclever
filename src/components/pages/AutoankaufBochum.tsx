import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufBochum/Hero';
import TrustIndicators from './AutoankaufBochum/TrustIndicators';
import MainContent from './AutoankaufBochum/MainContent';
import Districts from './AutoankaufBochum/Districts';
import ProcessSteps from './AutoankaufBochum/ProcessSteps';
import FAQ from './AutoankaufBochum/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Bochum',
  'Auto verkaufen Bochum',
  'Gebrauchtwagen Ankauf Bochum',
  'KFZ Ankauf Bochum',
  'PKW Ankauf Bochum',
  'Unfallwagen Ankauf Bochum',
  'Autoexport Bochum',
  'Gebrauchtwagenankauf Bochum',
  'Auto Händler Bochum',
  'Autoankauf Innenstadt',
  'Autoankauf Wattenscheid',
  'Autoankauf Langendreer',
  'Autoankauf Weitmar',
  'Autoankauf Wiemelhausen',
  'Autoankauf Querenburg',
  'Autoankauf Harpen',
  'Autoankauf Gerthe',
  'Autoankauf Riemke',
  'Autoankauf Höntrop',
  'Autoankauf Linden'
].join(', ');

export default function AutoankaufBochum() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Bochum | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Bochum ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Bochumer Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-bochum" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Bochum | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Bochum zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-bochum" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Bochum",
              "description": "Professioneller Autoankauf in Bochum mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-bochum",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bochum",
                "addressRegion": "Nordrhein-Westfalen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.4818",
                "longitude": "7.2162"
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
                "name": "Bochum"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Bochum"
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