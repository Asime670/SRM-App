"use client";

import { useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { useUI } from "@/context/UIContext";
import Image from "next/image";

/**
 * Settings Page
 */
export default function SettingsPage() {
  const { theme, toggleTheme, user, updateUser } = useUI();
  const [passMark, setPassMark] = useState(50);
  const fileInputRef = useRef(null);

  const handleProfileUpdate = (e) => {
    const { name, value } = e.target;
    updateUser({ [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUser({ profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6 py-12">
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold title-serif text-foreground tracking-tight">System Configuration</h1>
            <p className="text-muted font-medium mt-1">Adjust preferences and administrative settings</p>
          </div>

          <div className="space-y-8">
            {/* Profile Settings */}
            <section className="premium-card !p-8">
              <h3 className="text-xl font-bold title-serif text-foreground mb-8 border-b border-border pb-4">Profile Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={user.name} 
                      onChange={handleProfileUpdate}
                      className="input-field !py-3 !rounded-xl" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={user.email} 
                      onChange={handleProfileUpdate}
                      className="input-field !py-3 !rounded-xl" 
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-border">
                  <div className="w-24 h-24 rounded-3xl bg-blue-100 dark:bg-blue-900/30 overflow-hidden flex items-center justify-center text-primary text-3xl font-black mb-4 border-2 border-border shadow-inner">
                    {user.profilePic ? (
                      <Image src={user.profilePic} alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
                    ) : (
                      user.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept="image/*"
                  />
                  <button 
                    onClick={() => fileInputRef.current.click()}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Change Avatar
                  </button>
                </div>
              </div>
            </section>

            {/* Application Settings */}
            <section className="premium-card !p-8">
              <h3 className="text-xl font-bold title-serif text-foreground mb-8 border-b border-border pb-4">Application Preferences</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">Appearance Mode</p>
                    <p className="text-xs text-muted font-medium">Toggle between light and dark theme</p>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${theme === 'dark' ? 'bg-primary' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 shadow-sm flex items-center justify-center ${theme === 'dark' ? 'right-1' : 'left-1'}`}>
                      {theme === 'dark' ? (
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
                      ) : (
                        <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                      )}
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">Minimum Pass Mark</p>
                    <p className="text-xs text-muted font-medium">Set the threshold for passing results</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="30" 
                      max="70" 
                      value={passMark} 
                      onChange={(e) => setPassMark(e.target.value)}
                      className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-primary" 
                    />
                    <span className="w-12 h-8 bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center rounded-lg font-black text-xs">{passMark}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">Automatic Grade Calculation</p>
                    <p className="text-xs text-muted font-medium">Enable AI-driven grading based on scores</p>
                  </div>
                  <button className="w-12 h-6 bg-primary rounded-full relative transition-all">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </section>

            <div className="flex justify-end gap-4">
              <button className="px-8 py-3 rounded-xl border border-border text-muted font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Cancel</button>
              <button className="btn-primary !rounded-xl !py-3 !px-10 shadow-lg shadow-primary/20">Save Changes</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
