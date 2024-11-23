import App from './src/App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxS0aZWTzkheXsEq8DYibL6jGiCgBCQqA",
    authDomain: "hannoti-b64b6.firebaseapp.com",
    projectId: "hannoti-b64b6",
    storageBucket: "hannoti-b64b6.firebasestorage.app",
    messagingSenderId: "794157966201",
    appId: "1:794157966201:web:63e1facff94f3e5f9b45a8"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default App;
