import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './GebrauchtwagenAnkauf/Hero';
import TrustIndicators from './GebrauchtwagenAnkauf/TrustIndicators';
import MainContent from './GebrauchtwagenAnkauf/MainContent';
import BrandSlider from './GebrauchtwagenAnkauf/BrandSlider';
import ProcessSteps from './GebrauchtwagenAnkauf/ProcessSteps';
import FAQ from './GebrauchtwagenAnkauf/FAQ';

// SEO Keywords für verschiedene Städte
type CitySeoKeywords = {
  [key: string]: string[];
};

const citySeoKeywords: CitySeoKeywords = {
  'bochum': [
    'Gebrauchtwagen Ankauf Bochum',
    'Auto verkaufen Bochum',
    'Gebrauchtwagen verkaufen Bochum',
    'Autoankauf Bochum',
    'PKW Ankauf Bochum',
    'Gebrauchtwagenankauf Bochum',
    'Fahrzeugankauf Bochum',
    'Auto Ankauf Service Bochum',
    'Gebrauchtwagen Händler Bochum',
    'Autoankauf Wattenscheid',
    'Autoankauf Langendreer',
    'Autoankauf Weitmar',
    'Autoankauf Querenburg',
    'Autoankauf Wiemelhausen',
    'Autoankauf Harpen'
  ],
  'dortmund': [
    'Gebrauchtwagen Ankauf Dortmund',
    'Auto verkaufen Dortmund',
    'Gebrauchtwagen verkaufen Dortmund',
    'Autoankauf Dortmund',
    'PKW Ankauf Dortmund',
    'Gebrauchtwagenankauf Dortmund',
    'Fahrzeugankauf Dortmund',
    'Auto Ankauf Service Dortmund',
    'Gebrauchtwagen Händler Dortmund',
    'Autoankauf Hörde',
    'Autoankauf Hombruch',
    'Autoankauf Brackel',
    'Autoankauf Eving',
    'Autoankauf Aplerbeck',
    'Autoankauf Mengede'
  ],
  'essen': [
    'Gebrauchtwagen Ankauf Essen',
    'Auto verkaufen Essen',
    'Gebrauchtwagen verkaufen Essen',
    'Autoankauf Essen',
    'PKW Ankauf Essen',
    'Gebrauchtwagenankauf Essen',
    'Fahrzeugankauf Essen',
    'Auto Ankauf Service Essen',
    'Gebrauchtwagen Händler Essen',
    'Autoankauf Rüttenscheid',
    'Autoankauf Altenessen',
    'Autoankauf Steele',
    'Autoankauf Kettwig',
    'Autoankauf Werden',
    'Autoankauf Borbeck',
    'Autoankauf Bredeney'
  ],
  'köln': [
    'Gebrauchtwagen Ankauf Köln',
    'Auto verkaufen Köln',
    'Gebrauchtwagen verkaufen Köln',
    'Autoankauf Köln',
    'PKW Ankauf Köln',
    'Gebrauchtwagenankauf Köln',
    'Fahrzeugankauf Köln',
    'Auto Ankauf Service Köln',
    'Gebrauchtwagen Händler Köln',
    'Autoankauf Ehrenfeld',
    'Autoankauf Nippes',
    'Autoankauf Lindenthal',
    'Autoankauf Chorweiler',
    'Autoankauf Porz',
    'Autoankauf Mülheim',
    'Autoankauf Deutz'
  ],
  'frankfurt': [
    'Gebrauchtwagen Ankauf Frankfurt',
    'Auto verkaufen Frankfurt',
    'Gebrauchtwagen verkaufen Frankfurt',
    'Autoankauf Frankfurt',
    'PKW Ankauf Frankfurt',
    'Gebrauchtwagenankauf Frankfurt',
    'Fahrzeugankauf Frankfurt',
    'Auto Ankauf Service Frankfurt',
    'Gebrauchtwagen Händler Frankfurt',
    'Autoankauf Sachsenhausen',
    'Autoankauf Bockenheim',
    'Autoankauf Bornheim',
    'Autoankauf Gallus',
    'Autoankauf Höchst',
    'Autoankauf Nordend',
    'Autoankauf Westend'
  ],
  'hamburg': [
    'Gebrauchtwagen Ankauf Hamburg',
    'Auto verkaufen Hamburg',
    'Gebrauchtwagen verkaufen Hamburg',
    'Autoankauf Hamburg',
    'PKW Ankauf Hamburg',
    'Gebrauchtwagenankauf Hamburg',
    'Fahrzeugankauf Hamburg',
    'Auto Ankauf Service Hamburg',
    'Gebrauchtwagen Händler Hamburg',
    'Autoankauf Altona',
    'Autoankauf Eimsbüttel',
    'Autoankauf Wandsbek',
    'Autoankauf Bergedorf',
    'Autoankauf Harburg',
    'Autoankauf Blankenese',
    'Autoankauf St. Pauli'
  ],
  'stuttgart': [
    'Gebrauchtwagen Ankauf Stuttgart',
    'Auto verkaufen Stuttgart',
    'Gebrauchtwagen verkaufen Stuttgart',
    'Autoankauf Stuttgart',
    'PKW Ankauf Stuttgart',
    'Gebrauchtwagenankauf Stuttgart',
    'Fahrzeugankauf Stuttgart',
    'Auto Ankauf Service Stuttgart',
    'Gebrauchtwagen Händler Stuttgart',
    'Autoankauf Bad Cannstatt',
    'Autoankauf Vaihingen',
    'Autoankauf Zuffenhausen',
    'Autoankauf Degerloch',
    'Autoankauf Möhringen',
    'Autoankauf Feuerbach',
    'Autoankauf Stammheim'
  ],
  'leipzig': [
    'Gebrauchtwagen Ankauf Leipzig',
    'Auto verkaufen Leipzig',
    'Gebrauchtwagen verkaufen Leipzig',
    'Autoankauf Leipzig',
    'PKW Ankauf Leipzig',
    'Gebrauchtwagenankauf Leipzig',
    'Fahrzeugankauf Leipzig',
    'Auto Ankauf Service Leipzig',
    'Gebrauchtwagen Händler Leipzig',
    'Autoankauf Plagwitz',
    'Autoankauf Connewitz',
    'Autoankauf Lindenau',
    'Autoankauf Gohlis',
    'Autoankauf Schönefeld',
    'Autoankauf Südvorstadt',
    'Autoankauf Zentrum'
  ],
  'bremen': [
    'Gebrauchtwagen Ankauf Bremen',
    'Auto verkaufen Bremen',
    'Gebrauchtwagen verkaufen Bremen',
    'Autoankauf Bremen',
    'PKW Ankauf Bremen',
    'Gebrauchtwagenankauf Bremen',
    'Fahrzeugankauf Bremen',
    'Auto Ankauf Service Bremen',
    'Gebrauchtwagen Händler Bremen',
    'Autoankauf Schwachhausen',
    'Autoankauf Hemelingen',
    'Autoankauf Vegesack',
    'Autoankauf Walle',
    'Autoankauf Huchting',
    'Autoankauf Gröpelingen',
    'Autoankauf Neustadt'
  ],
  'dresden': [
    'Gebrauchtwagen Ankauf Dresden',
    'Auto verkaufen Dresden',
    'Gebrauchtwagen verkaufen Dresden',
    'Autoankauf Dresden',
    'PKW Ankauf Dresden',
    'Gebrauchtwagenankauf Dresden',
    'Fahrzeugankauf Dresden',
    'Auto Ankauf Service Dresden',
    'Gebrauchtwagen Händler Dresden',
    'Autoankauf Neustadt',
    'Autoankauf Striesen',
    'Autoankauf Löbtau',
    'Autoankauf Pieschen',
    'Autoankauf Klotzsche',
    'Autoankauf Blasewitz',
    'Autoankauf Prohlis'
  ]
};
export default function GebrauchtwagenAnkaufCity() {
  const { city } = useParams();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'Deutschland';
  const seoKeywords: string[] = city ? citySeoKeywords[city.toLowerCase()] || [] : [];

  return (
    <main>
      <Helmet>
        <title>Gebrauchtwagen Ankauf {formattedCity} | Bestpreise & Sofortige Auszahlung ᐅ Clever-Autoankauf</title>
        <meta 
          name="description" 
          content={`Professioneller Gebrauchtwagen Ankauf in ${formattedCity} ✓ Bestpreise garantiert ✓ Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Vor-Ort Service ✓ Alle ${formattedCity}er Stadtteile`} 
        />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://clever-autoankauf.de/${city?.toLowerCase()}/gebrauchtwagen-ankauf`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`Gebrauchtwagen Ankauf ${formattedCity} | Bestpreise & Express Service`} />
        <meta 
          property="og:description" 
          content={`Verkaufen Sie Ihren Gebrauchtwagen in ${formattedCity} zum Bestpreis. Professioneller Ankauf aller Marken mit kostenloser Bewertung und sofortiger Auszahlung.`} 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clever-autoankauf.de/${city?.toLowerCase()}/gebrauchtwagen-ankauf`} />
      </Helmet>

      <Hero city={formattedCity} />
      <TrustIndicators />
      <MainContent />
      <BrandSlider />
      <ProcessSteps />
      <FAQ />
    </main>
  );
}