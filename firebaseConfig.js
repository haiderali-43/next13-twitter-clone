// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "next-js-twitter-clone-25f8f.firebaseapp.com",
  projectId: "next-js-twitter-clone-25f8f",
  storageBucket: "next-js-twitter-clone-25f8f.appspot.com",
  messagingSenderId: "200164780561",
  appId: "1:200164780561:web:092e7cf9f550882df4dfb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
