import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './FirmenwagenAnkauf/Hero';
import TrustIndicators from './FirmenwagenAnkauf/TrustIndicators';
import MainContent from './FirmenwagenAnkauf/MainContent';
import ProcessSteps from './FirmenwagenAnkauf/ProcessSteps';
import FAQ from './FirmenwagenAnkauf/FAQ';

// Definiere die Typen für die Städte
type City = 'bochum' | 'dortmund' | 'essen' | 'köln' | 'frankfurt' | 'hamburg' | 'stuttgart' | 'leipzig' | 'bremen' | 'dresden';

// SEO Keywords für verschiedene Städte
const citySeoKeywords: Record<City, string[]> = {
  bochum: [
    'Firmenwagen Ankauf Bochum',
    'Auto verkaufen Bochum',
    'Firmenwagen verkaufen Bochum',
    'Firmenwagen Ankauf Bochum',
    'PKW Ankauf Bochum',
    'Firmenwagenankauf Bochum',
    'Fahrzeugankauf Bochum',
    'Auto Ankauf Service Bochum',
    'Firmenwagen Händler Bochum',
    'Firmenwagen Ankauf Wattenscheid',
    'Firmenwagen Ankauf Langendreer',
    'Firmenwagen Ankauf Weitmar',
    'Firmenwagen Ankauf Querenburg',
    'Firmenwagen Ankauf Wiemelhausen',
    'Firmenwagen Ankauf Harpen'
  ],
  dortmund: [
    'Firmenwagen Ankauf Dortmund',
    'Auto verkaufen Dortmund',
    'Firmenwagen verkaufen Dortmund',
    'Firmenwagen Ankauf Dortmund',
    'PKW Ankauf Dortmund',
    'Firmenwagenankauf Dortmund',
    'Fahrzeugankauf Dortmund',
    'Firmenauto Ankauf Service Dortmund',
    'Firmenwagen Händler Dortmund',
    'Firmenwagen Ankauf Hörde',
    'Firmenwagen Ankauf Hombruch',
    'Firmenwagen Ankauf Brackel',
    'Firmenwagen Ankauf Eving',
    'Firmenwagen Ankauf Aplerbeck',
    'Firmenwagen Ankauf Mengede'
  ],
  essen: [
    'Firmenwagen Ankauf Essen',
    'Auto verkaufen Essen',
    'Firmenwagen verkaufen Essen',
    'Firmenwagen Ankauf Essen',
    'PKW Ankauf Essen',
    'Firmenwagenankauf Essen',
    'Fahrzeugankauf Essen',
    'Auto Ankauf Service Essen',
    'Firmenwagen Händler Essen',
    'Firmenwagen Ankauf Rüttenscheid',
    'Firmenwagen Ankauf Altenessen',
    'Firmenwagen Ankauf Steele',
    'Firmenwagen Ankauf Kettwig',
    'Firmenwagen Ankauf Werden',
    'Firmenwagen Ankauf Borbeck',
    'Firmenwagen Ankauf Bredeney'
  ],
  köln: [
    'Firmenwagen Ankauf Köln',
    'Auto verkaufen Köln',
    'Firmenwagen verkaufen Köln',
    'Firmenwagen Ankauf Köln',
    'PKW Ankauf Köln',
    'Firmenwagenankauf Köln',
    'Fahrzeugankauf Köln',
    'Auto Ankauf Service Köln',
    'Firmenwagen Händler Köln',
    'Firmenwagen Ankauf Ehrenfeld',
    'Firmenwagen Ankauf Nippes',
    'Firmenwagen Ankauf Lindenthal',
    'Firmenwagen Ankauf Chorweiler',
    'Firmenwagen Ankauf Porz',
    'Firmenwagen Ankauf Mülheim',
    'Firmenwagen Ankauf Deutz'
  ],
  frankfurt: [
    'Firmenwagen Ankauf Frankfurt',
    'Auto verkaufen Frankfurt',
    'Firmenwagen verkaufen Frankfurt',
    'Firmenwagen Ankauf Frankfurt',
    'PKW Ankauf Frankfurt',
    'Firmenwagenankauf Frankfurt',
    'Fahrzeugankauf Frankfurt',
    'Auto Ankauf Service Frankfurt',
    'Firmenwagen Händler Frankfurt',
    'Firmenwagen Ankauf Sachsenhausen',
    'Firmenwagen Ankauf Bockenheim',
    'Firmenwagen Ankauf Bornheim',
    'Firmenwagen Ankauf Gallus',
    'Firmenwagen Ankauf Höchst',
    'Firmenwagen Ankauf Nordend',
    'Firmenwagen Ankauf Westend'
  ],
  hamburg: [
    'Firmenwagen Ankauf Hamburg',
    'Auto verkaufen Hamburg',
    'Firmenwagen verkaufen Hamburg',
    'Firmenwagen Ankauf Hamburg',
    'PKW Ankauf Hamburg',
    'Firmenwagenankauf Hamburg',
    'Fahrzeugankauf Hamburg',
    'Auto Ankauf Service Hamburg',
    'Firmenwagen Händler Hamburg',
    'Firmenwagen Ankauf Altona',
    'Firmenwagen Ankauf Eimsbüttel',
    'Firmenwagen Ankauf Wandsbek',
    'Firmenwagen Ankauf Bergedorf',
    'Firmenwagen Ankauf Harburg',
    'Firmenwagen Ankauf Blankenese',
    'Firmenwagen Ankauf St. Pauli'
  ],
  stuttgart: [
    'Firmenwagen Ankauf Stuttgart',
    'Auto verkaufen Stuttgart',
    'Firmenwagen verkaufen Stuttgart',
    'Firmenwagen Ankauf Stuttgart',
    'PKW Ankauf Stuttgart',
    'Firmenwagenankauf Stuttgart',
    'Fahrzeugankauf Stuttgart',
    'Auto Ankauf Service Stuttgart',
    'Firmenwagen Händler Stuttgart',
    'Firmenwagen Ankauf Bad Cannstatt',
    'Firmenwagen Ankauf Vaihingen',
    'Firmenwagen Ankauf Zuffenhausen',
    'Firmenwagen Ankauf Degerloch',
    'Firmenwagen Ankauf Möhringen',
    'Firmenwagen Ankauf Feuerbach',
    'Firmenwagen Ankauf Stammheim'
  ],
  leipzig: [
    'Firmenwagen Ankauf Leipzig',
    'Auto verkaufen Leipzig',
    'Firmenwagen verkaufen Leipzig',
    'Firmenwagen Ankauf Leipzig',
    'PKW Ankauf Leipzig',
    'Firmenwagenankauf Leipzig',
    'Fahrzeugankauf Leipzig',
    'Auto Ankauf Service Leipzig',
    'Firmenwagen Händler Leipzig',
    'Firmenwagen Ankauf Plagwitz',
    'Firmenwagen Ankauf Connewitz',
    'Firmenwagen Ankauf Lindenau',
    'Firmenwagen Ankauf Gohlis',
    'Firmenwagen Ankauf Schönefeld',
    'Firmenwagen Ankauf Südvorstadt',
    'Firmenwagen Ankauf Zentrum'
  ],
  bremen: [
    'Firmenwagen Ankauf Bremen',
    'Auto verkaufen Bremen',
    'Firmenwagen verkaufen Bremen',
    'Firmenwagen Ankauf Bremen',
    'PKW Ankauf Bremen',
    'Firmenwagenankauf Bremen',
    'Fahrzeugankauf Bremen',
    'Auto Ankauf Service Bremen',
    'Firmenwagen Händler Bremen',
    'Firmenwagen Ankauf Schwachhausen',
    'Firmenwagen Ankauf Hemelingen',
    'Firmenwagen Ankauf Vegesack',
    'Firmenwagen Ankauf Walle',
    'Firmenwagen Ankauf Huchting',
    'Firmenwagen Ankauf Gröpelingen',
    'Firmenwagen Ankauf Neustadt'
  ],
  dresden: [
    'Firmenwagen Ankauf Dresden',
    'Unfallauto verkaufen Dresden',
    'Firmenwagen verkaufen Dresden',
    'Firmenwagen Ankauf Dresden',
    'PKW Ankauf Dresden',
    'Firmenwagenankauf Dresden',
    'Fahrzeugankauf Dresden',
    'Auto Ankauf Service Dresden',
    'Firmenwagen Händler Dresden',
    'Firmenwagen Ankauf Neustadt',
    'Firmenwagen Ankauf Striesen',
    'Firmenwagen Ankauf Löbtau',
    'Firmenwagen Ankauf Pieschen',
    'Firmenwagen Ankauf Klotzsche',
    'Firmenwagen Ankauf Blasewitz',
    'Firmenwagen Ankauf Prohlis'
  ]
};

export default function FirmenwagenAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';
  const seoKeywords = city && citySeoKeywords[city.toLowerCase() as City] || [];

  return (
    <main>
      <Helmet>
        <title>Firmenwagen Ankauf in {formattedCity} | Bestpreise & Sofortige Auszahlung | Clever-Firmenwagen Ankauf</title>
        <meta
          name="description"
          content={`Verkaufen Sie Ihren Firmenwagen in ${formattedCity} zum Bestpreis. Unser professioneller Ankaufservice garantiert Ihnen eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Vor-Ort-Service in allen Stadtteilen von ${formattedCity}.`}
        />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/Firmenwagen-ankauf`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`Firmenwagen Ankauf in ${formattedCity} | Bestpreise & Express Service`} />
        <meta
          property="og:description"
          content={`Verkaufen Sie Ihren Firmenwagen in ${formattedCity} zum besten Preis. Wir bieten eine kostenlose Bewertung, sofortige Auszahlung und einen schnellen Service, der direkt zu Ihnen kommt. Alle Stadtteile von ${formattedCity} werden abgedeckt.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/Firmenwagen-ankauf`} />
      </Helmet>

      <Hero city={formattedCity} />
      <TrustIndicators />
      <MainContent city={formattedCity} />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}