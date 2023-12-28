<template>
  <table class="styled-table">
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
      <td style="border: solid white;" @click="logText">Chief [Business Function] Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Chief Data Officer</td> 
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Chief Information Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Chief Analytics Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Chief Technology Officer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Chief Scientific Officer</td>
      <td style="width: 10px;"></td><td rowspan="11" style="border: solid white;" @click="logText">Refer to the PSF-Human Capital Development, Learning & Organization Development Track</td>
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
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Business Analytics Director</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Data Governance Officer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Chief Data Architect</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Chief Data Scientist</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Chief AI Engineer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Director of Research</td>
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
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Business Analytics Manager</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Data Governance Manager</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Data Architect</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Senior Data Scientist</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Senior AI Engineer</td>
      <td style="width: 10px;"></td><td rowspan="2" style="border: solid white;" @click="logText">Research Manager</td>
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
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Senior Business Intelligence Analyst</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Data Protection Specialist</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Senior Data Engineer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Data Scientist</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">AI Engineer</td>
      <td style="width: 10px;"></td><td style="border: solid white;" @click="logText">Senior Applied Data/AI Researcher</td>
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
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="logText">Business Intelligence Analyst</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td>
      <td style="border: solid white;" @click="logText">Data Engineer</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td colspan="3" style="border: solid white;" @click="logText">Machine Learning Engineer</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td><td style="border: solid white;" @click="logText">Applied Data/AI Researcher</td>
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
      <td style="width: 10px;"></td><td colspan="3" style="border: solid white;" @click="logText">Data Analyst</td>
      <td style="padding: 0; margin: 0; border: none;"><img src="/arrow-dual-horizontal.png"></td> 
      <td colspan="9" style="border: solid white;" @click="logText">Associate Data Engineer</td>
    </tr>
    <tr>
      <th style=" border-right: solid white"></th>
      <td style="width: 10px;"></td><td colspan="2" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
      <td colspan="6" rowspan="1" style="padding: 0; margin: 0; border: none;"><img src="/arrow-up-bold.svg"></td>
    </tr>
    <tr>
      <th style="font-weight: bold; border-right: solid white">Associate</th>
      <td style="width: 10px;"></td><td colspan="13" style="border: solid white;" @click="logText">Associate Data Analyst</td>
    </tr>
  </table>
</template>
<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
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
<script>
export default {
  methods: {
    logText(event) {
      console.log(event.target.textContent);
    },
  },
};
</script>


