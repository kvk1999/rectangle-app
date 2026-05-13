// client/src/components/ResultDisplay.jsx

export default function ResultDisplay({
  result,
}) {
  if (!result) return null;

  const cards = [
    {
      label: "Area",
      value: result.area,
      color:
        "from-indigo-500 to-indigo-400",
    },
    {
      label: "Perimeter",
      value: result.perimeter,
      color:
        "from-emerald-500 to-emerald-400",
    },
    {
      label: "Diagonal",
      value: result.diagonal.toFixed(2),
      color:
        "from-pink-500 to-pink-400",
    },
  ];

  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-3
      gap-4
      "
    >

      {cards.map((card) => (
        <div
          key={card.label}
          className={`
          rounded-3xl
          bg-gradient-to-br
          ${card.color}
          p-5
          text-white
          shadow-xl
          transition
          hover:scale-[1.03]
          `}
        >

          <p
            className="
            text-sm
            font-medium
            opacity-90
            "
          >
            {card.label}
          </p>

          <h2
            className="
            mt-2
            text-3xl
            font-bold
            tracking-tight
            "
          >
            {card.value}
          </h2>

        </div>
      ))}

    </div>
  );
}