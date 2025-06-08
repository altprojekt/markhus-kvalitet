// Pakeisk į savo Firebase projekto parametrus!
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TAVO_FIREBASE_API_KEY",
  authDomain: "TAVO_FIREBASE_PROJECT.firebaseapp.com",
  projectId: "TAVO_FIREBASE_PROJECT",
  storageBucket: "TAVO_FIREBASE_PROJECT.appspot.com",
  messagingSenderId: "TAVO_MESSAGING_SENDER_ID",
  appId: "TAVO_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
