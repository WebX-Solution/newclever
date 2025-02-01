import { Helmet } from 'react-helmet-async';
import Hero from './MotorschadenAnkauf/Hero.tsx';
import TrustIndicators from './MotorschadenAnkauf/TrustIndicators.tsx';
import MainContent from './MotorschadenAnkauf/MainContent.tsx';
import DamageTypes from './MotorschadenAnkauf/DamageTypes.tsx';
import ProcessSteps from './MotorschadenAnkauf/ProcessSteps.tsx';
import FAQ from './MotorschadenAnkauf/FAQ.tsx';

// SEO Keywords
const seoKeywords = [
  'Motorschaden Ankauf',
  'Auto mit Motorschaden verkaufen',
  'Motorschaden Auto ankauf',
  'Motorschaden Export',
  'Defektes Auto verkaufen',
  'Motorschaden Bestpreis',
  'Auto mit Motordefekt',
  'Motorschaden Bewertung',
  'Motorschaden Händler',
  'Motorschaden Abholung',
  'Motorschaden Sofortankauf',
  'Motorschaden Begutachtung',
  'Motordefekt Ankauf',
  'Motorschaden Diagnose',
  'Kolbenfresser Ankauf',
  'Turboschaden Ankauf',
  'Motorschaden Reparatur',
  'Motorschaden Kosten',
  'Motorschaden Gutachten',
  'Motorschaden Wertermittlung'
].join(', ');

export default function MotorschadenAnkauf() {
  return (
    <main>
      <Helmet>
        <title>Motorschaden Ankauf | Bestpreise für defekte Motoren ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Motorschaden Ankauf ✓ Faire Preise für Motordefekte ✓ Kostenlose Begutachtung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Alle Motorschäden" />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://clever-autoankauf.de/motorschaden-ankauf" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Motorschaden Ankauf | Faire Preise & Express Service" />
        <meta property="og:description" content="Verkaufen Sie Ihr Auto mit Motorschaden zum Bestpreis. Professionelle Bewertung aller Motordefekte mit kostenloser Begutachtung und sofortiger Auszahlung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/motorschaden-ankauf" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf - Motorschaden Ankauf",
              "description": "Professioneller Motorschaden Ankauf mit fairer Bewertung und bundesweitem Service",
              "url": "https://clever-autoankauf.de/motorschaden-ankauf",
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
                  "name": "Motorschaden Ankauf Service"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Hero city={''} />
      <TrustIndicators />
      <MainContent city={''} />
      <DamageTypes />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}