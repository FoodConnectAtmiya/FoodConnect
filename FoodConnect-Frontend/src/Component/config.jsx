import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBQ-X_1hkSQc9UJVfLEoyTvPCHob3N5IU4",
  authDomain: "hack-food.firebaseapp.com",
  projectId: "hack-food",
  storageBucket: "hack-food.appspot.com",
  messagingSenderId: "916093262493",
  appId: "1:916093262493:web:81d8c03d74cda24ed5d274"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);