// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv2Z95vxLr8CyCEuCVlL9aFxbIUD79Kjo",
    authDomain: "managerproject-9cce9.firebaseapp.com",
    projectId: "managerproject-9cce9",
    storageBucket: "managerproject-9cce9.firebasestorage.app",
    messagingSenderId: "457094500643",
    appId: "1:457094500643:web:df0620df34103b9b307c96",
    measurementId: "G-DB3XNFWRBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);