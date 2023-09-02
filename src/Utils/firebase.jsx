// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI0WQemDGVS-Q-VkAo4Cq4AKuUbEG9wRY",
  authDomain: "netflixgpt-d779a.firebaseapp.com",
  projectId: "netflixgpt-d779a",
  storageBucket: "netflixgpt-d779a.appspot.com",
  messagingSenderId: "15610237485",
  appId: "1:15610237485:web:daeb26f686682fa05e5ea4",
  measurementId: "G-BTLRJWBHBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
