import { getGrade } from "@/utils/calculateStats";

/**
 * Redesigned ResultTable component with extended columns and premium styling
 * @param {Object} props - { students, onDelete }
 */
const ResultTable = ({ students, onDelete }) => {

  return (
    <div className="premium-card overflow-hidden !p-0 border border-border">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-border">
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider w-16">#</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Name</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Subject</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Score</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Status</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Grade</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Date Added</th>
              <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-5 text-sm font-bold text-muted/60">{index + 1}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-muted group-hover:bg-primary group-hover:text-white transition-colors">
                        {student.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-foreground">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-foreground/90 font-medium">{student.subject}</td>
                  <td className="px-6 py-5 text-sm font-black text-foreground">{student.score}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      student.score >= 50 
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-600 border-green-100 dark:border-green-900/30' 
                        : 'bg-red-50 dark:bg-red-900/20 text-red-600 border-red-100 dark:border-red-900/30'
                    }`}>
                      {student.score >= 50 ? 'PASS' : 'FAIL'}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-sm font-bold ${student.score >= 50 ? 'text-blue-500' : 'text-orange-500'}`}>
                      {getGrade(student.score)}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-muted/60 font-semibold">May 25, 2025</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => onDelete(student.id)}
                        className="p-2 text-muted hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-muted/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <p className="text-muted font-bold uppercase tracking-widest text-[10px]">No Records Found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Simulation */}
      <div className="px-6 py-4 bg-slate-50/30 dark:bg-slate-800/30 border-t border-border flex items-center justify-between">
        <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Showing {students.length} results</p>
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted hover:text-primary transition-colors disabled:opacity-30" disabled>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-1">
            <span className="w-6 h-6 rounded-md bg-primary text-white text-[10px] font-bold flex items-center justify-center">1</span>
            <span className="w-6 h-6 rounded-md text-muted text-[10px] font-bold flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">2</span>
          </div>
          <button className="p-2 text-muted hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
