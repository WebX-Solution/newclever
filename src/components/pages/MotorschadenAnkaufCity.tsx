import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './MotorschadenAnkauf/Hero';
import TrustIndicators from './MotorschadenAnkauf/TrustIndicators';
import MainContent from './MotorschadenAnkauf/MainContent';
import ProcessSteps from './MotorschadenAnkauf/ProcessSteps';
import FAQ from './MotorschadenAnkauf/FAQ';

export default function MotorschadenAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';

  return (
    <main>
      <Helmet>
        <title>Fahrzeug mit Motorschaden Ankauf in {formattedCity} | Bestpreise & Sofortige Auszahlung | Clever-Fahrzeug mit Motorschaden Ankauf</title>
        <meta
          name="description"
          content={`Verkaufen Sie Ihren Fahrzeug mit Motorschaden in ${formattedCity} zum Bestpreis. Unser professioneller Ankaufservice garantiert Ihnen eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Vor-Ort-Service in allen Stadtteilen von ${formattedCity}.`}
        />
        <meta name="keywords" content={`Fahrzeug mit Motorschaden Ankauf ${formattedCity}, Unfallfahrzeuge verkaufen ${formattedCity}, Auto verkaufen Fahrzeug mit Motorschaden ${formattedCity}, Bestpreis Fahrzeug mit Motorschaden ${formattedCity}, sofortige Auszahlung Fahrzeug mit Motorschaden ${formattedCity}`} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/motorschaden-ankauf`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`Fahrzeug mit Motorschaden Ankauf in ${formattedCity} | Bestpreise & Express Service`} />
        <meta
          property="og:description"
          content={`Verkaufen Sie Ihren Fahrzeug mit Motorschaden in ${formattedCity} zum besten Preis. Wir bieten eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Service, der direkt zu Ihnen kommt. Alle Stadtteile von ${formattedCity} werden abgedeckt.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/motorschaden-ankauf`} />
      </Helmet>

      <Hero city={formattedCity} />
      <TrustIndicators />
      <MainContent city={formattedCity} />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}