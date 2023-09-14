// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyD747GDHNPisPoSmhdasfmCHP9BjyoXnxA",
  authDomain: "twitter-clone-1cd04.firebaseapp.com",
  projectId: "twitter-clone-1cd04",
  storageBucket: "twitter-clone-1cd04.appspot.com",
  messagingSenderId: "51184611736",
  appId: "1:51184611736:web:7daac14c2a8a8b11cfbbed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
