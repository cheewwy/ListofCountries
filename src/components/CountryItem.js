import React from 'react';
import '../style.css';

const CountryItem = ({ country, onCountrySelect }) => {
  return (
    <div className="item-container" onClick={() => onCountrySelect(country)}>
      <img src={country.href.flag} alt={`${country.name} flag`} width="100%" />
      <h4 className='name'>{country.name}</h4>
      <p className="country-info">{country.full_name}</p>
      <p className="country-info">Capital: {country.capital}</p>
      <p className="country-info">Currency: {country.currency}</p>
      <p className="country-info">Population: {country.population}</p>
    </div>
  );
};

export default CountryItem;
