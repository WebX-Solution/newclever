import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cities = [
  'berlin',
  'hamburg',
  'muenchen',
  'koeln',
  'frankfurt',
  'stuttgart',
  'duesseldorf',
  'leipzig',
  'dortmund',
  'dresden',
  'bremen',
  'essen',
  'bochum'
];

const serviceTypes = [
  'gebrauchtwagen-ankauf',
  'unfallwagen-ankauf',
  'firmenwagen-ankauf',
  'pkw-ankauf',
  'kfz-ankauf',
  'motorschaden-ankauf'
];

function createHtmlTemplate(city, content) {
  return `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autoankauf ${city}</title>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
</html>
  `.trim();
}

async function generateStaticPages() {
  for (const city of cities) {
    const outputDir = path.join(__dirname, '../dist', city);
    await fs.promises.mkdir(outputDir, { recursive: true });

    // Import components
    const [Hero, TrustIndicators, MainContent, ProcessSteps, Districts, FAQ] = await Promise.all([
      import(`../src/components/pages/Autoankauf${city}/Hero.tsx`),
      import(`../src/components/pages/Autoankauf${city}/TrustIndicators.tsx`),
      import(`../src/components/pages/Autoankauf${city}/MainContent.tsx`),
      import(`../src/components/pages/Autoankauf${city}/ProcessSteps.tsx`),
      import(`../src/components/pages/Autoankauf${city}/Districts.tsx`),
      import(`../src/components/pages/Autoankauf${city}/FAQ.tsx`)
    ]);

    // Render components
    const content = ReactDOMServer.renderToString(
      React.createElement(React.Fragment, null, [
        React.createElement(Hero.default, { city }),
        React.createElement(TrustIndicators.default, { city }),
        React.createElement(MainContent.default, { city }),
        React.createElement(ProcessSteps.default, { city }),
        React.createElement(Districts.default, { city }),
        React.createElement(FAQ.default, { city })
      ])
    );

    // Generate full HTML
    const html = createHtmlTemplate(city, content);

    // Write file
    await fs.promises.writeFile(
      path.join(outputDir, 'index.html'),
      html
    );
  }
}

generateStaticPages().catch(console.error);
