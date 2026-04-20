export default function HistoryList({ history, onDelete, onClear }) {
  return (
    <div className="text-center">

      <h2 className="font-semibold mb-2 text-black dark:text-white">
        History
      </h2>

      {/* CLEAR ALL */}
      <button
        onClick={onClear}
        className="mb-3 px-3 py-1 bg-red-500 text-white rounded hover:scale-105 transition"
      >
        Clear All
      </button>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="mx-auto text-sm border text-black dark:text-white">

          <thead>
            <tr>
              <th className="px-2">Length</th>
              <th className="px-2">Width</th>
              <th className="px-2">Area</th>
              <th className="px-2">Perimeter</th>
              <th className="px-2">Diagonal</th>
              <th className="px-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-2 text-gray-400">
                  No history yet
                </td>
              </tr>
            ) : (
              history.map((item) => (
                <tr key={item._id} className="text-center">

                  <td>{item.length}</td>
                  <td>{item.width}</td>
                  <td>{item.area}</td>
                  <td>{item.perimeter}</td>
                  <td>{item.diagonal?.toFixed(2)}</td>

                  <td>
                    <button
                      onClick={() => onDelete(item._id)}
                      className="text-red-500 hover:scale-110 transition"
                    >
                      🗑
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