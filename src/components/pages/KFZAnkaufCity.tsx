import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './KFZAnkauf/Hero.tsx';
import TrustIndicators from './KFZAnkauf/TrustIndicators.tsx';
import MainContent from './KFZAnkauf/MainContent.tsx';
import ProcessSteps from './KFZAnkauf/ProcessSteps.tsx';
import FAQ from './KFZAnkauf/FAQ.tsx';

export default function MotorschadenAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';

  return (
    <main>
      <Helmet>
        <title>KFZ Ankauf in {formattedCity} | Bestpreise & Sofortige Auszahlung | Clever-KFZ Ankauf</title>
        <meta
          name="description"
          content={`Verkaufen Sie Ihr KFZ Fahrzeug in ${formattedCity} zum Bestpreis. Unser professioneller Ankaufservice garantiert Ihnen eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Vor-Ort-Service in allen Stadtteilen von ${formattedCity}.`}
        />
        <meta name="keywords" content={`KFZ Ankauf ${formattedCity}, Unfallfahrzeuge verkaufen ${formattedCity}, Auto verkaufen ${formattedCity}, Bestpreis KFZ ${formattedCity}, sofortige Auszahlung KFZ ${formattedCity}`} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/kfz-ankauf`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`KFZ Ankauf in ${formattedCity} | Bestpreise & Express Service`} />
        <meta
          property="og:description"
          content={`Verkaufen Sie Ihren KFZ in ${formattedCity} zum besten Preis. Wir bieten eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Service, der direkt zu Ihnen kommt. Alle Stadtteile von ${formattedCity} werden abgedeckt.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/kfz-ankauf`} />
      </Helmet>

      <Hero city={''} />
      <TrustIndicators />
      <MainContent />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}