"use client";

import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import PerformanceCharts from "@/components/PerformanceCharts";
import { useStudents } from "@/context/StudentContext";
import { calculateStats } from "@/utils/calculateStats";

/**
 * Analytics Dashboard Page
 */
export default function AnalyticsPage() {
  const { students } = useStudents();
  const stats = calculateStats(students);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold title-serif text-slate-800 tracking-tight">Advanced Analytics</h1>
              <p className="text-slate-400 font-medium mt-1">Deep dive into institutional performance metrics</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export Report</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
             {[
               { label: "Overall Average", value: `${stats.average}%`, color: "text-blue-500", bg: "bg-blue-50" },
               { label: "Completion Rate", value: "98.2%", color: "text-green-500", bg: "bg-green-50" },
               { label: "Active Subjects", value: "12", color: "text-purple-500", bg: "bg-purple-50" },
               { label: "Total Students", value: stats.total, color: "text-orange-500", bg: "bg-orange-50" },
             ].map((card, i) => (
               <div key={i} className="premium-card !p-6 flex flex-col items-center justify-center text-center">
                 <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                 </div>
                 <p className="text-3xl font-black text-slate-800">{card.value}</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{card.label}</p>
               </div>
             ))}
          </div>

          <PerformanceCharts total={stats.total} passed={stats.passed} failed={stats.failed} />

          {/* Subject Performance Simulation */}
          <div className="premium-card !p-8">
            <h3 className="text-xl font-bold title-serif text-slate-800 mb-8">Subject Performance Comparison</h3>
            <div className="space-y-8">
              {[
                { name: "Mathematics", score: 85, color: "bg-blue-500" },
                { name: "Physics", score: 72, color: "bg-purple-500" },
                { name: "Biology", score: 94, color: "bg-green-500" },
                { name: "Chemistry", score: 68, color: "bg-orange-500" },
              ].map((sub, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-700">{sub.name}</span>
                    <span className="text-sm font-black text-slate-800">{sub.score}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${sub.color} rounded-full transition-all duration-1000`} 
                      style={{ width: `${sub.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
