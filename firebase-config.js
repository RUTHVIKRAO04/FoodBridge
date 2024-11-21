// Import Firebase App and Auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6Zn66lFRutOqwT3t4O-l8seABC7m69eM",
    authDomain: "foodbridge-7653a.firebaseapp.com",
    projectId: "foodbridge-7653a",
    storageBucket: "foodbridge-7653a.firebasestorage.app",
    messagingSenderId: "8344230021",
    appId: "1:8344230021:web:07f5f6b4ea0fb47c42f1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };