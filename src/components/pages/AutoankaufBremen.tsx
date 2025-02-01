import { Helmet } from 'react-helmet-async';
import Hero from './AutoankaufBremen/Hero';
import TrustIndicators from './AutoankaufBremen/TrustIndicators';
import MainContent from './AutoankaufBremen/MainContent';
import Districts from './AutoankaufBremen/Districts';
import ProcessSteps from './AutoankaufBremen/ProcessSteps';
import FAQ from './AutoankaufBremen/FAQ';

// SEO Keywords
const seoKeywords = [
  'Autoankauf Bremen',
  'Auto verkaufen Bremen',
  'Gebrauchtwagen Ankauf Bremen',
  'KFZ Ankauf Bremen',
  'PKW Ankauf Bremen',
  'Unfallwagen Ankauf Bremen',
  'Autoexport Bremen',
  'Gebrauchtwagenankauf Bremen',
  'Auto Händler Bremen',
  'Autoankauf Neustadt',
  'Autoankauf Schwachhausen',
  'Autoankauf Findorff',
  'Autoankauf Walle',
  'Autoankauf Vahr',
  'Autoankauf Hemelingen',
  'Autoankauf Gröpelingen',
  'Autoankauf Obervieland',
  'Autoankauf Horn-Lehe',
  'Autoankauf Burglesum',
  'Autoankauf Vegesack'
].join(', ');

export default function AutoankaufBremen() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf Bremen | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf in Bremen ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle Bremer Stadtteile" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/autoankauf-bremen" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Bremen | Bestpreise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto in Bremen zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/autoankauf-bremen" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf Bremen",
              "description": "Professioneller Autoankauf in Bremen mit Bestpreisgarantie und Vor-Ort Service",
              "url": "https://clever-autoankauf.de/autoankauf-bremen",
              "telephone": "+49 (0) 152 56 501 567",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bremen",
                "addressRegion": "Bremen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "53.0793",
                "longitude": "8.8017"
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
                "name": "Bremen"
              },
              "priceRange": "€€€",
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "AutomotiveBusiness",
                  "name": "Autoankauf Service Bremen"
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