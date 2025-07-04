import React, { useState } from 'react';
import axios from 'axios';

const TradeForm = ({ onNewTrade }) => {
  const [formData, setFormData] = useState({
    stockSymbol: '',
    price: '',
    volume: '',
    timestamp: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/trades', formData);
      onNewTrade(res.data);
      setFormData({ stockSymbol: '', price: '', volume: '', timestamp: '' });
    } catch (error) {
      console.error('Error submitting trade:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white  shadow-lg rounded-lg p-6 w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-center  text-blue-700">📥 Add Trade</h2>

      <input
        name="stockSymbol"
        placeholder="Stock Symbol"
        value={formData.stockSymbol}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="volume"
        type="number"
        placeholder="Volume"
        value={formData.volume}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="timestamp"
        type="datetime-local"
        value={formData.timestamp}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Trade
      </button>
    </form>
  );
};

export default TradeForm;
