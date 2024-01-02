<template>
    <div>
        <table class="styled-table mb-3">
            <tr>
                <td style="border: 1px solid white;">Functional Skill</td>
                <th colspan="11" style="border: 1px solid white; text-align: start;">{{ clickedText }} {{ globalfscTitle }}
                </th>
            </tr>
            <tr>
                <td style="border: 1px solid white;">Category</td>
                <th colspan="11" style="border: 1px solid white; text-align: start;">{{ globalcategory }}</th>

            </tr>
            <tr>
                <td style="border: 1px solid white;">Related Category</td>
                <th colspan="11" style="border: 1px solid white; text-align: start;">{{ globalRelatedcategory }}</th>
            </tr>
            <tr>
                <td style="border: 1px solid white;">Description</td>
                <th colspan="11" style="border: 1px solid white; text-align: start;">{{ globalfscDescription }}</th>
            </tr>
            <tr>
                <th rowspan="3" style="border: 1px solid white; text-align: center;">Proficiency Description</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">1</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">2</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">3</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">4</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">5</th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">6</th>
            </tr>
            <tr>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode1 ? globalFSCProficiencyCode1 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode2 ? globalFSCProficiencyCode2 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode3 ? globalFSCProficiencyCode3 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode4 ? globalFSCProficiencyCode4 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode5 ? globalFSCProficiencyCode5 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCProficiencyCode6 ? globalFSCProficiencyCode6 : '' }}
                </th>
            </tr>
            <tr>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription1 ? globalFSCDescription1 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription2 ? globalFSCDescription2 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription3 ? globalFSCDescription3 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription4 ? globalFSCDescription4 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription5 ? globalFSCDescription5 : '' }}
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: center;">
                    {{ globalFSCDescription6 ? globalFSCDescription6 : '' }}
                </th>
            </tr>
            <tr>
                <td style="border: 1px solid white;">Knowledge</td>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge1.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge1" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge2.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge2" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge3.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge3" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge4.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge4" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge5.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge5" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                       
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Knowledge6.length > 0">
                        <ul>
                            <li v-for="(item, index) in Knowledge6" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
            </tr>
            <tr>
                <td style="border: 1px solid white;">Abilities</td>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability1.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability1" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability2.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability2" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability3.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability3" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                     
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability4.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability4" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability5.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability5" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
                <th colspan="2" style="border: 1px solid white; text-align: start; vertical-align: top;">
                    <div v-if="Ability6.length > 0">
                        <ul>
                            <li v-for="(item, index) in Ability6" :key="index">{{ item.item }}</li>
                        </ul>
                    </div>
                    <div v-else>
                        
                    </div>
                </th>
            </tr>
            <tr>
                <td style="border: 1px solid white;">Range of Application</td>
                <th colspan="11" style="border: 1px solid white; text-align: start;">{{globalRangeApplication}}</th>

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
var globalfscTitle = ref('')
var globalcategory = ref('')
var globalRelatedcategory = ref('')
var globalfscDescription = ref('')
var globalRangeApplication = ref('')

//1
var globalFSCProficiencyCode1 = ref('')
var globalFSCDescription1 = ref('')

var Knowledge1 = ref([]);
var Ability1 = ref([]);

//2
var globalFSCProficiencyCode2 = ref('')
var globalFSCDescription2 = ref('')

var Knowledge2 = ref([]);
var Ability2 = ref([]);

//3
var globalFSCProficiencyCode3 = ref('')
var globalFSCDescription3 = ref('')

var Knowledge3 = ref([]);
var Ability3 = ref([]);

//4
var globalFSCProficiencyCode4 = ref('')
var globalFSCDescription4 = ref('')

var Knowledge4 = ref([]);
var Ability4 = ref([]);

//5
var globalFSCProficiencyCode5 = ref('')
var globalFSCDescription5 = ref('')

var Knowledge5 = ref([]);
var Ability5 = ref([]);

//6
var globalFSCProficiencyCode6 = ref('')
var globalFSCDescription6 = ref('')

var Knowledge6 = ref([]);
var Ability6 = ref([]);

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
        const sheetName = 'Functional Skills';

        if (workbook.SheetNames.includes(sheetName)) {
            const worksheet = workbook.Sheets[sheetName];

            // Extract data from the "Job Role Description" sheet
            const allRows = XLSX.utils.sheet_to_json(worksheet);

            // Specify the job role you want to filter

            const targetcode = clickedText.value;

            // Filter rows based on the job role
            const matchingRows = allRows.filter(row => row['FSC Code'] === targetcode);

            if (matchingRows.length > 0) {
                // Assign the job role description to the global variable
                let fscTitle = matchingRows[0]['FSC Title'];
                let fscCategory = matchingRows[0]['FSC Category'];
                let fscRelatedCategory = matchingRows[0]['FSC Related Category'];
                let fscDescription = matchingRows[0]['FSC Description'];
                globalfscTitle.value = fscTitle;
                globalcategory.value = fscCategory;
                globalRelatedcategory.value = fscRelatedCategory;
                globalfscDescription.value = fscDescription;
            } else {

            }


            //Prof Level 1 
            const matchingProfLevel = allRows.filter(row => row['Proficiency Level'] === 1 && row['FSC Code'] === targetcode);

            if (matchingProfLevel.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel[0]['FSC Description'];


                globalFSCProficiencyCode1.value = FSCProficiencyCode;
                globalFSCDescription1.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge1 = allRows.filter(row => row['Proficiency Level'] === 1 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);

            if (MatchingKnowledge1.length > 0) {
                // Extract skills and proficiency levels
                Knowledge1.value = MatchingKnowledge1.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility1 = allRows.filter(row => row['Proficiency Level'] === 1 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility1.length > 0) {
                // Extract skills and proficiency levels
                Ability1.value = MatchingAbility1.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            //Prof Level 2
            const matchingProfLevel2 = allRows.filter(row => row['Proficiency Level'] === 2 && row['FSC Code'] === targetcode);

            if (matchingProfLevel2.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel2[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel2[0]['FSC Description'];


                globalFSCProficiencyCode2.value = FSCProficiencyCode;
                globalFSCDescription2.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge2 = allRows.filter(row => row['Proficiency Level'] === 2 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);
            if (MatchingKnowledge2.length > 0) {
                // Extract skills and proficiency levels
                Knowledge2.value = MatchingKnowledge2.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility2 = allRows.filter(row => row['Proficiency Level'] === 2 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility2.length > 0) {
                // Extract skills and proficiency levels
                Ability2.value = MatchingAbility2.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }


            //Prof Level 3
            const matchingProfLevel3 = allRows.filter(row => row['Proficiency Level'] === 3 && row['FSC Code'] === targetcode);

            if (matchingProfLevel3.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel3[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel3[0]['FSC Description'];


                globalFSCProficiencyCode3.value = FSCProficiencyCode;
                globalFSCDescription3.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge3 = allRows.filter(row => row['Proficiency Level'] === 3 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);
            if (MatchingKnowledge3.length > 0) {
                // Extract skills and proficiency levels
                Knowledge3.value = MatchingKnowledge3.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility3 = allRows.filter(row => row['Proficiency Level'] === 3 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility3.length > 0) {
                // Extract skills and proficiency levels
                Ability3.value = MatchingAbility3.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            //Prof Level 4
            const matchingProfLevel4 = allRows.filter(row => row['Proficiency Level'] === 4 && row['FSC Code'] === targetcode);

            if (matchingProfLevel4.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel4[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel4[0]['FSC Description'];


                globalFSCProficiencyCode4.value = FSCProficiencyCode;
                globalFSCDescription4.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge4 = allRows.filter(row => row['Proficiency Level'] === 4 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);
            if (MatchingKnowledge4.length > 0) {
                // Extract skills and proficiency levels
                Knowledge4.value = MatchingKnowledge4.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility4 = allRows.filter(row => row['Proficiency Level'] === 4 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility4.length > 0) {
                // Extract skills and proficiency levels
                Ability4.value = MatchingAbility4.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            //Prof Level 5
            const matchingProfLevel5 = allRows.filter(row => row['Proficiency Level'] === 5 && row['FSC Code'] === targetcode);

            if (matchingProfLevel5.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel5[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel5[0]['FSC Description'];


                globalFSCProficiencyCode5.value = FSCProficiencyCode;
                globalFSCDescription5.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge5 = allRows.filter(row => row['Proficiency Level'] === 5 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);
            if (MatchingKnowledge5.length > 0) {
                // Extract skills and proficiency levels
                Knowledge5.value = MatchingKnowledge5.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility5 = allRows.filter(row => row['Proficiency Level'] === 5 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility5.length > 0) {
                // Extract skills and proficiency levels
                Ability5.value = MatchingAbility5.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            //Prof Level 6
            const matchingProfLevel6 = allRows.filter(row => row['Proficiency Level'] === 6 && row['FSC Code'] === targetcode);

            if (matchingProfLevel6.length > 0) {
                // Assign the job role description to the global variable
                let FSCProficiencyCode = matchingProfLevel6[0]['FSC Proficiency Code'];
                let FSCDescription = matchingProfLevel6[0]['FSC Description'];


                globalFSCProficiencyCode6.value = FSCProficiencyCode;
                globalFSCDescription6.value = FSCDescription;
            } else {
               
            }

            const MatchingKnowledge6 = allRows.filter(row => row['Proficiency Level'] === 6 && row['Knowledge / Ability Classification'] === 'Knowledge' && row['FSC Code'] === targetcode);
            if (MatchingKnowledge6.length > 0) {
                // Extract skills and proficiency levels
                Knowledge6.value = MatchingKnowledge6.map(row => ({
                    item: row['Knowledge / Ability Items'],
                }));
            } else {
                
            }

            const MatchingAbility6 = allRows.filter(row => row['Proficiency Level'] === 6 && row['Knowledge / Ability Classification'] === 'Ability' && row['FSC Code'] === targetcode);

            if (MatchingAbility6.length > 0) {
                // Extract skills and proficiency levels
                Ability6.value = MatchingAbility6.map(row => ({
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
    clickedText.value = route.params.fscCode || '';
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
  