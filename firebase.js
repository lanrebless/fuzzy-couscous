// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCix_RYodu9oMqrLsz45VcD2ZfzBMy2r3g",
  authDomain: "twitte-clone-yt.firebaseapp.com",
  projectId: "twitte-clone-yt",
  storageBucket: "twitte-clone-yt.appspot.com",
  messagingSenderId: "718868658027",
  appId: "1:718868658027:web:fc0019cecd9b603056fe2e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
