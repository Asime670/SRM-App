"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

/**
 * Settings Page
 */
export default function SettingsPage() {
  const [passMark, setPassMark] = useState(50);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-20 lg:ml-24 pt-20 transition-all">
        <div className="max-w-[1000px] mx-auto px-6 py-12">
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold title-serif text-slate-800 tracking-tight">System Configuration</h1>
            <p className="text-slate-400 font-medium mt-1">Adjust preferences and administrative settings</p>
          </div>

          <div className="space-y-8">
            {/* Profile Settings */}
            <section className="premium-card !p-8">
              <h3 className="text-xl font-bold title-serif text-slate-800 mb-8 border-b border-slate-50 pb-4">Profile Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" defaultValue="Asime Domitila" className="input-field !py-3 !rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" defaultValue="asime@srmapp.com" className="input-field !py-3 !rounded-xl" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-slate-50">
                  <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center text-primary text-3xl font-black mb-4">
                    AD
                  </div>
                  <button className="text-xs font-bold text-primary hover:underline">Change Avatar</button>
                </div>
              </div>
            </section>

            {/* Application Settings */}
            <section className="premium-card !p-8">
              <h3 className="text-xl font-bold title-serif text-slate-800 mb-8 border-b border-slate-50 pb-4">Academic Preferences</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-700">Minimum Pass Mark</p>
                    <p className="text-xs text-slate-400 font-medium">Set the threshold for passing results</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="30" 
                      max="70" 
                      value={passMark} 
                      onChange={(e) => setPassMark(e.target.value)}
                      className="w-32 h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary" 
                    />
                    <span className="w-12 h-8 bg-blue-50 text-primary flex items-center justify-center rounded-lg font-black text-xs">{passMark}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-700">Automatic Grade Calculation</p>
                    <p className="text-xs text-slate-400 font-medium">Enable AI-driven grading based on scores</p>
                  </div>
                  <button className="w-12 h-6 bg-primary rounded-full relative transition-all">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-700">Email Notifications</p>
                    <p className="text-xs text-slate-400 font-medium">Receive alerts for new result entries</p>
                  </div>
                  <button className="w-12 h-6 bg-slate-200 rounded-full relative transition-all">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </section>

            <div className="flex justify-end gap-4">
              <button className="px-8 py-3 rounded-xl border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all">Cancel</button>
              <button className="btn-primary !rounded-xl !py-3 !px-10 shadow-lg shadow-primary/20">Save Changes</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
