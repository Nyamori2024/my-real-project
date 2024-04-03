import React, { useState } from 'react';
import './currency.css';

function Currency() {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getExchangeRate = async () => {
    if (!fromCurrency || !toCurrency) {
      setError('Please enter both currency codes');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}`);
      const data = await response.text(); // Get the response as text
      const jsonData = JSON.parse(data); // Parse the response as JSON
      const rate = jsonData[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
      if (rate) {
        setExchangeRate(`1 ${fromCurrency} = ${rate} ${toCurrency}`);
      } else {
        setError('Invalid currency code');
      }
    } catch (error) {
      setError('Error fetching data. Please try again.');
    }
    setLoading(false);
  };
  
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="currency-exchange">
      <h2 className="currency-exchange-title">Currency Exchange</h2>
      <div className="currency-exchange-inputs">
        <input
          type="text"
          placeholder="From Currency (e.g., USD)"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="currency-input"
        />
        <input
          type="text"
          placeholder="To Currency (e.g., JPY)"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="currency-input"
        />
        <button onClick={getExchangeRate} className="get-rate-button">
          Get Rate
        </button>
        <button onClick={swapCurrencies} className="swap-button">
          Swap Currencies
        </button>
      </div>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <>
          {exchangeRate && <p className="exchange-rate">{exchangeRate}</p>}
          {error && <p className="error-text">{error}</p>}
        </>
      )}
    </div>
  );
}

export default Currency;
