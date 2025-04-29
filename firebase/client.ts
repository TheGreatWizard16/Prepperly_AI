// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2Q3OI14lKPGkxd4qXg98t6EcMGrbpe_s",
    authDomain: "prepperly-c9f62.firebaseapp.com",
    projectId: "prepperly-c9f62",
    storageBucket: "prepperly-c9f62.firebasestorage.app",
    messagingSenderId: "236171671154",
    appId: "1:236171671154:web:94236ecc8e55503d31f4eb",
    measurementId: "G-Q7VM9TTJ0S"
  };

// Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();



export const auth = getAuth(app);
export const db =getFirestore(app);

