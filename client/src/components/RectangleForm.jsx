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
    <div className="flex flex-col items-center gap-3">

      {/* INPUTS */}
      <div className="flex gap-3">

        <input
          type="number"
          placeholder="Length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-24 sm:w-28 p-2 border rounded text-center 
          bg-white dark:bg-black text-black dark:text-white"
        />

        <input
          type="number"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-24 sm:w-28 p-2 border rounded text-center 
          bg-white dark:bg-black text-black dark:text-white"
        />

      </div>

      {/* BUTTONS */}
      <div className="flex gap-2">

        <button
          onClick={handleSubmit}
          className="px-4 py-1 bg-indigo-500 text-white rounded hover:scale-105 transition"
        >
          Calculate
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-1 bg-gray-500 text-white rounded hover:scale-105 transition"
        >
          Clear
        </button>

      </div>

    </div>
  );
}