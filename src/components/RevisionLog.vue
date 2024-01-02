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
          <td>{{ formatVersionNumber(revision.version_no) }}</td>
          <td>{{ formatActualDate(revision.date) }}</td>
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

// Custom filter for formatting version number as "1.00" instead of "1"
const formatVersionNumber = (versionNo) => {
  // Check if versionNo is a valid number
  const formattedVersion = parseFloat(versionNo);
  return !isNaN(formattedVersion) ? formattedVersion.toFixed(2) : versionNo;
};
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

      // Group revisions by version number and date
      const groupedRevisions = {};
      allRows.forEach(row => {
        const versionNo = row['Version No.'];
        const date = row['Date'];
        const revisionDetails = row['Revision Details'];

        if (!groupedRevisions[versionNo]) {
          groupedRevisions[versionNo] = {};
        }

        if (!groupedRevisions[versionNo][date]) {
          groupedRevisions[versionNo][date] = [];
        }

        groupedRevisions[versionNo][date].push(revisionDetails);
      });

      // Flatten grouped revisions with separate rows for each revision
      revisions.value = Object.keys(groupedRevisions)
        .map(versionNo => {
          const dates = Object.keys(groupedRevisions[versionNo]);
          return dates.map(date => ({
            version_no: versionNo,
            date: date,
            revision_details: groupedRevisions[versionNo][date].join('\n'),
          }));
        })
        .flat();

      // Sort revisions by version number in descending order
      revisions.value.sort((a, b) => b.version_no - a.version_no);

    } else {
      console.error(`Sheet "${sheetName}" not found in the Excel file.`);
    }

  } catch (error) {
    console.error('Error processing Excel file:', error.message);
  }
};

// Custom filter for formatting actual date from Excel serial number
const formatActualDate = (excelDate) => {
  const excelEpoch = new Date(Date.UTC(1899, 11, 30));
  const utcDays = excelDate - 1;
  const utcMillisecondsPerDay = 24 * 60 * 60 * 1000;

  let actualDate = new Date(excelEpoch.getTime() + utcDays * utcMillisecondsPerDay);

  // Adjust for the leap year bug in Excel (1900 is not a leap year)
  if (excelDate >= 60) {
    actualDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);
  }

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return actualDate.toLocaleDateString('en-US', options);
};


// Custom filter for formatting revision details as bullets
const formatRevisionDetails = (revisionDetails) => {
  // Add a condition to check if the revision details (trimmed) as a string is "1" and replace with "1.00"
  revisionDetails = revisionDetails.trim().toString() === "1" ? "1.00" : revisionDetails;

  const bulletPoints = revisionDetails.split('\n').map(point => `<li>${point.trim()}</li>`).join('');
  return `<ul>${bulletPoints}</ul>`;
};
</script>

<style scoped>
.custom-table {
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  color: white;
  border: 1px solid whitesmoke;
  padding: 8px;
}

.custom-table ul {
  list-style-type: disc;
  margin: 0;
  padding: 0;
}
</style>
