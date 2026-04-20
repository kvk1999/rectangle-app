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

  // 📜 LOAD HISTORY (safe)
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data || []);
      } catch (err) {
        console.error("History error:", err);
        setHistory([]);
      }
    };

    fetchHistory();
  }, []);

  // 🔢 CALCULATE
  const handleCalculate = async (length, width) => {
    try {
      const data = await calculateRectangle(length, width);
      setResult(data);

      const updated = await getHistory();
      setHistory(updated || []);
    } catch (err) {
      console.error("Calculate error:", err);
    }
  };

  // ❌ DELETE ONE
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      const updated = await getHistory();
      setHistory(updated || []);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // 🧹 CLEAR ALL
  const handleClear = async () => {
    try {
      await clearHistory();
      setHistory([]);
    } catch (err) {
      console.error("Clear error:", err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* ================= TOP CARD ================= */}
      <div className="flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-5 sm:p-6 space-y-5">

          {/* HEADER */}
          <div className="text-center space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Rectangle Calculator
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Area • Perimeter • Diagonal
            </p>
          </div>

          {/* FORM */}
          <RectangleForm onCalculate={handleCalculate} />

          {/* RESULT */}
          <ResultDisplay result={result} />

        </div>
      </div>

      {/* ================= HISTORY (FULL WIDTH) ================= */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6">

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