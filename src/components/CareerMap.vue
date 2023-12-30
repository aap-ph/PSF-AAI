<template>
  <table class="styled-table mb-3">
    <tr>
      <th style="border-bottom: solid white; border-right: solid white;"></th>
      <td style="width: 10px;border-bottom: solid white;"></td>
      <td style="font-weight: bold; left: 25px; top: 1px; border-bottom: solid white; text-align: center;" title="This career path focuses on using data to inform business decisions and strategy. Professionals in this field analyze data trends to provide insights that drive business growth, efficiency, and innovation. They often work with management teams to understand business objectives and translate data findings into actionable strategies.">Business<br> Intelligence &<br> Strategy</td>
      <td style="width: 10px;border-bottom: solid white;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 165px; top: 30px;" title="This career path focuses on using data to inform business decisions and strategy. Professionals in this field analyze data trends to provide insights that drive business growth, efficiency, and innovation. They often work with management teams to understand business objectives and translate data findings into actionable strategies.">Data Stewardship</td>
      <td style="border-bottom: solid white; width: 10px;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 325px; top: 30px;" title="Data engineers design, build, and maintain the systems and infrastructure that collect, process, and store data. They are responsible for the technical architecture of data projects, including the integration of disparate data sources, data transformation, and the creation of databases and data warehouses.">Data Engineering</td>
      <td style="border-bottom: solid white; width: 10px;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 495px; top: 30px;" title="Data scientists analyze and interpret complex data to help organizations make better decisions. They use statistical techniques, machine learning, and predictive modeling to extract insights from data. Their work involves not only analyzing data but also developing new algorithms and models to solve specific business problems.">Data Science</td>
      <td style="border-bottom: solid white; width: 10px;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 645px; top: 30px;" title="AI engineers focus on developing, deploying, and maintaining AI systems. This involves programming, algorithm development, and working with machine learning and deep learning models. They collaborate closely with data scientists to implement AI solutions and ensure that they are scalable, efficient, and effective.">AI Engineering</td>
      <td style="border-bottom: solid white; width: 10px;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 795px; top: 15px; text-align: center;" title="This career track is for professionals who conduct research in data analytics and AI. They work on developing new methods, algorithms, and technologies in the field. Their focus is often on pushing the boundaries of what is currently possible in analytics and AI, contributing to academic knowledge as well as practical applications.">Applied Data/AI<br>Research</td>
      <td style="border-bottom: solid white; width: 10px;"></td>
      <td style="border-bottom: solid white; font-weight: bold; left: 965px; top: 15px; text-align: center;" title="This career path in data and AI education for aspiring teachers, trainers, and learning providers encompasses a journey from introductory instructional roles to advanced educational leadership, specializing in imparting and developing cutting-edge analytics and AI knowledge and skills.">Data/AI<br>Education</td>
    </tr>
    <tr>
      <th style=" border-right: solid white">
      </th>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">C-Level</th>
      <td style="width: 10px;"></td>
      <td style="border: solid white;" @click="sendText(D5)">{{D5}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(G5)">{{G5}}</td> 
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(J5)">{{J5}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(M5)">{{M5}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(P5)">{{P5}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(S5)">{{S5}}</td>
      <td style="width: 10px;"></td><td rowspan="11" style="border: solid white;">{{V5}}</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Senior Director</th>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(D8)">{{D8}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(G8)">{{G8}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(J8)">{{J8}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(M8)">{{M8}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(P8)">{{P8}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(S8)">{{S8}}</td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Director</th>
      <td style="width: 10px; border-right: solid white"></td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold;  border-right: solid white">Senior Manager</th>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(D14)">{{D14}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(G14)">{{G14}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(J14)">{{J14}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(M14)">{{M14}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(P14)">{{P14}}</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText(S14)">{{S14}}</td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Manager</th>
      <td style="width: 10px;"></td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Senior Professional/ Supervisor</th>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(D20)">{{D20}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(G20)">{{G20}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(J20)">{{J20}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(M20)">{{M20}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(P20)">{{P20}}</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText(S20)">{{S20}}</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Professional</th>
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="sendText(D23)">{{D23}}</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td>
      <td style="border: solid white;" @click="sendText(J23)">{{J23}}</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td colspan="3" style="border: solid white;" @click="sendText(M23)">{{M23}}</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td style="border: solid white;" @click="sendText(S23)">{{S23}}</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td colspan="3" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td colspan="3" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td style="width: 10px;"></td><td rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Senior Associate</th>
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="sendText(D26)">{{D26}}</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td> 
      <td colspan="9" style="border: solid white;" @click="sendText(J26)">{{J26}}</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td colspan="3" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td colspan="10" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Associate</th>
      <td style="width: 10px;"></td><td colspan="13" style="border: solid white;" @click="sendText(D29)">{{D29}}</td>
    </tr>
  </table>
  <div class="d-flex flex-row justify-content-end align-items-end">
    <input type="file" @change="handleFileChange">
    <button @click="uploadFile">Upload</button>
  </div>
</template>
<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
}

td:hover{
  cursor: pointer;
}

.styled-table th,
.styled-table td {
  /* border: 1px solid #ddd; */
  padding: 10px;
  margin: 100px;
  text-align: center;
  color: white; /* Set text color to white */
}

.styled-table td img {
    top: 23%;
    left: 17%;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    height: 30px;
    width: 30px;
  }
</style>

<script setup>
import { useRouter } from 'vue-router';
import { storage, uploadBytes, ref as storageRef, getDownloadURL } from '@/firebase';
import * as XLSX from 'xlsx/dist/xlsx.full.min.js';
import { onMounted, ref } from 'vue';

//Row 5
var D5 = ref('') //Value of Chief [Business Function] Officer"
var G5 = ref('') //Value of Chief Data Officer
var J5 = ref('') //Value of Chief Information Officer
var M5 = ref('') //Value of Chief Analytics Officer
var P5 = ref('') //Value of Chief Technology Officer
var S5 = ref('') //Value of Chief Scientific Officer
var V5 = ref('') //Value of Refer.....

//Row 8
var D8 = ref('') //Value of Business Analytics Director
var G8 = ref('') //Value of Data Governance Officer
var J8 = ref('') //Value of Chief Data Architect
var M8 = ref('') //Value of Chief Data Scientist
var P8 = ref('') //Value of Chief AI Engineer
var S8 = ref('') //Value of Director of Research

//Row 14
var D14 = ref('') //Value of Business Analytics Manager
var G14 = ref('') //Value of Data Governance Manager
var J14 = ref('') //Value of Data Architect
var M14 = ref('') //Value of Senior Data Scientist
var P14 = ref('') //Value of Senior AI Engineer
var S14 = ref('') //Value of Research Manager

//Row 20
var D20 = ref('') 
var G20 = ref('') 
var J20 = ref('') 
var M20 = ref('')
var P20 = ref('')
var S20 = ref('')

//Row 23
var D23 = ref('') 
var J23 = ref('') 
var M23 = ref('') 
var S23 = ref('') 

//Row 26
var D26 = ref('')
var J26 = ref('') 

//Row 29
var D29  = ref('')


let selectedFile = null;

const handleFileChange = (event) => {
  selectedFile = event.target.files[0];
};

const fetchData = async () => {
  try {
    const filePath = 'excel.xlsx';
    const fileURL = await getDownloadURL(storageRef(storage, filePath));
    const response = await fetch(fileURL, { mode: 'cors' });
    const arrayBuffer = await response.arrayBuffer();

    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming you want to read cell D5 in the sheet named 'Career Map'
    const sheetName = 'Career Map';
    const sheet = workbook.Sheets[sheetName];

    //Row 5
    var cellValue = sheet['D5'] ? sheet['D5'].v : undefined;
    D5.value = cellValue;

    cellValue = sheet['G5'] ? sheet['G5'].v : undefined;
    G5.value = cellValue;

    cellValue = sheet['J5'] ? sheet['J5'].v : undefined;
    J5.value = cellValue;

    cellValue = sheet['M5'] ? sheet['M5'].v : undefined;
    M5.value = cellValue;

    cellValue = sheet['P5'] ? sheet['P5'].v : undefined;
    P5.value = cellValue;

    cellValue = sheet['S5'] ? sheet['S5'].v : undefined;
    S5.value = cellValue;

    cellValue = sheet['V5'] ? sheet['V5'].v : undefined;
    V5.value = cellValue;

    //Row 8
    cellValue = sheet['D8'] ? sheet['D8'].v : undefined;
    D8.value = cellValue;

    cellValue = sheet['G8'] ? sheet['G8'].v : undefined;
    G8.value = cellValue;

    cellValue = sheet['J8'] ? sheet['J8'].v : undefined;
    J8.value = cellValue;

    cellValue = sheet['M8'] ? sheet['M8'].v : undefined;
    M8.value = cellValue;

    cellValue = sheet['P8'] ? sheet['P8'].v : undefined;
    P8.value = cellValue;

    cellValue = sheet['S8'] ? sheet['S8'].v : undefined;
    S8.value = cellValue;

    //Row 14
    cellValue = sheet['D14'] ? sheet['D14'].v : undefined;
    D14.value = cellValue;

    cellValue = sheet['G14'] ? sheet['G14'].v : undefined;
    G14.value = cellValue;

    cellValue = sheet['J14'] ? sheet['J14'].v : undefined;
    J14.value = cellValue;

    cellValue = sheet['M14'] ? sheet['M14'].v : undefined;
    M14.value = cellValue;

    cellValue = sheet['P14'] ? sheet['P14'].v : undefined;
    P14.value = cellValue;

    cellValue = sheet['S14'] ? sheet['S14'].v : undefined;
    S14.value = cellValue;

    //Row 20
    cellValue = sheet['D20'] ? sheet['D20'].v : undefined;
    D20.value = cellValue;

    cellValue = sheet['G20'] ? sheet['G20'].v : undefined;
    G20.value = cellValue;

    cellValue = sheet['J20'] ? sheet['J20'].v : undefined;
    J20.value = cellValue;

    cellValue = sheet['M20'] ? sheet['M20'].v : undefined;
    M20.value = cellValue;

    cellValue = sheet['P20'] ? sheet['P20'].v : undefined;
    P20.value = cellValue;

    cellValue = sheet['S20'] ? sheet['S20'].v : undefined;
    S20.value = cellValue;

    //Row 23
    cellValue = sheet['D23'] ? sheet['D23'].v : undefined;
    D23.value = cellValue;

    cellValue = sheet['J23'] ? sheet['J23'].v : undefined;
    J23.value = cellValue;

    cellValue = sheet['M23'] ? sheet['M23'].v : undefined;
    M23.value = cellValue;

    cellValue = sheet['S23'] ? sheet['S23'].v : undefined;
    S23.value = cellValue;

    //Row 26
    cellValue = sheet['D26'] ? sheet['D26'].v : undefined;
    D26.value = cellValue;

    cellValue = sheet['J26'] ? sheet['J26'].v : undefined;
    J26.value = cellValue;

    //Row 29
    cellValue = sheet['D29'] ? sheet['D29'].v : undefined;
    D29.value = cellValue;



  } catch (error) {
    console.error(error);
  }
};


const uploadFile = () => {
  if (!selectedFile) {
    return alert('Please select a file to upload.');
  }

  // Set the file name to "excel"
  const modifiedFileName = 'excel.xlsx';

  // Create a new File object with the modified file name
  const modifiedFile = new File([selectedFile], modifiedFileName, { type: selectedFile.type });

  const fileRef = storageRef(storage, modifiedFile.name);

  uploadBytes(fileRef, modifiedFile)
    .then((snapshot) => {
      alert("Upload complete! ");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
    
        // Do something with the download URL
      });
    })
    .catch((error) => {
      alert("Upload failed: " + error);
      // Handle errors appropriately, e.g., display user-friendly messages
    });
};


const router = useRouter();

const sendText = (text) => {
  router.push({ name: 'skillsmap', params: { text: text } });
};


onMounted(fetchData);
</script>

