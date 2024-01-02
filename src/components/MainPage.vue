<template>
    <div class="d-flex flex-row justify-content-end align-items-end">
        <input type="file" @change="handleFileChange">
        <button @click="uploadFile">Upload</button>
  </div>
</template>

<script setup>
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





</script>
  