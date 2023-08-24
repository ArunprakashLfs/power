// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Nq3SPluZDvGH1QbXJz-bsH6obPpOHbA",
  authDomain: "power-bad5e.firebaseapp.com",
  projectId: "power-bad5e",
  storageBucket: "power-bad5e.appspot.com",
  messagingSenderId: "316203173181",
  appId: "1:316203173181:web:546294903d872937473154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

