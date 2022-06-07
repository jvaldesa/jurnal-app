import firebase from 'firebase/app';
// import { initializeApp } from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCstAnql5vpv1ciuJRb1zlHMop94QYLlj8",
  authDomain: "react-app-curso-a6d39.firebaseapp.com",
  projectId: "react-app-curso-a6d39",
  storageBucket: "react-app-curso-a6d39.appspot.com",
  messagingSenderId: "603575513082",
  appId: "1:603575513082:web:97803006c179ef3d703e43"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}