<template>
    <div>
        <div class="fs-4 text-light text-center">{{ clickedText }}</div>
        <div class="contents row p-2 text-light justify-content-md-center">
            <div class="col-md-7">
                <div class="d-flex flex-column m-2">
                    <div>
                        <div class="title">
                            Job Description
                        </div>
                        <div class="subtitle" v-if="globalJobRoleDescription !== null">
                            {{ globalJobRoleDescription }}
                        </div>
                        <div v-else>
                            Loading job description...
                        </div>
                    </div>

                    <div class="mt-5">
                        <div class="title">
                            Critical Work Functions & Key Tasks
                        </div>
                        <div class="subtitle">
                        </div>
                        <div v-if="Object.keys(groupedTasksByFunction).length > 0">
                            <div v-for="(tasks, critWorkFunc) in groupedTasksByFunction" :key="critWorkFunc">
                                <div class="critFunc">{{ critWorkFunc }}</div>
                                <ul>
                                    <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
                                </ul>
                            </div>
                        </div>
                        <div v-else>
                            <p>No tasks available for the specified job role.</p>
                        </div>
                    </div>
                    <div class="performance mt-5">
                        <div class="title">
                            Performance Expectations
                        </div>
                        <div class="subtitle" v-if="globalperformanceExpectation !== null">
                            {{ globalperformanceExpectation }}
                        </div>
                        <div v-else>
                            Loading job description...
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-0">
                <div class="d-flex flex-column m-2">
                    <div class="competence">
                        <div class="title" style="font-weight: bold;">
                            Functional Skills and Competencies
                        </div>
                        <div class="container mt-2 p-0 bg-dark">
                            <table class="table table-bordered reduced-font">
                                <thead>
                                    <tr>
                                        <th scope="col" style="text-align: center; font-weight: bold;">Skill</th>
                                        <th scope="col" style="text-align: center; font-weight: bold;">Proficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(FSC, index) in FSC" :key="index"
                                        @click="redirectToFSCDetails('functionalskillsdetails', FSC.JobCode)">
                                        <td>{{ FSC.title }}</td>
                                        <td style="text-align: center;">{{ FSC.proficiency }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="ESC">
                        <div class="title" style="font-weight: bold;">
                            Enabling Skills and Competencies
                        </div>
                        <div class="container mt-2 p-0">
                            <table class="table reduced-font">
                                <thead>
                                    <tr>
                                        <th scope="col" style="text-align: center; font-weight: bold;">Skill</th>
                                        <th scope="col" style="text-align: center; font-weight: bold;">Proficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ESC, index) in ESC" :key="index"
                                        @click="redirectToESCDetails('enablingskillsdetails', ESC.JobCode)">
                                        <td>{{ ESC.title }}</td>
                                        <td style="text-align: center;">{{ ESC.proficiency }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import { storage, ref as storageRef, getDownloadURL } from '@/firebase';
import { useRouter } from 'vue-router';

const clickedText = ref('');

onMounted(() => {
    // Access the text parameter from the route
    const route = useRoute(); // Use useRoute to get the route object
    clickedText.value = route.params.text || '';
});

var globalJobRoleDescription = ref(null);
var globalperformanceExpectation = ref(null);
var groupedTasksByFunction = ref({});
var FSC = ref([]);
var ESC = ref([]);

const router = useRouter();
const redirectToFSCDetails = (page, skillTitle) => {
    router.push({ name: page, params: { fscCode: skillTitle } });
};

const redirectToESCDetails = (page, skillTitle) => {
    router.push({ name: page, params: { escCode: skillTitle } });
};

const sortSkills = (skills) => {
    return skills.sort((a, b) => a.title.localeCompare(b.title));
};

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
        const sheetName = 'Job Role Description';

        if (workbook.SheetNames.includes(sheetName)) {
            const worksheet = workbook.Sheets[sheetName];

            // Extract data from the "Job Role Description" sheet
            const allRows = XLSX.utils.sheet_to_json(worksheet);

            // Specify the job role you want to filter

            const targetJobRole = clickedText.value;

            // Filter rows based on the job role
            const matchingRows = allRows.filter(row => row['Job Role'] === targetJobRole);

            if (matchingRows.length > 0) {
                // Assign the job role description to the global variable
                let JobRoleDescription = matchingRows[0]['Job Role Description'];
                let performanceExpectation = matchingRows[0]['Performance Expectations'];
                globalJobRoleDescription.value = JobRoleDescription;
                globalperformanceExpectation.value = performanceExpectation;
                //console.log(`Job Role: ${targetJobRole}, Description: ${globalJobRoleDescription}`);
            } else {
                console.log(`No matching rows found for job role "${targetJobRole}".`);
            }

        } else {
            console.error(`Sheet "${sheetName}" not found in the Excel file.`);
        }

        // Assuming "Job Role CWF-KT" is the sheet name
        const Critfunc = 'Job Role CWF-KT';

        if (workbook.SheetNames.includes(Critfunc)) {
            const worksheet = workbook.Sheets[Critfunc];

            // Extract data from the "Job Role CWF-KT" sheet
            const allRows = XLSX.utils.sheet_to_json(worksheet);

            // Specify the job role you want to filter
            const targetJobRole = clickedText.value;

            // Filter rows based on the job role
            const matchingRows = allRows.filter(row => row['Job Role'] === targetJobRole);

            if (matchingRows.length > 0) {
                // Group tasks by Critical Work Function
                const groupedTasks = {};

                matchingRows.forEach(row => {
                    const critWorkFunc = row['Critical Work Function'];
                    const keyTask = row['Key Tasks'];

                    if (!groupedTasks[critWorkFunc]) {
                        groupedTasks[critWorkFunc] = [];
                    }

                    groupedTasks[critWorkFunc].push(keyTask);
                });

                // Assign the grouped tasks to the global variable
                groupedTasksByFunction.value = groupedTasks;
            } else {
                console.log(`No matching rows found for job role "${targetJobRole}".`);
            }
        } else {
            console.error(`Sheet "${Critfunc}" not found in the Excel file.`);
        }

        // Function to handle the processing of "Job Role Skills" sheet
        const processJobRoleSkills = (worksheet) => {
            const allRows = XLSX.utils.sheet_to_json(worksheet);
            // Specify the job role you want to filter
            const targetJobRole = clickedText.value;

            // Filter rows based on the job role and Skill Type
            const MatchingFSC = allRows.filter(row => row['Job Role'] === targetJobRole && row['Skill Type'] === 'FSC');

            if (MatchingFSC.length > 0) {
                // Extract skills and proficiency levels
                FSC.value = MatchingFSC.map(row => ({
                    title: row['Skill Title'],
                    proficiency: row['Proficiency Level'],
                    JobCode: row['Skill Code'],
                }));
            } else {
                console.log(`No matching rows found for job role "${targetJobRole}" with Skill Type "FSC".`);
            }

            const MatchingESC = allRows.filter(row => row['Job Role'] === targetJobRole && row['Skill Type'] === 'ESC');

            if (MatchingESC.length > 0) {
                // Extract skills and proficiency levels
                ESC.value = MatchingESC.map(row => ({
                    title: row['Skill Title'],
                    proficiency: row['Proficiency Level'],
                    JobCode: row['Skill Code'],
                }));
            } else {
                console.log(`No matching rows found for job role "${targetJobRole}" with Skill Type "ESC".`);
            }
        };


        // Assuming "Job Role Skills" is the sheet name
        const skillsSheetName = 'Job Role Skills';

        if (workbook.SheetNames.includes(skillsSheetName)) {
            const skillsWorksheet = workbook.Sheets[skillsSheetName];
            processJobRoleSkills(skillsWorksheet);

            // Sort FSC and ESC arrays
            FSC.value = sortSkills(FSC.value);
            ESC.value = sortSkills(ESC.value);  
        } else {
            console.error(`Sheet "${skillsSheetName}" not found in the Excel file.`);
        }

    } catch (error) {
        console.error('Error processing Excel file:', error.message);
    }
};
onMounted(fetchAndAnalyzeFile);
</script>
  
<style scoped>
.prof{
    text-align: center;
}
.row {
    margin-right: 0 !important;
    justify-content: center !important;
}

.list .subtitle {
    font-size: small;
}

.title {
    text-decoration: underline;
    font-size: small;
}

.reduced-font {
    font-size: smaller;
    /* Adjust the font size as needed */
}

.file-upload {
    text-align: center;
}

.table {
    background: none !important;
}

td:hover {
    cursor: pointer;
}

.critFunc {
    font-style: italic;
    font-size: small;
}

.file-upload input {
    margin-top: 8px;
}

.table {
    width: 100% !important;
    border-collapse: collapse;
    margin-top: 10px;
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
    color: white;
    text-align: left;
    background-color: rgb(68, 84, 106) !important;
}

.table th {
    background-color: #f2f2f2;
}
</style>
  