// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxO7QloWGf5Ux03fbaZJoe_cN6IxIVsxU",
  authDomain: "blog-site-298fc.firebaseapp.com",
  projectId: "blog-site-298fc",
  storageBucket: "blog-site-298fc.appspot.com",
  messagingSenderId: "1037211565166",
  appId: "1:1037211565166:web:e75bb2e2f53c6fb6c43a7f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()