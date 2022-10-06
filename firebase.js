// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJqVpRFYETRO-_mrPc4d0iU8DXTM-wtgY",
  authDomain: "intagram-2-a613a.firebaseapp.com",
  projectId: "intagram-2-a613a",
  storageBucket: "intagram-2-a613a.appspot.com",
  messagingSenderId: "992890344808",
  appId: "1:992890344808:web:16a8181a3853cca3e332dd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };