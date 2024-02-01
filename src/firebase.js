// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaISpOTBBBBxYgBPwFWiJTd40LXYKO-cM",
  authDomain: "soumyaranjannayak-portfolio.firebaseapp.com",
  projectId: "soumyaranjannayak-portfolio",
  storageBucket: "soumyaranjannayak-portfolio.appspot.com",
  messagingSenderId: "715056890683",
  appId: "1:715056890683:web:74ce59833cff30b86bed1e",
  measurementId: "G-ZRS51FMCMG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
