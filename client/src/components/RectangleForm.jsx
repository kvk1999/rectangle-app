// client/src/components/RectangleForm.jsx

import { useState } from "react";

export default function RectangleForm({
  onCalculate,
  loading = false,
}) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!length || !width || loading) return;

    onCalculate(Number(length), Number(width));
  };

  const handleClear = () => {
    setLength("");
    setWidth("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* INPUTS */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-center
        items-center
        gap-4
        "
      >

        {/* LENGTH */}
        <div className="w-full sm:w-auto">
          <label
            className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
            "
          >
            Length
          </label>

          <input
            type="number"
            placeholder="Enter length"
            value={length}
            onChange={(e) =>
              setLength(e.target.value)
            }
            disabled={loading}
            className="
            w-full
            sm:w-52
            rounded-2xl
            border
            border-gray-200
            bg-white/80
            px-4
            py-3
            text-center
            text-gray-800
            shadow-sm
            outline-none
            transition
            focus:border-indigo-400
            focus:ring-4
            focus:ring-indigo-100
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          />
        </div>

        {/* WIDTH */}
        <div className="w-full sm:w-auto">
          <label
            className="
            block
            text-sm
            font-medium
            text-gray-700
            mb-2
            "
          >
            Width
          </label>

          <input
            type="number"
            placeholder="Enter width"
            value={width}
            onChange={(e) =>
              setWidth(e.target.value)
            }
            disabled={loading}
            className="
            w-full
            sm:w-52
            rounded-2xl
            border
            border-gray-200
            bg-white/80
            px-4
            py-3
            text-center
            text-gray-800
            shadow-sm
            outline-none
            transition
            focus:border-indigo-400
            focus:ring-4
            focus:ring-indigo-100
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          />
        </div>

      </div>

      {/* BUTTONS */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-3
        "
      >

        <button
          type="submit"
          disabled={loading}
          className="
          rounded-2xl
          bg-indigo-500
          px-6
          py-3
          text-white
          font-semibold
          shadow-lg
          transition
          hover:bg-indigo-600
          hover:scale-[1.02]
          active:scale-95
          disabled:opacity-60
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          "
        >
          {loading ? 'Calculating...' : 'Calculate'}
        </button>

        <button
          type="button"
          onClick={handleClear}
          disabled={loading}
          className="
          rounded-2xl
          bg-gray-200
          px-6
          py-3
          text-gray-700
          font-semibold
          transition
          hover:bg-gray-300
          hover:scale-[1.02]
          active:scale-95
          disabled:opacity-60
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          "
        >
          Clear
        </button>

      </div>

    </form>
  );
}