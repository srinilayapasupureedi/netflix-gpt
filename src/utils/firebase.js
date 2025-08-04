import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr5t1SClL1sQimsJk9vA-5YiaAMuTpr30",
  authDomain: "streamgpt-9b408.firebaseapp.com",
  projectId: "streamgpt-9b408",
  storageBucket: "streamgpt-9b408.firebasestorage.app",
  messagingSenderId: "549872031149",
  appId: "1:549872031149:web:bcc351f0488e97123b3d24",
  measurementId: "G-DDF0MG0Q1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { auth, app, analytics };
