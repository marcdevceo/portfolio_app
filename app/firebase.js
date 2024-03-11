// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP9LMCzGJSN4yY9NuUh6f5IwZfoUSwfME",
  authDomain: "portfolio-b9413.firebaseapp.com",
  projectId: "portfolio-b9413",
  storageBucket: "portfolio-b9413.appspot.com",
  messagingSenderId: "1039093256963",
  appId: "1:1039093256963:web:66654d3223c3c6170c8f36",
  measurementId: "G-15Z1T236FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);