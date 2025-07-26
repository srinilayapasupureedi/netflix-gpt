// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAAbt_KZIs_Iy-6Ny4ck65K6VgqBF5Zgk",
  authDomain: "streamgpt-235e3.firebaseapp.com",
  projectId: "streamgpt-235e3",
  storageBucket: "streamgpt-235e3.firebasestorage.app",
  messagingSenderId: "896321655749",
  appId: "1:896321655749:web:59e9cee44b1b9ccf0bf1ac",
  measurementId: "G-QS9YK8VE5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { auth, app, analytics };
