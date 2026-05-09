import { useEffect, useState } from "react";
import RectangleForm from "../components/RectangleForm";
import ResultDisplay from "../components/ResultDisplay";
import HistoryList from "../components/HistoryList";

import {
  calculateRectangle,
  getHistory,
  deleteItem,
  clearHistory,
} from "../api/rectangleApi";

export default function Home() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, []);

  const handleCalculate = async (length, width) => {
    try {
      const data = await calculateRectangle(length, width);
      setResult(data);

      const updated = await getHistory();
      setHistory(updated || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      const updated = await getHistory();
      setHistory(updated || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClear = async () => {
    try {
      await clearHistory();
      setHistory([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* TOP CARD */}
      <div className="flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-5 sm:p-6 space-y-6 border border-white/30">

          {/* HEADER */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Rectangle Calculator
            </h1>

            <p className="text-sm text-gray-600">
              Area • Perimeter • Diagonal
            </p>
          </div>

          {/* FORM */}
          <RectangleForm onCalculate={handleCalculate} />

          {/* RESULT */}
          <ResultDisplay result={result} />

        </div>
      </div>

      {/* HISTORY */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-5 border border-white/30">

          <HistoryList
            history={history}
            onDelete={handleDelete}
            onClear={handleClear}
          />

        </div>
      </div>
    </div>
  );
}