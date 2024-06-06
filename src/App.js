import React, { useState } from 'react';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import './style.css';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="app-container">
      <h1>List of Countries</h1>
      <CountryList onCountrySelect={handleCountrySelect} />
      <CountryDetails country={selectedCountry} />
    </div>
  );
};

export default App;
