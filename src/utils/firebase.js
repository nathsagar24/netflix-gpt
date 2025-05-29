// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKZm0uE0jmDDfJ9T-nmQjzs7wUiPALHZo",
  authDomain: "netflixgpt-204ff.firebaseapp.com",
  projectId: "netflixgpt-204ff",
  storageBucket: "netflixgpt-204ff.firebasestorage.app",
  messagingSenderId: "445067059476",
  appId: "1:445067059476:web:00f7291562b86ecbe1a201",
  measurementId: "G-LTDW5KEM96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();