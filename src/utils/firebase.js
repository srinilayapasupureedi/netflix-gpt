// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpfwDAYTIz1LxPgzcbdUN11Vmgyv0MEFI",
  authDomain: "netflixgpt-be21d.firebaseapp.com",
  projectId: "netflixgpt-be21d",
  storageBucket: "netflixgpt-be21d.firebasestorage.app",
  messagingSenderId: "117415288728",
  appId: "1:117415288728:web:86417fa9893d4d8947d5ed",
  measurementId: "G-XRXMNWD2W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default app;
export { createUserWithEmailAndPassword, auth, app, analytics };