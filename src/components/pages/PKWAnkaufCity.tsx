import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './PkwAnkauf/Hero';
import TrustIndicators from './PkwAnkauf/TrustIndicators';
import MainContent from './PkwAnkauf/MainContent';
import ProcessSteps from './PkwAnkauf/ProcessSteps';
import FAQ from './PkwAnkauf/FAQ';

export default function PkwAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';

  return (
    <main>
      <Helmet>
        <title>Pkw Ankauf in {formattedCity} | Bestpreise & Sofortige Auszahlung | Clever-Pkw Ankauf</title>
        <meta
          name="description"
          content={`Verkaufen Sie Ihren Pkw in ${formattedCity} zum Bestpreis. Unser professioneller Ankaufservice garantiert Ihnen eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Vor-Ort-Service in allen Stadtteilen von ${formattedCity}.`}
        />
        <meta name="keywords" content={`Pkw Ankauf ${formattedCity}, Unfallfahrzeuge verkaufen ${formattedCity}, Auto verkaufen Pkw ${formattedCity}, Bestpreis Pkw ${formattedCity}, sofortige Auszahlung Pkw ${formattedCity}`} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/Pkw-ankauf`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`Pkw Ankauf in ${formattedCity} | Bestpreise & Express Service`} />
        <meta
          property="og:description"
          content={`Verkaufen Sie Ihren Pkw in ${formattedCity} zum besten Preis. Wir bieten eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Service, der direkt zu Ihnen kommt. Alle Stadtteile von ${formattedCity} werden abgedeckt.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/Pkw-ankauf`} />
      </Helmet>

      <Hero city={formattedCity} />
      <TrustIndicators />
      <MainContent city={formattedCity} />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}