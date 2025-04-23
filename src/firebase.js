// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ59c1wJMZcUCy3kS8FluFWyByOIvkahg",
  authDomain: "b-recipe.firebaseapp.com",
  projectId: "b-recipe",
  storageBucket: "b-recipe.firebasestorage.app",
  messagingSenderId: "268235572319",
  appId: "1:268235572319:web:fd9ead3baf27b587f3c7ea",
  measurementId: "G-VPVT5NTTNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);