import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Features from './Features';
import Process from './Process';
import Benefits from './Benefits';
import Brands from './Brands';
import Services from './Services';
import Locations from './Locations';
import TextContent from './TextContent';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Autoankauf | Gebrauchtwagen, Unfallwagen & PKW Ankauf ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf mit 24/7 Express-Service ✓ Kostenlose Vor-Ort Bewertung ✓ Sofortige Auszahlung ✓ Bestpreis-Garantie ✓ Über 20.000 zufriedene Kunden ✓ Jetzt unverbindlich anfragen!" />
        <link rel="canonical" href="https://clever-autoankauf.de" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf Deutschlandweit | Unfallwagen, Gebrauchtwagen & PKW Ankauf" />
        <meta property="og:description" content="Professioneller Autoankauf mit 24/7 Express-Service. Kostenlose Vor-Ort Bewertung, sofortige Auszahlung und Bestpreis-Garantie. Jetzt unverbindlich anfragen!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Clever-Autoankauf",
              "description": "Professioneller Autoankauf mit 24/7 Express-Service, kostenloser Vor-Ort Bewertung und Bestpreis-Garantie",
              "url": "https://clever-autoankauf.de",
              "telephone": "+49 (0) 152 56 501 567",
              "email": "info@clever-autoankauf.de",
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "20000",
                "reviewCount": "20000"
              },
              "sameAs": [
                "https://www.facebook.com/cleverautoankauf",
                "https://www.instagram.com/cleverautoankauf",
                "https://www.linkedin.com/company/clever-autoankauf"
              ]
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <Features />
      <TextContent />
      <Process />
      <Benefits />
      <Brands />
      <Services />
      <Locations />
    </main>
  );
}