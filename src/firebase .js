import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TAVO_FIREBASE_API_KEY",
  authDomain: "TAVO_FIREBASE_PROJECT.firebaseapp.com",
  projectId: "TAVO_FIREBASE_PROJECT",
  storageBucket: "TAVO_FIREBASE_PROJECT.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
