// store/excel.js
import { ref } from 'vue';
import xlsx from 'xlsx';
import axios from 'axios';

const uploadedFile = ref(null);

const setUploadedFile = (file) => {
  uploadedFile.value = file;
};

const uploadFile = async (fileContent) => {
  // Handle the file upload using axios
  // Replace 'upload-url' with the actual endpoint where you want to upload the file
  const response = await axios.post('upload-url', fileContent);

  // Assuming the server returns the uploaded file content
  const content = response.data;

  // Parse the file content using xlsx
  const workbook = xlsx.read(content, { type: 'binary' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Set the uploaded file in the store
  setUploadedFile(sheet);
};

export { uploadedFile, uploadFile };
