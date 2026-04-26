/**
 * Calculates student statistics
 * @param {Array} students - List of student objects
 * @returns {Object} { total, average, passed, failed }
 */
export const calculateStats = (students) => {
  const total = students.length;
  const average = total > 0 
    ? (students.reduce((acc, curr) => acc + curr.score, 0) / total).toFixed(2) 
    : 0;
  const passed = students.filter(s => s.score >= 50).length;
  const failed = total - passed;

  return {
    total,
    average,
    passed,
    failed
  };
};
