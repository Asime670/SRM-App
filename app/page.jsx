import Link from "next/link";
import Image from "next/image";

/**
 * Redesigned Home page to match the user's reference image
 */
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f0f4f8] flex flex-col justify-between">
      {/* Background Geometric Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 -translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M40,-64C54.1,-58.5,69.5,-51.1,78.3,-38.9C87.2,-26.7,89.5,-9.7,86.2,6.2C82.9,22.1,74.1,36.9,62.3,47.8C50.5,58.7,35.7,65.7,21.3,69.7C6.9,73.6,-7.1,74.5,-21.4,70.9C-35.7,67.3,-50.2,59.2,-61.4,47.9C-72.5,36.6,-80.3,22.1,-82.7,6.7C-85.1,-8.7,-82.2,-25,-73.4,-37.8C-64.6,-50.6,-50,-59.9,-36,-65.4C-22,-70.9,-11,-72.6,1.4,-75.1C13.8,-77.6,25.9,-69.5,40,-64Z" transform="translate(100 100)" className="text-slate-400" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-77.2C58.3,-70.8,67,-56.9,74.5,-42.6C82,-28.3,88.3,-13.6,88.7,1.4C89.1,16.4,83.6,31.7,75.1,45.4C66.6,59.1,55,71.2,40.9,78C26.8,84.8,10.2,86.3,-5.7,84C-21.6,81.7,-36.8,75.6,-49.6,66.3C-62.4,57,-72.8,44.5,-78.9,30.3C-85,16.1,-86.8,0.2,-84.6,-15.1C-82.4,-30.4,-76.2,-45.1,-65.5,-52.3C-54.8,-59.5,-39.6,-59.2,-26.8,-65.5C-14,-71.8,-3.7,-84.7,10.3,-84.8C24.3,-84.9,33.1,-83.6,45.7,-77.2Z" transform="translate(100 100)" className="text-slate-400" />
        </svg>
      </div>
      
      {/* Mesh/Grid patterns as in the image */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 -translate-y-1/4 translate-x-1/4 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-500">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.1" />
          <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 translate-y-1/4 -translate-x-1/4 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-500">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          
          {/* Left Column: Text */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-6xl lg:text-7xl font-bold title-serif text-[#1e293b] leading-tight">
              Student Result <br />
              <span className="text-[#336699]">Management App</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              The ultimate platform for tracking student performance, managing records, 
              and visualizing academic statistics with ease and precision.
            </p>
            <div className="pt-4">
              <Link 
                href="/login" 
                className="btn-primary text-xl px-12 py-5 uppercase tracking-wider inline-block"
              >
                Go to Login
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Overlay Card */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <Image 
                src="/students-hero.png" 
                alt="Students studying" 
                width={800} 
                height={600} 
                className="w-full object-cover aspect-[4/3]"
              />
              
              {/* Overlay Text Box (Bottom Right) */}
              <div className="absolute bottom-6 -right-6 lg:-right-12 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  The ultimate platform for tracking student performance, and comment performance, managing records, and visualizing academic statistics with ease and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Bottom Bar */}
      <footer className="w-full px-6 lg:px-24 py-8 border-t border-slate-200/50 flex items-center justify-between z-10">
        <div className="flex items-center gap-12">
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-600 font-semibold cursor-pointer hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Support</span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-600 font-semibold cursor-pointer hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6" />
              </svg>
              <span>Latest Updates</span>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative element on right */}
        <div className="w-8 h-8 opacity-20">
          <svg viewBox="0 0 100 100" className="text-slate-400">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>
      </footer>
    </main>
  );
}
