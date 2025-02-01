import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { City } from './City.jsx';

export async function renderCityComponent(city, service) {
  try {
    const element = React.createElement(City, { city, service });
    return ReactDOMServer.renderToString(element);
  } catch (error) {
    console.error('Error rendering component:', error);
    return '';
  }
}
