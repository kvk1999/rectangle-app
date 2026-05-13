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

  // ✅ LOAD HISTORY
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await getHistory();

        setHistory(data || []);
      } catch (err) {
        console.error(err);
      }
    };

    loadHistory();
  }, []);

  // ✅ CALCULATE
  const handleCalculate = async (
    length,
    width
  ) => {
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
      console.error(err);
    }
  };

  // ✅ DELETE ONE
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);

      const updated =
        await getHistory();

      setHistory(updated || []);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ CLEAR ALL
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