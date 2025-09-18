// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAQzSodYN0IixDFG1NJMbzysup3_R_fGTA",
    authDomain: "prepwise-56309.firebaseapp.com",
    projectId: "prepwise-56309",
    storageBucket: "prepwise-56309.firebasestorage.app",
    messagingSenderId: "70741803464",
    appId: "1:70741803464:web:7a8858b1f641193a81c0fd",
    measurementId: "G-0K1180RF2E"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth()
export const db = getFirestore();
