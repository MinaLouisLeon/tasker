// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdN9REVvhFi9uGLmqQ-H8own7RSf6t6HU",
  authDomain: "tasker-729e5.firebaseapp.com",
  projectId: "tasker-729e5",
  storageBucket: "tasker-729e5.appspot.com",
  messagingSenderId: "1052534094905",
  appId: "1:1052534094905:web:9a683d74e394e7c04561e8",
  measurementId: "G-GV8SGCMY9P"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);