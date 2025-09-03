
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDk6gjFUUFoj4cDpANXAyhbEd4nk9EZa4Y",
  authDomain: "kd-goals.firebaseapp.com",
  projectId: "kd-goals",
  storageBucket: "kd-goals.firebasestorage.app",
  messagingSenderId: "1030762672663",
  appId: "1:1030762672663:web:9efbec3213d7bec823a252"
};
//

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)