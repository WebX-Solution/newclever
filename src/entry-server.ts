import ReactDOMServer from 'react-dom/server';
import App from './App.tsx'; // Adjust the path as necessary
import React from 'react';

export function render() {
    return ReactDOMServer.renderToString(React.createElement(App))
  }