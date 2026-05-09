export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

      <div className="bg-indigo-100 rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-500">Area</h3>
        <p className="text-xl font-bold text-indigo-700">
          {result.area}
        </p>
      </div>

      <div className="bg-green-100 rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-500">Perimeter</h3>
        <p className="text-xl font-bold text-green-700">
          {result.perimeter}
        </p>
      </div>

      <div className="bg-pink-100 rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm text-gray-500">Diagonal</h3>
        <p className="text-xl font-bold text-pink-700">
          {result.diagonal.toFixed(2)}
        </p>
      </div>

    </div>
  );
}