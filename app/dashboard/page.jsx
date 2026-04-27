"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardCards from "@/components/DashboardCards";
import SearchBar from "@/components/SearchBar";
import ResultTable from "@/components/ResultTable";
import PerformanceCharts from "@/components/PerformanceCharts";
import RightPanel from "@/components/RightPanel";
import { useStudents } from "@/context/StudentContext";
import { useUI } from "@/context/UIContext";
import { calculateStats } from "@/utils/calculateStats";

/**
 * Redesigned Dashboard page following the new grid layout with Sidebar and Header
 */
export default function DashboardPage() {
  const { students, deleteStudent } = useStudents();
  const { user } = useUI();
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate statistics
  const baseStats = calculateStats(students);
  const highest = students.length > 0 ? Math.max(...students.map(s => s.score)) : 0;
  const lowest = students.length > 0 ? Math.min(...students.map(s => s.score)) : 0;
  const stats = { ...baseStats, highest, lowest };

  // Filter students
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <DashboardHeader />
      
      {/* Content wrapper with offset for sidebar and header */}
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
          
          {/* Welcome Section */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold title-serif text-foreground tracking-tight leading-tight">
                Welcome back, <span className="inline-flex items-center gap-2 whitespace-nowrap">{user.name.split(' ')[0]} <span className="animate-wave inline-block">👋</span></span>
              </h2>
              <p className="text-muted font-medium mt-1">Here is what's happening in your institution today.</p>
            </div>
            
          </div>

          {/* Stats Cards Grid */}
          <DashboardCards stats={stats} />

          {/* Analytics Row */}
          <PerformanceCharts 
            total={stats.total} 
            passed={stats.passed} 
            failed={stats.failed} 
          />

          {/* Table & Right Panel Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-card rounded-xl shadow-sm border border-border text-muted">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Result Records</h3>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
                  <div className="relative flex-grow sm:flex-grow-0">
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                  </div>
                  <button className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <ResultTable 
                students={filteredStudents} 
                onDelete={deleteStudent} 
              />
            </div>

            <div className="xl:col-span-1">
              <RightPanel students={students} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
