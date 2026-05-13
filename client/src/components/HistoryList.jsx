// client/src/components/HistoryList.jsx

export default function HistoryList({
  history,
  onDelete,
  onClear,
}) {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-between
        items-center
        gap-4
        "
      >

        <div>
          <h2
            className="
            text-2xl
            font-bold
            text-gray-900
            "
          >
            Calculation History
          </h2>

          <p
            className="
            text-sm
            text-gray-500
            mt-1
            "
          >
            Recent rectangle calculations
          </p>
        </div>

        <button
          onClick={onClear}
          className="
          rounded-2xl
          bg-red-500
          px-5
          py-3
          text-white
          font-medium
          shadow-lg
          transition
          hover:bg-red-600
          hover:scale-[1.02]
          active:scale-95
          "
        >
          Clear All
        </button>

      </div>

      {/* EMPTY */}
      {history.length === 0 ? (
        <div
          className="
          rounded-3xl
          border
          border-dashed
          border-gray-300
          bg-white/60
          p-10
          text-center
          "
        >

          <p
            className="
            text-gray-500
            text-lg
            "
          >
            No history available
          </p>

        </div>
      ) : (
        <div
          className="
          overflow-x-auto
          rounded-3xl
          border
          border-gray-200
          bg-white/60
          "
        >

          <table
            className="
            w-full
            min-w-[700px]
            border-collapse
            "
          >

            {/* HEAD */}
            <thead
              className="
              bg-gray-100/80
              "
            >
              <tr>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Length
                </th>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Width
                </th>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Area
                </th>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Perimeter
                </th>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Diagonal
                </th>

                <th className="p-4 text-sm font-semibold text-gray-700">
                  Action
                </th>

              </tr>
            </thead>

            {/* BODY */}
            <tbody>

              {history.map((item) => (
                <tr
                  key={item._id}
                  className="
                  border-t
                  border-gray-200
                  transition
                  hover:bg-gray-50/80
                  "
                >

                  <td className="p-4 text-center text-gray-700">
                    {item.length}
                  </td>

                  <td className="p-4 text-center text-gray-700">
                    {item.width}
                  </td>

                  <td className="p-4 text-center font-semibold text-indigo-600">
                    {item.area}
                  </td>

                  <td className="p-4 text-center font-semibold text-emerald-600">
                    {item.perimeter}
                  </td>

                  <td className="p-4 text-center font-semibold text-pink-600">
                    {Number(item.diagonal).toFixed(2)}
                  </td>

                  <td className="p-4 text-center">

                    <button
                      onClick={() =>
                        onDelete(item._id)
                      }
                      className="
                      rounded-xl
                      bg-red-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-red-600
                      transition
                      hover:bg-red-200
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}