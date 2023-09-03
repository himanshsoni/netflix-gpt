// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5G7dEtFKXVbaAwjEtB0WWT-DHfRUTMEc",
  authDomain: "netflix-gpt-87285.firebaseapp.com",
  projectId: "netflix-gpt-87285",
  storageBucket: "netflix-gpt-87285.appspot.com",
  messagingSenderId: "497074592305",
  appId: "1:497074592305:web:887c61ff0fc571865ad310",
  measurementId: "G-HH3456X7L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
