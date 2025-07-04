import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TradeForm from './components/TradeForm';
import TradeChart from './components/TradeChart';

function App() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/trades');
        setTrades(res.data);
      } catch (error) {
        console.error('Error fetching trades:', error);
      }
    };

    fetchTrades();
  }, []);

  const addTrade = (trade) => {
    setTrades([trade, ...trades]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
   <header className="min-h-screen  bg-blue-700 text-white py-10 shadow-md flex flex-col items-center justify-center text-center space-y-2">
  <h1 className="text-4xl font-bold">📊 Trading Data Dashboard</h1>
    <h1 className=" ">Input and visualize your trades</h1>
  <p className="text-sm opacity-80">(scroll down)</p>

</header>

      <main className="px-4 py-10 space-y-10">
        <TradeForm onNewTrade={addTrade} />
        <TradeChart trades={trades} />
      </main>

      <footer className="text-center text-gray-500 text-sm py-4 item-center justify-center border-t">
        Made with ❤ by Techverse 💼
      </footer>
    </div>
  );
}

export default App;
