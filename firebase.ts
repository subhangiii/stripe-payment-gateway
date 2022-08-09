// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjav_jsNgWFxuARsPI6Me2q1waMJlvLCU",
    authDomain: "stripe-pay-95dc5.firebaseapp.com",
    projectId: "stripe-pay-95dc5",
    storageBucket: "stripe-pay-95dc5.appspot.com",
    messagingSenderId: "637118231783",
    appId: "1:637118231783:web:528809f62a4be84c391e42"
  };

// Initialize Fireb ase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()  
  

export default app
export { auth, db }