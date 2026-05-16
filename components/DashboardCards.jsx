/**
 * Extended DashboardCards component with 6 stats and trend indicators
 */
const DashboardCards = ({ stats }) => {
  const cardData = [
    { 
      label: "Total Students", 
      value: stats.total, 
      trend: "+12%", 
      isUp: true, 
      icon: (
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      )
    },
    { 
      label: "Average Score", 
      value: `${stats.average}%`, 
      trend: "+5.6%", 
      isUp: true, 
      icon: (
        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      )
    },
    { 
      label: "Passed", 
      value: stats.passed, 
      trend: "+8%", 
      isUp: true, 
      icon: (
        <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    { 
      label: "Failed", 
      value: stats.failed, 
      trend: "-4%", 
      isUp: false, 
      icon: (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    { 
      label: "Highest Score", 
      value: stats.highest || "96", 
      sub: "by Tilia (Maths)",
      icon: (
        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
        </div>
      )
    },
    { 
      label: "Lowest Score", 
      value: stats.lowest || "12", 
      sub: "by Asime (Testing)",
      icon: (
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 rounded-2xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      )
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-10">
      {cardData.map((card, idx) => (
        <div key={idx} className="premium-card !p-5 flex flex-col gap-4 group hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex items-center gap-4">
            {card.icon}
            <div>
              <p className="text-3xl font-bold text-foreground">{card.value}</p>
              <p className="text-xs text-muted font-semibold uppercase tracking-wider">{card.label}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            {card.trend && (
              <div className={`flex items-center gap-1 text-[10px] font-bold ${card.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {card.isUp ? (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                <span>{card.trend} <span className="text-muted/50 font-normal ml-0.5 whitespace-nowrap">from last month</span></span>
              </div>
            )}
            {card.sub && (
              <p className="text-[10px] text-foreground/80 font-medium">{card.sub}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
