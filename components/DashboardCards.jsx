/**
 * DashboardCards component to display summary statistics
 * @param {Object} props - { total, average, passed, failed }
 */
const DashboardCards = ({ total, average, passed, failed }) => {
  const cards = [
    { label: "Total Students", value: total, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Average Score", value: average, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Passed", value: passed, color: "text-green-600", bg: "bg-green-50" },
    { label: "Failed", value: failed, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="premium-card flex flex-col items-center justify-center text-center">
          <p className="text-slate-500 text-sm font-medium mb-1">{card.label}</p>
          <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
