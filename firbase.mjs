
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";

// import { getFirestore, getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA1_ev5OXd3Fr81vpVkBuPTH2Sg9FG99kE",
    authDomain: "hakatontest-b4c6e.firebaseapp.com",
    projectId: "hakatontest-b4c6e",
    storageBucket: "hakatontest-b4c6e.appspot.com",
    messagingSenderId: "669782475968",
    appId: "1:669782475968:web:d73f562cebd93fae319925",
    measurementId: "G-N0WE1C4W9T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


