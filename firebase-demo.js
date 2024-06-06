// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wKV8KBpZDA9c42xd8MJ1xfaj4f0rAZw",
  authDomain:
    "docusaurus-auth-firebase-a9515.firebaseapp.com",
  projectId: "docusaurus-auth-firebase-a9515",
  storageBucket:
    "docusaurus-auth-firebase-a9515.appspot.com",
  messagingSenderId: "1003954458077",
  appId: "1:1003954458077:web:05077f87b5fc878045ba34",
  measurementId: "G-27131Z5SY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
