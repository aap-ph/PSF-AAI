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
      <td style="border: solid white;" @click="sendText('Chief [Business Function] Officer')">Chief [Business Function] Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Chief Data Officer')">Chief Data Officer</td> 
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Chief Information Officer')">Chief Information Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Chief Analytics Officer')">Chief Analytics Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Chief Technology Officer')">Chief Technology Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Chief Scientific Officer')">Chief Scientific Officer</td>
      <td style="width: 10px;"></td><td rowspan="11" style="border: solid white;">Refer to the PSF-Human Capital Development, Learning & Organization Development Track</td>
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
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Business Analytics Director')">Business Analytics Director</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Data Governance Officer')">Data Governance Officer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Chief Data Architect')">Chief Data Architect</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Chief Data Scientist')">Chief Data Scientist</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Chief AI Engineer')">Chief AI Engineer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Director of Research')">Director of Research</td>
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
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Business Analytics Manager')">Business Analytics Manager</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Data Governance Manager')">Data Governance Manager</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Data Architect')">Data Architect</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Senior Data Scientist')">Senior Data Scientist</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Senior AI Engineer')">Senior AI Engineer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="sendText('Research Manager')">Research Manager</td>
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
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Senior Business Intelligence Analyst')">Senior Business Intelligence Analyst</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Data Protection Specialist')">Data Protection Specialist</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Senior Data Engineer')">Senior Data Engineer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Data Scientist')">Data Scientist</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('AI Engineer')">AI Engineer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="sendText('Senior Applied Data/AI Researcher')">Senior Applied Data/AI Researcher</td>
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
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="sendText('Business Intelligence Analyst')">Business Intelligence Analyst</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td>
      <td style="border: solid white;" @click="sendText('Data Engineer')">Data Engineer</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td colspan="3" style="border: solid white;" @click="sendText('Machine Learning Engineer')">Machine Learning Engineer</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td style="border: solid white;" @click="sendText('Applied Data/AI Researcher')">Applied Data/AI Researcher</td>
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
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="sendText('Data Analyst')">Data Analyst</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td> 
      <td colspan="9" style="border: solid white;" @click="sendText('Associate Data Engineer')">Associate Data Engineer</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td colspan="3" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td colspan="10" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Associate</th>
      <td style="width: 10px;"></td><td colspan="13" style="border: solid white;" @click="sendText('Associate Data Analyst')">Associate Data Analyst</td>
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

let selectedFile = null;

const handleFileChange = (event) => {
  selectedFile = event.target.files[0];
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
</script>

