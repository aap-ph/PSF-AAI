<template>
    <div>
      <table class="styled-table">
        <tr>
          <th>Enabling Skills</th>
          <td colspan="3">ESC-DGF: Digital Fluency</td>
          <td style="border: none;"></td>
        </tr>
        <tr>
          <th>Category</th>
          <td colspan="3">Staying Relevant</td>
        </tr>
        <tr>
          <th>Related Category</th>
          <td colspan="3">21st Century Skills</td>
        </tr>
        <tr>
          <th>Description</th>
          <td colspan="3" id="long-words">Leverage digital technology tools, systems, and software across work processes and activities to solve problems, drive efficiency and facilitate information sharing</td>
        </tr>
        <tr>
          <th rowspan="3">Proficiency Description</th>
          <td>Basic</td>
          <td>Intermediate</td>
          <td>Advanced</td>
        </tr>
        <tr>
          <td>ESC-DGF-B</td>
          <td>ESC-DGF-I</td>
          <td>ESC-DGF-A</td>
        </tr>
        <tr>
          <td id="long-words">Perform work processes and activities using identified digital technology tools, systems and software</td>
          <td id="long-words">Identify opportunities and evaluate risks of integrating digital technology tools, systems and software across work processes and activities</td>
          <td id="long-words">Drive the creation of a digital culture and environment, educating stakeholders across the organization on the benefits and risks of digital technology tools, systems and software</td>
        </tr>
        <tr>
          <th>Knowledge</th>
          <td id="long-words">
            <ul>
              <li>Digital terminologies</li>
              <li>Digital etiquettes</li>
              <li>Types of digital search and information collection tools</li>
              <li>Types of digital technology tools, systems and software</li>
              <li>Types of technology-enabled communication channels</li>
              <li>Organisation's InfoComm Technology troubleshooting and Information Technology (IT) back-up processes</li>
              <li>Organisation's IT, personal data and privacy policies</li>
              <li>Types of cyber security risks</li>
              <li>Organisation's policies to monitor cyber security risks</li>
            </ul>

          </td>
          <td id="long-words">
            <ul>
              <li>Emerging digital technology tools, systems and software</li>
              <li>Emerging digital communication channels</li>
              <li>Methods to evaluate suitability of digital technology tools, systems and software</li>
              <li>Types of visualization tools and techniques</li>
              <li>Technology implementation processes</li>
              <li>Problem-solving techniques</li>
              <li>Decision evaluation and prioritization frameworks</li>
              <li>Risk assessment techniques</li>
              <li>Strategies to manage cyber security risks</li>
              <li>Types of metrics to measure effectiveness of digital tools, systems and software</li>
            </ul>

          </td>
          <td id="long-words">
            <ul>
              <li>Best practice applications of digital technology tools, systems and software</li>
              <li>Emerging trends in the digital environment</li>
              <li>Strategies to manage technology implementation</li>
              <li>Digital education strategies</li>
              <li>Types of digital training programs</li>
              <li>Strategies to manage InfoComm Technology troubleshooting and back-up processes</li>
              <li>Strategies to manage cyber security risk strategies and policies</li>
              <li>Strategies to manage personal data and privacy policies</li>
              <li>Legal and regulatory frameworks related to digital technology tools, systems and software</li>
            </ul>
          </td>
          <tr>
            <th>Abilities</th>
            <td id="long-words">
              <ul>
                <li>Interpret instructions and actions based on digital terminologies</li>
                <li>Operate identified digital technology tools, systems and software to perform own work processes and activities</li>
                <li>Present information using identified digital technology tools, systems and software</li>
                <li>Exchange information with other stakeholders using identified technology-mediated communication channels</li>
                <li>Perform searches to source information using digital search and information collection tools</li>
                <li>Assess the credibility of information sourced using digital search and information collection tools</li>
                <li>Organise digital content to be stored and retrieved in line with organisational requirements</li>
                <li>Adhere to organisation's personal data and privacy policies</li>
                <li>Follow organisation's cyber security policies to identify potential risks</li>
              </ul>
            </td>
            <td id="long-words">
              <ul>
                <li>Analyse work processes and activities across own team to identify potential applications of digital technology tools, systems or software which drive efficiency and solve problems</li>
                <li>Evaluate emerging digital technology tools, systems or software to propose applications which drive efficiency and solve problems in own team</li>
                <li>Identify applications of different visualisation techniques and tools to analyse and present information</li>
                <li>Deploy processes to manage technology implementation</li>
                <li>Review usage of digital technology tools, systems and software to identify any breaches of organisation's digital and IT policies</li>
                <li>Assess current applications of digital technology tools, systems or software to propose improvement areas</li>
              </ul>
            </td>
            <td id="long-words">
              <ul>
                <li>Champion the benefits of digital applications and advancements to build an organisation-wide community which focuses on digital approaches and adopts a digital mindset</li>
                <li>Synthesise emerging trends in the digital environment to anticipate changes required to organisation's current digital technology tools, systems and software</li>
                <li>Oversee the progress of digital intervention implementations across the organisation</li>
                <li>Champion digital education strategies across the organisation to address digital literacy skill gaps and drive continuous learning</li>
                <li>Influence stakeholders to communicate the narrative of digital transformation and manage any change barriers</li>
                <li>Direct the development and implementation of organisational digital and IT policies</li>
                <li>Guide the analysis of past breaches of organisational digital and IT policies to mitigate future impacts of cyber security issues, data breaches or system failures</li>
              </ul>
            </td>
          </tr>
        </tr>
      </table>
    </div>
  </template>
  
  <style scoped>
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    overflow-x: auto;
    box-sizing: border-box;
    margin-left: 15px;
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

  #long-words {
    white-space: normal;
    text-align: left;
    width: 25%;
  }
  
  /* Responsive styles for smaller screens */
  @media only screen and (max-width: 600px) {
    .styled-table th,
    .styled-table td {
      font-size: 12px;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  
    .styled-table th {
      text-align: center;
    }
  
    .styled-table td {
      text-align: left;
      margin-bottom: 10px;
    }
  }
  
  .sortable {
    cursor: pointer;
  }
  
  .sortable:hover {
    background-color: #555;
  }
  </style>
  