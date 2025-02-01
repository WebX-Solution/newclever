import React from 'react';

const City = ({ city, service }) => {
  return {
    type: 'article',
    props: {
      className: 'city-content',
      children: [
        React.createElement('h1', null, `Autoankauf ${city}`),
        React.createElement('section', null, [
          React.createElement('h2', null, `${service} in ${city}`),
          React.createElement('p', null, `Unser Service für ${service} in ${city}`)
        ])
      ]
    }
  };
};

module.exports = City;