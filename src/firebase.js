// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoI1sq2VbHC_-bSQfx8BC3wvWHoJEfWZE",
  authDomain: "excel-analyzer-60956.firebaseapp.com",
  projectId: "excel-analyzer-60956",
  storageBucket: "excel-analyzer-60956.appspot.com",
  messagingSenderId: "189771149560",
  appId: "1:189771149560:web:83d757cfcccde7a17d8b0d",
  measurementId: "G-YWJ4T8B62C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

// firebase.js

console.log("Firebase app initialized:", app);
console.log("Firebase analytics initialized:", analytics);
console.log("Firebase auth initialized:", auth);
console.log("Firebase storage initialized:", storage);


export { app, analytics, auth, storage, uploadBytes, getDownloadURL, ref  };
