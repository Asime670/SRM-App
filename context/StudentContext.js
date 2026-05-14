"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { initialStudents } from "@/data/students";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);

  // Persistence to localStorage (must happen in useEffect for SSR apps)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("srm_students");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStudents(JSON.parse(saved));
      }
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
