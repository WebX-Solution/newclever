import { Helmet } from 'react-helmet-async';
import Hero from './PkwAnkauf/Hero';
import TrustIndicators from './PkwAnkauf/TrustIndicators';
import MainContent from './PkwAnkauf/MainContent';
import VehicleTypes from './PkwAnkauf/VehicleTypes';
import ProcessSteps from './PkwAnkauf/ProcessSteps';
import FAQ from './PkwAnkauf/FAQ';

// SEO Keywords
const seoKeywords = [
  'PKW Ankauf',
  'Auto verkaufen',
  'Autoankauf',
  'PKW verkaufen',
  'KFZ Ankauf',
  'Fahrzeugankauf',
  'Auto Ankauf Service',
  'PKW Händler',
  'Gebrauchtwagen Ankauf',
  'Autoankauf Export',
  'PKW Bestpreis',
  'Auto schnell verkaufen',
  'PKW Bewertung',
  'Fahrzeugbewertung kostenlos',
  'Auto Ankauf Händler',
  'PKW Abholung',
  'Autoankauf vor Ort',
  'KFZ verkaufen',
  'PKW Export',
  'Auto Ankauf Sofort'
].join(', ');

export default function PKWAnkauf() {
  return (
    <main>
      <Helmet>
        <title>PKW Ankauf | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller PKW Ankauf ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Alle Marken und Modelle" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/pkw-ankauf" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="PKW Ankauf | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihren PKW zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/pkw-ankauf" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf - PKW Ankauf",
              "description": "Professioneller PKW Ankauf mit Bestpreisgarantie und bundesweitem Service",
              "url": "https://clever-autoankauf.de/pkw-ankauf",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.1657",
                "longitude": "10.4515"
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
                "@type": "Country",
                "name": "Germany"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "PKW Ankauf Service"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero city={''} />
      <TrustIndicators />
      <MainContent city={''} />
      <VehicleTypes />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}