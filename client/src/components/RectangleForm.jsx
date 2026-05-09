import { useState } from "react";

export default function RectangleForm({ onCalculate }) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const handleSubmit = () => {
    if (!length || !width) return;

    onCalculate(Number(length), Number(width));
  };

  const handleClear = () => {
    setLength("");
    setWidth("");
  };

  return (
    <div className="flex flex-col items-center gap-5">

      {/* INPUTS */}
      <div className="flex flex-col sm:flex-row gap-4">

        <input
          type="number"
          placeholder="Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-40 p-3 rounded-xl border border-gray-300 text-center outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="number"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-40 p-3 rounded-xl border border-gray-300 text-center outline-none focus:ring-2 focus:ring-indigo-400"
        />

      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">

        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition duration-300"
        >
          Calculate
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-2 rounded-xl bg-gray-500 text-white font-medium hover:bg-gray-600 transition duration-300"
        >
          Clear
        </button>

      </div>

    </div>
  );
}