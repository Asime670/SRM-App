"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ResultForm from "@/components/ResultForm";
import { useStudents } from "@/context/StudentContext";

/**
 * Add Result page wrapper
 */
export default function AddResultPage() {
  const { addStudent } = useStudents();
  const router = useRouter();

  const handleAddResult = (studentData) => {
    addStudent(studentData);
    // Redirect back to dashboard after submission
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Add Student Record</h1>
          <p className="text-slate-500 mt-2">Enter the details below to register a new academic result</p>
        </div>

        <ResultForm onSubmit={handleAddResult} />
      </main>
    </div>
  );
}
