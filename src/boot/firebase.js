// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6zsNjg_5XvF-XV2BzaEoGqiZprdLdBU",
  authDomain: "ichypalms-58bad.firebaseapp.com",
  projectId: "ichypalms-58bad",
  storageBucket: "ichypalms-58bad.firebasestorage.app",
  messagingSenderId: "334049920471",
  appId: "1:334049920471:web:4a4b58d82cb13e91fcf792",
  measurementId: "G-L3T9W9WEJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, ref, getDownloadURL, db };
