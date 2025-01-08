import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArwwG7TFXZBXH-htqJeQ7P1j8JX39VTDI",
  authDomain: "scan-project-94a15.firebaseapp.com",
  projectId: "scan-project-94a15",
  storageBucket: "scan-project-94a15.firebasestorage.app",
  messagingSenderId: "613920187927",
  appId: "1:613920187927:web:960cb047fd79b97b9bde52",
  measurementId: "G-RHH7WJYJ56",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
