// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8FO80XYnbR0Y_xVeUs3xi9MWdLT5a7aw",
  authDomain: "teeth-wizard-90c9c.firebaseapp.com",
  projectId: "teeth-wizard-90c9c",
  storageBucket: "teeth-wizard-90c9c.firebasestorage.app",
  messagingSenderId: "217957276262",
  appId: "1:217957276262:web:c4b694279ccccbdab2aba7",
  measurementId: "G-4L3Q9GBRP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)

export default auth;