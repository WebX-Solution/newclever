import React from 'react';

export const City = ({ city, service }) => (
  <article className="city-content">
    <h1>Autoankauf {city}</h1>
    <section>
      <h2>{service} in {city}</h2>
      <p>Unser Service für {service} in {city}</p>
    </section>
  </article>
);

export default City;
