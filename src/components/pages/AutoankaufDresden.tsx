import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufDresden/Hero';
import TrustIndicators from './AutoankaufDresden/TrustIndicators';
import MainContent from './AutoankaufDresden/MainContent';
import Districts from './AutoankaufDresden/Districts';
import ProcessSteps from './AutoankaufDresden/ProcessSteps';
import FAQ from './AutoankaufDresden/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Dresden',
  'Auto verkaufen Dresden',
  'Gebrauchtwagen Ankauf Dresden',
  'KFZ Ankauf Dresden',
  'PKW Ankauf Dresden',
  'Unfallwagen Ankauf Dresden',
  'Autoexport Dresden',
  'Gebrauchtwagenankauf Dresden',
  'Auto Händler Dresden',
  'Autoankauf Altstadt',
  'Autoankauf Neustadt',
  'Autoankauf Pieschen',
  'Autoankauf Blasewitz',
  'Autoankauf Loschwitz',
  'Autoankauf Plauen',
  'Autoankauf Cotta',
  'Autoankauf Klotzsche',
  'Autoankauf Prohlis',
  'Autoankauf Leuben',
  'Autoankauf Striesen'
].join(', ');

export default function AutoankaufDresden() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Dresden | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Dresden ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Dresdner Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-dresden" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Dresden | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Dresden zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-dresden" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Dresden",
              "description": "Professioneller Autoankauf in Dresden mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-dresden",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dresden",
                "addressRegion": "Sachsen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.0504",
                "longitude": "13.7373"
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
                "name": "Dresden"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Dresden"
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