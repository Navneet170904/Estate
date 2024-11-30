// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dream-estate-1f743.firebaseapp.com",
  projectId: "dream-estate-1f743",
  storageBucket: "dream-estate-1f743.firebasestorage.app",
  messagingSenderId: "296534295514",
  appId: "1:296534295514:web:9711e76b33426f12ebb6e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);