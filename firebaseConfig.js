// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTaDfRjBXrnGTzJv1J4Day3J5SDHZGp40",
  authDomain: "raksha-app-51917.firebaseapp.com",
  projectId: "raksha-app-51917",
  storageBucket: "raksha-app-51917.firebasestorage.app",
  messagingSenderId: "1048368438991",
  appId: "1:1048368438991:web:fda1aef0458f5d05d7e1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // This ensures `getFirestore` is actually used

export const auth = getAuth(app);
export { app, db };