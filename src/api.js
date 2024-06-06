import axios from 'axios';

const API_URL = 'https://restfulcountries.com/api/v1/countries';
const API_TOKEN = 'qO5vfGEHc2pNaouBAcpcl20JU2M6zERTsdLw1TxQ';

export const fetchCountries = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };