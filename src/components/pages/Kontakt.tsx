import { Helmet } from 'react-helmet-async';
import ContactForm from './Kontakt/ContactForm.tsx';
import ContactInfo from './Kontakt/ContactInfo.tsx';
import ContactMap from './Kontakt/ContactMap.tsx';

export default function Kontakt() {
  return (
    <main>
      <Helmet>
        <title>Kontakt | Autoankauf Anfrage & Beratung ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Kontaktieren Sie uns für eine kostenlose Fahrzeugbewertung ✓ 24/7 Erreichbarkeit ✓ Express Autoankauf ✓ Sofortige Auszahlung ✓ Bundesweiter Service" />
        <meta name="keywords" content="Autoankauf Kontakt, Auto verkaufen Kontakt, Fahrzeugbewertung, Autoankauf Beratung, Autoankauf Hotline, Autoankauf Service, Autoankauf Anfrage, Autoankauf Termin, Autoankauf Vor-Ort, Autoankauf Express" />
        <link rel="canonical" href="https://clever-autoankauf.de/kontakt" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kontakt | Clever-Autoankauf - Kostenlose Fahrzeugbewertung" />
        <meta property="og:description" content="Kontaktieren Sie uns für eine kostenlose und unverbindliche Fahrzeugbewertung. 24/7 Service und Express Autoankauf bundesweit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clever-autoankauf.de/kontakt" />
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Clever-Autoankauf Kontakt",
              "description": "Kontaktseite für Autoankauf und kostenlose Fahrzeugbewertung",
              "url": "https://clever-autoankauf.de/kontakt",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49 (0) 152 56 501 567",
                "contactType": "customer service",
                "areaServed": "DE",
                "availableLanguage": ["German", "English", "Turkish"],
                "email": "info@clever-autoankauf.de"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
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
              }
            }
          `}
        </script>
      </Helmet>

      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </main>
  );
}