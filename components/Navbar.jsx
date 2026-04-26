"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Navbar component with navigation links and logout
 */
const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear tokens/session here
    router.push("/");
  };

  return (
    <nav className="bg-white border-b border-slate-200/60 py-5 px-8 mb-10 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="flex gap-10 items-center">
        <Link href="/dashboard" className="text-2xl font-bold title-serif text-primary tracking-tight">
          SRM App
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/dashboard" 
            className="text-slate-500 hover:text-primary font-semibold transition-all hover:translate-y-[-1px]"
          >
            Dashboard
          </Link>
          <Link 
            href="/add-result" 
            className="text-slate-500 hover:text-primary font-semibold transition-all hover:translate-y-[-1px]"
          >
            Add Result
          </Link>
        </div>
      </div>
      <button 
        onClick={handleLogout}
        className="text-slate-400 hover:text-red-500 font-semibold transition-colors flex items-center gap-2"
      >
        <span>Logout</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
