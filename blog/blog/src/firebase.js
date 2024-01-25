import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAVTjR1fHnJZ5uApfR65Lh9h4jvdZs5q9g",
  authDomain: "blogproject-737bc.firebaseapp.com",
  projectId: "blogproject-737bc",
  storageBucket: "blogproject-737bc.appspot.com",
  messagingSenderId: "639674560955",
  appId: "1:639674560955:web:c15e0438adf73f874e949e",
  measurementId: "G-LCDZM5T47K"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();