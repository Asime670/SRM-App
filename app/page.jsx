import Link from "next/link";

/**
 * Home page with app title and login navigation
 */
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Student Result <span className="text-primary">Management App</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          The ultimate platform for tracking student performance, managing records, 
          and visualizing academic statistics with ease and precision.
        </p>
        <Link 
          href="/login" 
          className="btn-primary text-lg px-10 py-4 shadow-lg shadow-primary/20 inline-block"
        >
          Go to Login
        </Link>
      </div>
      
      {/* Decorative background element */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}
