"use client";

/**
 * PerformanceCharts component to display simulated analytics
 */
const PerformanceCharts = ({ total, passed, failed }) => {
  const passedPercent = total > 0 ? ((passed / total) * 100).toFixed(1) : 0;
  const failedPercent = total > 0 ? ((failed / total) * 100).toFixed(1) : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Donut Chart Simulation */}
      <div className="premium-card flex flex-col items-center justify-center p-8 relative overflow-hidden h-full min-h-[350px]">
        <h3 className="font-bold text-foreground absolute top-5 left-6">Distribution</h3>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Simulated Donut with SVG */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--border)" strokeWidth="12" />
            <circle 
              cx="50" cy="50" r="40" fill="transparent" 
              stroke="#22c55e" strokeWidth="12" 
              strokeDasharray={`${passedPercent * 2.51} 251.2`} 
              strokeLinecap="round"
            />
            <circle 
              cx="50" cy="50" r="40" fill="transparent" 
              stroke="#ef4444" strokeWidth="12" 
              strokeDasharray={`${failedPercent * 2.51} 251.2`} 
              strokeDashoffset={`-${passedPercent * 2.51}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center text-center">
            <span className="text-3xl font-black text-foreground">{total}</span>
            <span className="text-[10px] text-muted font-bold uppercase tracking-widest">Students</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <div>
              <p className="text-xs font-bold text-foreground">Passed ({passed})</p>
              <p className="text-[10px] text-muted">{passedPercent}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div>
              <p className="text-xs font-bold text-foreground">Failed ({failed})</p>
              <p className="text-[10px] text-muted">{failedPercent}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log / Notifications Simulation */}
      <div className="premium-card flex flex-col h-full min-h-[350px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-foreground">Recent Activity</h3>
          <button className="text-[10px] text-primary font-bold hover:underline">View All</button>
        </div>
        <div className="space-y-6">
          {[
            { type: 'add', user: 'John (Maths)', time: '2m ago', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
            { type: 'add', user: 'Mary (Biology)', time: '15m ago', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
            { type: 'delete', user: 'Peter (Physics)', time: '1h ago', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
            { type: 'update', user: 'Tilia (Maths)', time: '3h ago', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center transition-all group-hover:scale-110`}>
                {item.type === 'add' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
                {item.type === 'delete' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
                {item.type === 'update' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )}
              </div>
              <div className="flex-grow">
                <p className="text-xs font-bold text-foreground">New result {item.type === 'delete' ? 'deleted' : 'added'} for {item.user}</p>
                <p className="text-[10px] text-muted font-medium">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;
