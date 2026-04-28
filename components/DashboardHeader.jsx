"use client";

import { useStudents } from "@/context/StudentContext";
import { useUI } from "@/context/UIContext";
import Link from "next/link";

/**
 * DashboardHeader component with logo, search, and profile
 */
const DashboardHeader = () => {
  const { toggleSidebar, user } = useUI();

  return (
    <header className="fixed top-0 right-0 left-0 md:left-20 lg:left-24 bg-card/80 backdrop-blur-md border-b border-border h-20 px-4 md:px-8 flex items-center justify-between z-40 transition-all">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 text-muted md:hidden hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-foreground title-serif lg:text-2xl">SRM App</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search placeholder */}
        <div className="hidden md:flex items-center bg-slate-50 dark:bg-slate-800 border border-border rounded-full px-4 py-2 w-64">
          <svg className="w-4 h-4 text-muted mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none text-sm focus:outline-none w-full text-foreground"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-muted hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-card"></span>
        </button>

        {/* User Profile */}
        <Link href="/settings" className="flex items-center gap-2 md:gap-3 md:pl-4 md:border-l md:border-border pr-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-foreground">{user.name}</p>
            <p className="text-xs text-muted font-medium">{user.role}</p>
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 overflow-hidden flex items-center justify-center text-primary font-bold border-2 border-card shadow-sm flex-shrink-0">
            {user.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              user.name.split(' ').map(n => n[0]).join('')
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
