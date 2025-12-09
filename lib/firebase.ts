import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6K7BlSZO2ymKPzogxAKoPB1F0rJodIC0",
  authDomain: "gen-lang-client-0309861828.firebaseapp.com",
  databaseURL: "https://gen-lang-client-0309861828-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gen-lang-client-0309861828",
  storageBucket: "gen-lang-client-0309861828.firebasestorage.app",
  messagingSenderId: "792034066755",
  appId: "1:792034066755:web:aeef40ef72d5a393d66ff6",
  measurementId: "G-02L8X49VRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);