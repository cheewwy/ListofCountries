import React from 'react';
import '../style.css';

const CountryDetails = ({ country }) => {
  if (!country) return

  const {
    full_name,
    href,
    capital,
    continent,
    population,
    size,
    currency,
    phone_code,
    independence_date,
    description,
    current_president
  } = country;

  return (
    <div className="details-container">
      <h2>{full_name}</h2>
      {href && href.flag && <img src={href.flag} alt={`${full_name} flag`} width="200" />}
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {continent}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Area:</strong> {size}</p>
      <p><strong>Currency:</strong> {currency}</p>
      <p><strong>Phone Code:</strong> {phone_code}</p>
      <p><strong>Independence Date:</strong> {new Date(independence_date).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {description}</p>
      {current_president && current_president.name && (
        <>
          <p><strong>Current President:</strong> {current_president.name}</p>
          {current_president.href && current_president.href.picture && (
            <img src={current_president.href.picture} alt={`${current_president.name}`} width="100" />
          )}
        </>
      )}
    </div>
  );
};

export default CountryDetails;
