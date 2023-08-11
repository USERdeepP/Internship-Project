// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  // your config
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
