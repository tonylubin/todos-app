// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAouL_3h6dIJYX5Id9kfPMNQEwr8B9Q0lc",
  authDomain: "mytodosapp-4e40f.firebaseapp.com",
  projectId: "mytodosapp-4e40f",
  storageBucket: "mytodosapp-4e40f.appspot.com",
  messagingSenderId: "263588276806",
  appId: "1:263588276806:web:1e4389ddf0dc02c7eeb847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  Get access to the firestore functionality
const db = getFirestore(app);

// Authentication instance 
const auth = getAuth(app);


export { app, db, auth }