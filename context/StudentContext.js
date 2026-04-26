"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { initialStudents } from "@/data/students";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);

  // Persistence to localStorage (optional but good for frontend-only app)
  useEffect(() => {
    const saved = localStorage.getItem("srm_students");
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("srm_students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(), // Simple unique ID
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const updateStudent = (id, updatedData) => {
    setStudents(students.map(s => s.id === id ? { ...s, ...updatedData } : s));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
