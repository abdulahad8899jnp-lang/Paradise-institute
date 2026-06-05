import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQz16G48-jw4Rn33gTUNUVYlpouVchhsQ",
  authDomain: "student-panal.firebaseapp.com",
  projectId: "student-panal",
  storageBucket: "student-panal.firebasestorage.app",
  messagingSenderId: "909170869602",
  appId: "1:909170869602:web:d4bafc6db44a2bcb26583b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);