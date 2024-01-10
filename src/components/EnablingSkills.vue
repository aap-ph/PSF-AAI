<template>
  <div>
    <table class="styled-table mb-4">
      <thead>
        <tr>
          <th style="border: none; width: 30px;"></th>
          <th @click="sortByColumn('ESC Code')" class="sortable" style="width: 10%;">Code</th>
          <th @click="sortByColumn('ESC Title')" class="sortable" style="width: 10%;">Skill</th>
          <th @click="sortByColumn('ESC Category')" class="sortable" style="width: 10%;">Category</th>
          <th @click="sortByColumn('ESC Related Category')" class="sortable" style="width: 10%;">Related Category</th>
          <th style="width: 50%;">Description</th>
          <th style="border: none; width: 30px;"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedESCData" :key="index" @click="handleRowClick(row['ESC Code'])">
          <td style="border: none; width: 30px;"></td>
          <td style="width: 10%;">{{ row['ESC Code'] }}</td>
          <td style="width: 10%;">{{ row['ESC Title'] }}</td>
          <td style="width: 10%;">{{ row['ESC Category'] }}</td>
          <td style="width: 10%;">{{ row['ESC Related Category'] }}</td>
          <td style="white-space: normal; text-align: left; width: 50%;">{{ row['ESC Description'] }}</td>
          <td style="border: none; width: 30px;"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  
<script setup>
import { ref, onMounted, computed } from 'vue';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import { storage, ref as storageRef, getDownloadURL } from '@/firebase';
import { useRouter } from 'vue-router';


const router = useRouter();

const handleRowClick = (escCode) => {
  // Assuming you have a route named 'details' where you want to send the FSC Code

  // Use router.push to navigate to the 'details' route with the FSC Code as a parameter
  router.push({ name: 'enablingskillsdetails', params: { escCode: escCode } });
};

const ESCData = ref([]);
const sortColumn = ref('');
const sortOrder = ref(1); // 1 for ascending, -1 for descending

const fetchEnablingSkills = async () => {
  try {
    const filePath = 'excel.xlsx';
    const fileURL = await getDownloadURL(storageRef(storage, filePath));

    console.log('Fetching data from:', fileURL);

    const response = await fetch(fileURL, { mode: 'cors' });
    const arrayBuffer = await response.arrayBuffer();

    console.log('Data fetched successfully.');

    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    const enablingSkillsSheetName = 'Enabling Skills';

    if (workbook.SheetNames.includes(enablingSkillsSheetName)) {
      const worksheet = workbook.Sheets[enablingSkillsSheetName];
      const allRows = XLSX.utils.sheet_to_json(worksheet);

      const columns = ['ESC Code', 'ESC Title', 'ESC Category', 'ESC Related Category', 'ESC Description', 'ESC Proficiency Code', 'Proficiency Level', 'Proficiency Description', 'Knowledge / Ability Classification', 'Knowledge / Ability Items'];

      // Inside the fetchEnablingSkills function
      const uniqueRows = new Set();
      const enablingSkillsData = allRows.reduce((acc, row) => {
        const rowData = {};
        columns.forEach(column => {
          rowData[column] = row[column];
        });

        const uniqueIdentifier = row['ESC Code']; // Assuming 'ESC Code' is a unique identifier

        if (!uniqueRows.has(uniqueIdentifier)) {
          uniqueRows.add(uniqueIdentifier);
          acc.push(rowData);
        }
        return acc;
      }, []);


      ESCData.value = enablingSkillsData;
      console.log('Data processed and stored.');
    } else {
      console.error(`Sheet "${enablingSkillsSheetName}" not found in the Excel file.`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const sortedESCData = computed(() => {
  return [...ESCData.value].sort((a, b) => {
    const valueA = a[sortColumn.value];
    const valueB = b[sortColumn.value];

    if (valueA < valueB) return -1 * sortOrder.value;
    if (valueA > valueB) return 1 * sortOrder.value;
    return 0;
  });
});

const sortByColumn = (column) => {
  if (sortColumn.value === column) {
    sortOrder.value *= -1; // Toggle between ascending and descending
  } else {
    sortColumn.value = column;
    sortOrder.value = 1; // Default to ascending when changing the column
  }
};

onMounted(fetchEnablingSkills);
</script>
  
<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  box-sizing: border-box;
}

td:hover {
  cursor: pointer;
}

.styled-table th,
.styled-table td {
  text-align: left;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
}

@media only screen and (max-width: 600px) {

  .styled-table th,
  .styled-table td {
    font-size: 12px;
  }
}

.sortable {
  cursor: pointer;
}

.sortable:hover {
  background-color: #555;
}
</style>
  