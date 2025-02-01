import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LocationProvider } from './contexts/LocationContext';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GebrauchtwagenAnkaufCity from './components/pages/GebrauchtwagenAnkaufCity';
import UnfallwagenAnkaufCity from './components/pages/UnfallwagenAnkaufCity';
import FirmenwagenAnkaufCity from './components/pages/FirmenwagenAnkaufCity';
import KFZAnkaufCity from './components/pages/KFZAnkaufCity';
import PKWAnkaufCity from './components/pages/PKWAnkaufCity';
import MotorschadenAnkaufCity from './components/pages/MotorschadenAnkaufCity';
import GebrauchtwagenAnkauf from './components/pages/GebrauchtwagenAnkauf';
import UnfallwagenAnkauf from './components/pages/UnfallwagenAnkauf';
import FirmenwagenAnkauf from './components/pages/FirmenwagenAnkauf';
import PKWAnkauf from './components/pages/PKWAnkauf';
import KFZAnkauf from './components/pages/KFZAnkauf';
import MotorschadenAnkauf from './components/pages/MotorschadenAnkauf';
import AutoankaufBerlin from './components/pages/AutoankaufBerlin';
import AutoankaufHamburg from './components/pages/AutoankaufHamburg';
import AutoankaufMuenchen from './components/pages/AutoankaufMuenchen';
import AutoankaufKoeln from './components/pages/AutoankaufKoeln';
import AutoankaufFrankfurt from './components/pages/AutoankaufFrankfurt';
import AutoankaufStuttgart from './components/pages/AutoankaufStuttgart';
import AutoankaufDuesseldorf from './components/pages/AutoankaufDuesseldorf';
import AutoankaufLeipzig from './components/pages/AutoankaufLeipzig';
import AutoankaufDortmund from './components/pages/AutoankaufDortmund';
import AutoankaufBochum from './components/pages/AutoankaufBochum';
import AutoankaufEssen from './components/pages/AutoankaufEssen';
import AutoankaufBremen from './components/pages/AutoankaufBremen';
import AutoankaufDresden from './components/pages/AutoankaufDresden';
import Kontakt from './components/pages/Kontakt';
import Impressum from './components/pages/Impressum';
import Datenschutz from './components/pages/Datenschutz';
import NotFound from './components/pages/NotFound';
import CookieConsent from './components/CookieConsent';
import LocationRedirect from './components/LocationRedirect';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <LocationProvider>
      <Helmet>
        <title>Autoankauf | Gebrauchtwagen, Unfallwagen & PKW Ankauf ᐅ Clever-Autoankauf</title>
        <meta name="description" content="Professioneller Autoankauf ✓ Bestpreise ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Express Ankauf 24/7" />
        <link rel="canonical" href="https://clever-autoankauf.de" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Autoankauf | Gebrauchtwagen, Unfallwagen & PKW Ankauf" />
        <meta property="og:description" content="Professioneller Autoankauf mit Express-Service. Kostenlose Bewertung, sofortige Auszahlung und Bestpreis-Garantie bundesweit." />
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
      <Router>
        <ScrollToTop />
        <LocationRedirect />
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/gebrauchtwagen-ankauf" element={<GebrauchtwagenAnkauf />} />
              <Route path="/:city/gebrauchtwagen-ankauf" element={<GebrauchtwagenAnkaufCity />} />
              <Route path="/:city/unfallwagen-ankauf" element={<UnfallwagenAnkaufCity />} />
              <Route path="/:city/firmenwagen-ankauf" element={<FirmenwagenAnkaufCity />} />
              <Route path="/:city/kfz-ankauf" element={<KFZAnkaufCity />} />
              <Route path="/:city/pkw-ankauf" element={<PKWAnkaufCity />} />
              <Route path="/:city/motorschaden-ankauf" element={<MotorschadenAnkaufCity />} />
              <Route path="/unfallwagen-ankauf" element={<UnfallwagenAnkauf />} />
              <Route path="/firmenwagen-ankauf" element={<FirmenwagenAnkauf />} />
              <Route path="/pkw-ankauf" element={<PKWAnkauf />} />
              <Route path="/kfz-ankauf" element={<KFZAnkauf />} />
              <Route path="/motorschaden-ankauf" element={<MotorschadenAnkauf />} />
              <Route path="/autoankauf-berlin" element={<AutoankaufBerlin />} />
              <Route path="/autoankauf-hamburg" element={<AutoankaufHamburg />} />
              <Route path="/autoankauf-muenchen" element={<AutoankaufMuenchen />} />
              <Route path="/autoankauf-koeln" element={<AutoankaufKoeln />} />
              <Route path="/autoankauf-frankfurt" element={<AutoankaufFrankfurt />} />
              <Route path="/autoankauf-stuttgart" element={<AutoankaufStuttgart />} />
              <Route path="/autoankauf-duesseldorf" element={<AutoankaufDuesseldorf />} />
              <Route path="/autoankauf-leipzig" element={<AutoankaufLeipzig />} />
              <Route path="/autoankauf-dortmund" element={<AutoankaufDortmund />} />
              <Route path="/autoankauf-bochum" element={<AutoankaufBochum />} />
              <Route path="/autoankauf-essen" element={<AutoankaufEssen />} />
              <Route path="/autoankauf-bremen" element={<AutoankaufBremen />} />
              <Route path="/autoankauf-dresden" element={<AutoankaufDresden />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
      </LocationProvider>
    </HelmetProvider>
  );
}

export default App;