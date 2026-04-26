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
    <nav className="bg-white border-b border-slate-200 py-4 px-6 mb-8 flex justify-between items-center shadow-sm">
      <div className="flex gap-6 items-center">
        <Link href="/dashboard" className="text-xl font-bold text-primary">
          SRM App
        </Link>
        <div className="flex gap-4">
          <Link 
            href="/dashboard" 
            className="text-slate-600 hover:text-primary font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/add-result" 
            className="text-slate-600 hover:text-primary font-medium transition-colors"
          >
            Add Result
          </Link>
        </div>
      </div>
      <button 
        onClick={handleLogout}
        className="text-slate-600 hover:text-red-500 font-medium transition-colors"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
