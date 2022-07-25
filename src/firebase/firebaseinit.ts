// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlA8KhGYSe7zaexrlW1EnZRqmGGpfNdyA",
  authDomain: "pimionic.firebaseapp.com",
  projectId: "pimionic",
  storageBucket: "pimionic.appspot.com",
  messagingSenderId: "783278446426",
  appId: "1:783278446426:web:c8ee329c870f0abc9f0563"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);