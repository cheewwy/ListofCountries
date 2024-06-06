import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../api';
import CountryItem from './CountryItem';
import '../style.css';

const CountryList = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  return (
    <div className="list-container">
      {countries.map(country => (
        <CountryItem 
          key={country.iso3} 
          country={country}
          onCountrySelect={onCountrySelect}
        />
      ))}
    </div>
  );
};

export default CountryList;
