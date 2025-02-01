import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './UnfallwagenAnkauf/Hero';
import TrustIndicators from './UnfallwagenAnkauf/TrustIndicators';
import MainContent from './UnfallwagenAnkauf/MainContent';
import DamageTypes from './UnfallwagenAnkauf/DamageTypes';
import ProcessSteps from './UnfallwagenAnkauf/ProcessSteps';
import FAQ from './UnfallwagenAnkauf/FAQ';

export default function GebrauchtwagenAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';

  return (
    <main>
      <Helmet>
        <title>Unfallwagen Ankauf in {formattedCity} | Bestpreise & Sofortige Auszahlung | Clever-Unfallwagen Ankauf</title>
        <meta
          name="description"
          content={`Verkaufen Sie Ihren Unfallwagen in ${formattedCity} zum Bestpreis. Unser professioneller Ankaufservice garantiert Ihnen eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Vor-Ort-Service in allen Stadtteilen von ${formattedCity}.`}
        />
        <meta name="keywords" content={`Unfallwagen Ankauf ${formattedCity}, Unfallfahrzeuge verkaufen ${formattedCity}, Auto verkaufen Unfallwagen ${formattedCity}, Bestpreis Unfallwagen ${formattedCity}, sofortige Auszahlung Unfallwagen ${formattedCity}`} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/unfallwagen-ankauf`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`Unfallwagen Ankauf in ${formattedCity} | Bestpreise & Express Service`} />
        <meta
          property="og:description"
          content={`Verkaufen Sie Ihren Unfallwagen in ${formattedCity} zum besten Preis. Wir bieten eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Service, der direkt zu Ihnen kommt. Alle Stadtteile von ${formattedCity} werden abgedeckt.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/unfallwagen-ankauf`} />
      </Helmet>

      <Hero city={formattedCity} />
      <TrustIndicators />
      <MainContent city={formattedCity} />
      <DamageTypes />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}