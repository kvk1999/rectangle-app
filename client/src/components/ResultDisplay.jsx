export default function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div className="text-center space-y-1 
    text-black dark:text-white">

      <p><strong>Area:</strong> {result.area}</p>
      <p><strong>Perimeter:</strong> {result.perimeter}</p>
      <p><strong>Diagonal:</strong> {result.diagonal.toFixed(2)}</p>

    </div>
  );
}