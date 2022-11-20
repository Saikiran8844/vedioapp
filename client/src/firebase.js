// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Wg9DbJvchCj87UbBfA5PkQ-qzI2RbI8",
  authDomain: "myvedio-code.firebaseapp.com",
  projectId: "myvedio-code",
  storageBucket: "myvedio-code.appspot.com",
  messagingSenderId: "1036337440310",
  appId: "1:1036337440310:web:ed7806a99fcb9b45655a97",
  measurementId: "G-4WP0P6B4EZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()