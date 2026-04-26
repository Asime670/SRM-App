"use client";

import { useState } from "react";

/**
 * ResultForm component for adding new student results
 * @param {Object} props - { onSubmit }
 */
const ResultForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    score: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.subject || formData.score === "") {
      setError("All fields are required.");
      return;
    }

    const scoreNum = Number(formData.score);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      setError("Score must be a number between 0 and 100.");
      return;
    }

    setError("");
    onSubmit({
      name: formData.name,
      subject: formData.subject,
      score: scoreNum,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="premium-card !p-10 border border-slate-100">
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold title-serif text-slate-800">Add New Result</h2>
            <p className="text-slate-400 text-sm font-medium">Capture student academic performance</p>
          </div>
        </div>
        
        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-center gap-2 animate-in fade-in zoom-in duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        <div className="space-y-8">
          <div className="group">
            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Student Name</label>
            <div className="relative">
              <select
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field appearance-none !py-3.5 !pl-12 !rounded-xl bg-white cursor-pointer"
              >
                <option value="">Select a student...</option>
                <option value="Tilia">Tilia</option>
                <option value="John">John</option>
                <option value="Mary">Mary</option>
                <option value="David">David</option>
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Select from existing student records</p>
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Subject</label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field appearance-none !py-3.5 !pl-12 !rounded-xl bg-white cursor-pointer"
              >
                <option value="">Select a subject...</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Testing">Testing</option>
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-primary transition-colors">Score (0-100)</label>
            <div className="relative">
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}
                placeholder="Enter score"
                className="input-field !py-3.5 !pl-12 !rounded-xl"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            {formData.score !== "" && (
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                Predicted Grade: 
                <span className={`text-xs ${Number(formData.score) >= 50 ? 'text-green-500' : 'text-red-500'}`}>
                  {Number(formData.score) >= 90 ? 'A+' : Number(formData.score) >= 80 ? 'A' : Number(formData.score) >= 70 ? 'B' : Number(formData.score) >= 60 ? 'C' : Number(formData.score) >= 50 ? 'D' : 'F'}
                </span>
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary w-full !rounded-2xl !py-4 text-lg mt-4 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
            <span>Submit Result</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResultForm;
