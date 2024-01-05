<template>
    <div class="container">
        <div class="fixed-width" ref="fixedWidth">
            <!-- Left Half Content Goes Here -->
            <table id="left-table">
                <thead>
                    <tr class="first-header">
                        <th>Skill Type</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in EnablingData" :key="index">
                        <td>{{ row.title }}</td>
                        <td>{{ row.skills }}</td>
                    </tr>
                    <tr v-for="(row, index) in FunctionalData" :key="index">
                        <td>{{ row.title }}</td>
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
                        <th rowspan="2">Skill Category</th>
                        <th rowspan="2">Related Category</th>
                        <th v-for="(row, index) in categoryRef" :key="index" :colspan="getColspanForRow(row)"
                            style="font-size: 14px; padding: 0px;">{{ row }}</th>
                    </tr>
                    <tr>
                        <th v-for="(row, index) in jobRole" :key="index">{{ row }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in EnablingData" :key="index" style="white-space: nowrap;">
                        <td>{{ row.category }}</td>
                        <td>{{ row.relatedcategory }}</td>
                        <td v-for="(col, colIndex) in proficiencyLevelData[index]" :key="colIndex">{{ col }}</td>
                    </tr>
                    <tr v-for="(row, index) in FunctionalData" :key="index" style="white-space: nowrap;">
                        <td>{{ row.category }}</td>
                        <td>{{ row.relatedcategory }}</td>
                        <td v-for="(col, colIndex) in proficiencyLevelData[index + EnablingData.length]"
                            :key="colIndex">{{ col }}</td>
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


let proficiencyLevelData = ref([]);

// Initialize proficiencyLevelData with zeros
// for (let i = 0; i < skillCode.value.length; i++) {
//     proficiencyLevelData.value.push([]);
//     for (let j = 0; j < jobCode.value.length; j++) {
//         proficiencyLevelData.value[i].push('0');
//     }
// }

// var proficiencyLevelData = ref([
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
//     ['', '', '', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5', '3', '4', '4', '5'],
// ]);

// Use refs to make the data reactive
//var proficiencyLevelsRef = ref(proficiencyLevelData.value);


// Function to get colspan for each row
const getColspanForRow = (row) => {
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
        return 5;
    }
    else if (row === 'Business Intelligence & Strategy') {
        return 7;
    }
};

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

            // Replace 'ESC' with 'Enabling' and filter rows based on the modified Skill Type
            var MatchingFunctional = allRows
                .map(row => ({
                    ...row,
                    'Skill Type': row['Skill Type'].replace('ESC', 'Enabling'),
                }))
                .filter(row => row['Skill Type'] === 'Enabling' && row['Skill Code'] !== undefined);

            if (MatchingFunctional.length > 0) {
                // Extract skills, proficiency levels, and replace Skill Code with corresponding category
                const newSkillCodes = MatchingFunctional.map(row => row['Skill Code']);

                // Add new skill codes to skillCode variable only if they don't already exist
                newSkillCodes.forEach(skillCodeValue => {
                    if (skillCodeValue !== undefined && !skillCode.value.includes(skillCodeValue)) {
                        skillCode.value.push(skillCodeValue);

                        // Add the skill to EnablingData only if it's not already present
                        const isSkillAlreadyPresent = EnablingData.value.some(skill => skill.skills === getSkillsForSkillCodeEnabling(skillCodeValue));
                        if (!isSkillAlreadyPresent) {
                            EnablingData.value.push({
                                title: 'Enabling',  // Assuming 'Enabling' as the title for this case
                                category: getCategoryForSkillCodeEnabling(skillCodeValue),
                                relatedcategory: getRelatedCategoryForSkillCodeEnabling(skillCodeValue),
                                skills: getSkillsForSkillCodeEnabling(skillCodeValue),
                            });
                        }
                    }
                });
            } else {
                console.log('No matching rows found for Skill Type "Enabling" or Skill Code is undefined.');
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
            var MatchingFunctional = allRows
                .map(row => ({
                    ...row,
                    'Skill Type': row['Skill Type'].replace('FSC', 'Functional'),
                }))
                .filter(row => row['Skill Type'] === 'Functional' && row['Skill Code'] !== undefined);

            if (MatchingFunctional.length > 0) {
                // Extract skills, proficiency levels, and replace Skill Code with corresponding category
                const newSkillCodes = MatchingFunctional.map(row => row['Skill Code']);

                // Add new skill codes to skillCode variable only if they don't already exist
                newSkillCodes.forEach(skillCodeValue => {
                    if (skillCodeValue !== undefined && !skillCode.value.includes(skillCodeValue)) {
                        skillCode.value.push(skillCodeValue);

                        // Add the skill to FunctionalData only if it's not already present
                        const isSkillAlreadyPresent = FunctionalData.value.some(skill => skill.skills === getSkillsForSkillCode(skillCodeValue));
                        if (!isSkillAlreadyPresent) {
                            FunctionalData.value.push({
                                title: 'Functional',  // Assuming 'Functional' as the title for this case
                                category: getCategoryForSkillCode(skillCodeValue),
                                relatedcategory: getRelatedCategoryForSkillCode(skillCodeValue),
                                skills: getSkillsForSkillCode(skillCodeValue),
                            });
                        }
                    }
                });
            } else {
                console.log('No matching rows found for Skill Type "Functional" or Skill Code is undefined.');
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
        //console.log(proficiencyLevelData)

        for (let i = 0; i < skillCode.value.length; i++) {
            proficiencyLevelData.value.push([]);
            for (let j = 0; j < jobCode.value.length; j++) {
                proficiencyLevelData.value[i].push('0');
            }
        }

        // Iterate through each job code and skill code combination
        skillCode.value.forEach((skillCodeValue, rowIndex) => {
            jobCode.value.forEach((jobCodeValue, colIndex) => {
                //console.log(skillCodeValue + ' paired with ' + jobCodeValue);

                // Check if both jobCodeValue and skillCodeValue are defined
                if (skillCodeValue !== undefined) {
                    // Find the corresponding row in the "Job Role Skills" sheet based on job code and skill code
                    const matchingRow = allRows.find(
                        row =>
                            row['Job Code'] === jobCodeValue && row['Skill Code'] === skillCodeValue
                    );

                    // Check if matchingRow is defined and 'Proficiency Level' is present
                    if (matchingRow && 'Proficiency Level' in matchingRow) {
                        //console.log(matchingRow['Proficiency Level']);
                        //console.log(rowIndex);
                        //console.log(colIndex);

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
    syncScroll();
    fetchAndAnalyzeFile();

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
    // fixedWidth.value.style.height = `${scrollable.value.clientHeight}px`; // Do not uncomment this line
}
</script>

<style scoped>
.container {
    display: flex;
    padding: 0px;
    max-height: 800px !important;
    width: 150vw;
}

/* #left-table {
    white-space: nowrap;
} */

.fixed-width::-webkit-scrollbar {
    display: none;
}

/* .scrollable::-webkit-scrollbar:vertical{
    height: 10px;
} */

.fixed-width {
    width: 200%; /* Adjust the width as needed */
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    height: 800px;
}

.first-header {
    height: 123px;
    text-align: center;
}
/* #right-table {
    width: 50%; 
    box-sizing: border-box;
} */

.scrollable {
    overflow-x: auto;
    overflow-y: scroll;
    min-width: 0;
    height: 815px;
    width: 300%;
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
    border: 1px solid #ddd;
    border-top: 1px solid #ddd;
}

table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
}

td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: left;
    color: white;
}

@media (max-width: 1600px) {
    .fixed-width {
        height: 600px !important;
    }
    .first-header {
        height: 122px;
    }
    .scrollable {
        height: 612px !important;
        width: 300% !important;
    }
}

@media (max-width: 1377px) {
    .fixed-width {
        height: 500px !important;
    }
    .first-header {
        height: 122px;
    }
    .scrollable {
        height: 515px !important;
        width: 200% !important;
    }
}


</style>

