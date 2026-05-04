import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

/**
 * Export data to Excel (.xlsx)
 * @param {Array} data - Array of objects to export
 * @param {string} fileName - Name of the file
 */
export const exportToExcel = (data, fileName = 'Report') => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Results');
  
  // Buffer to store the generated Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const finalData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  
  saveAs(finalData, `${fileName}.xlsx`);
};

/**
 * Export data to Word (.doc)
 * USES HTML-based Word format which is widely compatible
 * @param {Array} data - Array of objects to export
 * @param {string} fileName - Name of the file
 * @param {string} title - Title of the report
 */
export const exportToWord = (data, fileName = 'Report', title = 'Academic Performance Report') => {
  if (!data || data.length === 0) return;

  const header = Object.keys(data[0]);
  
  let html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${title}</title>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
      th { background-color: #4f46e5; color: white; font-weight: bold; }
      tr:nth-child(even) { background-color: #f9fafb; }
      h1 { color: #1e293b; text-align: center; }
      .date { text-align: right; font-style: italic; color: #64748b; margin-bottom: 20px; }
    </style>
    </head>
    <body>
      <h1>${title}</h1>
      <div class='date'>Generated on: ${new Date().toLocaleDateString()}</div>
      <table>
        <thead>
          <tr>
            ${header.map(h => `<th>${h.charAt(0).toUpperCase() + h.slice(1)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>
              ${header.map(h => `<td>${row[h]}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', html], {
    type: 'application/msword'
  });
  
  saveAs(blob, `${fileName}.doc`);
};
