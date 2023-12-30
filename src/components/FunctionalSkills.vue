<template>
  <div>
    <table class="styled-table mb-4">
      <thead>
        <tr>
          <th style="border: none;"></th>
          <th @click="sortByColumn('FSC Code')" class="sortable">Code</th>
          <th @click="sortByColumn('FSC Title')" class="sortable">Title</th>
          <th @click="sortByColumn('FSC Category')" class="sortable">Category</th>
          <th @click="sortByColumn('FSC Related Category')" class="sortable">Related Category</th>
          <th>Description</th>
          <th style="border: none;"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedFunctionalSkillsData" :key="index" @click="navigateToDetails(row['FSC Code'])">
          <td style="border: none;"></td>
          <td>{{ row['FSC Code'] }}</td>
          <td>{{ row['FSC Title'] }}</td>
          <td>{{ row['FSC Category'] }}</td>
          <td>{{ row['FSC Related Category'] }}</td>
          <td style="white-space: normal; text-align: left; width: 50%;">{{ row['FSC Description'] }}</td>
          <td style="border: none;"></td>
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

const functionalSkillsData = ref([]);
const sortColumn = ref('');
const sortOrder = ref(1); // 1 for ascending, -1 for descending


const router = useRouter();
const navigateToDetails = (fscCode) => {
  // Assuming you have a route named 'details' where you want to send the FSC Code
  const routeParams = { params: { fscCode } };

  // Use router.push to navigate to the 'details' route with the FSC Code as a parameter
  router.push({ name: 'functionalskillsdetails', ...routeParams });
};

const fetchFunctionalSkills = async () => {
  try {
    const filePath = 'excel.xlsx';
    const fileURL = await getDownloadURL(storageRef(storage, filePath));

    console.log('Fetching data from:', fileURL);

    const response = await fetch(fileURL, { mode: 'cors' });
    const arrayBuffer = await response.arrayBuffer();

    console.log('Data fetched successfully.');

    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    const functionalSkillsSheetName = 'Functional Skills';

    if (workbook.SheetNames.includes(functionalSkillsSheetName)) {
      const worksheet = workbook.Sheets[functionalSkillsSheetName];
      const allRows = XLSX.utils.sheet_to_json(worksheet);

      const columns = ['FSC Code', 'FSC Title', 'FSC Category', 'FSC Related Category', 'FSC Description', 'FSC Proficiency Code', 'Proficiency Level', 'Proficiency Description', 'Knowledge / Ability Classification', 'Knowledge / Ability Items'];

      const uniqueRows = new Set();
      const dataForFunctionalSkills = [];

      allRows.forEach(row => {
        const rowData = {};
        columns.forEach(column => {
          rowData[column] = row[column];
        });

        const uniqueIdentifier = row['FSC Code']; // Assuming 'FSC Code' is a unique identifier

        if (!uniqueRows.has(uniqueIdentifier)) {
          uniqueRows.add(uniqueIdentifier);
          dataForFunctionalSkills.push(rowData);
        }
      });

      functionalSkillsData.value = dataForFunctionalSkills;
      console.log('Data processed and stored.');
    } else {
      console.error(`Sheet "${functionalSkillsSheetName}" not found in the Excel file.`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const sortedFunctionalSkillsData = computed(() => {
  return [...functionalSkillsData.value].sort((a, b) => {
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

onMounted(fetchFunctionalSkills);

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
  white-space: nowrap;
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
  