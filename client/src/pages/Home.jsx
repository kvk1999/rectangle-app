// client/src/pages/Home.jsx

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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ LOAD HISTORY
  useEffect(() => {
    const loadHistory = async () => {
      try {
        setError(null);
        const data = await getHistory();

        setHistory(data || []);
      } catch (err) {
        const errorMsg = err.message || 'Failed to load history';
        console.error('Load history error:', err);
        setError(`⚠️ Error loading history: ${errorMsg}`);
      }
    };

    loadHistory();
  }, []);

  // ✅ CALCULATE
  const handleCalculate = async (
    length,
    width
  ) => {
    setLoading(true);
    setError(null);
    try {
      const data =
        await calculateRectangle(
          length,
          width
        );

      setResult(data);

      // refresh history
      const updated =
        await getHistory();

      setHistory(updated || []);
    } catch (err) {
      const errorMsg = err.message || 'Failed to calculate rectangle';
      console.error('Calculate error:', err);
      setError(`❌ Error: ${errorMsg}`);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE ONE
  const handleDelete = async (id) => {
    try {
      setError(null);
      await deleteItem(id);

      const updated =
        await getHistory();

      setHistory(updated || []);
    } catch (err) {
      const errorMsg = err.message || 'Failed to delete item';
      console.error('Delete error:', err);
      setError(`⚠️ Error: ${errorMsg}`);
    }
  };

  // ✅ CLEAR ALL
  const handleClear = async () => {
    try {
      setError(null);
      await clearHistory();

      setHistory([]);
    } catch (err) {
      const errorMsg = err.message || 'Failed to clear history';
      console.error('Clear error:', err);
      setError(`⚠️ Error: ${errorMsg}`);
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      bg-no-repeat
      px-4
      py-8
      sm:px-6
      lg:px-8
      "
      style={{
        backgroundImage:
          "url('/bg.jpg')",
      }}
    >

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto">

        {/* TOP CARD */}
        <div
          className="
          max-w-2xl
          mx-auto
          rounded-[32px]
          border
          border-white/20
          bg-white/70
          backdrop-blur-xl
          shadow-2xl
          p-6
          sm:p-8
          space-y-8
          "
        >

          {/* ERROR DISPLAY */}
          {error && (
            <div className="rounded-xl bg-red-100 border border-red-400 p-4 text-red-700">
              {error}
            </div>
          )}

          {/* LOADING INDICATOR */}
          {loading && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              <p className="text-gray-600 mt-2">Calculating...</p>
            </div>
          )}

          {/* HEADER */}
          <div className="text-center space-y-3">

            <h1
              className="
              text-3xl
              sm:text-4xl
              font-bold
              tracking-tight
              text-gray-900
              "
            >
              Rectangle Calculator
            </h1>

            <p
              className="
              text-sm
              sm:text-base
              text-gray-600
              font-medium
              "
            >
              Area • Perimeter • Diagonal
            </p>

          </div>

          {/* FORM */}
          <RectangleForm
            onCalculate={
              handleCalculate
            }
            loading={loading}
          />

          {/* RESULT */}
          <ResultDisplay
            result={result}
          />

        </div>

        {/* HISTORY */}
        <div
          className="
          mt-10
          rounded-[32px]
          border
          border-white/20
          bg-white/70
          backdrop-blur-xl
          shadow-2xl
          p-5
          sm:p-8
          "
        >

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