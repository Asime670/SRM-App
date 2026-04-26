"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

/**
 * Subjects Management Page
 */
export default function SubjectsPage() {
  const subjects = [
    { code: "MTH101", name: "Mathematics", teacher: "Dr. Smith", unit: 4 },
    { code: "PHY101", name: "Physics", teacher: "Prof. Jones", unit: 3 },
    { code: "BIO101", name: "Biology", teacher: "Mrs. Brown", unit: 3 },
    { code: "CHM101", name: "Chemistry", teacher: "Mr. Green", unit: 3 },
    { code: "ENG101", name: "English Language", teacher: "Ms. White", unit: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold title-serif text-slate-800 tracking-tight">Academic Subjects</h1>
              <p className="text-slate-400 font-medium mt-1">Configure curriculum and teacher assignments</p>
            </div>
            
            <button className="btn-primary flex items-center justify-center gap-2 !py-3 w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add New Subject</span>
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* List Section */}
            <div className="xl:col-span-2">
              <div className="premium-card !p-0 border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Subject Catalog</h3>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="px-6 py-5 font-bold text-slate-500 text-[11px] uppercase tracking-wider">Subject Name</th>
                        <th className="px-6 py-5 font-bold text-slate-500 text-[11px] uppercase tracking-wider text-center">Code</th>
                        <th className="px-6 py-5 font-bold text-slate-500 text-[11px] uppercase tracking-wider">Teacher</th>
                        <th className="px-6 py-5 font-bold text-slate-500 text-[11px] uppercase tracking-wider text-center">Unit</th>
                        <th className="px-6 py-5 font-bold text-slate-500 text-[11px] uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {subjects.map((sub) => (
                        <tr key={sub.code} className="hover:bg-slate-50/80 transition-all group">
                          <td className="px-6 py-5">
                            <span className="text-sm font-bold text-slate-700">{sub.name}</span>
                          </td>
                          <td className="px-6 py-5 text-center">
                            <span className="text-[10px] font-black text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{sub.code}</span>
                          </td>
                          <td className="px-6 py-5 text-sm text-slate-500 font-semibold">{sub.teacher}</td>
                          <td className="px-6 py-5 text-center">
                            <span className="text-sm font-black text-slate-800">{sub.unit}</span>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Form Section (Compact) */}
            <div className="xl:col-span-1">
              <div className="premium-card border border-slate-100">
                <h3 className="text-xl font-bold title-serif text-slate-800 mb-6">Quick Registration</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Subject Name</label>
                    <input type="text" placeholder="e.g. Further Maths" className="input-field !py-3 !rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Subject Code</label>
                    <input type="text" placeholder="e.g. MTH201" className="input-field !py-3 !rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Assign Teacher</label>
                    <select className="input-field !py-3 !rounded-xl bg-white">
                      <option>Select Teacher...</option>
                      <option>Dr. Smith</option>
                      <option>Prof. Jones</option>
                    </select>
                  </div>
                  <button className="btn-primary w-full !rounded-xl !py-4 shadow-lg shadow-primary/20">Create Subject</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
