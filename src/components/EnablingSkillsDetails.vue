<template>
  <div>
    <table class="styled-table">
      <tr style="text-align: start; vertical-align: top;">
        <th >Enabling Skills</th>
        <td colspan="3">{{ clickedText }} {{ globalTitle }}</td>
        <td style="border: none;"></td>
      </tr>
      <tr style="text-align: start; vertical-align: top;">
        <th>Category</th>
        <td colspan="3">{{ globalcategory }}</td>
      </tr>
      <tr>
        <th style="text-align: start; vertical-align: top;">Related Category</th>
        <td colspan="3">{{ globalRelatedcategory }}</td>
      </tr>
      <tr>
        <th style="text-align: start; vertical-align: top;">Description</th>
        <td colspan="3">{{ globalDescription }}</td>
      </tr>
      <tr>
        <th rowspan="3" style="text-align: start; vertical-align: top;">Proficiency Description</th>
        <td style="text-align: center; vertical-align: center;">Basic</td>
        <td style="text-align: center; vertical-align: center;">Intermediate</td>
        <td style="text-align: center; vertical-align: center;">Advanced</td>
      </tr>
      <tr>
        <th colspan="1" style="border: 1px solid white; text-align: center; width: 30%;">
            {{ globalProficiencyCode1 ? globalProficiencyCode1 : 'None' }}
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: center; width: 30%;">
            {{ globalProficiencyCode2 ? globalProficiencyCode2 : 'None' }}
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: center; width: 30%;">
            {{ globalProficiencyCode3 ? globalProficiencyCode3 : 'None' }}
        </th>
      </tr>
      <tr>
        <td style="vertical-align: top;">{{ globalDescription1 ? globalDescription1: ''}}</td>
        <td style="vertical-align: top;">{{ globalDescription2 ? globalDescription2: '' }}</td>
        <td style="vertical-align: top;">{{ globalDescription3 ? globalDescription3: '' }}</td>
      </tr>
      <tr>
        <td style="border: 1px solid white; text-align: start; vertical-align: top;">Knowledge</td>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Knowledge1.length > 0">
            <ul>
              <li v-for="(item, index) in Knowledge1" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Knowledge2.length > 0">
            <ul>
              <li v-for="(item, index) in Knowledge2" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Knowledge3.length > 0">
            <ul>
              <li v-for="(item, index) in Knowledge3" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
      </tr>
      <tr>
        <td style="border: 1px solid white; text-align: start; vertical-align: top;">Abilities</td>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Ability1.length > 0">
            <ul>
              <li v-for="(item, index) in Ability1" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Ability2.length > 0">
            <ul>
              <li v-for="(item, index) in Ability2" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
        <th colspan="1" style="border: 1px solid white; text-align: start; vertical-align: top;">
          <div v-if="Ability3.length > 0">
            <ul>
              <li v-for="(item, index) in Ability3" :key="index">{{ item.item }}</li>
            </ul>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import { storage, ref as storageRef, getDownloadURL } from '@/firebase';

const clickedText = ref('');
var globalTitle = ref('')
var globalcategory = ref('')
var globalRelatedcategory = ref('')
var globalDescription = ref('')
var globalRangeApplication = ref('')

// Basic
var globalProficiencyCode1 = ref('')
var globalDescription1 = ref('')

var Knowledge1 = ref([]);
var Ability1 = ref([]);

// Intermediate
var globalProficiencyCode2 = ref('')
var globalDescription2 = ref('')

var Knowledge2 = ref([]);
var Ability2 = ref([]);

// Advanced
var globalProficiencyCode3 = ref('')
var globalDescription3 = ref('')

var Knowledge3 = ref([]);
var Ability3 = ref([]);

const fetchAndAnalyzeFile = async () => {
  try {
    const filePath = 'excel.xlsx';
    const fileURL = await getDownloadURL(storageRef(storage, filePath));

    // Assuming CORS has been addressed either through Firebase Storage rules or a proxy

    const response = await fetch(fileURL, { mode: 'cors' });
    const arrayBuffer = await response.arrayBuffer();

    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming "Job Role Description" is the sheet name
    const sheetName = 'Enabling Skills';

    if (workbook.SheetNames.includes(sheetName)) {
      const worksheet = workbook.Sheets[sheetName];

      // Extract data from the "Job Role Description" sheet
      const allRows = XLSX.utils.sheet_to_json(worksheet);

      // Specify the job role you want to filter

      const targetcode = clickedText.value;

      // Filter rows based on the job role
      const matchingRows = allRows.filter(row => row['ESC Code'] === targetcode);

      if (matchingRows.length > 0) {
        // Assign the job role description to the global variable
        let fscTitle = matchingRows[0]['ESC Title'];
        let fscCategory = matchingRows[0]['ESC Category'];
        let fscRelatedCategory = matchingRows[0]['ESC Related Category'];
        let fscDescription = matchingRows[0]['ESC Description'];
        globalTitle.value = fscTitle;
        globalcategory.value = fscCategory;
        globalRelatedcategory.value = fscRelatedCategory;
        globalDescription.value = fscDescription;
      } else {

      }

      //Basic
      const matchingBasic = allRows.filter(row => row['Proficiency Level'] === 'Basic' && row['ESC Code'] === targetcode);

      if (matchingBasic.length > 0) {
        // Assign the job role description to the global variable
        let ESCProficiencyCode = matchingBasic[0]['ESC Proficiency Code'];
        let ESCDescription = matchingBasic[0]['Proficiency Description'];


        globalProficiencyCode1.value = ESCProficiencyCode;
        globalDescription1.value = ESCDescription;
      } else {

      }

      const MatchingKnowledge1 = allRows.filter(row => row['Proficiency Level'] === 'Basic' && row['Knowledge / Ability Classification'] === 'Knowledge' && row['ESC Code'] === targetcode);

      if (MatchingKnowledge1.length > 0) {
        // Extract skills and proficiency levels
        Knowledge1.value = MatchingKnowledge1.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

      const MatchingAbility1 = allRows.filter(row => row['Proficiency Level'] === 'Basic' && row['Knowledge / Ability Classification'] === 'Ability' && row['ESC Code'] === targetcode);

      if (MatchingAbility1.length > 0) {
        // Extract skills and proficiency levels
        Ability1.value = MatchingAbility1.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

      //Intermediate
      const matchingIntermediate = allRows.filter(row => row['Proficiency Level'] === 'Intermediate' && row['ESC Code'] === targetcode);

      if (matchingIntermediate.length > 0) {
        // Assign the job role description to the global variable
        let ESCProficiencyCode = matchingIntermediate[0]['ESC Proficiency Code'];
        let ESCDescription = matchingIntermediate[0]['Proficiency Description'];


        globalProficiencyCode2.value = ESCProficiencyCode;
        globalDescription2.value = ESCDescription;
      } else {

      }

      const MatchingKnowledge2 = allRows.filter(row => row['Proficiency Level'] === 'Intermediate' && row['Knowledge / Ability Classification'] === 'Knowledge' && row['ESC Code'] === targetcode);

      if (MatchingKnowledge2.length > 0) {
        // Extract skills and proficiency levels
        Knowledge2.value = MatchingKnowledge2.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

      const MatchingAbility2 = allRows.filter(row => row['Proficiency Level'] === 'Intermediate' && row['Knowledge / Ability Classification'] === 'Ability' && row['ESC Code'] === targetcode);

      if (MatchingAbility2.length > 0) {
        // Extract skills and proficiency levels
        Ability2.value = MatchingAbility2.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

      //Advanced
      const matchingAdvanced = allRows.filter(row => row['Proficiency Level'] === 'Advanced' && row['ESC Code'] === targetcode);

      if (matchingAdvanced.length > 0) {
        // Assign the job role description to the global variable
        let ESCProficiencyCode = matchingAdvanced[0]['ESC Proficiency Code'];
        let ESCDescription = matchingAdvanced[0]['Proficiency Description'];


        globalProficiencyCode3.value = ESCProficiencyCode;
        globalDescription3.value = ESCDescription;
      } else {

      }

      const MatchingKnowledge3 = allRows.filter(row => row['Proficiency Level'] === 'Advanced' && row['Knowledge / Ability Classification'] === 'Knowledge' && row['ESC Code'] === targetcode);

      if (MatchingKnowledge3.length > 0) {
        // Extract skills and proficiency levels
        Knowledge3.value = MatchingKnowledge3.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

      const MatchingAbility3 = allRows.filter(row => row['Proficiency Level'] === 'Advanced' && row['Knowledge / Ability Classification'] === 'Ability' && row['ESC Code'] === targetcode);

      if (MatchingAbility3.length > 0) {
        // Extract skills and proficiency levels
        Ability3.value = MatchingAbility3.map(row => ({
          item: row['Knowledge / Ability Items'],
        }));
      } else {

      }

    } else {
      console.error(`Sheet "${sheetName}" not found in the Excel file.`);
    }

    // Assuming "Job Role Description" is the sheet name
    const sheetName2 = 'Functional Skills - Application';

    if (workbook.SheetNames.includes(sheetName2)) {
      const worksheet = workbook.Sheets[sheetName2];

      // Extract data from the "Job Role Description" sheet
      const allRows = XLSX.utils.sheet_to_json(worksheet);

      // Specify the job role you want to filter

      const targetcode = clickedText.value;

      // Filter rows based on the job role
      const matchingRows = allRows.filter(row => row['TSC Code'] === targetcode);

      if (matchingRows.length > 0) {
        // Assign the job role description to the global variable
        let RangeApplication = matchingRows[0]['Range of Application'];

        globalRangeApplication.value = RangeApplication
      } else {

      }
    }


  } catch (error) {
    console.error('Error processing Excel file:', error.message);
  }
};

onMounted(() => {
  // Access the text parameter from the route
  const route = useRoute(); // Use useRoute to get the route object
  clickedText.value = route.params.escCode || '';
  fetchAndAnalyzeFile();
});
</script>
  
<style scoped>
/* Add your additional styles here */
.styled-table {
    border-collapse: collapse;
    margin-left: 50px;
    margin-right: 50px;
}

.styled-table th,
.styled-table td {
    border: 1px solid white;
    padding: 8px;
    color: white;
}
</style>
  