import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
    const cities = [
        'berlin', 'hamburg', 'muenchen', 'koeln', 'frankfurt',
        'stuttgart', 'duesseldorf', 'leipzig', 'dortmund',
        'essen', 'bremen', 'dresden', 'bochum'
    ]

    const paths = cities.map(city => ({
        params: { city }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const city = params?.city as string

    return {
        props: {
            city,
            metadata: {
                title: `Autoankauf ${city} | Clever-Autoankauf`,
                description: `Professioneller Autoankauf in ${city}. Kostenlose Bewertung ✓ Sofortige Auszahlung ✓ Express-Service`
            }
        }
    }
}

export default function CityPage({ city, metadata }) {
    // Dynamisches Importieren der Komponenten basierend auf der Stadt
    const MainContent = require(`../src/components/pages/Autoankauf${capitalize(city)}/MainContent`).default;
    const Districts = require(`../src/components/pages/Autoankauf${capitalize(city)}/Districts`).default;
    const Hero = require(`../src/components/pages/Autoankauf${capitalize(city)}/Hero`).default;
    const ProcessSteps = require(`../src/components/pages/Autoankauf${capitalize(city)}/ProcessSteps`).default;
    const TrustIndicators = require(`../src/components/pages/Autoankauf${capitalize(city)}/TrustIndicators`).default;

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <link rel="canonical" href={`https://clever-autoankauf.de/${city}`} />
            </Head>

            <main>
                <Hero />
                <MainContent />
                <Districts />
                <ProcessSteps />
                <TrustIndicators />
            </main>
        </>
    )
}

// Hilfsfunktion zum Großschreiben des ersten Buchstabens
function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
