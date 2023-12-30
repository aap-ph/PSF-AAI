<template>
    <div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Version No.</th>
            <th>Date</th>
            <th>Revision Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(revision, index) in revisions" :key="index">
            <td>{{ revision.version_no }}</td>
            <td>{{ formatExcelDate(revision.date) }}</td>
            <td v-html="formatRevisionDetails(revision.revision_details)"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { storage, ref as storageRef, getDownloadURL } from '@/firebase';
  import * as XLSX from 'xlsx';
  
  const revisions = ref([]);
  
  onMounted(() => {
    fetchAndAnalyzeFile();
  });
  
  const fetchAndAnalyzeFile = async () => {
    try {
      const filePath = 'excel.xlsx';
      const fileURL = await getDownloadURL(storageRef(storage, filePath));
  
      const response = await fetch(fileURL, { mode: 'cors' });
      const arrayBuffer = await response.arrayBuffer();
  
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
  
      const sheetName = 'Revision Log';
  
      if (workbook.SheetNames.includes(sheetName)) {
        const worksheet = workbook.Sheets[sheetName];
  
        const allRows = XLSX.utils.sheet_to_json(worksheet);
  
        // Assuming the structure of your Excel file matches the data structure expected by your table
        revisions.value = allRows.map(row => ({
          version_no: row['Version No.'],
          date: row['Date'],
          revision_details: row['Revision Details'],
        }));
  
      } else {
        console.error(`Sheet "${sheetName}" not found in the Excel file.`);
      }
  
    } catch (error) {
      console.error('Error processing Excel file:', error.message);
    }
  };
  
  // Custom filter for formatting date
  const formatExcelDate = (excelDate) => {
    // Excel date values are in days since 1900-01-01
    const jsDate = new Date((excelDate - 1) * 24 * 60 * 60 * 1000 + new Date(1900, 0, 1).getTime());
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return jsDate.toLocaleDateString('en-US', options);
  };
  
  // Custom filter for formatting revision details as bullets
  const formatRevisionDetails = (revisionDetails) => {
    const bulletPoints = revisionDetails.split('\n').map(point => `<li>${point.trim()}</li>`).join('');
    return `<ul>${bulletPoints}</ul>`;
  };
  </script>
  
  <style scoped>
  /* Additional styles to remove borders */
  .custom-table {
    border-collapse: collapse;
  }
  
  .custom-table th,
  .custom-table td {
    color: white;
    border: 1px solid whitesmoke; /* Add a border if needed */
    padding: 8px; /* Add padding for better spacing */
  }
  
  .custom-table ul {
    list-style-type: disc; /* Use disc or other list-style-type as desired */
    margin: 0;
    padding: 0;
  }
  </style>
  