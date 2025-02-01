import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './KFZAnkauf/Hero';
import TrustIndicators from './KFZAnkauf/TrustIndicators';
import MainContent from './KFZAnkauf/MainContent';
import VehicleTypes from './KFZAnkauf/VehicleTypes';
import ProcessSteps from './KFZAnkauf/ProcessSteps';
import FAQ from './KFZAnkauf/FAQ';

const cities = [
  'Berlin',
  'Hamburg',
  'München',
  'Köln',
  'Frankfurt',
  'Stuttgart',
  'Düsseldorf',
  'Leipzig',
  'Dortmund',
  'Essen',
  'Bremen',
  'Dresden',
  'Bochum',
];

export default function KFZAnkauf() {
  const { city = '' } = useParams();
  const isValidCity = cities.includes(city);

  return (
    <main>
      <Helmet>
        <title>{isValidCity ? `Autoankauf ${city} | KFZ Ankauf & Sofort Auszahlung` : 'KFZ Ankauf | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf'}</title>
        <meta
          name="description"
          content={
            isValidCity
              ? `Professioneller Autoankauf in ${city} ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Alle Marken und Modelle`
              : 'Professioneller KFZ Ankauf ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Bundesweiter Service ✓ Alle Marken und Modelle'
          }
        />
        <link
          rel="canonical"
          href={`https://clever-autoankauf.de/${isValidCity ? `${city.toLowerCase()}/autoankauf` : 'kfz-ankauf'}`}
        />
        <meta
          property="og:title"
          content={isValidCity ? `Autoankauf ${city} | Bestpreise & Sofort Auszahlung` : 'KFZ Ankauf | Bestpreise & Express Service'}
        />
        <meta
          property="og:description"
          content={
            isValidCity
              ? `Autoankauf in ${city} mit sofortiger Auszahlung und Bestpreisgarantie. Verkaufen Sie Ihr KFZ jetzt stressfrei und einfach.`
              : 'Verkaufen Sie Ihr KFZ zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung.'
          }
        />
      </Helmet>

      <Hero city={isValidCity ? city : ''} />
      <TrustIndicators city={isValidCity ? city : ''} />
      <MainContent city={isValidCity ? city : ''} />
      <VehicleTypes />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}
