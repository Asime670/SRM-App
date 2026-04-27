"use client";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ResultForm from "@/components/ResultForm";
import { useStudents } from "@/context/StudentContext";

/**
 * Add Result page updated with new Sidebar and Header layout
 */
export default function AddResultPage() {
  const { addStudent } = useStudents();
  const router = useRouter();

  const handleAddResult = (studentData) => {
    addStudent(studentData);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <DashboardHeader />
      
      <main className="ml-0 md:ml-20 lg:ml-24 pt-20 pb-10 transition-all">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-foreground title-serif tracking-tight">Add Student Record</h1>
            <p className="text-muted font-medium mt-2">Enter the details below to register a new academic result</p>
          </div>

          <ResultForm onSubmit={handleAddResult} />
        </div>
      </main>
    </div>
  );
}
