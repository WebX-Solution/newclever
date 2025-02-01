import Hero from './GebrauchtwagenAnkauf/Hero.tsx';
import TrustIndicators from './GebrauchtwagenAnkauf/TrustIndicators.tsx';
import MainContent from './GebrauchtwagenAnkauf/MainContent.tsx';
import BrandSlider from './GebrauchtwagenAnkauf/BrandSlider.tsx';
import ProcessSteps from './GebrauchtwagenAnkauf/ProcessSteps.tsx';
import FAQ from './GebrauchtwagenAnkauf/FAQ.tsx';
import SEOHead from '../SEOHead.tsx';
import { Helmet } from 'react-helmet';

// List of cities
export const cities = [
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
  'Bochum'
] as const;

// SEO Keywords
const seoKeywords: string[] = [
  'Gebrauchtwagen Ankauf',
  'Auto verkaufen',
  'Gebrauchtwagen verkaufen',
  'Autoankauf',
  'PKW Ankauf',
  'Gebrauchtwagenankauf',
  'Fahrzeugankauf',
  'Auto Ankauf Service',
  'Gebrauchtwagen Händler',
  'Gebrauchtwagen Export',
  'Autoankauf Export',
  'Unfallwagen Ankauf',
  'Gebrauchtwagen Bestpreis',
  'Auto schnell verkaufen',
  'Autoankauf Bewertung',
  'Fahrzeugbewertung kostenlos',
  'Gebrauchtwagen Preis',
  'Auto Ankauf Händler',
  'Gebrauchtwagen Abholung',
  'Autoankauf vor Ort'
];

export default function GebrauchtwagenAnkauf() {
  const formattedCity = cities[0];
  return (
    <>
      <SEOHead
        title="Gebrauchtwagen Ankauf | Faire Preise & Sofortige Auszahlung"
        description="Professioneller Gebrauchtwagen Ankauf zu Bestpreisen. Kostenlose Bewertung, schnelle Abwicklung und faire Preise für Ihren Gebrauchtwagen."
        canonicalUrl="https://clever-autoankauf.de/gebrauchtwagen-ankauf"
        keywords="Gebrauchtwagen Ankauf, Auto verkaufen, Gebrauchtwagen verkaufen, Autoankauf"
      />
      <Helmet>
        <title>Gebrauchtwagen Ankauf</title>
        <meta name="keywords" content={seoKeywords.join(', ')} />
      </Helmet>
      <main>
        <Hero city={formattedCity} />
        <TrustIndicators />
        <MainContent city={formattedCity} />
        <BrandSlider />
        <ProcessSteps />
        <FAQ />
      </main>
    </>
  );
}