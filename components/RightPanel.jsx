"use client";

/**
 * RightPanel component for top students and quick actions
 */
const RightPanel = ({ students }) => {
  // Get top 3 students
  const topStudents = [...students]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-6">
      {/* Top Students Card */}
      <div className="premium-card !p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-foreground">Top Students</h3>
          <button className="text-muted/30 hover:text-muted transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {topStudents.map((student, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                idx === 0 ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 border-yellow-200 dark:border-yellow-900/30' :
                idx === 1 ? 'bg-slate-50 dark:bg-slate-800 text-muted border-border' :
                'bg-orange-50 dark:bg-orange-900/20 text-orange-400 border-orange-200 dark:border-orange-900/30'
              }`}>
                {idx + 1}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-bold text-foreground">{student.name}</p>
                <p className="text-[10px] text-foreground/80 font-bold uppercase">{student.subject}</p>
              </div>
              <p className={`text-sm font-black ${
                idx === 0 ? 'text-green-500' : 'text-foreground'
              }`}>{student.score}</p>
            </div>
          ))}
          {topStudents.length === 0 && <p className="text-xs text-muted text-center py-4">No records yet</p>}
        </div>
      </div>

    </div>
  );
};

export default RightPanel;
