// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8yq5I83NKOVsCB8SnTL3-xX9QXWGsTqs",
  authDomain: "netflixgpt-6f876.firebaseapp.com",
  projectId: "netflixgpt-6f876",
  storageBucket: "netflixgpt-6f876.firebasestorage.app",
  messagingSenderId: "739954056733",
  appId: "1:739954056733:web:b2486ed3800f4dc151b0f4",
  measurementId: "G-JC7HWFDBBD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();