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
    <form onSubmit={handleSubmit} className="premium-card max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-6 text-slate-800">Add New Result</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Student Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Score (0-100)</label>
          <input
            type="number"
            name="score"
            value={formData.score}
            onChange={handleChange}
            placeholder="Enter score"
            className="input-field"
          />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Add Result
        </button>
      </div>
    </form>
  );
};

export default ResultForm;
