"use client";

import { useState, useEffect } from "react";

/**
 * StudentModal component for Adding and Editing students
 */
const StudentModal = ({ isOpen, onClose, onSave, student }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    age: "",
    gender: "Male",
  });

  const [prevStudent, setPrevStudent] = useState(student);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  // Sync state with props in render body to avoid cascading renders in useEffect
  if (student !== prevStudent || isOpen !== prevIsOpen) {
    setPrevStudent(student);
    setPrevIsOpen(isOpen);
    setFormData({
      name: student?.name || "",
      class: student?.class || "",
      age: student?.age || "",
      gender: student?.gender || "Male",
    });
  }

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-card rounded-[2rem] shadow-2xl max-w-lg w-full p-8 animate-in zoom-in slide-in-from-bottom-4 duration-300 border border-border">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold title-serif text-foreground">
            {student ? "Edit Student" : "Add New Student"}
          </h3>
          <button onClick={onClose} className="p-2 text-muted hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="input-field !py-3 !rounded-xl" 
                placeholder="e.g. John Doe"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Class</label>
                <input 
                  type="text" 
                  required
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  className="input-field !py-3 !rounded-xl" 
                  placeholder="e.g. SS3A"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Age</label>
                <input 
                  type="number" 
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="input-field !py-3 !rounded-xl" 
                  placeholder="e.g. 17"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-widest mb-2">Gender</label>
              <div className="flex gap-4">
                {["Male", "Female"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setFormData({...formData, gender: g})}
                    className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-all ${
                      formData.gender === g 
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                        : 'bg-card text-muted border-border hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 rounded-xl border border-border font-bold text-muted hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
            >
              {student ? "Update Student" : "Register Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
