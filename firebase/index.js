// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo5_pBAcI2zslUdWMFHoq3iVaIFrrr-EI",
  authDomain: "todo-next-app-9d745.firebaseapp.com",
  projectId: "todo-next-app-9d745",
  storageBucket: "todo-next-app-9d745.appspot.com",
  messagingSenderId: "438206471442",
  appId: "1:438206471442:web:e3b4f4a526a2fa9ce127cb",
  measurementId: "G-77C7EG5HT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
