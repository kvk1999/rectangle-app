export default function HistoryList({
  history,
  onDelete,
  onClear,
}) {
  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5">

        <h2 className="text-xl font-bold text-gray-800">
          Calculation History
        </h2>

        <button
          onClick={onClear}
          className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
        >
          Clear All
        </button>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200">

        <table className="w-full text-center border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Length</th>
              <th className="p-3">Width</th>
              <th className="p-3">Area</th>
              <th className="p-3">Perimeter</th>
              <th className="p-3">Diagonal</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="p-5 text-gray-400"
                >
                  No history available
                </td>
              </tr>
            ) : (
              history.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{item.length}</td>
                  <td className="p-3">{item.width}</td>
                  <td className="p-3">{item.area}</td>
                  <td className="p-3">{item.perimeter}</td>

                  <td className="p-3">
                    {item.diagonal.toFixed(2)}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => onDelete(item._id)}
                      className="px-3 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}