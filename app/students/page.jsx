"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import SearchBar from "@/components/SearchBar";
import StudentModal from "@/components/StudentModal";
import { useStudents } from "@/context/StudentContext";

/**
 * Students Management Page
 */
export default function StudentsPage() {
  const { students, addStudent, deleteStudent, updateStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (s.id && s.id.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddClick = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleSaveStudent = (formData) => {
    if (editingStudent) {
      updateStudent(editingStudent.id, formData);
    } else {
      addStudent(formData);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold title-serif text-foreground tracking-tight">Student Management</h1>
              <p className="text-muted font-medium mt-1">Manage student profiles and academic levels</p>
            </div>
            
            <button 
              onClick={handleAddClick}
              className="btn-primary flex items-center justify-center gap-2 !py-3 w-full sm:w-auto shadow-lg shadow-primary/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add New Student</span>
            </button>
          </div>

          <div className="premium-card !p-0 border-border overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-card rounded-xl shadow-sm border border-border text-muted">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Student Directory</h3>
              </div>
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Student</th>
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">ID</th>
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Class</th>
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider text-center">Age</th>
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider">Gender</th>
                    <th className="px-6 py-5 font-bold text-muted text-[11px] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center font-bold text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                              {student.name.charAt(0)}
                            </div>
                            <span className="text-sm font-bold text-foreground">{student.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-xs font-black text-muted bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">#{student.id.toString().slice(-4)}</span>
                        </td>
                        <td className="px-6 py-5 text-sm text-muted font-semibold">{student.class}</td>
                        <td className="px-6 py-5 text-sm text-muted font-bold text-center">{student.age}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                            student.gender === 'Female' 
                              ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800/50' 
                              : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/50'
                          }`}>
                            {student.gender}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => handleEditClick(student)}
                              className="p-2 text-muted hover:text-primary transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg"
                              title="Edit Student"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => deleteStudent(student.id)}
                              className="p-2 text-muted hover:text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                              title="Delete Student"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-20 text-center text-muted font-medium italic">
                        No students found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-5 bg-slate-50/30 dark:bg-slate-800/30 border-t border-border flex items-center justify-between">
              <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Total {filteredStudents.length} Students</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-card border border-border rounded-lg text-xs font-bold text-muted hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 bg-card border border-border rounded-lg text-xs font-bold text-muted hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StudentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStudent}
        student={editingStudent}
      />
    </div>
  );
}
