<template>
    <div>
      <table class="custom-table">
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td v-if="index === 0" :colspan="row.length">{{ row[0] }}</td>
            <td v-else v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const tableData = [
    ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4', 'Row 1, Col 5', 'Row 1, Col 6', 'Row 1, Col 7'],
    ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4', 'Row 2, Col 5', 'Row 2, Col 6', 'Row 2, Col 7'],
    ['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3', 'Row 3, Col 4', 'Row 3, Col 5', 'Row 3, Col 6', 'Row 3, Col 7'],
    ['Row 4, Col 1', 'Row 4, Col 2', 'Row 4, Col 3', 'Row 4, Col 4', 'Row 4, Col 5', 'Row 4, Col 6', 'Row 4, Col 7'],
    ['Row 5, Col 1', 'Row 5, Col 2', 'Row 5, Col 3', 'Row 5, Col 4', 'Row 5, Col 5', 'Row 5, Col 6', 'Row 5, Col 7'],
    ['Row 6, Col 1', 'Row 6, Col 2', 'Row 6, Col 3', 'Row 6, Col 4', 'Row 6, Col 5', 'Row 6, Col 6', 'Row 6, Col 7'],
    ['Row 7, Col 1', 'Row 7, Col 2', 'Row 7, Col 3', 'Row 7, Col 4', 'Row 7, Col 5', 'Row 7, Col 6', 'Row 7, Col 7'],
    ['Row 8, Col 1', 'Row 8, Col 2', 'Row 8, Col 3', 'Row 8, Col 4', 'Row 8, Col 5', 'Row 8, Col 6', 'Row 8, Col 7'],
    ['Row 9, Col 1', 'Row 9, Col 2', 'Row 9, Col 3', 'Row 9, Col 4', 'Row 9, Col 5', 'Row 9, Col 6', 'Row 9, Col 7'],
    ['Row 10, Col 1', 'Row 10, Col 2', 'Row 10, Col 3', 'Row 10, Col 4', 'Row 10, Col 5', 'Row 10, Col 6', 'Row 10, Col 7'],
  ];
  </script>
  
  <style scoped>
  .custom-table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
  }
  </style>
  