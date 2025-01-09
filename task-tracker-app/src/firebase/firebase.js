// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaTXpQxSgelq3ZdgM_OlQ6PtsdpIYEPWg",
  authDomain: "task-tracker-app-react.firebaseapp.com",
  projectId: "task-tracker-app-react",
  storageBucket: "task-tracker-app-react.firebasestorage.app",
  messagingSenderId: "751115395661",
  appId: "1:751115395661:web:d8780042e0db7f5606f204",
  measurementId: "G-J5P4MS5Z60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export {app,auth};