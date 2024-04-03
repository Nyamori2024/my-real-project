import React, { useState } from 'react';

function App() {
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
    <div className="currency-exchange bg-gray-200 p-4 rounded-lg text-center mt-4 mx-auto max-w-md">
      <h2 className="text-2xl font-bold mb-4">Currency Exchange</h2>
      <div className="flex flex-col space-y-4 mb-4">
        <input
          type="text"
          placeholder="From Currency (e.g., USD)"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-2 border rounded-lg"
          style={{ height: '40px' }}
        />
        <input
          type="text"
          placeholder="To Currency (e.g., JPY)"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-2 border rounded-lg"
          style={{ height: '40px' }}
        />
        <button onClick={getExchangeRate} className="p-2 bg-blue-500 text-white rounded-lg" style={{ height: '40px' }}>
          Get Rate
        </button>
        <button onClick={swapCurrencies} className="p-2 bg-green-500 text-white rounded-lg" style={{ height: '40px' }}>
          Swap Currencies
        </button>
      </div>
      {loading ? (
        <p className="text-blue-500">Loading...</p>
      ) : (
        <>
          {exchangeRate && <p className="text-green-500 font-bold">{exchangeRate}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </>
      )}
    </div>
  );
}

export default App;
