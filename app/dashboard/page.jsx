"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardCards from "@/components/DashboardCards";
import SearchBar from "@/components/SearchBar";
import ResultTable from "@/components/ResultTable";
import { useStudents } from "@/context/StudentContext";
import { calculateStats } from "@/utils/calculateStats";

/**
 * Dashboard page displaying stats, search, and student table
 */
export default function DashboardPage() {
  const { students, deleteStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate statistics based on current student list
  const stats = calculateStats(students);

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pb-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold title-serif text-slate-800 tracking-tight">Student Analytics</h1>
          <p className="text-slate-500 font-medium mt-1">Overview of academic performance and records</p>
        </header>

        <DashboardCards 
          total={stats.total}
          average={stats.average}
          passed={stats.passed}
          failed={stats.failed}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-800 mb-4 md:mb-0">Result Records</h2>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <ResultTable 
          students={filteredStudents} 
          onDelete={deleteStudent} 
        />
      </main>
    </div>
  );
}
