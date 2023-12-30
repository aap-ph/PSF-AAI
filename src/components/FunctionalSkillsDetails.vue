<template>
    <div>
      <table class="styled-table mb-3">
        <tr>
          <th style="border: 1px solid white;">Header 1</th>
          <th style="border: 1px solid white;">Header 2</th>
          <th style="border: 1px solid white;">Header 3</th>
          <!-- ... Repeat for other headers -->
        </tr>
        <tr v-for="rowIndex in 10" :key="rowIndex">
          <td style="border: 1px solid white;">Row {{ rowIndex }}, Col 1</td>
          <td style="border: 1px solid white;">Row {{ rowIndex }}, Col 2</td>
          <td style="border: 1px solid white;">Row {{ rowIndex }}, Col 3</td>
          <!-- ... Repeat for other columns -->
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  // If you have data variables, you can define them here
  
  // Function to handle click event
  const sendText = (value) => {
    // Handle the click event, e.g., display an alert with the clicked value
    alert(value);
  };
  </script>
  
  <style scoped>
  /* Add your additional styles here */
  .styled-table {
    border-collapse: collapse;
  }
  
  .styled-table th, .styled-table td {
    border: 1px solid white;
    padding: 8px;
    color: white;
  }
  </style>
  