<template>
    <div class="container">
        <div class="fixed-width" ref="fixedWidth">
            <!-- Left Half Content Goes Here -->
            <table id="left-table">
                <thead>
                    <tr style="height: 120.8px; text-align: center;">
                        <th>Skill Type</th>
                        <th>Skill Category</th>
                        <th>Related Category</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in EnablingData" :key="index">
                        <td>{{ row.title }}</td>
                        <td>{{ row.category }}</td>
                        <td>{{ row.relatedcategory }}</td>
                        <td>{{ row.skills }}</td>
                    </tr>
                    <tr v-for="(row, index) in FunctionalData" :key="index">
                        <td>{{ row.title }}</td>
                        <td>{{ row.category }}</td>
                        <td>{{ row.relatedcategory }}</td>
                        <td>{{ row.skills }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="scrollable" ref="scrollable">
            <!-- Right Half Content Goes Here -->
            <table id="right-table">
                <thead>
                    <tr>
                        <th v-for="(row, index) in categoryRef" :key="index" :colspan="getColspanForRow(row)"
                            style="font-size: 14px; padding: 0px; ">{{ row }}</th>
                    </tr>
                    <tr>
                        <th v-for="(row, index) in jobRole" :key="index">{{ row }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in proficiencyLevelData" :key="rowIndex">
                        <td v-for="(col, colIndex) in row" :key="colIndex">{{ col }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
  
<script setup>
import { onMounted, ref } from 'vue';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import { storage, ref as storageRef, getDownloadURL } from '@/firebase';

const fixedWidth = ref(null);
const scrollable = ref(null);

const EnablingData = ref([])
const FunctionalData = ref([])

const categoryRef = ref([]);
const jobRole = ref([]);

const jobCode = ref([]);
const skillCode = ref([])


//let proficiencyLevelData = ref([]);

var proficiencyLevelData = ref([
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
    ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
]);

// Use refs to make the data reactive
//var proficiencyLevelsRef = ref(proficiencyLevelData.value);


// Function to get colspan for each row
function getColspanForRow(row) {
// Add your condition here
if (row === 'Data Stewardship') {
return 4; // Change this to the desired colspan value
}
else if (row === 'Data Engineering') {
return 6;
}
else if (row === 'Data Science') {
return 5;
}
else if (row === 'AI Engineering') {
return 4;
}
else if (row === 'Applied Data/AI Research') {
return 4;
}
else if (row === 'Business Intelligence & Strategy') {
return 7;
}
}

const fetchAndAnalyzeFile = async () => {
    try {
        const filePath = 'excel.xlsx';
        const fileURL = await getDownloadURL(storageRef(storage, filePath));

        const response = await fetch(fileURL, { mode: 'cors' });
        const arrayBuffer = await response.arrayBuffer();

        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const skillsSheetName = 'Job Role Skills';

        if (workbook.SheetNames.includes(skillsSheetName)) {
            var skillsWorksheet = workbook.Sheets[skillsSheetName];
            processJobRoleSkillsEnabling(skillsWorksheet);
            processJobRoleSkills(skillsWorksheet);
        } else {
            console.error(`Sheet "${skillsSheetName}" not found in the Excel file.`);
        }

        function processJobRoleSkillsEnabling(worksheet) {
            const allRows = XLSX.utils.sheet_to_json(worksheet);

            // Replace 'FSC' with 'Functional' and filter rows based on the modified Skill Type
            var MatchingFunctional = allRows.map(row => ({
                ...row,
                'Skill Type': row['Skill Type'].replace('ESC', 'Enabling'),
            }))
                .filter(row => row['Skill Type'] === 'Enabling');


            if (MatchingFunctional.length > 0) {
                // Extract skills, proficiency levels, and replace Skill Code with corresponding category
                EnablingData.value = MatchingFunctional.map(row => ({
                    title: row['Skill Type'],
                    category: getCategoryForSkillCodeEnabling(row['Skill Code']),
                    relatedcategory: getRelatedCategoryForSkillCodeEnabling(row['Skill Code']),
                    skills: getSkillsForSkillCodeEnabling(row['Skill Code']),
                }));
                // Concatenate Skill Code values to the existing data in skillCode variable
                skillCode.value = skillCode.value.concat(MatchingFunctional.map(row => row['Skill Code']));

            } else {
                console.log('No matching rows found for Skill Type "Functional".');
            }
        }

        function getCategoryForSkillCodeEnabling(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            var functionalSkillsSheet = workbook.Sheets['Enabling Skills'];
            var categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['ESC Code'] === skillCode);


            return categoryRow ? categoryRow['ESC Category'] : '';
        }

        function getRelatedCategoryForSkillCodeEnabling(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            var functionalSkillsSheet = workbook.Sheets['Enabling Skills'];
            var categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['ESC Code'] === skillCode);

            return categoryRow ? categoryRow['ESC Related Category'] : '';
        }

        function getSkillsForSkillCodeEnabling(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            var functionalSkillsSheet = workbook.Sheets['Enabling Skills'];
            var categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['ESC Code'] === skillCode);

            return categoryRow ? categoryRow['ESC Title'] : '';
        }

        //Function
        function processJobRoleSkills(worksheet) {
            const allRows = XLSX.utils.sheet_to_json(worksheet);

            // Replace 'FSC' with 'Functional' and filter rows based on the modified Skill Type
            var MatchingFunctional = allRows.map(row => ({
                ...row,
                'Skill Type': row['Skill Type'].replace('FSC', 'Functional'),
            }))
                .filter(row => row['Skill Type'] === 'Functional');


            if (MatchingFunctional.length > 0) {
                // Extract skills, proficiency levels, and replace Skill Code with corresponding category
                FunctionalData.value = MatchingFunctional.map(row => ({
                    title: row['Skill Type'],
                    category: getCategoryForSkillCode(row['Skill Code']),
                    relatedcategory: getRelatedCategoryForSkillCode(row['Skill Code']),
                    skills: getSkillsForSkillCode(row['Skill Code']),
                }));
                // Concatenate Skill Code values to the existing data in skillCode variable
                skillCode.value = skillCode.value.concat(MatchingFunctional.map(row => row['Skill Code']));
            } else {
                console.log('No matching rows found for Skill Type "Functional".');
            }
        }

        function getCategoryForSkillCode(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            const functionalSkillsSheet = workbook.Sheets['Functional Skills'];
            const categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['FSC Code'] === skillCode);

            return categoryRow ? categoryRow['FSC Category'] : '';
        }

        function getRelatedCategoryForSkillCode(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            const functionalSkillsSheet = workbook.Sheets['Functional Skills'];
            const categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['FSC Code'] === skillCode);

            return categoryRow ? categoryRow['FSC Related Category'] : '';
        }

        function getSkillsForSkillCode(skillCode) {
            // Access the Functional Skills sheet to get the corresponding category for the skill code
            const functionalSkillsSheet = workbook.Sheets['Functional Skills'];
            const categoryRow = XLSX.utils.sheet_to_json(functionalSkillsSheet)
                .find(row => row['FSC Code'] === skillCode);

            return categoryRow ? categoryRow['FSC Title'] : '';
        }

        const jobRoleSheetName = 'Job Role Description';

        if (workbook.SheetNames.includes(jobRoleSheetName)) {
            const jobRoleSheet = workbook.Sheets[jobRoleSheetName];
            extractCategoriesFromJobRoleSheet(jobRoleSheet);
        } else {
            console.error(`Sheet "${jobRoleSheetName}" not found in the Excel file.`);
        }

        function extractCategoriesFromJobRoleSheet(sheet) {
            // Extract unique values from the 'Track' column
            const jobRoleData = XLSX.utils.sheet_to_json(sheet);
            const uniqueTracks = [...new Set(jobRoleData.map(row => row.Track))];

            // Update categoryRef with unique tracks
            categoryRef.value = uniqueTracks;
        }

        if (workbook.SheetNames.includes(jobRoleSheetName)) {
            const jobRoleSheet = workbook.Sheets[jobRoleSheetName];
            extractJobRolesFromSheet(jobRoleSheet);
        } else {
            console.error(`Sheet "${jobRoleSheetName}" not found in the Excel file.`);
        }

        function extractJobRolesFromSheet(sheet) {
            // Extract job roles and sort them based on 'Display Order'
            const jobRoleData = XLSX.utils.sheet_to_json(sheet);
            const sortedJobRoles = jobRoleData
                .sort((a, b) => a['Display Order'] - b['Display Order'])
                .map(row => row['Job Role']);
            const sortedJobCode = jobRoleData
                .sort((a, b) => a['Display Order'] - b['Display Order'])
                .map(row => row['Job Code']);

            // Update jobRole ref with sorted job roles
            jobRole.value = sortedJobRoles;
            jobCode.value = sortedJobCode;
        }

        var skillsWorksheet = workbook.Sheets['Job Role Skills'];
        var allRows = XLSX.utils.sheet_to_json(skillsWorksheet);
        console.log(allRows)

        // Iterate through each job code and skill code combination
        console.log(skillCode) 
        console.log(jobCode)

       // Initialize proficiencyLevelData with zeros
        for (let i = 0; i < skillCode.value.length; i++) {
            proficiencyLevelData.value.push([]);
            for (let j = 0; j < jobCode.value.length; j++) {
                proficiencyLevelData.value[i][j] = '';
            }
        }

        console.log(proficiencyLevelData)

        // Iterate through each job code and skill code combination
        skillCode.value.forEach((skillCodeValue, rowIndex) => {
            jobCode.value.forEach((jobCodeValue, colIndex) => {
                console.log(skillCodeValue + ' paired with ' + jobCodeValue);

                // Check if both jobCodeValue and skillCodeValue are defined
                if (skillCodeValue !== undefined) {
                    // Find the corresponding row in the "Job Role Skills" sheet based on job code and skill code
                    const matchingRow = allRows.find(
                        row =>
                            row['Job Code'] === jobCodeValue && row['Skill Code'] === skillCodeValue
                    );

                    // Check if matchingRow is defined and 'Proficiency Level' is present
                    if (matchingRow && 'Proficiency Level' in matchingRow) {
                        console.log(matchingRow['Proficiency Level']);
                        console.log(rowIndex);
                        console.log(colIndex);

                        // Assign the proficiency level if there is a match
                        proficiencyLevelData.value[rowIndex][colIndex] = matchingRow['Proficiency Level'];
                    } else {
                        // Handle the case where either matchingRow is undefined or 'Proficiency Level' is not present
                        proficiencyLevelData.value[rowIndex][colIndex] = '';
                    }
                }
            });
        });


        console.log(proficiencyLevelData)   

    } catch (error) {
        console.error('Error fetching and analyzing file:', error);
    }
};

onMounted(() => {
    fetchAndAnalyzeFile();
    syncScroll();

    // Add event listener to synchronize scroll from scrollable to fixed-width
    scrollable.value.addEventListener('scroll', () => {
        fixedWidth.value.scrollTop = scrollable.value.scrollTop;
    });

    // Add event listener to synchronize scroll from fixed-width to scrollable
    fixedWidth.value.addEventListener('scroll', () => {
        scrollable.value.scrollTop = fixedWidth.value.scrollTop;
    });
});

function syncScroll() {
    // Set the height of fixed-width to match scrollable
    fixedWidth.value.style.height = `${scrollable.value.clientHeight}px`;
}
</script>

  
<style scoped>
.container {
    display: flex;
    padding: 0px;
    max-height: 740px !important;
}

#left-table {
    white-space: nowrap;
}


.fixed-width::-webkit-scrollbar {
    display: none;
}

.fixed-width {
    width: 500%;
    /* Adjust the fixed width as needed */
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}



.scrollable {
    overflow-x: auto;
    overflow-y: scroll;
    min-width: 0;
    /* Add this line to allow the div to shrink below its content size */
}

.scrollable th {
    text-align: center;
}

thead {
    position: sticky;
    top: 0;
    background-color: #44546a;
    color: white;
    z-index: 1;
}

thead tr,
th {
    border: 2px solid #ddd;
    border-top: 1px solid #ddd;
}


table {
    border-collapse: collapse;
    width: 100%;
}

td {
    border: 2px solid #ddd;
    padding: 8px;
    text-align: left;
    color: white;
}
</style>
  